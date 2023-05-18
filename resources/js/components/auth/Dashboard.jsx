
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import Util from '../utility';

const AdminDashboard = ({ httpClient }) => {
    document.title = 'Dashboard';

  const { data } = useQuery('getAdminUser', () =>
        httpClient.get('/api/admin'),{ 
            retry: false,
            staleTime: Infinity,
            onError: error => {
                Util.checkAuthError(error?.response?.status, null);
            } 
        }
    );
    return ( 
        <div className='p-2'>
        <Button href='/admin/article/new' className='mt-2 mb-5' variant="outlined" endIcon={<CreateIcon />}>Write article</Button>
        <div className='row mx-0 g-2'>
            <div className='col-md-6'>
                 <Card className='admin-table' sx={{ minWidth: 275 }}>
                  <CardContent>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Typography sx={{ fontSize: 24, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        My Articles
                      </Typography>
                      <div className='rounded-pill border border-3 d-flex justify-content-center align-items-center' style={{width: '20%', aspectRatio: 1 }}>
                        <span className='fs-1 fw-bold text-danger'>{data?.data?.articles_count}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
          </div>

          <div className='col-md-6'>
                 <Card className='admin-table' sx={{ minWidth: 275 }}>
                  <CardContent>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Typography sx={{ fontSize: 24, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
                        All Time Views
                      </Typography>
                      <div className='rounded-pill border border-3 d-flex justify-content-center align-items-center' style={{width: '20%', aspectRatio: 1 }}>
                        <span className='fs-1 fw-bold text-danger'>{data?.data?.articles_sum_visit ?? 0}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
            </div>
            <div className='col-md-6'>
            </div>
        </div>
        </div>
        );
}
 
export default AdminDashboard;