import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import ArticlePreview from './ArticlePreview';

function Preview() {

    const queryClient = new QueryClient()

    axios.get('/sanctum/csrf-cookie').then(() => {
        // Login...
    });

    const http = axios.create({
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
    });


    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path='/article/:slug/preview' element={<ArticlePreview httpClient={http} />} />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default Preview;

if (document.getElementById('preview')) {
    const Index = ReactDOM.createRoot(document.getElementById("preview"));

    Index.render(
        <React.StrictMode>
            <Preview/>
        </React.StrictMode>
    )
}
