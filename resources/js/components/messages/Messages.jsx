import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Util from '../utility';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';
import ViewMessageModal from './ViewMessage';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

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

const Messages = ({ httpClient }) => {
    document.title = 'Messages';
    const [keyword, setKeyword] = useState('');
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [error, setError] = useState({});
    const [view, setView] = useState({ show: false, data: {} });
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isFetching, data, refetch } = useQuery('MessageData', () =>
        httpClient.get(`/api/admin/messages?keyword=${keyword}`),{ 
            refetchOnWindowFocus: false, retry: false,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            } 
        }
    );

    const { isLoading: pageFetching, mutate: pageMutate } =
        useMutation(url => httpClient.get(url), {
        onSuccess: data => {
            queryClient.setQueryData('MessageData', data);
        },
        onError: error => {
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
        }
    });

    const { isLoading: deleteFetching, mutate: deleteMutate } =
        useMutation(id => httpClient.delete(`/api/admin/message/delete/${id}`), {
        onSuccess: (data, id) => {
            queryClient.setQueryData('MessageData', oldData => {
                const list = oldData.data.data;
                const index = list.findIndex(l => l.id === id);
                list.splice(index, 1);
                return oldData;
            });
        },
        onError: error => {
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);
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

     
    if (isFetching || pageFetching || deleteFetching) return (
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
                <Grid item xs={12}>
                <div className="row mx-0 justify-content-center align-items-center g-2 mt-3 mb-5">
                        <div className="col-md-7">
                            <form className="input-group" onSubmit={handleSearch} >
                                <button title="clear Search" className="btn btn-outline-secondary d-flex align-items-center" type="button" id="clear-btn" onClick={handleClearSearch}>
                                    <ClearIcon />
                                </button>
                                <input required className="form-control bg-transparent border border-secondary" placeholder="search messages" aria-describedby="search-btn"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <button title="search messages" className="btn btn-outline-secondary d-flex align-items-center" type="submit" id="search-btn">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                    <Card className="mb-4 admin-table">
                        <CardHeader className="px-4"
                            title="Messages table"
                            subheader=""
                        />

                         {
                            (data?.data.data.length > 0)
                                ?
                                <CardContent className="pb-2">
                                    <div className='d-md-none' id='mobileView'>
                                        {
                                            data?.data.data.map(message => (
                                                <Card key={message.id} className='mobile-item' sx={{ my: 2}}>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {message.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {message.message}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions sx={{mb:1, px:2}}>
                                                        <Button onClick={() => setView(s => ({ ...s, show: true, data: message }))}
                                                            size='small' variant="contained">View</Button>
                                                            {' '}
                                                            <Button variant="contained" size='small' color='error'
                                                                onClick={() => handleDelete(message.id)} 
                                                            >Delete</Button>
                                                    </CardActions>
                                                    
                                                </Card>)
                                            )
                                        }
                                    </div>
                                    <TableContainer className='d-none d-md-block' id="desktopView">
                                        <Table aria-label="simple table">
                                        <TableHead> className='fw-bold'
                                            <TableRow>
                                                <TableCell className='fw-bold'>Name</TableCell>
                                                <TableCell className='fw-bold'>About</TableCell>
                                                <TableCell className='fw-bold'>Email</TableCell>
                                                <TableCell className='fw-bold'>Message</TableCell>
                                                <TableCell className='fw-bold'>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data.data.data.map(
                                                    message => <TableRow key={message.id}>
                                                        <TableCell className='align-top'>
                                                            <p className=''>{message.name}</p>
                                                        </TableCell>
                                                            <TableCell className="align-top text-start">
                                                            <span className="text-secondary text-xs font-weight-bold">{message.about}</span>
                                                        </TableCell>
                                                        <TableCell className='align-top text-start'>
                                                            {message.email}
                                                        </TableCell>
                                                        <TableCell className='align-top text-start' style={{ maxWidth: '150px' }}>
                                                            {message.message}
                                                        </TableCell>
                                                        <TableCell className="align-top">
                                                            <Button onClick={() => setView(s => ({ ...s, show: true, data: message }))} size='small' variant="outlined">View</Button>
                                                            {' '}
                                                            <Button variant="outlined" size='small' color='error'
                                                                onClick={() => handleDelete(message.id)} 
                                                            >Delete</Button>
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
                                : <CardContent className="pb-2">
                                    No Message found
                                </CardContent>
                        }
                    </Card>
                </Grid>
            </Grid>
            <Snackbar
                open={showSnackBar}
                autoHideDuration={5000}
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    onClose={()=>setShowSnackBar(false)}
                >
                <Alert
                    severity={'error'} sx={{ width: '100%' }}
                >
                    {error?.response?.data?.message ?? "An error occurred. Try again"}
                </Alert>
            </Snackbar>
            <ViewMessageModal view={view} setView={setView} />
        </div>
     );
}
 
export default Messages;