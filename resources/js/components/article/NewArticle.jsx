import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { useRef, useState } from "react";
import Blog from '../Blog';
import Util from '../utility';
import ArticleEditor from './ArticleEditor';
import Autocompletion from './Autocompletion';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const NewArticle = ({ httpClient }) => {
    const [lastSaved, setLastSaved] = useState(null);
    const [categories, setCategories] = useState({isError: false, data:[], errorMessage: ""});
    const [tags, setTags] = useState({ isError: false, data: [], errorMessage: "" });
    const [parent, setParent] = useState({ isError: false, data: null, errorMessage: "" });
    const [toast, setToast] = useState({ show: false, message: "Draft Saved!", action: null, severity: 'success' });
    const [form, setForm] = useState({});
    const [content, setContent] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [backdropOpen, setBackdropOpen] = useState(false);

    const navigate = useNavigate();
    

    const { isLoading, mutate, data: response } =
        useMutation((formData) => httpClient.post(`/api/article/create`, formData), {
            retry: false,
            onSuccess: (data) => {
                setToast(s => ({ ...s, show: true, message: "Saved!", severity: 'success' }));
                window.history.replaceState({ articleId: data.data }, '', `/admin/article/edit/${data.data}`); 
                setBackdropOpen(false); 
                setLastSaved(Date.now());            
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
        useMutation((formData) => httpClient.post(`/api/article/publish`, formData), {
            onSuccess: () => {
                setToast(s => ({ ...s, show: true, message: "Published!", severity: 'success' }));
                setBackdropOpen(false);
                window.location = '/admin/articles';
            },
            onError: error => {
                const response = error?.response;
                Util.checkAuthError(response?.status, navigate);
                const message = response?.data?.message ?? "An error occurred";
                setToast(s => ({ ...s, show: true, message, severity: 'error' }));
                setBackdropOpen(false);
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

        if (response?.data) formData.set('id', response.data);

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
        setContent(c);
        if (lastSaved && (Date.now() - lastSaved) >= (1000 * 60 * 3) && 
            c !== content
        ) {
            setToast(s => ({
                ...s, show: true,
                message: "You haven't saved your changes in a while.",
                severity: 'warning'
            }));
        }
    }

    const saveChanges = () => {
        if (!Util.checkImagesInArticle()) {
            setToast(s => ({
                ...s,
                show: true,
                message: 'At least one of the image(s) in your article does not have a alt attribute',
                severity: 'warning',
            }));
            return;
        }
        setBackdropOpen(true);
        mutate(initFormData());
    }
    

    const handlePublish = e => {
        setCategories(s => ({ ...s, isError: false}));
        setTags(s => ({ ...s, isError: false}));
        if (!Util.checkImagesInArticle()) {
            setToast(s => ({
                ...s,
                show: true,
                message: 'At least one of the image(s) in your article does not have a alt attribute',
                severity: 'warning',
            }));
            return;
        }

        if (wordCount < Blog.wordLimit) {
            return setToast(s => ({ ...s, show: true, message: `Minimum word count is ${Blog.wordLimit}`, severity: 'error' }));
        }

        if (!(form?.title && form?.meta_title)) {
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
        <>
            <div className='d-md-none'>
                <div
                className="modal show"
                style={{ display: 'block', position: 'initial', opacity: 0.6 }}
                >
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>{"Unsupported device"}</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>This page does not support mobile view</p>
                        </Modal.Body>
                    </Modal.Dialog>
                </div>
            </div>
           
                
            <Row className='d-none d-md-flex mx-0' id="desktopView">
                <Col lg={8} className='px-1 blog-side pt-5'>
                    <div id='articleContent'>
                        <ArticleEditor content={content} handleChange={handleChange} handleWordCount={c => setWordCount(c)} />
                    </div>
                </Col>
                <Col lg={4} className='border-start border-secondary p-1 pt-0' id='right-side'>
                    <TextField className='mb-3 fs-4' onInput={handleInput}
                        name='title' value={form?.title ?? ''} 
                        id="outlined-textarea"
                        label="Title"
                        placeholder="Blog Title..."
                        minRows={2}
                        fullWidth 
                        multiline
                    />
                    <TextField className='mb-3 fs-4' onInput={handleInput}
                        name='meta_title' value={form?.meta_title ?? ''} 
                        id="outlined-textarea"
                        label="Meta Title"
                        placeholder="Meta Title..."
                        minRows={2}
                        fullWidth 
                        multiline
                    />

                    <TextField className='mb-3 fs-4' onInput={handleInput}
                        name='summary' value={form?.summary ?? ''} 
                        id="outlined-textarea"
                        label="Summary"
                        placeholder="Summary..."
                        minRows={2}
                        fullWidth 
                        multiline
                    />
                    <TextField className='mb-3 fs-4' onInput={handleInput}
                        name='meta_keywords' value={form?.meta_keywords ?? ''} 
                        id="outlined-textarea"
                        label="Keywords, comma separated"
                        placeholder="Keywords, comma separated"
                        minRows={2}
                        fullWidth 
                        multiline
                    />

                    <Stack spacing={3} className='mb-3'>
                        <Autocompletion info={parent} name='Parent' httpClient={httpClient} setData={setParent} />
                        <Autocompletion info={categories} name='Categories' httpClient={httpClient} setData={setCategories} />
                        <Autocompletion info={tags} name='Tags' httpClient={httpClient} setData={setTags} />
                        
                    </Stack>
                    <Stack className='article-sticky bgColor shadow-sm py-2' direction="row" spacing={2}
                        justifyContent="center"
                        alignItems="center" my={3}>
                        <Button disabled={isLoading || publishLoading} variant="contained"
                            color="info" onClick={saveChanges}
                        >Save Changes</Button>
                        <Button disabled={isLoading || publishLoading} variant="contained"
                            color="success" onClick={handlePublish}
                        >Publish</Button>
                    </Stack>
                    <Snackbar
                        open={toast.show}
                        autoHideDuration={2000}
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
                        open={backdropOpen}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Col>
            </Row>  
        </>
        
     );
}
 
export default NewArticle;