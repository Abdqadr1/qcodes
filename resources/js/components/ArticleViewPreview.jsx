import React from 'react';
import ReactDOM from 'react-dom/client';
import ArticleView from '../ArticleView';
import ArticlePreview from './ArticlePreview';



if (document.getElementById('preview')) {
    const Index = ReactDOM.createRoot(document.getElementById("preview"));

    Index.render(
        <React.StrictMode>
            <ArticlePreview/>
        </React.StrictMode>
    )
}


if (document.getElementById('view')) {
    const Index = ReactDOM.createRoot(document.getElementById("view"));

    Index.render(
        <React.StrictMode>
            <ArticleView/>
        </React.StrictMode>
    )
}
