import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Util from '../utility';

const MyArticles = ({ httpClient }) => {
    const [edit, setEdit] = useState({ show: false, data: {} });
    
    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery('articleData', () =>
        httpClient.get('/api/article/all'),{ 
            refetchOnWindowFocus: false 
        }
    );

    const pageMutation = useMutation(url => httpClient.get(url), {
        onSuccess: data => {
            queryClient.setQueryData('articleData', data);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

     const deleteMutation = useMutation(id => httpClient.delete(`/api/article/delete/${id}`), {
        onSuccess: (data, id) => {
            queryClient.setQueryData('articleData', oldData => {
                const list = oldData.data.data;
                const index = list.findIndex(l => l.id === id);
                list.splice(index, 1);
                return oldData;
            });
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
     });

      const handleDelete = id => {
        if (confirm("Are you sure?")) {
            deleteMutation.mutate(id);
        }
    }

     
    if (isLoading || pageMutation.isLoading) return <b>Loading...</b>;

    if (error) return 'An error has occurred: ' + error.message

    return ( 
         <div className='p-4'>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header py-3 d-flex justify-content-between align-items-center">
                            <h6>Articles table</h6>
                            <Button href='/admin/article/new' color='secondary'
                                variant="contained" size="small">New Article</Button>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Title</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Summary</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Published</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Slug</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Visit</th>
                                        <th className="text-secondary opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            data.data.data.map(
                                                article => <tr key={article.id}>
                                                    <td style={{ maxWidth: '150px'}}>
                                                        <p className=''>{Util.ellipsis(article.title)}</p>
                                                    </td>
                                                     <td className="align-middle text-start" style={{ maxWidth: '150px'}}>
                                                        <span className="text-secondary text-xs font-weight-bold">{Util.ellipsis(article.summary)}</span>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="">{article.is_published ? "Published" : "Unpublished"}</span>
                                                    </td>
                                                    <td className='align-middle text-start' style={{ maxWidth: '150px'}}>
                                                        <p className="text-xs font-weight-bold mb-0">{Util.ellipsis(article.slug)}</p>
                                                    </td>
                                                    <td className='align-middle text-start' style={{ maxWidth: '150px' }}>
                                                        <p className="text-xs font-weight-bold mb-0">{article.visit}</p>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Button size='small' variant="outlined"
                                                            onClick={() => setEdit(s => ({ ...s, show: true, data: article }))}
                                                            >Edit</Button>
                                                        {' '}
                                                        <Button variant="outlined" size='small' color='error'
                                                            onClick={() => handleDelete(article.id)} 
                                                        >Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                   </tbody>
                                </table>
                            </div>
                            {/* pagination */}
                            <Pages
                                links={data.data.links} mutation={pageMutation}
                                from={data.data.from} perPage={data.data.per_page}
                                total={data.data.total} lastPage={data.data.last_page}
                                firstPageUrl={data.data.first_page_url} lastPageUrl={data.data.last_page_url}
                                prevPageUrl={data.data.prev_page_url} nextPageUrl={data.data.next_page_url}
                                to={data.data.to} currentPage={data.data.current_page}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MyArticles;