import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {  } from "react";
import MuiAlert from '@mui/material/Alert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ArticlePreview = ({ }) => {
    const article = window?.article;

    return (
        <div className='body'>
            <p className='preview'>Preview</p>
            <Row className='mx-0'>
                <Col sm={12} className='px-1'>
                    <div className='blog-banner'>
                        <img alt={article?.title} src={article?.banner ?? ""} />
                        <div className='title'>
                            <h1 className='title'>{article?.title ?? ""}</h1>
                        </div>
                    </div>
                    <CKEditor
                        config={{}}
                        editor={Editor}
                        data={article?.content ?? ""}
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
                </Col>
            </Row>
        </div>
     );
}
 
export default ArticlePreview;