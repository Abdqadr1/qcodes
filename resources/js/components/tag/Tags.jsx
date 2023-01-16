import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import TagEditModal from './TagEdit';
import TagCreateModal from './TagCreate'

const Tags = ({ httpClient }) => {
    const [edit, setEdit] = useState({ show: false, data: {} });
    const [create, setCreate] = useState(false);
    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery('tagData', () =>
        httpClient.get('/api/tag/all'),{ 
            refetchOnWindowFocus: false 
        }
    );
    const pageMutation = useMutation(url => httpClient.get(url), {
        onSuccess: data => {
            queryClient.setQueryData('tagData', data);
        },
        onError: error => {
            const response = error?.response;
            const message = response?.data?.message ?? "An error occurred";
            console.info(message);
        }
    });

    const deleteMutation = useMutation(id => httpClient.delete(`/api/tag/delete/${id}`), {
        onSuccess: (data, id) => {
            queryClient.setQueryData('tagData', oldData => {
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

    const showCreateModal = () => {
        setCreate(true);
    }
    
    if (isLoading || pageMutation.isLoading) return <b>Loading...</b>;

    if (error) return 'An error has occurred: ' + error.message

    return ( 
        <div className='p-4'>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header py-3 d-flex justify-content-between align-items-center">
                            <h6>Tags</h6>
                            <Button onClick={showCreateModal} variant="primary" size="sm">New Tag</Button>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Meta Title</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Content</th>
                                        <th className="text-secondary opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            data.data.data.map(
                                                tag => <tr key={tag.id}>
                                                    <td>
                                                        <p>{ tag.name }</p>
                                                    </td>
                                                    <td style={{ maxWidth: '150px'}}>
                                                        <p className="text-xs font-weight-bold mb-0">{tag.meta_title}</p>
                                                    </td>
                                                    <td className="" style={{ maxWidth: '150px'}}>
                                                        <span className="">{tag.content}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Button size="sm" onClick={() => setEdit(s => ({ ...s, show: true, data: tag }))}
                                                            variant="secondary">Edit</Button>
                                                        {' '}
                                                        <Button onClick={()=>handleDelete(tag.id)} variant="danger" size="sm">Delete</Button>
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
            <TagEditModal edit={edit} setEdit={setEdit} httpClient={httpClient} />
            <TagCreateModal show={create} setCreate={setCreate} httpClient={httpClient} />
        </div>
     );
}
 
export default Tags;