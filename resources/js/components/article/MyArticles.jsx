import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Util from '../utility';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};

const MyArticles = ({ httpClient }) => {
    const [edit, setEdit] = useState({ show: false, data: {} });
    const [keyword, setKeyword] = useState('');
    
    const queryClient = useQueryClient();

    const { isFetching, error, data, refetch } = useQuery('articleData', () =>
        httpClient.get(`/api/article/all?keyword=${keyword}`),{ 
            refetchOnWindowFocus: false 
        }
    );

    const pageMutation = useMutation(url => httpClient.get(`${url}&keyword=${keyword}`), {
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

     const handleSearch = e => {
        refetch({ throwOnError: true, cancelRefetch: true });
    }

     
    if (isFetching || pageMutation.isLoading) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );

    if (error) return 'An error has occurred: ' + error.message

    return ( 
         <div className='p-4'>
            <div className="row">
                <div className="col-12">
                    <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        sx={{ width: '100%' }}
                        mt={3} mb={5}
                    >
                        <ThemeProvider theme={theme}>
                            <Typography variant="h3">Search Articles: </Typography>
                        </ThemeProvider>
                        <TextField
                            id="outlined-name"
                            label="Keyword"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            size="small"
                        />
                        <Button variant="outlined" color='primary' 
                            endIcon={<SearchIcon />} onClick={handleSearch}
                            >Search</Button>
                        <Button variant="outlined" color="error" 
                            endIcon={<ClearIcon />} onClick={e=>setKeyword('')}
                            >Clear</Button>

                    </Stack>
                    <div className="card mb-4">
                        <div className="card-header py-3 d-flex justify-content-between align-items-center">
                            <h6>Articles table</h6>
                            <Button
                                href='/admin/article/new' color='primary'
                                variant="outlined" size="small"
                                endIcon={<AddIcon />}
                            >New Article</Button>
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
                                                        href={`/admin/article/edit/${article.id}`}
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