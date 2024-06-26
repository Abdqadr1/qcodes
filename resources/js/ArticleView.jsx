import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditorStyle from './components/article/EditorStyle';

function ArticleView() {
    const article = window?.article;

    return (
        <>
            <Row className='mx-0 justify-content-center mt-5'>
                <Col sm={10} className='px-1'>
                    <div className='title mb-5'>
                        <h1 className='title mb-5'>{article?.title ?? ""}</h1>
                        <div className='mb-3'>
                            Last Modified: {new Date(article?.updated_at).toDateString()}
                        </div>
                        <div className='border-start border-secondary d-flex p-2 border-3 justify-content-md-between align-items-md-center flex-column flex-md-row'>
                            <span>by <em className='text-success'>{`${article?.author.first_name} ${article?.author?.last_name}`}</em></span>
                            <div className='mt-3 mt-md-0'>
                                {
                                    article?.tags.map(tag => (
                                        <a key={tag.id} href={`/tags/${tag.slug}`} className='btn btn-secondary text-light fw-bold rounded-0 ms-1'>{ tag.name }</a>
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
                        data={article.content ?? ""}
                        disabled={true}
                        onReady={ editor => {
                            // You can store the "editor" and use when it is needed.
                            editor.editing.view.change((writer) => {
                                writer.setStyle("height", "auto",editor.editing.view.document.getRoot());
                                writer.setStyle("font-size", "16px", editor.editing.view.document.getRoot());
                            });
                        } }
                    />
                </Col>
            </Row>
        </>
    );
}

export default ArticleView;

