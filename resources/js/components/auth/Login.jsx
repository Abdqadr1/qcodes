
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import React, {useState} from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { useNavigate } from 'react-router';

const AdminLogin = ({ httpClient }) => {
  const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});

    const queryClient = useQueryClient();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
     event.preventDefault();
    };

    const { isLoading, mutate } =
        useMutation(formData => httpClient.post('/api/admin/login', formData), {
        onSuccess: data => {
            queryClient.setQueryData('userData', data.data);
            window.location = '/admin/dashboard';
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
                        <Paper className='login-paper' elevation={2} sx={{ padding: '4em 2em', textAlign: 'center' }}>
                            <h4 className='mb-3'>Admin Login</h4>
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
            
                            <FormGroup>
                                <FormControlLabel
                                    sx={{ fontSize: '10px', }}
                                    control={<Checkbox name='remember' size="small" />}
                                    label={<Typography variant="body2" color="textSecondary">Remember me?</Typography>} 
                                />
                            </FormGroup>
                            <Stack direction="row" spacing={2} mt={3}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Button
                                    disabled={isLoading}
                                    type='submit' variant="contained" color='success'
                                    sx={{width: 150}}
                                >LogIn</Button>
                                <Link href="/admin/forgotpassword" underline="none">
                                    Forgot Password?
                                </Link>
                            </Stack>
                            <Typography className='text-center mt-5 fs-6'>
                                Don't have an account. <Link color={'warning'} href="/admin/signup" underline="none">Sign Up</Link>
                            </Typography>
                        </Paper>  
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default AdminLogin;