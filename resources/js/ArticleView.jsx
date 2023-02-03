import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ArticleView() {
    const article = window?.article;

    return (
        <>
            <Row className='mx-0 justify-content-center'>
                <Col sm={10} className='px-1'>
                    <div className='blog-banner'>
                        <img alt={article?.title} src={article?.banner ?? ""} />
                        <div className='title'>
                            <h1 className='title'>{article?.title ?? ""}</h1>
                        </div>
                    </div>
                    <CKEditor
                        config={{}}
                        editor={Editor}
                        data={article.content ?? ""}
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
        </>
    );
}

export default ArticleView;

