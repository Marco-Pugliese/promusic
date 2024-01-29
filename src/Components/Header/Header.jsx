import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container fluid className="py-2">
        <Navbar.Brand className="text-light hover d-lg-none bounce-in-left-0">
          <img
            src="/assets/images/logo ProMusic copia.png"
            alt="logo"
            style={{ width: "50px" }}
          />
          <div className="d-inline-block w-100 text-center fs-6 fw-bold">
            ProMusic Isola di Procida - Associazione Culturale & Musicale
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-scale">
            <Link to="/" className="nav-link fw-bold ps-4  navHover">
              Home
            </Link>
            <Link to="/info" className="nav-link fw-bold ps-4  navHover">
              Contatti & Info
            </Link>
            <Link to="/join" className="nav-link fw-bold ps-4  navHover">
              Diventa Socio
            </Link>
            <Link to="/corsi" className="nav-link fw-bold ps-4  navHover">
              I nostri Corsi
            </Link>
            <Link to="/eventi" className="nav-link fw-bold ps-4  navHover">
              I nostri Eventi
            </Link>
            <Link to="/book" className="nav-link fw-bold ps-4  navHover">
              Prenota la Sala!
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
