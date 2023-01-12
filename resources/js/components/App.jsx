import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import NavBar from './NavBar';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';

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
