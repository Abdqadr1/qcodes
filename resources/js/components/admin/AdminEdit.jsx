import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from '@mui/material/Alert';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import Util from '../utility';

const AdminEditModal = ({ edit, setEdit, httpClient, roles }) => {
    const [alert, setAlert] = useState({ message: "", show: false });
    const [errors, setErrors] = useState({});
    
    const handleClose = () => setEdit(s => ({ ...s, show: false }));
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { mutate, isLoading, } = useMutation(
        (inputs) => httpClient.post(`/api/admin/edit/${inputs[0]}`, inputs[1]), {
        onSuccess: data => {
            queryClient.setQueryData('adminData', oldData => {
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

    const hasRole = name => {
        return data.roles?.some(role => role.name === name);
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
                    <Modal.Title>Edit Admin (ID: { data?.id })</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        {
                            (alert.show)
                            ? <Alert severity="error" className='mb-3' >{alert.message}</Alert>
                            : ''
                        }

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control defaultValue={data?.first_name} name="first_name" type="text"
                                placeholder="First Name" required />
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
                            <Form.Control defaultValue={data?.last_name} name="last_name" type="text" 
                                placeholder="Last Name" required />
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
                            <Form.Control defaultValue={data?.email} name="email" type="email" 
                                placeholder="Enter email" required />
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
                            <Form.Control defaultValue={data?.mobile} name="mobile" type="tel" 
                                placeholder="Phone Number" required />
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
                            <Form.Control defaultValue={data?.street_address} name='street_address' as="textarea" rows={2}
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
                            <Form.Control defaultValue={data?.state} name="state" placeholder="State" required />
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
                            <Form.Control defaultValue={data?.country} name="country" placeholder="Country" required />
                             {
                                (errors?.country)
                                    ?
                                    <Form.Text className="text-muted text-danger">
                                        <span className='text-danger'>{errors?.country[0]}</span>
                                    </Form.Text>
                                    : '' 
                             }
                        </Form.Group>
                        

                        <Form.Check name='enabled' className='mb-3'
                            type='checkbox'
                            label="Enabled"
                            defaultChecked={data?.enabled}
                        />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Roles</Form.Label>
                            {
                                roles?.map(role => <Form.Check
                                    key={role.id} name='roles[]' defaultChecked={hasRole(role.name)}
                                    type='checkbox' label={role.name} value={role.id} 
                                    />)
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
 
export default AdminEditModal;