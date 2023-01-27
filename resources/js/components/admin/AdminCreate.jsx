import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import Util from '../utility';

const AdminCreateModal = ({ httpClient, show, setCreate, roles }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});

    const handleClose = e => setCreate(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isLoading, } = useMutation(
        (form) => httpClient.post(`/api/admin/create`, form), {
        onSuccess: data => {
            queryClient.setQueryData('adminData', oldData => {
                const list = oldData.data.data;
                list.unshift(data.data);
                return oldData;
            });
            handleClose();
        },
        onError: error => {
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);
            const message = response?.data?.message ?? "An error occurred. Try again";
            const errors = response?.data?.errors;
            
            if (errors)  setErrors({ ...errors });
            else setAlert(s => ({ ...s, show: true, message, severity: 'error' }));
        }
    });

    const handleSubmit = e => {
        setErrors({});
        setAlert(s => ({ ...s, show: false }));
        e.preventDefault();
        const target = e.target;
        const formData = new FormData(target);
        if (!formData.get('roles[]')) {
            setErrors(s => ({ ...s, roles: ['Select at least one role for this user.'] }));
            return;
        }
        mutate(new FormData(target));
    }

    return ( 
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>New Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box
                        sx={{}}
                        component='form'
                        onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }
                        
                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='first_name'
                            id="outlined-required"
                            label="First Name"
                            size='small'
                            helperText={(errors?.first_name) ? errors.first_name[0] : ''}
                            error={(errors?.first_name)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='last_name'
                            id="outlined-required"
                            label="Last Name"
                            size='small'
                            helperText={(errors?.last_name) ? errors.last_name[0] : ''}
                            error={(errors?.last_name)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='email' type='email'
                            id="outlined-required"
                            label="Enter Address"
                            size='small'
                            helperText={(errors?.email) ? errors.email[0] : ''}
                            error={(errors?.email)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='mobile' type='tel'
                            id="outlined-required"
                            label="Phone Number"
                            size='small'
                            helperText={(errors?.mobile) ? errors.mobile[0] : ''}
                            error={(errors?.mobile)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='street_address'
                            id="outlined-required"
                            label="First Name"
                            size='small' multiline rows={2}
                            helperText={(errors?.street_address) ? errors.street_address[0] : ''}
                            error={(errors?.street_address)}
                        />
                    

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='state'
                            id="outlined-required"
                            label="State"
                            size='small'
                            helperText={(errors?.state) ? errors.state[0] : ''}
                            error={(errors?.state)}
                        />
                        

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='country'
                            id="outlined-required"
                            label="Country"
                            size='small'
                            helperText={(errors?.country) ? errors.country[0] : ''}
                            error={(errors?.country)}
                        />

                        <FormGroup sx={{mb:2}}>
                            <FormControlLabel
                                sx={{ fontSize: '10px', }}
                                control={<Checkbox sx={{height: 25}} name='enabled' size="small" />}
                                label={<Typography variant="body2" color="dark">Enabled</Typography>} 
                            />
                        </FormGroup>

                        <FormGroup sx={{mb:3}}>
                            <Typography variant="body1" color="dark">Roles</Typography>
                            
                            {
                                roles?.map(role => 
                                    <FormControlLabel
                                        key={role.id} sx={{ fontSize: '10px', lineHeight: 1}}  name='roles[]'
                                        control={<Checkbox sx={{height: 25}} value={role.id} size="small" />}
                                        label={<Typography variant="body2" color="dark">{role.name}</Typography>} 
                                    />
                                )
                            }
                            {
                                (errors?.roles)
                                    ? 
                                    <Typography sx={{fontSize: 13}} color='error'
                                        variant="body1"
                                    >{errors?.roles[0]}</Typography>
                                    : '' 
                             }
                        </FormGroup>
                        
                        <Button variant='contained' color="primary" type="submit">
                            { isLoading ? "Loading..." : "Submit" }
                        </Button>
                    </Box>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default AdminCreateModal;