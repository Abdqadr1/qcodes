import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from './paginate';
import React, { useState } from "react";
import AdminEditModal from './AdminEdit';
import Button from 'react-bootstrap/Button';


const Admin = ({ httpClient }) => {
    const [edit, setEdit] = useState({ show: false, data: {} });

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery('adminData', () =>
        httpClient.get('/api/admin/all'),{ 
            refetchOnWindowFocus: false 
        }
    );

    const mutation = useMutation(url => httpClient.get(url), {

        onSuccess: data => {

            queryClient.setQueryData('adminData', data);

        },

    })

    const handleDelete = e => {
        confirm("Are you sure?");
    }


    if (isLoading || mutation?.loading) return <b>Loading...</b>;

    if (error) return 'An error has occurred: ' + error.message

    return ( 
        <div className='p-4'>
            <div className="row">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                            <h6>Admins table</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                            <div className="table-responsive p-0">
                                <table className="table align-items-center mb-0">
                                <thead>
                                    <tr>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                        <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Roles</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                                        <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Last Login</th>
                                        <th className="text-secondary opacity-7">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            data.data.data.map(
                                                admin => <tr key={admin.id}>
                                                    <td>
                                                        <div className="d-flex px-2 py-1">
                                                        <div>
                                                            <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1"/>
                                                        </div>
                                                        <div className="d-flex flex-column justify-content-center">
                                                            <h6 className="mb-0 text-sm">{`${admin.first_name} ${admin.last_name}`}</h6>
                                                            <p className="text-xs text-secondary mb-0">{admin.email}</p>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-xs font-weight-bold mb-0">Manager</p>
                                                        <p className="text-xs text-secondary mb-0">Organization</p>
                                                    </td>
                                                    <td className="align-middle text-center text-sm">
                                                        <span className="">{admin.enabled ? "Enabled" : "Disabled"}</span>
                                                    </td>
                                                     <td className="align-middle text-center">
                                                        <span className="text-secondary text-xs font-weight-bold">{admin.last_login_at}</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <Button size="sm" onClick={() => setEdit(s => ({ ...s, show: true, data: admin }))}
                                                            variant="secondary">Edit</Button>
                                                        {' '}
                                                        <Button onClick={()=>handleDelete()} variant="danger" size="sm">Delete</Button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                   </tbody>
                                </table>
                            </div>
                            {/* pagination */}
                            <Pages
                                links={data.data.links} mutation={mutation}
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
            <AdminEditModal edit={edit} setEdit={setEdit} />
        </div>
     );
}
 
export default Admin;