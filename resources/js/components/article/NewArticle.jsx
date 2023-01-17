import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { useRef, useState } from "react";
import Blog from '../Blog';
import Util from '../utility';
import ArticleEditor from './ArticleEditor';
import Autocompletion from './Autocompletion';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const NewArticle = ({ httpClient }) => {
    const [categories, setCategories] = useState({isError: false, data:[], errorMessage: ""});
    const [tags, setTags] = useState({isError: false, data:[], errorMessage: ""});
    const blogRef = useRef();

    const blog = new Blog(0);
    const uploadBanner = e => {
        console.log(e.target.value);
    }

    const handlePublish = e => {
        if (categories.data.length === 0) {
            setCategories(s => ({ ...s, isError: true, errorMessage: 'Choose categories' }));
            return;
        }
        if (tags.data.length === 0) {
            setTags(s => ({ ...s, isError: true, errorMessage: 'Choose tags' }));
            return;
        }
        console.log('publishing...');
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
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" onChange={uploadBanner} />
                        <PhotoCamera />
                    </IconButton>
                </div>
                <Form.Control name='meta_title' className='mb-3' as='textarea' maxLength={160} defaultValue="Meta Title..." required />

                <Stack spacing={3} className='mb-3'>

                    <Autocompletion info={categories} name='Categories' httpClient={httpClient} setData={setCategories} />
                    <Autocompletion info={tags} name='Tags' httpClient={httpClient} setData={setTags} />

                    
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success" onClick={handlePublish}>Publish</Button>
                </Stack>
            </Col>
        </Row>
     );
}
 
export default NewArticle;