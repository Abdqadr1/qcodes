import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQueryClient } from 'react-query';
import Alert from '@mui/material/Alert';
import Util from '../utility';
import { useNavigate } from 'react-router';


const TagCreateModal = ({ httpClient, show, setCreate }) => {
    const [alert, setAlert] = useState({message: "", show:false})
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
            setAlert(s => ({ ...s, show: true, message }));
        }
    });

    const handleSubmit = e => {
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
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }
                        <Form.Control name="name" className='mb-3' type="text" placeholder="Tag Name" required />

                        <Form.Control name='content' maxLength={100} className='mb-3' as="textarea" rows={3} placeholder="Content" required />

                        <Form.Control name='meta_title' maxLength={150} className='mb-3' as="textarea" rows={3} placeholder="Meta Title" required />
                        
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