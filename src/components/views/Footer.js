import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <Nav className='justify-content-center fixed-bottom'>
      <Nav.Item>
        <Nav.Link eventKey='disabled' disabled>
          Copyright &copy; BlogApp 2022
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Footer;
