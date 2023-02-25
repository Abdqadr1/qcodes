import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useMutation, useQueryClient } from 'react-query';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import Util from '../utility';

const TagEditModal = ({ edit, setEdit, httpClient }) => {
    const handleClose = () => setEdit(s => ({ ...s, show: false }));
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});

    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isLoading, } = useMutation(
        (inputs) => httpClient.post(`/api/tag/edit/${inputs[0]}`, inputs[1]), {
        onSuccess: data => {
            queryClient.setQueryData('tagData', oldData => {
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
        mutate([data?.id, new FormData(target)]);
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
                    <Modal.Title>Edit Tag (ID: { data?.id })</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box sx={{}} component='form' onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='name'
                            id="outlined-required"
                            label="Tag Name"
                            size='small'
                            defaultValue={data?.name ?? ''}
                            helperText={(errors?.name) ? errors.name[0] : ''}
                            error={(errors?.name)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='content'
                            id="outlined-required"
                            label="Content" maxLength={100}
                            size='small' multiline rows={3}
                            defaultValue={data?.content ?? ''}
                            helperText={(errors?.content) ? errors.content[0] : ''}
                            error={(errors?.content)}
                        />

                        <TextField
                            sx={{width: '100%', mb:3}}
                            required name='meta_title'
                            id="outlined-required"
                            label="Meta Title" maxLength={150}
                            size='small' multiline rows={3}
                            defaultValue={data?.meta_title ?? ''}
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
 
export default TagEditModal;