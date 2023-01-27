import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router';

const NavBar = ({ httpClient }) => {

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


    return ( 
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
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
     );
}
 
export default NavBar;