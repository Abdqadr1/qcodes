
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import React, { useState } from "react";
import AdminEditModal from '../admin/AdminEdit';
import Button from '@mui/material/Button';
import AdminCreateModal from '../admin/AdminCreate';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};


const Admin = ({ httpClient }) => {
    const [edit, setEdit] = useState({ show: false, data: {} });
    const [keyword, setKeyword] = useState('');
    const [create, setCreate] = useState(false);

    const queryClient = useQueryClient();

    const { error, data, refetch, isFetching } = useQuery('adminData', () =>
        httpClient.get(`/api/admin/all?keyword=${keyword}`),{ 
            refetchOnWindowFocus: false 
        }
    );

    const { isLoading:roleLoading, error:roleError, data:roleData } = useQuery('roleData', () =>
        httpClient.get('/api/admin/roles'),{ 
            refetchOnWindowFocus: false 
        }
    );

    const pageMutation = useMutation(url => httpClient.get(`${url}&keyword=${keyword}`), {
        onSuccess: data => {
            queryClient.setQueryData('adminData', data);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

    const deleteMutation = useMutation(id => httpClient.delete(`/api/admin/delete/${id}`), {
        onSuccess: (data, id) => {
            queryClient.setQueryData('adminData', oldData => {
                const list = oldData.data.data;
                const index = list.findIndex(l => l.id === id);
                list.splice(index, 1);
                return oldData;
            });
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

    const handleSearch = e => {
        refetch({ throwOnError: true, cancelRefetch: true });
    }

    const handleDelete = id => {
        if (confirm("Are you sure?")) {
            deleteMutation.mutate(id);
        }
    }

    const showCreateModal = () => {
        setCreate(true);
    }


    if (isFetching || pageMutation.isLoading || roleLoading) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
    );

    if (error) return 'An error has occurred: ' + error.message

    return ( 
        <div className='px-4 py-2'>
            <div className="row">
                <div className="col-12">
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: '100%' }}
                        mt={3} mb={5}
                    >
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3">Search Admin: </Typography>
                        </ThemeProvider>
                        <TextField
                            id="outlined-name"
                            label="Keyword"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            size="small"
                        />
                        <Button variant="outlined" color='primary' 
                            endIcon={<SearchIcon />} onClick={handleSearch}
                            >Search</Button>
                        <Button variant="outlined" color="error" 
                            endIcon={<ClearIcon />} onClick={e=>setKeyword('')}
                            >Clear</Button>

                    </Stack>
                    <div className="card mb-4">
                        <div className="card-header py-3 d-flex justify-content-between align-items-center">
                            <h6>Admins table</h6>
                            <Button
                                onClick={showCreateModal} color="primary" size="small"
                                variant='contained' endIcon={<AddIcon />}
                                >Add Admin</Button>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Roles</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Last Login</th>
                                        <th className="text-secondary opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.data.data.map(
                                            admin => <tr key={admin.id}>
                                                <td>
                                                    <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1"/>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">{`${admin.first_name} ${admin.last_name}`}</h6>
                                                        <p className="text-xs text-secondary mb-0">{admin.email}</p>
                                                    </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                                                    <p className="text-xs text-secondary mb-0">Organization</p>
                                                </td>
                                                <td className="align-middle text-center text-sm">
                                                    <span className="">{admin.enabled ? "Enabled" : "Disabled"}</span>
                                                </td>
                                                    <td className="align-middle text-center">
                                                    <span className="text-secondary text-xs font-weight-bold">{admin.last_login_at}</span>
                                                </td>
                                                <td className="align-middle">
                                                    <Button size="small" onClick={() => setEdit(s => ({ ...s, show: true, data: admin }))}
                                                        variant="outlined" color='primary'>Edit</Button>
                                                    {' '}
                                                    <Button onClick={() => handleDelete(admin.id)} variant="outlined"  color='error'
                                                        size="small">Delete</Button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                   </tbody>
                                </table>
                            </div>
                            {/* pagination */}
                            <Pages
                                links={data.data.links} mutation={pageMutation}
                                from={data.data.from} perPage={data.data.per_page}
                                total={data.data.total} lastPage={data.data.last_page}
                                firstPageUrl={data.data.first_page_url} lastPageUrl={data.data.last_page_url}
                                prevPageUrl={data.data.prev_page_url} nextPageUrl={data.data.next_page_url}
                                to={data.data.to} currentPage={data.data.current_page}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <AdminEditModal edit={edit} setEdit={setEdit} httpClient={httpClient} roles={roleData.data} />
            <AdminCreateModal show={create} setCreate={setCreate} httpClient={httpClient} roles={roleData.data} />
        </div>
     );
}
 
export default Admin;