import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useMutation, useQueryClient } from 'react-query';

const CategoryEditModal = ({ edit, setEdit, httpClient }) => {
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
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

    const data = edit.data;

    const handleSubmit = e => {
        e.preventDefault();
        const target = e.target;
        mutate([data?.id, new FormData(target)]);
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
                        <Form.Control defaultValue={data.name} name="name" className='mb-3' type="text" placeholder="Category Name" required />

                        <Form.Control defaultValue={data.content} name='content' maxLength={100} className='mb-3' as="textarea" rows={3} placeholder="Content" required />

                        <Form.Control defaultValue={data.meta_title} name='meta_title' maxLength={150} className='mb-3' as="textarea" rows={3} placeholder="Meta Title" required />
                        
                        
                        <Button variant="primary" type="submit">
                            { isLoading ? "Loading" : "Submit" }
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default CategoryEditModal;