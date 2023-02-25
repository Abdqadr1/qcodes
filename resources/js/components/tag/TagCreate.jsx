import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useMutation, useQueryClient } from 'react-query';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Util from '../utility';
import { useNavigate } from 'react-router';


const TagCreateModal = ({ httpClient, show, setCreate }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});

    const handleClose = e => setCreate(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isLoading, } = useMutation(
        (form) => httpClient.post(`/api/tag/create`, form), {
        onSuccess: data => {
            queryClient.setQueryData('tagData', oldData => {
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
                    <Modal.Title>New Tag</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box sx={{}} component='form' onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert className='mb-3' severity="error" >{alert.message}</Alert>
                            : ''
                        }

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='name'
                            id="outlined-required"
                            label="Tag Name"
                            size='small'
                            helperText={(errors?.name) ? errors.name[0] : ''}
                            error={(errors?.name)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='content'
                            id="outlined-required"
                            label="Content" maxLength={100}
                            size='small' multiline rows={3}
                            helperText={(errors?.content) ? errors.content[0] : ''}
                            error={(errors?.content)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='meta_title'
                            id="outlined-required"
                            label="Meta Title" maxLength={150}
                            size='small' multiline rows={3} 
                            helperText={(errors?.meta_title) ? errors.meta_title[0] : ''}
                            error={(errors?.meta_title)}
                        />

                        <Button disabled={isLoading} variant='contained' color="primary" type="submit">
                            { isLoading ? "Loading" : "Submit" }
                        </Button>
                    </Box>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default TagCreateModal;