
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Zoom from '@mui/material/Zoom';
import Util from '../utility';
import { useNavigate } from 'react-router';

const Profile = ({ httpClient }) => {
    const [alert, setAlert] = useState({ message: "", show: false, severity: "error" });
    const [userData, setUserData] = useState({});
    const [errors, setErrors] = useState({});

    const queryClient = useQueryClient();
    const navigate = useNavigate();

     const { isLoading, error } = useQuery('getAdminUser', () =>
        httpClient.get('/api/admin'),{ 
         refetchOnWindowFocus: false,
            retry: false,
            onSuccess: data => {
                queryClient.setQueryData('userData', data.data);
                setUserData({...data.data});
            },
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
            } 
        }
    );

    const handleInput = e => {
        setUserData(s => ({
            ...s,
            [e.target.name]: e.target.value
        }));
    }

    const { isLoading: updateLoading, mutate } =
        useMutation(formData => httpClient.post('/api/admin/update', formData), {
        onSuccess: (data) => {
            queryClient.setQueryData('userData', data.data);
                setAlert(s => ({ ...s, show: true, message: "Account Updated!", severity:'success'}))
        },
        onError: error => {
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);

            const message = response?.data?.message ?? "An error occurred";
            const errors = response?.data?.errors;

            if (errors)  setErrors({ ...errors });
            else setAlert(s => ({ ...s, show: true, message, severity: 'error' }));
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
                        <Paper elevation={2} sx={{ padding: '4em 2em', textAlign: 'center'}}>
                            <Stack direction="row" spacing={2} mt={3}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <h4 className='mb-3'>Account Information</h4>
                                {
                                    userData?.roles?.map(role => <Chip key={ role.id } label={role.name} />)
                                }
                            </Stack>
                            {
                                (alert.show)
                                ? <Alert severity={alert.severity} className='mb-3' >{alert.message}</Alert>
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
                                        value={userData?.first_name ?? ''}
                                        onChange={handleInput}
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
                                        value={userData?.last_name ?? ""}
                                        onChange={handleInput}
                                        helperText={(errors?.last_name) ? errors.last_name[0] : ''}
                                        error={(errors?.last_name)}
                                    />
                                </Grid>
                                <Grid item xs={6}> 
                                    <TextField
                                        sx={{width: '100%'}}
                                        required name='email'
                                        type={'email'} disabled
                                        id="outlined-required"
                                        label="Email Address"
                                        value={userData?.email ?? ""}
                                        onChange={handleInput}
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
                                        value={userData?.mobile ?? ""}
                                        onChange={handleInput}
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
                                        value={userData?.street_address ?? ""}
                                        onChange={handleInput}
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
                                        value={userData?.state ?? ""}
                                        onChange={handleInput}
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
                                        value={userData?.country ?? ""}
                                        onChange={handleInput}
                                        helperText={(errors?.country) ? errors.country[0] : ''}
                                        error={(errors?.country)}
                                    />
                                </Grid>
                            </Grid>

                            <Stack direction="row" spacing={2} mt={3}
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Button
                                    disabled={isLoading || updateLoading}
                                    type='submit' variant="contained" color='success'
                                    sx={{width: 150}}
                                >Save</Button>
                            </Stack>
                        </Paper>  
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
 
export default Profile;