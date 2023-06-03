
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useQuery } from 'react-query';
import Util from '../utility';
import Grid from '@mui/material/Grid';

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
              <Card className='admin-table' sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 24, fontWeight: 'bold' }} color="text.secondary" gutterBottom component="div" variant="h5">
                        Top Referring Website
                      </Typography>
                      <div>
                        {
                          data?.data?.referrers.map(ref => (
                            <div key={ref.toString()} className='d-flex align-items-center justify-content-between'>
                                <span className='fw-bold'>
                                  {ref.website_name}
                                </span>
                                <div style={{width:'30px',aspectRatio: 1 }} className="rounded-pill border border-2 d-flex justify-content-center align-items-center text-danger">
                                  {ref.count_sum}
                                </div>
                            </div>
                        ))
                        }
                        
                      </div>

                      
                  </CardContent>
              </Card>
            </div>
        </div>
        </div>
        );
}
 
export default AdminDashboard;