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
import Autocompletion from '../article/Autocompletion';
import Stack  from '@mui/material/Stack';

const NotificationCreateModal = ({ httpClient, show, setCreate, types }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});
    const [to, setTo] = useState({ isError: false, data: null, errorMessage: "" });
    const [type, setType] = useState('');

    const handleClose = e => setCreate(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const handleTypeChange = t => {
        setType(t);
    }

    const { mutate, isLoading, } = useMutation(
        (form) => httpClient.post(`/api/admin/notification/create`, form), {
        onSuccess: data => {
            queryClient.setQueryData('adminNotificationData', oldData => {
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
        if (!formData.get('type')) {
            setErrors(s => ({ ...s, type: ['Select notification type'] }));
            return;
        }
        if (to?.data?.id) {
            formData.set('to', to.data?.id);
        }
        if (type !== 'GENERAL' && !formData.get('to')) {
            setErrors(s => ({ ...s, to: ['Enter receiver'] }));
            return
        }
        mutate(formData);
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
                    <Modal.Title>New Notification</Modal.Title>
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

                        <Stack className='mb-3'>
                            <Autocompletion info={to} name='To' httpClient={httpClient} setData={setTo} />
                            {
                                (errors?.to) ? 
                                    <span className='text-danger'>{ errors.to[0] }</span>
                                : ''
                            }
                        </Stack>
                        
                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='title'
                            id="outlined-required"
                            label="Title"
                            size='small'
                            helperText={(errors?.title) ? errors.title[0] : ''}
                            error={(errors?.title)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='content'
                            id="outlined-required"
                            label="Content"
                            size='small' multiline rows={3}
                            helperText={(errors?.content) ? errors.content[0] : ''}
                            error={(errors?.content)}
                        />

                        <FormGroup sx={{mb:3}}>
                            <Typography variant="body1" color="dark">Notification Type: </Typography>
                            
                            {
                                types?.map(t => 
                                    <FormControlLabel
                                        control={<Checkbox sx={{ height: 25 }} value={t} size="small"
                                            checked={t === type} onChange={()=>handleTypeChange(t)}
                                        />}
                                        label={<Typography variant="body2" color="dark">{t}</Typography>}
                                        key={t} sx={{ fontSize: '10px', lineHeight: 1}}  name='type' 
                                    />
                                )
                            }
                            {
                                (errors?.type)
                                    ? 
                                    <Typography sx={{fontSize: 13}} color='error'
                                        variant="body1"
                                    >{errors?.type[0]}</Typography>
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
 
export default NotificationCreateModal;