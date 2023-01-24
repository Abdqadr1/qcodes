import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import NavBar from './NavBar';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyArticles from './article/MyArticles';
import NewArticle from './article/NewArticle';
import EditArticle from './article/EditArticle';
import Categories from './category/Categories';
import Tags from './tag/Tags';
import AdminLogin from './auth/Login';
import AdminRegistration from './auth/Registration';

function App() {

    const queryClient = new QueryClient()

    axios.get('/sanctum/csrf-cookie').then(response => {
        // Login...
    });

    const http = axios.create({
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'X-Requested-With' : 'XMLHttpRequest'
        }
    })


    return (
        <BrowserRouter>
            <div>
                <QueryClientProvider client={queryClient}>
                    <NavBar />
                    <Routes>
                        <Route path='/admin' element={<Admin httpClient={http} />} />
                        <Route path='/admin/login' element={<AdminLogin httpClient={http} />} />
                        <Route path='/admin/signup' element={<AdminRegistration httpClient={http} />} />
                        <Route path='/admin/categories' element={<Categories httpClient={http} />} />
                        <Route path='/admin/tags' element={<Tags httpClient={http} />} />
                        <Route path='/admin/articles' element={<MyArticles httpClient={http} />} />
                        <Route path='/admin/article/new' element={<NewArticle httpClient={http} />} />
                        <Route path='/admin/article/edit/:id' element={<EditArticle httpClient={http} />} />
                        <Route path='*' element={<h4>404: Not Found</h4>} />
                    </Routes>
                </QueryClientProvider>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('react')) {
    const Index = ReactDOM.createRoot(document.getElementById("react"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
