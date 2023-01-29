import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import React, { useRef, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import Blog from './Blog';
import Util from './utility';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ArticlePreview = ({ httpClient }) => {
    const { slug } = useParams();
    console.log(slug);
    const [toast, setToast] = useState({ show: false, message: "", action: null, severity: 'error' });

    const navigate = useNavigate();

    const { isLoading, data } = useQuery('articlePreviewData', () =>
        httpClient.post(`/api/article/preview/${slug}`),
        {
            refetchOnWindowFocus: false ,
            onSuccess: (data) => {
                console.log(data);
            },
            onError: error => {
                const response = error?.response;
                Util.checkAuthError(response?.status, navigate);
                const message = response?.data?.message ?? "An error occurred";
                setToast(s => ({ ...s, show: true, message, severity: 'error' }));
            }
        }
    );

      if (isLoading ) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );

    return (
        <div className='body'>
            <p className='preview'>Preview</p>
            <Row className='mx-0'>
                <Col sm={12} className='px-1'>
                    <div className='blog-banner'>
                        <img alt={data?.data?.title} src={data?.data?.banner ?? ""} />
                        <div className='title'>
                            <h1 className='title'>{data?.data?.title ?? ""}</h1>
                        </div>
                    </div>
                    <CKEditor
                        config={{}}
                        editor={Editor}
                        data={data?.data?.content ?? ""}
                        disabled={true}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            editor.editing.view.change((writer) => {
                                writer.setStyle(
                                    "height",
                                    "auto",
                                    editor.editing.view.document.getRoot()
                                );
                            });
                        } }
                    />
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
                            // onClose={() => setToast(s=> ({...s, show:false}) )}
                            severity={toast?.severity} sx={{ width: '100%' }}
                        >
                            {toast.message}
                        </Alert>
                    </Snackbar>
                </Col>
            </Row>
        </div>
     );
}
 
export default ArticlePreview;