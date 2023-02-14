import { useQuery, useMutation, useQueryClient } from 'react-query';
import Pages from '../paginate';
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Util from '../utility';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import PreviewIcon from '@mui/icons-material/Preview';
import Link from '@mui/material/Link';
import ClearIcon from '@mui/icons-material/Clear';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router';
import { IconButton } from '@mui/material';
import ArticleSearchFilter from './ArticleSearchFilter';

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MyArticles = ({ httpClient }) => {
    const [keyword, setKeyword] = useState('');
    const [filter, setFilter] = useState('');
    const [showSnackBar, setShowSnackBar] = useState(false);
    const [error, setError] = useState({});
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isFetching, data, refetch } = useQuery('articleData', () =>
        httpClient.get(`/api/my_article/all?keyword=${keyword}&filter=${filter}`),{ 
            refetchOnWindowFocus: false,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            } 
        }
    );

    const { isLoading: pageFetching, mutate: pageMutate } =
        useMutation(url => httpClient.get(`${url}&keyword=${keyword}&filter=${filter}`), {
        onSuccess: data => {
            queryClient.setQueryData('articleData', data);
        },
        onError: error => {
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
        }
    });

    const { isLoading: deleteFetching, mutate: deleteMutate } =
        useMutation(id => httpClient.delete(`/api/article/delete/${id}`), {
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
            Util.checkAuthError(response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
        }
     });

      const handleDelete = id => {
        if (confirm("Are you sure?")) {
            deleteMutate(id);
        }
    }

      const handleSearch = e => {
        e?.preventDefault();
        refetch({ throwOnError: true, cancelRefetch: true });
    }

    const handleClearSearch = e => {
        e.preventDefault();
        setKeyword(s => {
            if(s === '') handleSearch();
            return '';
        });
    }

     
    if (isFetching || pageFetching || deleteFetching) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );

    

    return ( 
         <div className='p-4'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="row mx-0 justify-content-center align-items-center g-2 mt-3 mb-5">
                        <div className="col-md-7">
                            <form className="input-group" onSubmit={handleSearch} >
                                <button title="clear Search" className="btn btn-outline-secondary d-flex align-items-center" type="button" id="clear-btn" onClick={handleClearSearch}>
                                    <ClearIcon />
                                </button>
                                <input className="form-control bg-transparent border border-secondary" placeholder="search my articles" aria-describedby="search-btn"
                                    value={keyword}
                                    onChange={e => setKeyword(e.target.value)}
                                />
                                <ArticleSearchFilter filter={filter} setFilter={setFilter} />
                                <button title="search articles" className="btn btn-outline-secondary d-flex align-items-center" type="submit" id="search-btn">
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                    </div>
                    <Card className="mb-4">
                        <CardHeader className="px-4"
                            action={
                                <Button
                                    href='/admin/article/new' color='primary'
                                    variant="outlined" size="small"
                                    endIcon={<AddIcon />}
                                    >New Article</Button>
                                }
                            title="Articles table"
                            subheader=""
                        />
                        {
                            (data.data.data.length > 0)
                                ?
                                <CardContent className="pb-2">
                                    <TableContainer>
                                        <Table aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Banner</TableCell>
                                                <TableCell>Title</TableCell>
                                                <TableCell>Summary</TableCell>
                                                <TableCell>Status</TableCell>
                                                <TableCell>Slug</TableCell>
                                                <TableCell>Visit</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                data.data.data.map(
                                                    article => <TableRow key={article.id}>
                                                        <TableCell style={{ maxWidth: '150px', paddingLeft: 0  }}>
                                                            <Avatar variant='square'
                                                                alt={Util.ellipsis(article?.title, 5)}
                                                                src={article?.banner}
                                                                sx={{ width: 100, height: 80, objectFit: 'fill'}}
                                                            >{ Util.ellipsis(article?.title, 5)}</Avatar>
                                                        </TableCell>
                                                        <TableCell style={{ maxWidth: '150px'}}>
                                                            <p className=''>{Util.ellipsis(article.title)}</p>
                                                        </TableCell>
                                                            <TableCell className="align-middle text-start" style={{ maxWidth: '150px'}}>
                                                            <span className="text-secondary text-xs font-weight-bold">{Util.ellipsis(article.summary)}</span>
                                                        </TableCell>
                                                        <TableCell>
                                                            <span className="">{article.status}</span>
                                                        </TableCell>
                                                        <TableCell style={{ maxWidth: '150px'}}>
                                                            <span>{Util.ellipsis(article.slug)}</span>
                                                        </TableCell>
                                                        <TableCell className='align-middle text-start' style={{ maxWidth: '150px' }}>
                                                            <p className='text-center'>{article.visit}</p>
                                                        </TableCell>
                                                        <TableCell className="align-top">
                                                            <Button size='small' variant="outlined"
                                                                href={`/admin/article/edit/${article.id}`}
                                                                >Edit</Button>
                                                            {' '}
                                                            <Button variant="outlined" size='small' color='error'
                                                                onClick={() => handleDelete(article.id)} 
                                                            >Delete</Button>
                                                            {' '}
                                                            <Link href={`/article/${article?.slug}/preview`} variant="outlined" size='small' title='preview'>
                                                                <PreviewIcon />
                                                            </Link>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            }
                                        </TableBody>
                                        </Table>
                                    </TableContainer>
                                    {/* pagination */}
                                    <Pages
                                        mutate={pageMutate} path={data.data.path}
                                        from={data.data.from} total={data.data.total} lastPage={data.data.last_page}
                                        to={data.data.to} currentPage={data.data.current_page}
                                    />
                                </CardContent>
                                : <CardContent className="pb-2">
                                    No Article found
                                </CardContent>
                        }
                    </Card>
                </Grid>
            </Grid>
            <Snackbar
                open={showSnackBar}
                autoHideDuration={5000}
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                onClose={()=>setShowSnackBar(false)}
                >
                <Alert
                    severity={'error'} sx={{ width: '100%' }}
                >
                    {error?.response?.data?.message ?? "An error occurred. Try again"}
                </Alert>
            </Snackbar>
        </div>
     );
}
 
export default MyArticles;