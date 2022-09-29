import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='primary' variant='dark' className='rounded'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          Waiters App
        </Navbar.Brand>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
