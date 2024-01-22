import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand className="text-light fs-4 hover">ProMusic</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/" className="nav-link fw-bold ps-4  navHover">
              Home
            </Link>
            <Link to="/" className="nav-link fw-bold ps-4  navHover">
              Contatti & Info
            </Link>
            <Link to="/" className="nav-link fw-bold ps-4  navHover">
              Diventa Socio
            </Link>
            <Link to="/" className="nav-link fw-bold ps-4  navHover">
              Prenota la Sala!
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
