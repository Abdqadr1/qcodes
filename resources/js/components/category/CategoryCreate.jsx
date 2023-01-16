import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQueryClient } from 'react-query';


const CategoryCreateModal = ({ httpClient, show, setCreate }) => {
    const handleClose = e => setCreate(false);
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
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
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
                    <Modal.Title>New Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Control name="name" className='mb-3' type="text" placeholder="Category Name" required />

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
 
export default CategoryCreateModal;