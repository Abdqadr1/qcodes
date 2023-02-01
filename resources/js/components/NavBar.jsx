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

const NavBar = ({ httpClient }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

        
  const handleLogout = e => {
    e.preventDefault();
    mutate();
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                </NavDropdown>
                  <Nav.Link>
                    <Badge title='notifications' badgeContent={3} color="error">
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
              overflow: 'visible',
              overflowY: 'scroll',
              maxWidth: 320,
              maxHeight: 200,
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
          <MenuItem onClick={handleClose}>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            Add another account
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            Logout
          </MenuItem><MenuItem onClick={handleClose}>
            Logout
          </MenuItem><MenuItem onClick={handleClose}>
            Logout
          </MenuItem><MenuItem onClick={handleClose}>
            Logout
          </MenuItem><MenuItem onClick={handleClose}>
            Logout
          </MenuItem><MenuItem onClick={handleClose}>
            Logout
          </MenuItem>
        </Menu>
      </>
     );
}
 
export default NavBar;