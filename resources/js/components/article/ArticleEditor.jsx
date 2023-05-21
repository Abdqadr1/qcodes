import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build';
import EditorStyle from './EditorStyle';


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
                    style: EditorStyle,
                    codeBlock: {
                        languages: [
                            { language: 'c', label: 'C' },
                            { language: 'css', label: 'CSS' },
                            { language: 'csv', label: 'CSV' },
                            { language: 'git', label: 'Git' },
                            { language: 'html', label: 'HTML' },
                            { language: 'http', label: 'HTTP' },
                            { language: 'java', label: 'Java' },
                            { language: 'javascript', label: 'JavaScript'},
                            { language: 'json', label: 'JSON' },
                            { language: 'kotlin', label: 'Kotlin' },
                            { language: 'markdown', label: 'Markdown' },
                            { language: 'php', label: 'PHP' },
                            { language: 'plaintext', label: 'Plain text'},
                            { language: 'properties', label: 'Properties'},
                            { language: 'python', label: 'Python' },
                            { language: 'ruby', label: 'Ruby' },
                            { language: 'scss', label: 'SCSS' },
                            { language: 'sql', label: 'SQL' },
                            { language: 'typescript', label: 'TypeScript' },
                            { language: 'xml', label: 'XML' },
                            { language: 'yaml', label: 'YAML' },
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
                         
                         writer.setStyle("font-family", "Overpass", editor.editing.view.document.getRoot());
                         
                         writer.setStyle("margin", "2em 0",  editor.editing.view.document.getRoot());
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