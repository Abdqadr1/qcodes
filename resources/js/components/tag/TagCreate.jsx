import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQueryClient } from 'react-query';
import Alert from '@mui/material/Alert';
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
                    <Form onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" >{alert.message}</Alert>
                            : ''
                        }
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control name="name" type="text" placeholder="Tag Name" required />
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
                            <Form.Control name='content' maxLength={100} as="textarea" rows={3} 
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


                        <Button variant="primary" type="submit">
                            { isLoading ? "Loading" : "Submit" }
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default TagCreateModal;