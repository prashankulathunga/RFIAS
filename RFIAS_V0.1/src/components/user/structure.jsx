import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Welcome User</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Profile</Nav.Link>
            <Nav.Link href="#link">Research</Nav.Link>
            <Nav.Link href="#home">Leave Request</Nav.Link>
            <Nav.Link href="#home">Attendance sheet</Nav.Link>
            <Nav.Link href="#link">Calander</Nav.Link>
            
            <Nav.Link href="#link">Log Out</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;