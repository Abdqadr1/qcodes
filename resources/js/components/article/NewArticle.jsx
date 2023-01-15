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
            <Col sm={9} className='px-1 blog-side' ref={blogRef}>
                <div className='blog-banner'>
                    <Form.Control name='bio' className='mb-3 fs-3' as='textarea' defaultValue="Blog Title Here..." required />
                    <Form.Control type='file' accept='image/jpg, image/png, image/jpeg' className='d-none' id='banner' onChange={uploadBanner} />
                    <label htmlFor='banner'>upload banner</label>
                </div>
                <ArticleEditor httpClient={httpClient} />
            </Col>
            <Col sm={3} className='border-start border-secondary px-0'>
                <div className='side-flex'>
                </div>
            </Col>
        </Row>
     );
}
 
export default NewArticle;