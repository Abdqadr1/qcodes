
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
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


const Admin = ({ httpClient }) => {
    document.title = 'Admin';
    const [edit, setEdit] = useState({ show: false, data: {} });
    const [keyword, setKeyword] = useState('');
    const [create, setCreate] = useState(false);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [error, setError] = useState({});

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {data, refetch, isFetching } = useQuery('adminData', () =>
        httpClient.get(`/api/admin/all?keyword=${keyword}`),{ 
            refetchOnWindowFocus: false,
            retry: false,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            }  
        }
    );

    const { isLoading:roleLoading, data:roleData } = useQuery('roleData', () =>
        httpClient.get('/api/admin/roles'),{ 
            refetchOnWindowFocus: false,
            retry: false,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            } 
        }
    );

    const { isLoading: pageFetching, mutate:pageMutate } =
        useMutation(url => httpClient.get(`${url}g&keyword=${keyword}`), {
        onSuccess: data => {
            queryClient.setQueryData('adminData', data);
        },
        onError: error => {
            Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
        } 
    });

    const { isLoading: deleteFetching, mutate: deleteMutate } =
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
            Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
        } 
    });

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


    return ( 
        <div className='px-4 py-2'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="row mx-0 justify-content-center align-items-center g-2 mt-3 mb-5">
                        <div className="col-md-7">
                            <form className="input-group" onSubmit={handleSearch} >
                                <button title="clear Search" className="btn btn-outline-secondary d-flex align-items-center" type="button" id="clear-btn" onClick={handleClearSearch}>
                                    <ClearIcon />
                                </button>
                                <input required className="form-control bg-transparent border border-secondary" placeholder="search admin" aria-describedby="search-btn"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <button title="search admin" className="btn btn-outline-secondary d-flex align-items-center" type="submit" id="search-btn">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                   
                    <Card className="mb-4 admin-table">
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
                        {
                            (data?.data.data.length > 0)
                                ?
                                <CardContent className="pb-2">
                                    <div className='d-md-none' id='mobileView'>
                                        {
                                            data?.data.data.map(admin => (
                                                <Card key={admin.id} className='mobile-item' sx={{ my: 2}}>
                                                    <CardContent>
                                                        <Typography variant="h6" component="div">
                                                            {`${admin.first_name} ${admin.last_name}`}
                                                        </Typography>
                                                        <Typography gutterBottom variant="body2" color="text.secondary">
                                                            {admin?.email}
                                                        </Typography>
                                                        <Typography sx={{mt:1}} variant="body2" color="text.secondary" component='div'>
                                                            <span className="">{admin.enabled ? "Enabled" : "Disabled"}</span> - {
                                                                admin?.roles?.map(role => <Chip key={ role.id } label={role.name} />)
                                                            }
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions sx={{mb:1, px:2}}>
                                                        <Button size="small" onClick={() => setEdit(s => ({ ...s, show: true, data: admin }))}
                                                                variant="contained" color='primary'>Edit</Button>
                                                            {' '}
                                                            <Button onClick={() => handleDelete(admin.id)} variant="contained"  color='error'
                                                                size="small">Delete</Button>
                                                    </CardActions>
                                                    
                                                </Card>)
                                            )
                                        }
                                    </div>
                                    <TableContainer className='d-none d-md-block' id="desktopView">
                                        <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='fw-bold'>Name</TableCell>
                                                <TableCell className='fw-bold'>Roles</TableCell>
                                                <TableCell className='fw-bold'>Status</TableCell>
                                                <TableCell className='fw-bold'>Last Login</TableCell>
                                                <TableCell className='fw-bold'>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data.data.data.map(
                                                    admin => <TableRow key={admin.id}>
                                                        <TableCell sx={{maxWidth: '200px'}}>
                                                            <div className="d-flex px-2 py-1">
                                                            <Avatar sx={{marginRight: 1}} alt={admin.first_name} src="/static/images/avatar/1.jpg" />
                                                            <div className="d-flex flex-column justify-content-center">
                                                                <h6 className="mb-0 text-sm">{`${admin.first_name} ${admin.last_name}`}</h6>
                                                                <p className="text-xs text-secondary mb-0">{admin.email}</p>
                                                            </div>
                                                            </div>
                                                        </TableCell>
                                                        <TableCell>
                                                            {
                                                                admin?.roles?.map(role => <Chip key={ role.id } label={role.name} />)
                                                            }
                                                        </TableCell>
                                                        <TableCell>
                                                            <span className="">{admin.enabled ? "Enabled" : "Disabled"}</span>
                                                        </TableCell>
                                                        <TableCell>
                                                            <span className="text-secondary text-xs font-weight-bold">{admin.last_login_at}</span>
                                                        </TableCell>
                                                        <TableCell className="align-top">
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
                            :
                                <CardContent className="pb-2"> No Admin found </CardContent>
                        }
                    </Card>
                </Grid>
            </Grid>
            <AdminEditModal edit={edit} setEdit={setEdit} httpClient={httpClient} roles={roleData.data} />
            <AdminCreateModal show={create} setCreate={setCreate} httpClient={httpClient} roles={roleData.data} />
            <Snackbar
                open={showSnackBar}
                autoHideDuration={5000}
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                onClose={e => setShowSnackBar(false)}
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
 
export default Admin;