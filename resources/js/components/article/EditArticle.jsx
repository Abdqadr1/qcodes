import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Blog from '../Blog';
import Util from '../utility';
import ArticleEditor from './ArticleEditor';
import Autocompletion from './Autocompletion';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const EditArticle = ({ httpClient }) => {
    const { id } = useParams();
    const [isFirstFetch, setFirstFetch] = useState(true);

    const [categories, setCategories] = useState({isError: false, data:[], errorMessage: ""});
    const [tags, setTags] = useState({ isError: false, data: [], errorMessage: "" });
    const [parent, setParent] = useState({ isError: false, data: null, errorMessage: "" });
    const [toast, setToast] = useState({ show: false, message: "", action: null, severity: 'success' });
    const [form, setForm] = useState({});
    const [content, setContent] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [backdropOpen, setBackdropOpen] = useState(false);
    const [isPublished, setPublished] = useState(false);
    const [banner, setBanner] = useState('');
    const bannerRef = useRef();

    const navigate = useNavigate();

    const { isLoading } = useQuery('articleData', () =>
        httpClient.post(`/api/article/edit/${id}`),
        {
            refetchOnWindowFocus: false ,
            onSuccess: (data) => {
                const { categories, tags, parent, title, meta_title, content, summary, is_published, banner } = data.data;    
                setContent(content);  
                setCategories(s => ({ ...s, data: categories }));         
                setTags(s => ({ ...s, data: tags }));         
                setParent(s => ({ ...s, data: parent ?? parent?.id }));         
                setForm(s => ({ ...s, title, meta_title, summary }));   
                setFirstFetch(false);         
                setPublished(is_published);
                setBanner(banner);
            },
            onError: error => {
                const response = error?.response;
                Util.checkAuthError(response?.status, navigate);
                const message = response?.data?.message ?? "An error occurred";
                setToast(s => ({ ...s, show: true, message, severity: 'error' }));
            }
        }
    );
    
    const { mutate } =
        useMutation((formData) => httpClient.post(`/api/article/create`, formData), {
            retry: false,
            onSuccess: (data) => {
                setToast(s => ({ ...s, show: true, message: "Saved!", severity: 'success' }));
                setBackdropOpen(false);          
            },
            onError: error => {
                const response = error?.response;
                Util.checkAuthError(response?.status, navigate);
                const message = response?.data?.message ?? "An error occurred";
                setToast(s => ({ ...s, show: true, message, severity: 'error' }));
                setBackdropOpen(false);
            }
        });

    const { isLoading:publishLoading, mutate: publishMutate } =
        useMutation((formData) => {
            let url;
            if (isPublished) url = `/api/article/unpublish/${id}`;
            else url = `/api/article/publish`;
            return httpClient.post(url, formData)
        }, {
            onSuccess: () => {
                const message = isPublished ? "Unpublished!" : "Published!";
                setToast(s => ({ ...s, show: true, message, severity: 'success' }));
                setBackdropOpen(false);
                setPublished(!isPublished);
            },
            onError: error => {
                const response = error?.response;
                Util.checkAuthError(response?.status, navigate);
                const message = response?.data?.message ?? "An error occurred";
                setToast(s => ({ ...s, show: true, message, severity: 'error' }));
                setBackdropOpen(false);
            }
        });

    const { isLoading:bannerLoading, mutate: bannerMutate } =
        useMutation((formData) => httpClient.post('/api/article/upload/banner', formData),
         {
            onSuccess: data => {
                 setBanner(data.data.url);
            },
            onError: error => {
                const response = error?.response;
                Util.checkAuthError(response?.status, navigate);
                const message = response?.data?.message ?? "An error occurred";
                setToast(s => ({ ...s, show: true, message, severity: 'error' }));
                setBanner('');
            }
        });


    const handleInput = e => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setForm(s => ({ ...s, [name]: value }));
    }

    const initFormData = (c) => {
        c = c ? c : content;
        const formData = new FormData();
        formData.set('content', c);

        formData.set('id', id);
        formData.set('banner', banner);

        if (tags.data.length > 0) {
            tags.data.forEach(data => formData.append('tags[]', data.id));
        }

        if (categories.data.length > 0) {
            categories.data.forEach(data => formData.append('categories[]', data.id));
        }

        if (parent?.data?.id) {
            formData.append('parent_id', parent.data?.id);
        }

        Util.listFormData(form, formData);
        return formData;
    }

    const handleChange = c => {
        if (isFirstFetch) return;
        if (c === content) return; 
        if (!form?.title) return;
        setContent(c);
        mutate(initFormData(c))
    }

    const saveChanges = () => {
        setBackdropOpen(true);
        mutate(initFormData());
    }
    
    const uploadBanner = event => {
        const input = event.target;
        const file = input.files[0];
        const show = e => bannerRef.current.src = e;
        const formData = new FormData();
        formData.set('upload', file);
        const mutate = () => bannerMutate(formData);
        Util.showImage(file, show, setToast, mutate);
    }

    const handlePublish = e => {
         if (wordCount < Blog.wordLimit) {
            return setToast(s => ({ ...s, show: true, message: `Minimum word count is ${Blog.wordLimit}`, severity: 'error' }));
        }
        if (!(form?.title && form?.meta_title && form?.summary)) {
            setToast(s => ({ ...s, show: true, message: 'Title and Meta title is required', severity: 'error' }));
            return;
        }
        if (categories?.data.length === 0) {
            setCategories(s => ({ ...s, isError: true, errorMessage: 'Choose categories' }));
            return;
        }
        if (tags?.data.length === 0) {
            setTags(s => ({ ...s, isError: true, errorMessage: 'Choose tags' }));
            return;
        }
        setBackdropOpen(true);
        publishMutate(initFormData());
    }

    return ( 
        <Row className='mx-0'>
            <Col sm={8} className='px-1 blog-side pt-5'>
                <div>
                    <ArticleEditor handleChange={handleChange} content={content} handleWordCount={c => setWordCount(c)} />
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
                    <img alt='article banner' ref={bannerRef} src={banner} />
                    {(bannerLoading) ? <CircularProgress className='loading' color="inherit" /> : ''}
                    
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

                <TextField className='mb-3 fs-4' onInput={handleInput}
                    name='summary' value={form?.summary ?? ''} 
                    id="outlined-textarea"
                    label="Summary"
                    placeholder="Summary..."
                    rows={3}
                    fullWidth 
                    multiline
                />

                <Stack spacing={3} className='mb-3'>
                    <Autocompletion info={categories} name='Categories' httpClient={httpClient} setData={setCategories} />
                    <Autocompletion info={tags} name='Tags' httpClient={httpClient} setData={setTags} />
                    <Autocompletion info={parent} name='Parent' httpClient={httpClient} setData={setParent} />
                    
                </Stack>
                <Stack direction="row" spacing={2} 
                    justifyContent="center"
                    alignItems="center" my={3}>
                    <Button disabled={isLoading || publishLoading} variant="contained"
                        color="info" onClick={saveChanges}
                    >Save Changes</Button>
                    <Button disabled={isLoading || publishLoading} variant="contained"
                        color={isPublished ? "warning" : 'success'} onClick={handlePublish}
                    >{ isPublished ? "Unpublish" : "Publish"}</Button>
                </Stack>
                <Snackbar
                    open={toast.show}
                    autoHideDuration={3000}
                    onClose={() => setToast(s=> ({...s, show:false}) )}
                    anchorOrigin={
                        {
                            vertical: toast?.severity ==='success' ? 'bottom' : 'top',
                            horizontal: toast?.severity ==='success' ? 'left' : 'center',
                        }}
                >
                    <Alert
                        onClose={() => setToast(s=> ({...s, show:false}) )}
                        severity={toast?.severity} sx={{ width: '100%' }}
                    >
                        {toast.message}
                    </Alert>
                </Snackbar>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={backdropOpen || isLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Col>
        </Row>
     );
}
 
export default EditArticle;