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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router';
import ViewMessageModal from './ViewMessage';

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
    const [keyword, setKeyword] = useState('');
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [error, setError] = useState({});
    const [view, setView] = useState({ show: false, data: {} });
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isFetching, data, refetch } = useQuery('MessageData', () =>
        httpClient.get(`/api/admin/messages`),{ 
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
                    <Card className="mb-4">
                        <CardHeader className="px-4"
                            title="Messages table"
                            subheader=""
                        />

                         {
                            (data?.data.data.length > 0)
                                ?
                                <CardContent className="pb-2">
                                    <TableContainer>
                                        <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>About</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Message</TableCell>
                                                <TableCell>Actions</TableCell>
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