import React, { useState } from 'react';
import Button  from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQueryClient } from 'react-query';
import Autocompletion from '../article/Autocompletion';
import Stack  from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router';
import Util from '../utility';


const CategoryCreateModal = ({ httpClient, show, setCreate }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [parent, setParent] = useState({ isError: false, data: null, errorMessage: "" });
    const [errors, setErrors] = useState({});

    const handleClose = e => setCreate(false);
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
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
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);
            const message = response?.data?.message ?? "An error occurred. Try again";
            setAlert(s => ({ ...s, show: true, message }));
        }
    });

    const handleSubmit = e => {
        setErrors({});
        setAlert(s => ({ ...s, show: false }));
        e.preventDefault();
        const target = e.target;
        const formData = new FormData(target);
        if (parent?.data) {
            formData.set('parent_id', parent.data?.id);
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

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="name" type="text" placeholder="Category Name" required />
                             {
                                (errors?.name)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.name[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name='content' maxLength={500} as="textarea" rows={3}
                                placeholder="Content" required />
                             {
                                (errors?.content)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.content[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name='meta_title' maxLength={150} as="textarea" rows={3}
                                placeholder="Meta Title" required />
                             {
                                (errors?.meta_title)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.meta_title[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

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