import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useMutation, useQueryClient } from 'react-query';
import Autocompletion from '../article/Autocompletion';
import Stack  from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Util from '../utility';
import { useNavigate } from 'react-router';

const CategoryEditModal = ({ edit, setEdit, httpClient }) => {
    const data = {...edit.data};
    const [parent, setParent] = useState({isError: false, data: {...data?.parent}, errorMessage: ""});
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});

    const handleClose = () => setEdit(s => ({ ...s, show: false }));
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    // useEffect(() => {
    //     setParent(s => ({...s, data: data?.parent}))
    // }, [data]);

    const { mutate, isLoading, } = useMutation(
        (inputs) => httpClient.post(`/api/category/edit/${inputs[0]}`, inputs[1]), {
        onSuccess: data => {
            queryClient.setQueryData('categoryData', oldData => {
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


    const handleSubmit = e => {
        setErrors({});
        setAlert(s => ({ ...s, show: false }));
        e.preventDefault();
        const target = e.target;
        const formData = new FormData(target);
        if (parent?.data?.id) {
            formData.set('parent_id', parent.data.id);
        }
        mutate([data?.id, formData]);
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
                    <Modal.Title>Edit Category (ID: { data?.id })</Modal.Title>
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
                            label="Category Name"
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

                        <Stack className='mb-3'>
                            <Autocompletion defaultValue={data?.parent}
                                info={parent} name='Parent Category'
                                httpClient={httpClient} setData={setParent} />

                                {
                                (errors?.parent_id) ? <span className='text-danger'>{ errors?.parent_id }</span> : ''
                                }
                        </Stack>
                        
                        <Button disabled={isLoading} variant="contained" color='primary' type="submit">
                            { isLoading ? "Loading" : "Submit" }
                        </Button>
                    </Box>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default CategoryEditModal;