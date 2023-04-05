import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Util from '../utility';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { createTheme } from '@mui/material/styles';
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

const MailList = ({ httpClient }) => {
    document.title = 'Mail List';
    const [keyword, setKeyword] = useState('');
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [error, setError] = useState({});
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isFetching, data, refetch } = useQuery('mailData', () =>
        httpClient.get(`/api/admin/mail_list?keyword=${keyword}`),{ 
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
            queryClient.setQueryData('mailData', data);
        },
        onError: error => {
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
        }
    });

    const { isLoading: deleteFetching, mutate: deleteMutate } =
        useMutation(id => httpClient.delete(`/api/admin/mail_list/${id}`), {
        onSuccess: (data, id) => {
            queryClient.setQueryData('mailData', oldData => {
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
                                <input required className="form-control bg-transparent border border-secondary" placeholder="search mail list" aria-describedby="search-btn"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <button title="search mail list" className="btn btn-outline-secondary d-flex align-items-center" type="submit" id="search-btn">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                    <Card className="mb-4 admin-table">
                        <CardHeader className="px-4"
                            title="Mail list table"
                            subheader=""
                        />

                         {
                            (data?.data.data.length > 0)
                                ?
                                <CardContent className="pb-2">
                                    <div className='d-md-none' id='mobileView'>
                                        {
                                            data?.data.data.map(mail => (
                                                <Card key={mail.id} className='mobile-item' sx={{ my: 2}}>
                                                    <CardContent>
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {mail.name}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {mail.email}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions sx={{mb:1, px:2}}>
                                                            <Button variant="contained" size='small' color='error'
                                                                onClick={() => handleDelete(mail.id)} 
                                                            >Delete</Button>
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
                                                <TableCell className='fw-bold'>Email</TableCell>
                                                <TableCell className='fw-bold'>Confirmed</TableCell>
                                                <TableCell className='fw-bold'>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data.data.data.map(
                                                    mail => <TableRow key={mail.id}>
                                                        <TableCell className='align-top'>
                                                            <p className=''>{mail.name}</p>
                                                        </TableCell>
                                                        <TableCell className='align-top text-start'>
                                                            {mail.email}
                                                        </TableCell>
                                                        <TableCell className='align-top text-start' style={{ maxWidth: '150px' }}>
                                                            {mail.confirmed + ''}
                                                        </TableCell>
                                                        <TableCell className="align-top">
                                                            <Button variant="outlined" size='small' color='error'
                                                                onClick={() => handleDelete(mail.id)} 
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
                                    No Address found
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
        </div>
     );
}
 
export default MailList;