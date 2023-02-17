import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Box from '@mui/material/Box';

const ViewMessageModal = ({ view, setView }) => {
    const handleClose = () => setView(s => ({ ...s, show: false }));
    const data = view.data;


    return ( 
        <>
            <Modal
                show={view.show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>View Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Box sx={{}}>
                        <h6 className='text-muted mb-1'>Name</h6>
                        <p className='fs-5'>{data?.name}</p>

                        <h6 className='text-muted mb-1'>Email</h6>
                        <p className='fs-5'>
                            <a className='text-decoration-none' href={`mailto:${data?.email}`}>{ data?.email }</a>
                        </p>

                        <h6 className='text-muted mb-1'>About</h6>
                        <p className='fs-5'>{data?.about}</p>

                        <h6 className='text-muted mb-1'>Message</h6>
                        <p className=''>{ data?.message }</p>
                    </Box>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default ViewMessageModal;