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
import { useNavigate } from 'react-router';

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

const AllArticles = ({ httpClient }) => {
    const [keyword, setKeyword] = useState('');
    
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const { isFetching, error, data, refetch } = useQuery('articleData', () =>
        httpClient.get(`/api/article/all?keyword=${keyword}`),{ 
            refetchOnWindowFocus: false,
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
            } 
        }
    );

    const { isLoading: pageFetching, error: pageError, mutate: pageMutate } =
        useMutation(url => httpClient.get(`${url}&keyword=${keyword}`), {
        onSuccess: data => {
            queryClient.setQueryData('articleData', data);
        },
        onError: error => {
            const response = error?.response;
            Util.checkAuthError(response?.status, navigate);
            const message = response?.data?.message ?? "An error occurred. Try again";
        }
    });

    const { isLoading: deleteFetching, error: deleteError, mutate: deleteMutate } =
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
            const message = response?.data?.message ?? "An error occurred. Try again";
        }
     });

      const handleDelete = id => {
        if (confirm("Are you sure?")) {
            deleteMutate(id);
        }
    }

     const handleSearch = e => {
        refetch({ throwOnError: true, cancelRefetch: true });
    }

     
    if (isFetching || pageFetching || deleteFetching) return (
        <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        );

     if (error || deleteError || pageError) {
        const err = error ?? deleteError ?? pageError;
        return (
            <Snackbar
                open={true}
                autoHideDuration={2000}
                anchorOrigin={
                    {
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                <Alert
                    severity={'error'} sx={{ width: '100%' }}
                >
                    {err?.response?.data?.message ?? "An error occurred. Try again"}
                </Alert>
            </Snackbar>
        )
    }

    return ( 
         <div className='p-4'>
            <Grid container spacing={2}>
                <Grid item xs={12}>
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
                        <CardContent className="pb-2">
                            <TableContainer>
                                <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Title</TableCell>
                                        <TableCell>Summary</TableCell>
                                        <TableCell>Published</TableCell>
                                        <TableCell>Slug</TableCell>
                                        <TableCell>Visit</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        data.data.data.map(
                                            article => <TableRow key={article.id}>
                                                <TableCell style={{ maxWidth: '150px'}}>
                                                    <p className=''>{Util.ellipsis(article.title)}</p>
                                                </TableCell>
                                                    <TableCell className="align-middle text-start" style={{ maxWidth: '150px'}}>
                                                    <span className="text-secondary text-xs font-weight-bold">{Util.ellipsis(article.summary)}</span>
                                                </TableCell>
                                                <TableCell>
                                                    <span className="">{article.is_published ? "Published" : "Unpublished"}</span>
                                                </TableCell>
                                                <TableCell style={{ maxWidth: '150px'}}>
                                                    <span>{Util.ellipsis(article.slug)}</span>
                                                </TableCell>
                                                <TableCell className='align-middle text-start' style={{ maxWidth: '150px' }}>
                                                    <p className="text-xs font-weight-bold mb-0">{article.visit}</p>
                                                </TableCell>
                                                <TableCell className="align-middle">
                                                    <Button size='small' variant="outlined"
                                                        href={`/admin/article/edit/${article.id}`}
                                                        >Edit</Button>
                                                    {' '}
                                                    <Button variant="outlined" size='small' color='error'
                                                        onClick={() => handleDelete(article.id)} 
                                                    >Delete</Button>
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
                    </Card>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default AllArticles;