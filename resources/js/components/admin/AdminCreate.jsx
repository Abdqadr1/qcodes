import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from '@mui/material/Alert';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import Util from '../utility';

const AdminCreateModal = ({ httpClient, show, setCreate, roles }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});

    const handleClose = e => setCreate(false);
    const queryClient = useQueryClient();
    const navigate = useNavigate();

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
                    <Modal.Title>New Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }
                        
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="first_name" type="text" placeholder="First Name" required />
                             {
                                (errors?.first_name)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.first_name[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="last_name" type="text" placeholder="Last Name" required />
                             {
                                (errors?.last_name)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.last_name[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                             {
                                (errors?.email)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.email[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="mobile" type="tel" placeholder="Phone Number" required />
                             {
                                (errors?.mobile)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.mobile[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name='street_address' as="textarea" rows={2}
                                placeholder="Street Address" required />
                             {
                                (errors?.street_address)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.street_address[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="state" placeholder="State" required />
                             {
                                (errors?.state)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.state[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control name="country" placeholder="Country" required />
                             {
                                (errors?.country)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.country[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>

                        <Form.Check
                            name='enabled' className='mb-3'
                            type='checkbox' label="Enabled"
                        />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Roles</Form.Label>
                            {
                                roles?.map(role => <Form.Check key={role.id} name='roles[]' type='checkbox' label={role.name} value={role.id}  />)
                            }
                             {
                                (errors?.roles)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.roles[0]}</span>
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
 
export default AdminCreateModal;