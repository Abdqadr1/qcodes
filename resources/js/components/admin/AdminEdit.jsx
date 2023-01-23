import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from '@mui/material/Alert';
import { useMutation, useQueryClient } from 'react-query';

const AdminEditModal = ({ edit, setEdit, httpClient, roles }) => {
    const [alert, setAlert] = useState({message: "", show:false})
    const handleClose = () => setEdit(s => ({ ...s, show: false }));
    const queryClient = useQueryClient();

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
            const message = error?.response?.data?.message ?? "An error occurred. Try again";
            setAlert(s => ({ ...s, show: true, message }));
        }
    });

    const data = edit.data;

    const handleSubmit = e => {
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
                        <Form.Control defaultValue={data?.first_name} name="first_name" className='mb-3' type="text" placeholder="First Name" required />
                        <Form.Control defaultValue={data?.last_name} name="last_name" className='mb-3' type="text" placeholder="Last Name" required />
                        <Form.Control defaultValue={data?.email} name="email" className='mb-3' type="email" placeholder="Enter email" required />
                        <Form.Control defaultValue={data?.mobile} name="mobile" className='mb-3' type="tel" placeholder="Phone Number" required />

                        <Form.Check name='enabled' className='mb-3'
                            type='checkbox'
                            label="Enabled"
                            defaultChecked={data?.enabled}
                        />

                        <Form.Control defaultValue={data?.bio} name='bio' className='mb-3' as="textarea" rows={3} placeholder="Bio" required />

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Roles</Form.Label>
                            {
                                roles?.map(role => <Form.Check
                                    key={role.id} name='roles[]' defaultChecked={hasRole(role.name)}
                                    type='checkbox' label={role.name} value={role.id} 
                                    />)
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