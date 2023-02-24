import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {  } from "react";
import MuiAlert from '@mui/material/Alert';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';
import EditorStyle from './article/EditorStyle';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ArticlePreview = ({ }) => {
    const article = window?.article;

    return (
        <div className='body'>
            <p className='preview'>Preview</p>
            <Row className='mx-0'>
                <Col sm={12} className='py-3 px-5'>
                    <div className='blog-banner'></div>
                    <div className='title mb-5'>
                        <h1 className='title mb-5'>{article?.title ?? ""}</h1>
                        <div className='mb-3'>
                            Last Modified: {new Date(article?.updated_at).toDateString()}
                        </div>
                        <div className='border-start border-secondary d-flex p-2 border-3 justify-content-between align-items-center'>
                            <span>by <em className='text-success'>{`${article?.author.first_name} ${article?.author?.last_name}`}</em></span>
                            <div>
                                {
                                    article?.tags.map(tag => (
                                        <a key={tag.id} href={`/tags/${tag.slug}`} className='btn btn-success text-light fw-bold'>{ tag.name }</a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <CKEditor
                        config={{
                            style: EditorStyle
                        }}
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