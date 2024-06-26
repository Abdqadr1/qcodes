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
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
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
    document.title = 'Categories';
    const [edit, setEdit] = useState({ show: false, data: {} });
    const [create, setCreate] = useState(false);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [error, setError] = useState({});
    const [keyword, setKeyword] = useState('');
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const [isAdminOrEditor, setAdminOrEditor] = useState(false);

      const { data:adminData } = useQuery('getAdminUser', () =>
        httpClient.get('/api/admin'),{ 
         refetchOnWindowFocus: false,
            retry: false,
            onSuccess: data => {
                setAdminOrEditor(Util.hasAnyRole(data.data.roles, ['Admin', 'Editor']));
            } 
        }
    );

    const { isFetching, data, refetch } = useQuery('categoryData', () =>
        httpClient.get(`/api/category/all?keyword=${keyword}`),{
            refetchOnWindowFocus: false, retry: false,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            }
        } 
    );

    const { isLoading: pageFetching, mutate:pageMutate } =
        useMutation(url => httpClient.get(`${url}&keyword=${keyword}`), {
            onSuccess: data => {
                queryClient.setQueryData('categoryData', data);
            },
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            } 
        });

    const { isLoading: deleteFetching, mutate: deleteMutate } =
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
                setError({ ...error });
                setShowSnackBar(true);
            } 
        });

    const handleDelete = id => {
        if (confirm("Are you sure?")) {
            deleteMutate(id);
        }
    }
     const handleSearch = e => {
        e?.preventDefault();
        refetch({ throwOnError: true, cancelRefetch: true });
    }

    const handleClearSearch = e => {
        e.preventDefault();
        setKeyword(s => {
            if(s === '') handleSearch();
            return '';
        });
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

    return ( 
        <div className='p-4'>
            <Grid container spacing={2}>
                <Grid item xs={12} >
                    <div className="row mx-0 justify-content-center align-items-center g-2 mt-3 mb-5">
                        <div className="col-md-7">
                            <form className="input-group" onSubmit={handleSearch} >
                                <button title="clear Search" className="btn btn-outline-secondary d-flex align-items-center" type="button" id="clear-btn" onClick={handleClearSearch}>
                                    <ClearIcon />
                                </button>
                                <input required className="form-control bg-transparent border border-secondary" placeholder="search categories" aria-describedby="search-btn"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <button title="search categories" className="btn btn-outline-secondary d-flex align-items-center" type="submit" id="search-btn">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                    <Card className="mb-4 admin-table">
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
                        {
                            (data?.data.data.length > 0)
                                ? 
                                <CardContent className="pb-2">
                                    <div className='d-md-none' id='mobileView'>
                                        {
                                            data?.data.data.map(category => (
                                                <Card key={category.id} className='mobile-item' sx={{ my: 2}}>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {category.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {category.content}
                                                        </Typography>
                                                    </CardContent>
                                                    {
                                                        isAdminOrEditor
                                                        ? <CardActions sx={{mb:1, px:2}}>
                                                             <Button size="small" color='primary'
                                                                    onClick={() => setEdit(s => ({ ...s, show: true, data: category }))}
                                                                    variant="contained">Edit</Button>
                                                                {' '}
                                                            <Button color='error'
                                                                onClick={() => handleDelete(category.id)}
                                                                variant="contained" size="small">Delete</Button>
                                                        </CardActions>
                                                        : ''
                                                    }
                                                    
                                                </Card>)
                                            )
                                        }
                                    </div>
                                    <TableContainer className='d-none d-md-block' id="desktopView">
                                        <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='fw-bold'>Name</TableCell>
                                                <TableCell className='fw-bold'>Meta Title</TableCell>
                                                <TableCell className='fw-bold'>Content</TableCell>
                                                {
                                                    isAdminOrEditor ?
                                                    <TableCell className='fw-bold'>Actions</TableCell> : ''
                                                }
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data?.data.data.map(
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
                                                        {
                                                            isAdminOrEditor ? 
                                                            <TableCell className="align-top">
                                                                <Button size="small" color='primary'
                                                                    onClick={() => setEdit(s => ({ ...s, show: true, data: category }))}
                                                                    variant="outlined">Edit</Button>
                                                                {' '}
                                                                <Button color='error'
                                                                    onClick={() => handleDelete(category.id)}
                                                                    variant="outlined" size="small">Delete</Button>
                                                            </TableCell> : ''
                                                        }
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
                                :
                                <CardContent className="pb-2"> No Categories found </CardContent>
                        }
                        
                    </Card>
                </Grid>
            </Grid>
            <CategoryEditModal edit={edit} setEdit={setEdit} httpClient={httpClient} />
            <CategoryCreateModal show={create} setCreate={setCreate} httpClient={httpClient} />
            <Snackbar
                open={showSnackBar}
                autoHideDuration={5000}
                onClose={e => setShowSnackBar(false)}
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                <Alert
                    severity={'error'} sx={{ width: '100%' }}
                >
                    {error?.response?.data?.message ?? "An error occurred. Try again"}
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default Categories;