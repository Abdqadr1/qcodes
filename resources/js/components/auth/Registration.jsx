
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import { useMutation } from 'react-query';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Zoom from '@mui/material/Zoom';

const AdminRegistration = ({ httpClient }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});
    const [registered, setRegistered] = useState(false);



    const { isLoading, mutate } =
        useMutation(formData => httpClient.post('/api/admin/signup', formData), {
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
                        <Paper className='signup-paper' elevation={3} sx={{ padding: '2em', textAlign: 'center', borderRadius:5 }}>
                            <Typography variant="h6" display="block" gutterBottom>
                                Verify your email address, Mail has been sent. <br />
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
                <Grid item xs={12} md={7} >
                    <Box
                        component="form"
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
                        <Paper className='signup-paper' elevation={2} sx={{ padding: '4em 2em', textAlign: 'center'}}>
                            <Stack direction="row" spacing={2} mt={3}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <h4 className='mb-3'>Admin Registration</h4>
                                <Link className='fw-bold text-success' color={'warning'} href="/admin/login" underline="none">Log In</Link>
                            </Stack>
                            {
                                (alert.show)
                                ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                                : ''
                            }
                            <Grid
                                container
                                rowSpacing={2} columnSpacing={[0, 2]}
                                justifyContent="center"
                                alignItems="center"
                                sx={{ padding: 0, m: 0}}
                            >
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name='first_name'
                                        id="outlined-required"
                                        label="First Name"
                                        helperText={(errors?.first_name) ? errors.first_name[0] : ''}
                                        error={(errors?.first_name)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name='last_name'
                                        id="outlined-required"
                                        label="Last Name"
                                        helperText={(errors?.last_name) ? errors.last_name[0] : ''}
                                        error={(errors?.last_name)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name='email'
                                        type={'email'}
                                        id="outlined-required"
                                        label="Email Address"
                                        helperText={(errors?.email) ? errors.email[0] : ''}
                                        error={(errors?.email)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name='mobile' type={'tel'}
                                        id="outlined-required"
                                        label="Mobile No"
                                        helperText={(errors?.mobile) ? errors.mobile[0] : ''}
                                        error={(errors?.mobile)}
                                    />
                                </Grid>

                                <Grid item xs={12}> 
                                    <TextField
                                        sx={{ width: '100%' }}                       
                                        multiline
                                        rows={2}
                                        required name='street_address'
                                        id="outlined-required"
                                        minLength={150}
                                        label="Street Address"
                                        helperText={(errors?.street_address) ? errors.street_address[0] : ''}
                                        error={(errors?.street_address)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name='state'
                                        id="outlined-required"
                                        label="State"
                                        helperText={(errors?.state) ? errors.state[0] : ''}
                                        error={(errors?.state)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name='country'
                                        id="outlined-required"
                                        label="Country"
                                        helperText={(errors?.country) ? errors.country[0] : ''}
                                        error={(errors?.country)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name="password"
                                        id="outlined-required"
                                        label="Password" type={'password'}
                                        helperText={(errors?.password) ? errors.password[0] : ''}
                                        error={(errors?.password)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name="password_confirmation"
                                        id="outlined-required"
                                        label="Confirm Password" type={'password'}
                                        helperText={(errors?.password_confirmation) ? errors.password_confirmation[0] : ''}
                                        error={(errors?.password_confirmation)}
                                    />
                                </Grid>

                            </Grid>

                            <Stack direction="row" spacing={2} mt={3}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Button
                                    disabled={isLoading}
                                    type='submit' variant="contained" color='success'
                                    sx={{width: 150}}
                                >Sign Up</Button>
                            </Stack>
                        </Paper>  
                    </Box>
                </Grid>
            </Grid>
        </Container>
     );
}
 
export default AdminRegistration;