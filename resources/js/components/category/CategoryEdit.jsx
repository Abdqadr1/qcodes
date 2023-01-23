import React, { useState } from 'react';
import Button  from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQueryClient } from 'react-query';
import Autocompletion from '../article/Autocompletion';
import Stack  from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

const CategoryEditModal = ({ edit, setEdit, httpClient }) => {
    const data = edit.data;
    const [parent, setParent] = useState({isError: false, data: data?.parent?.id, errorMessage: ""});
    const [alert, setAlert] = useState({message: "", show:false})
    const handleClose = () => setEdit(s => ({ ...s, show: false }));
    const queryClient = useQueryClient();

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
                    <Form onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }
                        <Form.Control defaultValue={data.name} name="name" className='mb-3' type="text" placeholder="Category Name" required />

                        <Form.Control defaultValue={data.content} name='content' maxLength={100} className='mb-3' as="textarea" rows={3} placeholder="Content" required />

                        <Form.Control defaultValue={data.meta_title} name='meta_title' maxLength={150} className='mb-3' as="textarea" rows={3} placeholder="Meta Title" required />

                        <Stack className='mb-3'>
                            <Autocompletion defaultValue={data?.parent}
                                info={parent} name='Parent Category'
                                httpClient={httpClient} setData={setParent} />
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
 
export default CategoryEditModal;