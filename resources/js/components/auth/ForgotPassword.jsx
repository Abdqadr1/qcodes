
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Zoom from '@mui/material/Zoom';
import React, {useState} from 'react';
import { useMutation, } from 'react-query';

const ForgotPassword = ({ httpClient }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});
    const [registered, setRegistered] = useState(false);


    const { isLoading, mutate } =
        useMutation(formData => httpClient.post('/api/admin/forgotpassword', formData), {
        onSuccess: () => {
            setRegistered(true);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            const errors = response?.data?.errors;

            if (errors)  setErrors({ ...errors });
            else setAlert(s => ({ ...s, show: true, message }));
        }
    });


    const handleSubmit = e => {
        e.preventDefault();
        setErrors({});
        setAlert(s => ({ ...s, show: false }));
        const formData = new FormData(e.target);
        mutate(formData);
    }

    if (registered) {
        return (
            <Container maxWidth="lg">
                <Grid container spacing={2}
                    justifyContent="center"
                    alignItems="center" sx={{height: '100vh'}}
                >
                    <Grid item xs={12} md={6} >
                        <Paper elevation={3} sx={{ padding: '2em', textAlign: 'center', borderRadius:5 }}>
                            <Typography variant="h5" display="block" gutterBottom>
                                Check your mail for further instructions. <br />
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
        <Container maxWidth="lg">
            <Grid container spacing={2}
                justifyContent="center"
                alignItems="center" sx={{height: '90vh'}}
                >
                <Grid item xs={12} md={6} >
                    <Box
                        component={'form'}
                         sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 'auto',
                                width: "100%",
                                height: 'auto',
                            },
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Paper elevation={2} sx={{ padding: '4em 2em', textAlign: 'center', }}>
                            <h4 className='mb-3'>Reset Password</h4>
                            {
                                (alert.show)
                                ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                                : ''
                            }
                            <FormControl sx={{ my: 1, width: '100%' }}  variant="outlined">
                                <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                                <OutlinedInput
                                    required name='email'
                                    id="input-with-icon-adornment"
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                    label="Email"
                                />
                                {(errors?.email) ? <FormHelperText error>{errors.email[0]}</FormHelperText> : ''}
                            </FormControl>
        
                            <Stack direction="row" spacing={2} mt={3}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Button
                                    disabled={isLoading}
                                    type='submit' variant="contained" color='primary'
                                    sx={{width: 250}}
                                >Send Reset Password Link</Button>
                            </Stack>
                        </Paper>  
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default ForgotPassword;