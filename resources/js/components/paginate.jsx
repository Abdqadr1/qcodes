
// import Pagination from 'react-bootstrap/Pagination';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
const Pages = ({ from, total, lastPage, to, currentPage, mutate, path }) => {

    const handleChange = (_event, newPage) => {
        mutate(`${path}?page=${newPage}`);
    };
    
    
    return ( 
        <div className='d-flex justify-content-center my-3 flex-column'>
            <Typography className='text-center mb-3 fs-6'>Showing {from} to {to} of {total}</Typography>
            <Pagination
                className='d-flex justify-content-center align-items-center' color="primary" shape="rounded"
                siblingCount={2} boundaryCount={2} 
                count={lastPage} defaultPage={currentPage}
                showFirstButton showLastButton onChange={handleChange}
            />
        </div>
     );
}
 
export default Pages;