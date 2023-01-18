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
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';

const NewArticle = ({ httpClient }) => {
    const [categories, setCategories] = useState({isError: false, data:[], errorMessage: ""});
    const [tags, setTags] = useState({ isError: false, data: [], errorMessage: "" });
    const [articleId, setArticleId] = useState(null);
    const [toast, setToast] = useState({ show: false, message: "Draft Saved!", action: null });
    const [form, setForm] = useState({});

    const { isLoading, mutate, isError, data: response } =
        useMutation((formData) => httpClient.post(`/api/article/create`, formData), {
            onSuccess: (data) => {
                console.log(data);
            },
            onError: error => {
                const response = error?.response;
                const message = response?.data?.message ?? "An error occurred";
                console.info(message);
            }
        });


    const handleInput = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm(s => ({ ...s, [name]: value }));
    }

    const handleChange = content => {
        const formData = new FormData();
        Util.listFormData(form, formData);
        formData.set('content', content);
    }
    
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
            <Col sm={8} className='px-1 blog-side pt-5'>
                <div>
                    <ArticleEditor httpClient={httpClient} handleChange={handleChange} />
                </div>
            </Col>
            <Col sm={4} className='border-start border-secondary p-1' id='right-side'>
                <TextField className='mb-3 fs-4' onInput={handleInput}
                    name='title' value={form?.title ?? ''} 
                    id="outlined-textarea"
                    label="Title"
                    placeholder="Blog Title..."
                    rows={3}
                    fullWidth 
                    multiline
                />
                <div className='blog-banner mb-3'>
                    <IconButton color="primary" aria-label="upload picture" component="label">
                        <input hidden accept="image/*" type="file" onChange={uploadBanner} />
                        <PhotoCamera />
                    </IconButton>
                </div>
                <TextField className='mb-3 fs-4' onInput={handleInput}
                    name='meta_title' value={form?.meta_title ?? ''} 
                    id="outlined-textarea"
                    label="Meta Title"
                    placeholder="Meta Title..."
                    rows={3}
                    fullWidth 
                    multiline
                />

                <Stack spacing={3} className='mb-3'>
                    <Autocompletion info={categories} name='Categories' httpClient={httpClient} setData={setCategories} />
                    <Autocompletion info={tags} name='Tags' httpClient={httpClient} setData={setTags} />
                    
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Button disabled={isLoading} variant="contained"
                        color="success" onClick={handlePublish}
                    >Publish</Button>
                </Stack>
                <Snackbar
                    open={toast.show}
                    autoHideDuration={2000}
                    onClose={() => setOpen(s=> ({...s, show:false}) )}
                    message={toast.message}
                    action={toast?.action}
                />
            </Col>
        </Row>
     );
}
 
export default NewArticle;