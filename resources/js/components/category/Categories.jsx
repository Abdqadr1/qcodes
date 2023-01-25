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
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
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
import { useNavigate } from 'react-router';
import Util from '../utility';

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

const Categories = ({ httpClient }) => {
    const [edit, setEdit] = useState({ show: false, data: {} });
    const [create, setCreate] = useState(false);
    const [keyword, setKeyword] = useState('');
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isFetching, error, data, refetch } = useQuery('categoryData', () =>
        httpClient.get(`/api/category/all?keyword=${keyword}`),{
            refetchOnWindowFocus: false ,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
            }
        } 
    );

    const { isLoading: pageFetching, error: pageError, mutate:pageMutate } =
        useMutation(url => httpClient.get(`${url}&keyword=${keyword}`), {
            onSuccess: data => {
                queryClient.setQueryData('categoryData', data);
            },
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
            } 
        });

    const { isLoading: deleteFetching, error: deleteError, mutate: deleteMutate } =
        useMutation(id => httpClient.delete(`/api/category/delete/${id}`), {
            onSuccess: (data, id) => {
                queryClient.setQueryData('categoryData', oldData => {
                    const list = oldData.data.data;
                    const index = list.findIndex(l => l.id === id);
                    list.splice(index, 1);
                    return oldData;
                });
            },
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
            } 
        });

    const handleDelete = id => {
        if (confirm("Are you sure?")) {
            deleteMutate(id);
        }
    }
     const handleSearch = e => {
        refetch({ throwOnError: true, cancelRefetch: true });
    }

    const showCreateModal = () => {
        setCreate(true);
    }
    
    if (isFetching || pageFetching || deleteFetching ) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
        </Backdrop>
    );

    if (error || deleteError || pageError) {
        const err = error ?? deleteError ?? pageError;
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
        <div className='p-4'>
            <Grid container spacing={2}>
                <Grid item xs={12} >
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
                    <Card className="mb-4">
                        <CardHeader className="px-4"
                            action={
                                <Button onClick={showCreateModal} color='primary'
                                    variant="contained" size="small"
                                    endIcon={<AddIcon />}
                                >New Category</Button>
                                }
                            title="Categories"
                            subheader=""
                        />
                        <CardContent className="pb-2">
                            <TableContainer>
                                <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Meta Title</TableCell>
                                        <TableCell>Content</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        {
                                            data.data.data.map(
                                                category => <TableRow key={category.id}>
                                                    <TableCell>
                                                        <p>{ category.name }</p>
                                                    </TableCell>
                                                    <TableCell style={{ maxWidth: '150px'}}>
                                                        <p className="text-xs font-weight-bold mb-0">{category.meta_title}</p>
                                                    </TableCell>
                                                    <TableCell className="" style={{ maxWidth: '150px'}}>
                                                        <span className="">{category.content}</span>
                                                    </TableCell>
                                                    <TableCell className="align-middle">
                                                        <Button size="small" color='primary'
                                                            onClick={() => setEdit(s => ({ ...s, show: true, data: category }))}
                                                            variant="outlined">Edit</Button>
                                                        {' '}
                                                        <Button color='error'
                                                            onClick={() => handleDelete(category.id)}
                                                            variant="outlined" size="small">Delete</Button>
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
            <CategoryEditModal edit={edit} setEdit={setEdit} httpClient={httpClient} />
            <CategoryCreateModal show={create} setCreate={setCreate} httpClient={httpClient} />
        </div>
     );
}
 
export default Categories;