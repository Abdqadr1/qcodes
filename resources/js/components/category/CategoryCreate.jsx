import React, { useState } from 'react';
import Button  from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQueryClient } from 'react-query';
import Autocompletion from '../article/Autocompletion';
import Stack  from '@mui/material/Stack';
import Alert from '@mui/material/Alert';


const CategoryCreateModal = ({ httpClient, show, setCreate }) => {
    const [alert, setAlert] = useState({message: "", show:false})
    const handleClose = e => setCreate(false);
    const [parent, setParent] = useState({isError: false, data:null, errorMessage: ""});
    const queryClient = useQueryClient();
    
    const { mutate, isLoading, } = useMutation(
        (form) => httpClient.post(`/api/category/create`, form), {
        onSuccess: data => {
            queryClient.setQueryData('categoryData', oldData => {
                const list = oldData.data.data;
                list.unshift(data.data);
                return oldData;
            });
            handleClose();
        },
        onError: error => {
            const message = error?.response?.data?.message ?? "An error occurred. Try again";
            setAlert(s => ({ ...s, show: true, message }));
        }
    });

    const handleSubmit = e => {
        e.preventDefault();
        const target = e.target;
        const formData = new FormData(target);
        if (parent?.data) {
            formData.set('parent', parent.data);
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
                    <Modal.Title>New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }
                        <Form.Control name="name" className='mb-3' type="text" placeholder="Category Name" required />

                        <Form.Control name='content' maxLength={100} className='mb-3' as="textarea" rows={3} placeholder="Content" required />

                        <Form.Control name='meta_title' maxLength={150} className='mb-3' as="textarea" rows={3} placeholder="Meta Title" required />

                        <Stack className='mb-3'>
                            <Autocompletion info={parent} name='Parent Category' httpClient={httpClient} setData={setParent} />
                        </Stack>
                        
                        <Button disabled={isLoading} variant="contained" color='primary' type="submit">
                            { isLoading ? "Loading" : "Submit" }
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default CategoryCreateModal;