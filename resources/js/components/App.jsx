import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Admin from './admin/Admin';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';
import MyArticles from './article/MyArticles';
import NewArticle from './article/NewArticle';
import EditArticle from './article/EditArticle';
import Categories from './category/Categories';
import Tags from './tag/Tags';
import AdminLogin from './auth/Login';
import AdminRegistration from './auth/Registration';
import Profile from './auth/Profile';
import AllArticles from './article/AllArticles';
import ForgotPassword from './auth/ForgotPassword';
import ChangePassword from './auth/ChangePassword';
import ConfirmEmailAddress from './auth/ConfirmEmailAddress';
import Notification from './notification/Notification';
import Messages from './messages/Messages';
import MaterialNavbar from './MaterialNavbar';
import { Toolbar } from '@mui/material';
import AdminDashboard from './auth/Dashboard';
import AdminLogout from './auth/Logout';

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
                    
                    <div className="react-body" >
                        <Routes>
                            <Route
                                element={(<>
                                    <MaterialNavbar httpClient={http} />
                                    <Toolbar />
                                    <Outlet />
                                </>)} 
                            >
                                <Route path='/admin' element={<Admin httpClient={http} />} />
                                <Route path='/admin/profile' element={<Profile httpClient={http} />} />
                                <Route path='/admin/categories' element={<Categories httpClient={http} />} />
                                <Route path='/admin/tags' element={<Tags httpClient={http} />} />
                                <Route path='/admin/article/all' element={<AllArticles httpClient={http} />} />
                                <Route path='/admin/articles' element={<MyArticles httpClient={http} />} />
                                <Route path='/admin/article/new' element={<NewArticle httpClient={http} />} />
                                <Route path='/admin/article/edit/:id' element={<EditArticle httpClient={http} />} />
                                <Route path='/admin/notification' element={<Notification httpClient={http} />} />
                                <Route path='/admin/messages' element={<Messages httpClient={http} />} />
                                <Route path='/admin/dashboard' element={<AdminDashboard httpClient={http} />} />

                                <Route path='/admin/login' element={<AdminLogin httpClient={http} />} />
                                <Route path='/admin/signup' element={<AdminRegistration httpClient={http} />} />


                            </Route>
                            <Route path='/admin/forgotpassword' element={<ForgotPassword httpClient={http} />} />
                            <Route path='/admin/changepassword/:token' element={<ChangePassword httpClient={http} />} />
                            <Route path='/admin/confirm' element={<ConfirmEmailAddress httpClient={http} />} />
                            <Route path='/admin/logout' element={<AdminLogout httpClient={http} />} />
                            <Route path='*' element={<h4>404: Not Found</h4>} />
                        </Routes>
                    </div>
                    
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
