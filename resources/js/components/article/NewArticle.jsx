import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Blog from '../Blog';
import Util from '../utility';
import ArticleEditor from './ArticleEditor';

const NewArticle = ({ httpClient }) => {
    const blogRef = useRef();
    const queryClient = useQueryClient();

    // const { isLoading, error, response } = useQuery('newArticleData', () =>
    //     httpClient.post('/api/article/create'),{ 
    //         refetchOnWindowFocus: false 
    //     }
    // );

    const blog = new Blog(0);
    const uploadBanner = e => {
        console.log(e.target.value);
    }

    // if (isLoading) return <h3>Loading...</h3>

    // if (error) return 'An error has occurred: ' + error?.message

    return ( 
        <Row className='mx-0'>
            <Col sm={8} className='px-1 blog-side pt-5' ref={blogRef}>
                <div>
                    <ArticleEditor httpClient={httpClient} />
                </div>
            </Col>
            <Col sm={4} className='border-start border-secondary p-1' id='right-side'>
                <Form.Control name='title' className='mb-3 fs-4' as='textarea' defaultValue="Blog Title..." maxLength={100} required />
                <div className='blog-banner mb-3'>
                    <Form.Control type='file' accept='image/jpg, image/png, image/jpeg' className='d-none' id='banner' onChange={uploadBanner} />
                    <label htmlFor='banner'>upload banner</label>
                </div>
                <Form.Control name='meta_title' className='mb-3' as='textarea' maxLength={160} defaultValue="Meta Title..." required />

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Categories</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                 <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Tags</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
            </Col>
        </Row>
     );
}
 
export default NewArticle;