
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import React, {useState} from 'react';
import { useQuery } from 'react-query';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Zoom from '@mui/material/Zoom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ConfirmEmailAddress = ({ httpClient }) => {
    document.title = 'Confirm Email';
    const [confirmed, setConfirmed] = useState(false);

    const [urlParam,] = useSearchParams();
    const email = urlParam.get('email');
    const token = urlParam.get('token');

    const { isLoading, error } =
        useQuery('adminConfirm', () => {
            const formData = new FormData();
            formData.set('token', token);
            formData.set('email', email);
            return httpClient.post('/api/admin/confirm', formData)
        }, {
            refetchOnWindowFocus:false,
            onSuccess: () => {
                setConfirmed(true);
        }
    });



    if (!(token && email)) {
        return 'Invalid action';
    }

    if (isLoading) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
        </Backdrop>
    );

     if (confirmed) {
        return (
            <Container maxWidth="lg">
                <Grid container spacing={2}
                    justifyContent="center"
                    alignItems="center" sx={{height: '100vh'}}
                >
                    <Grid item xs={12} md={6} >
                        <Paper className='admin-table' elevation={3} sx={{ padding: '2em', textAlign: 'center', borderRadius:5 }}>
                            <Typography variant="h6" display="block" gutterBottom>
                                Your email address has been confirmed. <br/> <Link href='/admin/login'>Log in</Link> to your account <br />
                                <Zoom in style={{ transitionDelay: '500ms' }}>
                                <TaskAltIcon sx={{mt: 4, fontSize: '3rem', color: 'success.dark'}}/>
                                </Zoom>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        )
    }

    
    return ( 
        <Snackbar
                open={true}
                autoHideDuration={5000}
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
     );
}
 
export default ConfirmEmailAddress;