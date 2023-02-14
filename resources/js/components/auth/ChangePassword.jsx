
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import React, {useState} from 'react';
import { useMutation } from 'react-query';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Zoom from '@mui/material/Zoom';
import { useNavigate, useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const ChangePassword = ({ httpClient }) => {
    document.title = 'Change Password';
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ message: "", show: false });
    const [registered, setRegistered] = useState(false);

    const { token } = useParams();
    const [urlParam,] = useSearchParams();
    const email = urlParam.get('email');
    
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
     event.preventDefault();
    };

    const { isLoading, mutate } =
        useMutation(formData => httpClient.post('/api/admin/changepassword', formData), {
        onSuccess: data => {
            setRegistered(true);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            setAlert(s => ({ ...s, show: true, message }));
        }
    });


    const handleSubmit = e => {
        e.preventDefault();
        setAlert(s => ({ ...s, show: false }));
        const formData = new FormData(e.target);
        formData.set('token', token);
        formData.set('email', email);
        mutate(formData);
    }

    if (!(token && email)) {
        return 'Invalid action';
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
                                Your password has been changed. <Link href='/admin/login'>Log in</Link> to your account <br />
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
                            <h4 className='mb-3'>Change Password</h4>
                            {
                                (alert.show)
                                ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                                : ''
                            }
                            <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    required name='password'
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    required name='password_confirmation'
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>

                            <Stack direction="row" spacing={2} mt={3}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Button
                                    disabled={isLoading}
                                    type='submit' variant="contained" color='success'
                                    sx={{width: 200}}
                                >Change Password</Button>
                            </Stack>
                        </Paper>  
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default ChangePassword;