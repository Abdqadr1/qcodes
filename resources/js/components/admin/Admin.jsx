
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
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


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

    const { isLoading: pageFetching, error: pageError, mutate:pageMutate } =
        useMutation(url => httpClient.get(`${url}&keyword=${keyword}`), {
        onSuccess: data => {
            queryClient.setQueryData('adminData', data);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

    const { isLoading: deleteFetching, error: deleteError, mutate: deleteMutate } =
        useMutation(id => httpClient.delete(`/api/admin/delete/${id}`), {
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
            deleteMutate(id);
        }
    }

    const showCreateModal = () => {
        setCreate(true);
    }


    if (isFetching || pageFetching || deleteFetching || roleLoading) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
    );

     if (error || deleteError || pageError || roleError) {
        const err = error ?? deleteError ?? pageError ?? roleError;
        return (
            <Snackbar
                open={true}
                autoHideDuration={2000}
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                <Alert
                    severity={'error'} sx={{ width: '100%' }}
                >
                    {err?.response?.data?.message ?? "An error occurred. Try again"}
                </Alert>
            </Snackbar>
        )
    }

    return ( 
        <div className='px-4 py-2'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
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
                    <Card className="mb-4">
                        <CardHeader className="px-4"
                            action={
                                <Button
                                    onClick={showCreateModal} color="primary" size="small"
                                    variant='contained' endIcon={<AddIcon />}
                                    >Add Admin</Button>
                                }
                            title="Admins table"
                            subheader=""
                        />
                        <CardContent className="pb-2">
                            <TableContainer>
                                <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Roles</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Last Login</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.data.data.map(
                                            admin => <TableRow key={admin.id}>
                                                <TableCell>
                                                    <div className="d-flex px-2 py-1">
                                                    <div>
                                                        <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1"/>
                                                    </div>
                                                    <div className="d-flex flex-column justify-content-center">
                                                        <h6 className="mb-0 text-sm">{`${admin.first_name} ${admin.last_name}`}</h6>
                                                        <p className="text-xs text-secondary mb-0">{admin.email}</p>
                                                    </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <p className="text-xs font-weight-bold mb-0">Manager</p>
                                                    <p className="text-xs text-secondary mb-0">Organization</p>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="">{admin.enabled ? "Enabled" : "Disabled"}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="text-secondary text-xs font-weight-bold">{admin.last_login_at}</span>
                                                </TableCell>
                                                <TableCell className="align-middle">
                                                    <Button size="small" onClick={() => setEdit(s => ({ ...s, show: true, data: admin }))}
                                                        variant="outlined" color='primary'>Edit</Button>
                                                    {' '}
                                                    <Button onClick={() => handleDelete(admin.id)} variant="outlined"  color='error'
                                                        size="small">Delete</Button>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                   </TableBody>
                                </Table>
                            </TableContainer>
                            {/* pagination */}
                            <Pages
                                mutate={pageMutate} path={data.data.path}
                                from={data.data.from} total={data.data.total} lastPage={data.data.last_page}
                                to={data.data.to} currentPage={data.data.current_page}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <AdminEditModal edit={edit} setEdit={setEdit} httpClient={httpClient} roles={roleData.data} />
            <AdminCreateModal show={create} setCreate={setCreate} httpClient={httpClient} roles={roleData.data} />
        </div>
     );
}
 
export default Admin;