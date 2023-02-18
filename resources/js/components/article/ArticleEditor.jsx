import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';


const ArticleEditor = ({ handleChange, content, handleWordCount }) => {

    const change = (e) => {
        handleChange(e.getData());
    }


    return ( 
        <>
            <CKEditor
                config={{
                    placeholder: "Start typing...",
                    wordCount: {
                        showWordCount: true,
                        showCharCount: false,
                        onUpdate: stats => {
                            handleWordCount(stats.words);
                        }
                    },
                    simpleUpload: {
                        // The URL that the images are uploaded to.
                        uploadUrl: '/api/article/upload/image',
                        withCredentials: true,
                        headers: {
                            'X-Requested-With' : 'XMLHttpRequest',
                            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                        }
                    },
                    style: {
                        definitions: [
                            {
                                name: 'Code(light)',
                                element: 'pre',
                                classes: ['.ck-content pre', 'shadow bg-body-tertiary rounded p-3 mx-3 text-danger fw-bold']
                            },
                            {
                                name: 'Code(dark)',
                                element: 'pre',
                                classes: ['ck-content pre', 'dark', 'rounded p-3 mx-3 text-danger fw-bold']
                            }
                        ]
                    }
                } }
                editor={Editor}
                data={content ?? ""}
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                     editor.editing.view.change((writer) => {
                         writer.setStyle("min-height", "85vh", editor.editing.view.document.getRoot());
                        
                         writer.setStyle("font-size", "14px", editor.editing.view.document.getRoot());
                         
                         writer.setStyle("font-family", "Nunito",  editor.editing.view.document.getRoot());
                    });
                } }
                onChange={ ( event, editor ) => {
                    change(editor);
                } }
                onBlur={(event, editor) => {
                    change(editor);
                } }
                onFocus={ ( event, editor ) => {
                    // console.log( 'Focus.', editor );
                } }
                />
        </>
     );
}
 
export default ArticleEditor;