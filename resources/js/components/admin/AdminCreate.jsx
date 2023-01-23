import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from '@mui/material/Alert';

import { useMutation, useQueryClient } from 'react-query';
const AdminCreateModal = ({ httpClient, show, setCreate, roles }) => {
    const [alert, setAlert] = useState({message: "", show:false})
    const handleClose = e => setCreate(false);
    const queryClient = useQueryClient();

    const { mutate, isLoading, } = useMutation(
        (form) => httpClient.post(`/api/admin/create`, form), {
        onSuccess: data => {
            queryClient.setQueryData('adminData', oldData => {
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
                    <Modal.Title>New Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }
                        
                        <Form.Control name="first_name" className='mb-3' type="text" placeholder="First Name" required />
                        <Form.Control name="last_name" className='mb-3' type="text" placeholder="Last Name" required />
                        <Form.Control name="email" className='mb-3' type="email" placeholder="Enter email" required />
                        <Form.Control name="mobile" className='mb-3' type="tel" placeholder="Phone Number" required />

                        <Form.Check
                            name='enabled' className='mb-3'
                            type='checkbox' label="Enabled"
                        />

                        <Form.Control name='bio' className='mb-3' as="textarea" rows={3} placeholder="Bio" required />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Roles</Form.Label>
                            {
                                roles?.map(role => <Form.Check key={role.id} name='roles[]' type='checkbox' label={role.name} value={role.id}  />)
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
 
export default AdminCreateModal;