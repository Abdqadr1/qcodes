import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const ArticleEditor = ({ httpClient }) => {
    let isChanged = false;

    const handleChange = e => {
        isChanged = true;
    }

    const handleBlur = (e) => {
        if (isChanged) {
            isChanged = false;

            console.log('handling blur event...', e.getData());
        } else {
            console.log('hasnt changed since...')
        }
    }


    return ( 
        <>
            <CKEditor
                    editor={ InlineEditor }
                    data="<p>Start typing...</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        handleChange();
                    } }
                    onBlur={ ( event, editor ) => {
                        handleBlur(editor);
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
        </>
     );
}
 
export default ArticleEditor;