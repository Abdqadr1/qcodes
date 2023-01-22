import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import CategoryCreateModal from './CategoryCreate';
import CategoryEditModal from './CategoryEdit';
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

const Categories = ({ httpClient }) => {
    const [edit, setEdit] = useState({ show: false, data: {} });
    const [create, setCreate] = useState(false);
    const [keyword, setKeyword] = useState('');
    const queryClient = useQueryClient();

    const { isFetching, error, data, refetch } = useQuery('categoryData', () =>
        httpClient.get(`/api/category/all?keyword=${keyword}`),{
            refetchOnWindowFocus: false 
        }
    );

    const pageMutation = useMutation(url => httpClient.get(`${url}&keyword=${keyword}`), {
        onSuccess: data => {
            queryClient.setQueryData('categoryData', data);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

    const deleteMutation = useMutation(id => httpClient.delete(`/api/category/delete/${id}`), {
        onSuccess: (data, id) => {
            queryClient.setQueryData('categoryData', oldData => {
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

    const handleDelete = id => {
        if (confirm("Are you sure?")) {
            deleteMutation.mutate(id);
        }
    }
     const handleSearch = e => {
        refetch({ throwOnError: true, cancelRefetch: true });
    }

    const showCreateModal = () => {
        setCreate(true);
    }
    
    if (isFetching || pageMutation.isLoading) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
        </Backdrop>
    );

    if (error) return 'An error has occurred: ' + error.message

    return ( 
        <div className='p-4'>
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
                            <Typography variant="h3">Search Category: </Typography>
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
                            <h6>Categories</h6>
                            <Button onClick={showCreateModal} color='primary'
                                variant="contained" size="small"
                                endIcon={<AddIcon />}
                            >New Category</Button>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Meta Title</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Content</th>
                                        <th className="text-secondary opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            data.data.data.map(
                                                category => <tr key={category.id}>
                                                    <td>
                                                        <p>{ category.name }</p>
                                                    </td>
                                                    <td style={{ maxWidth: '150px'}}>
                                                        <p className="text-xs font-weight-bold mb-0">{category.meta_title}</p>
                                                    </td>
                                                    <td className="" style={{ maxWidth: '150px'}}>
                                                        <span className="">{category.content}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Button size="small" color='primary'
                                                            onClick={() => setEdit(s => ({ ...s, show: true, data: category }))}
                                                            variant="outlined">Edit</Button>
                                                        {' '}
                                                        <Button color='error'
                                                            onClick={() => handleDelete(category.id)}
                                                            variant="outlined" size="small">Delete</Button>
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
            <CategoryEditModal edit={edit} setEdit={setEdit} httpClient={httpClient} />
            <CategoryCreateModal show={create} setCreate={setCreate} httpClient={httpClient} />
        </div>
     );
}
 
export default Categories;