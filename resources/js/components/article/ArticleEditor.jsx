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
                    removePlugins: [],
                    wordCount: {
                        showWordCount: true,
                        showCharCount: false,
                        onUpdate: stats => {
                            handleWordCount(stats.words);
                        }
                    }
                } }
                editor={Editor}
                data={content ?? ""}
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                     editor.editing.view.change((writer) => {
                        writer.setStyle(
                            "height",
                            "85vh",
                            editor.editing.view.document.getRoot()
                        );
                    });
                } }
                onChange={ ( event, editor ) => {
                    
                } }
                onBlur={ ( event, editor ) => {
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