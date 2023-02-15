
import { useQuery, useMutation, useQueryClient } from 'react-query';
const AdminLogout = ({ httpClient }) => {

    
  const queryClient = useQueryClient();
  const { isLoading, mutate } =
      useQuery('adminLogout', () => httpClient.post('/api/admin/logout'), {
        retry: false,
        onSuccess: () => {
            queryClient.removeQueries('userData');
            window.location = '/admin/login';
        },
        onError: () => {
          window.location = '/admin/login';
        }
      });

    return (<>
        
    </> );
}
 
export default AdminLogout;