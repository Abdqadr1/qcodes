import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import Util from './utility';
import CircularProgress from '@mui/material/CircularProgress';

const NavBar = ({ httpClient }) => {
  const [notifications, setNotifications] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {isLoading:notificationLoading } = useQuery('myNotificationData', () =>
        httpClient.get('/api/admin/my-notification'),{ 
            refetchOnWindowFocus: false,
            onSuccess: data => setNotifications([...data.data]),
            onError: error => {
                Util.checkAuthError(error?.response?.status, navigate);
                setError({ ...error });
                setShowSnackBar(true);
            }  
        }
    );



  const { isLoading, mutate } =
      useMutation(() => httpClient.post('/api/admin/logout'), {
      onSuccess: () => {
          queryClient.removeQueries('userData');
          navigate('/admin/login');
      },
      onError: error => {
          const response = error?.response;
          const message = response?.data?.message ?? "An error occurred";
          const errors = response?.data?.errors;
      }
      });

  const { isLoading: markLoading, mutate:markMutate } =
      useMutation((id) => httpClient.post(`/api/admin/notification/read/${id}`), {
      onSuccess: (data, id) => {
          setNotifications(s => {
              const index = s.findIndex(l => l.id === id);
              s[index].read = true;
              return [...s];
          });
      },
      onError: error => {
          const response = error?.response;
          const message = response?.data?.message ?? "An error occurred";
          const errors = response?.data?.errors;
      }
    });

        
  const handleLogout = e => {
    e.preventDefault();
    mutate();
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  const handleRead = (not) => {
    setAnchorEl(null);
    if(not.type !== "GENERAL" && !not.read) markMutate(not.id);
  };


  return (
      <>
        <Navbar bg="dark" expand="lg" sticky="top" variant="dark" className="mb-1">
          <Container fluid>
            <Navbar.Brand href="#">QCodes</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Navigation
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/admin/login">Login</Nav.Link>
                  <Nav.Link href="/admin/signup">Sign Up</Nav.Link>
                  <Nav.Link href="/admin/profile">Profile</Nav.Link>
                  <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                  <Nav.Link href="/admin">Admins</Nav.Link>
                  <Nav.Link href="/admin/categories">Categories</Nav.Link>
                  <Nav.Link href="/admin/tags">Tags</Nav.Link>
                  <Nav.Link href="/admin/articles">My Articles</Nav.Link>
                  <Nav.Link href="/admin/article/all">All Articles</Nav.Link>
                  <Nav.Link href="/admin/notification">Notifications</Nav.Link>
                  <Nav.Link>
                  <Badge title='notifications' color="error"
                    badgeContent={(notifications && notifications.length > 0) ? notifications.length : null}
                  >
                      <NotificationsIcon color="primary"
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                       />
                    </Badge>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflowY: 'auto',
              width: 350,
              maxWidth: 350,
              maxHeight: '70vh',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
        {
          (notificationLoading)
            ? <MenuItem sx={{justifyContent: 'center'}}>
                <CircularProgress sx={{height: '20px !important', width: '20px !important'}} color="inherit" />
              </MenuItem>
           : 
            (
              (notifications && notifications.length > 0)
              ? 
                notifications?.map(not => (
                  <div title={not.read ? '' : 'Mark as read'}
                    className={`p-2 border-bottom notification ${not.read ? 'read' : 'unread'}`}
                    key={not.id} onClick={() => handleRead(not)}>
                    <div className='w-100 mb-2 fw-bold' style={{fontSize: 14, lineHeight: 1.1}}>{ not.title }</div>
                    <div className='w-100 ' style={{fontSize: 12, lineHeight: 1.2}} >{ not.content }</div>
                  </div>
                ))
              : <MenuItem>
                  <div className='text-center w-100'>No Notification</div>
                </MenuItem>
          )
        }
          
        </Menu>
      </>
     );
}
 
export default NavBar;