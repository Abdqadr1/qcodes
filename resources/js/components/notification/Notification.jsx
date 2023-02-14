
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import React, { useState } from "react";
import NotificationCreateModal from '../notification/NotificationCreate';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
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


const Notification = ({ httpClient }) => {
    document.title = 'Notifications';
    const [keyword, setKeyword] = useState('');
    const [create, setCreate] = useState(false);
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [error, setError] = useState({});

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {data, refetch, isFetching } = useQuery('adminNotificationData', () =>
        httpClient.get(`/api/admin/notification/all?keyword=${keyword}`),{ 
            refetchOnWindowFocus: false,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            }  
        }
    );

    const { isLoading:typeLoading, data:typeData } = useQuery('notificationTypeData', () =>
        httpClient.get('/api/admin/notification/type'),{ 
            refetchOnWindowFocus: false,
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
            queryClient.setQueryData('adminNotificationData', data);
        },
        onError: error => {
            Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
        } 
    });

    const { isLoading: deleteFetching, mutate: deleteMutate } =
        useMutation(id => httpClient.delete(`/api/admin/notification/delete/${id}`), {
        onSuccess: (data, id) => {
            queryClient.setQueryData('adminNotificationData', oldData => {
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


    if (isFetching || pageFetching || deleteFetching || typeLoading) return (
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
                                <input required className="form-control bg-transparent border border-secondary" placeholder="search notifications" aria-describedby="search-btn"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <button title="search notifications" className="btn btn-outline-secondary d-flex align-items-center" type="submit" id="search-btn">
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
                                    >Add Notification</Button>
                                }
                            title="Notifications table"
                            subheader=""
                        />
                        {
                            (data.data.data.length > 0)
                                ?
                                <CardContent className="pb-2">
                                    <TableContainer>
                                        <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>To</TableCell>
                                                <TableCell>Title</TableCell>
                                                <TableCell>Content</TableCell>
                                                <TableCell>Read</TableCell>
                                                <TableCell>Type</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data?.data.data.map(
                                                    notification => <TableRow key={notification.id}>
                                                        <TableCell className="align-top">
                                                            {notification.to}
                                                        </TableCell>
                                                        <TableCell className="align-top" sx={{maxWidth: '200px'}}>
                                                            {notification.title}
                                                        </TableCell>
                                                        <TableCell className="align-top" sx={{maxWidth: '200px'}}>
                                                            {notification.content}
                                                        </TableCell>
                                                        <TableCell className="align-top">
                                                            <span className="">{notification.read ? "Read" : "Unread"}</span>
                                                        </TableCell>
                                                        <TableCell className="align-top">
                                                            {notification.type}
                                                        </TableCell>
                                                        <TableCell className="align-top">
                                                            <IconButton onClick={() => handleDelete(notification.id)} color='error'
                                                                size="small"><DeleteIcon /></IconButton>
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
                                <CardContent className="pb-2"> No Notification found </CardContent>
                        }
                    </Card>
                </Grid>
            </Grid>
            <NotificationCreateModal show={create} setCreate={setCreate} httpClient={httpClient} types={typeData.data} />
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
 
export default Notification;