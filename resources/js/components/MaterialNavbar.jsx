import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Util from './utility';
import CircularProgress from '@mui/material/CircularProgress';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

const drawerWidth = 240;
const navItems = {
    Categories: '/admin/categories',
    Tags: '/admin/tags',
    'My Articles': '/admin/articles'
};
const adminNavItems = {
    ...navItems,
    Admin: '/admin',
    'All Articles': '/admin/article/all',
    Notifications: '/admin/notification',
    Messages: '/admin/messages'
}
const auth = {
    LogIn: '/admin/login',
    'Sign Up': '/admin/signup'
};
const settings = {
    Dashboard: '/admin/dashboard',
    Profile: '/admin/profile',
    Logout: '/admin/logout'
};

function MaterialNavbar(props) {
  const { window: windoww, httpClient } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [notifications, setNotifications] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

     const open = Boolean(anchorEl);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const pathName = window.location.pathname;

  const { isLoading:adminLoading, error, data:adminData } = useQuery('getAdminUser', () =>
        httpClient.get('/api/admin'),{ 
         refetchOnWindowFocus: false,
          retry: false,
          enabled: pathName !== '/admin/login' && pathName !== '/admin/signup',
            onSuccess: data => {
              queryClient.setQueryData('userData', data.data);
            } 
        }
    );

  const {isLoading:notificationLoading, mutate:notMutate } = useMutation( () =>
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

    let navs = adminData?.data ? (Util.hasRole(adminData.data.roles, 'Admin') ? adminNavItems : navItems) : auth;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        if (!notifications) {
            notMutate();
        }
    };
  const handleClose = () => setAnchorEl(null);
  const handleRead = (not) => {
    setAnchorEl(null);
    if(not.type !== "GENERAL" && !not.read) markMutate(not.id);
  };
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }; 
  
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <img src="/images/qluecodes.png" className='my-3' alt={window.siteName} width="80" height="30"/>
      <Divider />
      <List>
        {Object.keys(navs).map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'start' }}>
              <Link className='text-decoration-none text-secondary' href={navs[item]}>{item}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = windoww !== undefined ? () => windoww().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{zIndex: 100}} >
        <Toolbar className='shadow-sm admin-navbar text-dark justify-content-between' sx={{minHeight: '50px !important' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href='/admin'
            variant="h6"
            component="a"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
          >
            <img src="/images/qluecodes.png" className='' alt={window.siteName} width="80" height="30"/>
          </Link>
            {
                adminLoading ? '' : 
                ((adminData?.data) 
                ? <>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        { Object.keys(navs).map((item) => (
                        <Button href={navs[item]} className='text-dark' key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                        ))}
                    </Box>
                    
           
                    <Box sx={{ flexGrow: 0, ml: 5 }}>
                        <Tooltip title="My Notifications">
                            <Badge color="error"
                            badgeContent={(notifications && notifications.length > 0) ? notifications.length : null}
                            >
                                <NotificationsIcon color="primary"
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                />
                            </Badge>
                        </Tooltip>
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
                    </Box>
                    
                    <Box sx={{ flexGrow: 0, ml: 5 }}>
                        <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt={adminData?.data.first_name} src="/static/images/avatar/2.jpg" />
                        </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {Object.keys(settings).map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Link className='text-decoration-none text-secondary'  href={settings[setting]} textAlign="center">{setting}</Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
        

                </>
                : <>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {Object.keys(auth).map((item) => (
                        <Button href={auth[item]} className='text-dark' key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                        ))}
                    </Box>
                </>)
            }
          
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

MaterialNavbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MaterialNavbar;