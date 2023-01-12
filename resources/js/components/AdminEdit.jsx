import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AdminEditModal = ({ edit, setEdit }) => {
    const handleClose = () => setEdit(s => ({ ...s, show: false }));
    const data = edit.data;

    const handleSubmit = e => {
        e.preventDefault();
        console.log(new FormData(e.target));
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
                    <Modal.Title>Edit Admin (ID: { data.id })</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control name="first_name" className='mb-3' type="text" placeholder="First Name" required />
                        <Form.Control name="last_name" className='mb-3' type="text" placeholder="Last Name" required />
                        <Form.Control name="email" className='mb-3' type="email" placeholder="Enter email" required />
                        <Form.Control name="mobile" className='mb-3' type="tel" placeholder="Phone Number" required />

                        <Form.Check name='enabled' className='mb-3'
                            type='checkbox'
                            label="Enabled"
                        />

                        <Form.Control name='bio' className='mb-3' as="textarea" rows={3} placeholder="Bio" required />
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default AdminEditModal;