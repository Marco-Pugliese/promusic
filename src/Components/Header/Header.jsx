import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [navHover, setNavHover] = useState(false);
  const [selected, setSelected] = useState("Home");
  return (
    <Navbar
      expand="lg"
      onMouseEnter={() => {
        setNavHover(true);
      }}
      onMouseLeave={() => {
        setNavHover(false);
      }}
      className="position-relative p-0 m-0"
    >
      <Container id="navbar" fluid>
        <Navbar.Brand
          onClick={() => {
            setSelected("Home");
          }}
          className="ms-3 hover d-flex align-items-center fade-in"
        >
          <img
            src="/assets/images/logo ProMusic copia.png"
            alt="logo"
            style={{ width: "40px" }}
          />
          <div className="text-center fs-5 text-dark ms-2">
            ProMusic
            <span className="extrasmall fw-light">
              | Associazione Culturale e Musicale
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3 nav-scale d-flex align-items-center">
            <Link
              onClick={() => {
                setSelected("Home");
              }}
              to="/"
              className="nav-link "
            >
              <span
                className={
                  navHover === true && selected === "Home"
                    ? "underlined text-red transition"
                    : navHover === false && selected === "Home"
                    ? "underlined text-red transition"
                    : "transition"
                }
              >
                HOME
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("Info");
              }}
              to="/info"
              className="nav-link "
            >
              <span
                className={
                  navHover === true && selected === "Info"
                    ? "underlined text-red transition"
                    : navHover === false && selected === "Info"
                    ? "underlined text-red transition"
                    : "transition"
                }
              >
                INFO
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("JoinUs");
              }}
              to="/join"
              className="nav-link "
            >
              <span
                className={
                  navHover === true && selected === "JoinUs"
                    ? "underlined text-red transition"
                    : navHover === false && selected === "JoinUs"
                    ? "underlined text-red transition"
                    : "transition"
                }
              >
                JOIN US
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("Services");
              }}
              to="/services"
              className="nav-link "
            >
              <span
                className={
                  navHover === true && selected === "Services"
                    ? "underlined text-red transition"
                    : navHover === false && selected === "Services"
                    ? "underlined text-red transition"
                    : "transition"
                }
              >
                SERVICES
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
