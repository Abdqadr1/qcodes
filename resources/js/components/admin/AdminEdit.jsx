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

const AdminEditModal = ({ edit, setEdit, httpClient, roles }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});
    
    const handleClose = () => setEdit(s => ({ ...s, show: false }));
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isLoading, } = useMutation(
        (inputs) => httpClient.post(`/api/admin/edit/${inputs[0]}`, inputs[1]), {
        onSuccess: data => {
            queryClient.setQueryData('adminData', oldData => {
                const list = oldData.data.data;
                const index = list.findIndex(l => l.id === data.data.id);
                list[index] = data.data;
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

    const data = edit.data;

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
        mutate([data?.id, formData]);
    }

    const hasRole = name => {
        return data.roles?.some(role => role.name === name);
    }


    return ( 
        <>
            <Modal
                show={edit.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Admin (ID: { data?.id })</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box
                        component={'form'}
                        sx={{ }}
                        onSubmit={handleSubmit}
                    >
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
                            defaultValue={data?.first_name ?? ''}
                            helperText={(errors?.first_name) ? errors.first_name[0] : ''}
                            error={(errors?.first_name)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='last_name'
                            id="outlined-required"
                            label="Last Name"
                            size='small'
                            defaultValue={data?.last_name ?? ''}
                            helperText={(errors?.last_name) ? errors.last_name[0] : ''}
                            error={(errors?.last_name)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='email' type='email'
                            id="outlined-required"
                            label="Email Address"
                            size='small'
                            defaultValue={data?.email ?? ''}
                            helperText={(errors?.email) ? errors.email[0] : ''}
                            error={(errors?.email)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='mobile' type='tel'
                            id="outlined-required"
                            label="Phone Number"
                            size='small'
                            defaultValue={data?.mobile ?? ''}
                            helperText={(errors?.mobile) ? errors.mobile[0] : ''}
                            error={(errors?.mobile)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='street_address'
                            id="outlined-required"
                            label="Street Address" rows={2}
                            size='small' multiline
                            defaultValue={data?.street_address ?? ''}
                            helperText={(errors?.street_address) ? errors.street_address[0] : ''}
                            error={(errors?.street_address)}
                        />
                    

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='state'
                            id="outlined-required"
                            label="State"
                            size='small'
                            defaultValue={data?.state ?? ''}
                            helperText={(errors?.state) ? errors.state[0] : ''}
                            error={(errors?.state)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='country'
                            id="outlined-required"
                            label="Country"
                            size='small'
                            defaultValue={data?.country ?? ''}
                            helperText={(errors?.country) ? errors.country[0] : ''}
                            error={(errors?.country)}
                        />
                        

                        <FormGroup sx={{mb:2}}>
                            <FormControlLabel
                                sx={{ fontSize: '10px', }}
                                control={<Checkbox sx={{height: 25}}  defaultChecked={data?.enabled} name='enabled' size="small" />}
                                label={<Typography variant="body2" color="dark">Enabled</Typography>} 
                            />
                        </FormGroup>

                         <FormGroup sx={{mb:3}}>
                            <Typography variant="body1" color="textSecondary">Roles</Typography>
                            
                            {
                                roles?.map(role => 
                                    <FormControlLabel
                                        key={role.id} sx={{ fontSize: '10px', lineHeight: 1}}  name='roles[]'
                                        control={<Checkbox sx={{height: 25}} value={role.id}  defaultChecked={hasRole(role.name)} size="small" />}
                                        label={<Typography variant="body2" color="dark">{role.name}</Typography>} 
                                    />
                                )
                            }
                            {
                                (errors?.roles)
                                    ? 
                                    <Typography sx={{ fontSize: 13}} color='error'
                                        variant="body1"
                                    >{errors?.roles[0]}</Typography>
                                    : '' 
                             }
                        </FormGroup>
                        
                        <Button
                            disabled={isLoading} variant="contained"
                            color='primary' type="submit">
                            { isLoading ? "Loading ..." : "Submit" }
                        </Button>
                    </Box>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default AdminEditModal;