import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const [navHover, setNavHover] = useState(false);
  const [selected, setSelected] = useState("Home");
  return (
    <Navbar
      expand="lg"
      id="navbar"
      onMouseEnter={() => {
        setNavHover(true);
      }}
      onMouseLeave={() => {
        setNavHover(false);
      }}
      className={navHover === true ? "bg-2" : "bg-1"}
    >
      <Container fluid className="py-2">
        <Navbar.Brand
          onClick={() => {
            setSelected("Home");
          }}
          className={
            navHover === true
              ? "hover d-flex align-items-center d-lg-none fade-in navbarElementHovered"
              : "hover d-flex align-items-center d-lg-none fade-in navbarElement"
          }
        >
          <img
            src="/assets/images/logo ProMusic copia.png"
            alt="logo"
            style={{ width: "50px" }}
          />
          <div className="text-center fs-6 fw-bold">
            ProMusic{" "}
            <span className="extrasmall">
              - Associazione Culturale e Musicale
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-light"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-scale d-flex align-items-center navbarElement">
            <Link
              onClick={() => {
                setSelected("Home");
              }}
              to="/"
              className="nav-link fw-bold d-none d-lg-block ps-4 me-5 navbarElement"
            >
              <img
                src="/assets/images/logo ProMusic copia.png"
                alt="logo"
                style={{ width: "50px" }}
              />{" "}
            </Link>
            <Link
              onClick={() => {
                setSelected("Home");
              }}
              to="/"
              className={
                navHover === true
                  ? "nav-link d-lg-none d-block fw-bold ps-4 navbarElement"
                  : "nav-link d-lg-none d-block fw-bold ps-4 navbarElement"
              }
            >
              {" "}
              <span
                className={
                  selected === "Home" && navHover === false
                    ? "text-main fw-bold"
                    : selected === "Home" && navHover === true
                    ? "navbarElementClicked fw-bold"
                    : ""
                }
              >
                Home
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("Info");
              }}
              to="/info"
              className={
                navHover === true
                  ? "nav-link fw-bold ps-4 navbarElementHovered"
                  : "nav-link fw-bold ps-4 navbarElement"
              }
            >
              <span
                className={
                  selected === "Info" && navHover === false
                    ? "text-main fw-bold"
                    : selected === "Info" && navHover === true
                    ? "navbarElementClicked fw-bold"
                    : ""
                }
              >
                Contatti & Info
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("Socio");
              }}
              to="/join"
              className={
                navHover === true
                  ? "nav-link fw-bold ps-4 navbarElementHovered"
                  : "nav-link fw-bold ps-4 navbarElement"
              }
            >
              {" "}
              <span
                className={
                  selected === "Socio" && navHover === false
                    ? "text-main fw-bold"
                    : selected === "Socio" && navHover === true
                    ? "navbarElementClicked fw-bold"
                    : ""
                }
              >
                Diventa Socio
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("Corsi");
              }}
              to="/corsi"
              className={
                navHover === true
                  ? "nav-link fw-bold ps-4 navbarElementHovered"
                  : "nav-link fw-bold ps-4 navbarElement"
              }
            >
              <span
                className={
                  selected === "Corsi" && navHover === false
                    ? "text-main fw-bold"
                    : selected === "Corsi" && navHover === true
                    ? "navbarElementClicked fw-bold"
                    : ""
                }
              >
                I nostri Corsi
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("Eventi");
              }}
              to="/eventi"
              className={
                navHover === true
                  ? "nav-link fw-bold ps-4 navbarElementHovered"
                  : "nav-link fw-bold ps-4 navbarElement"
              }
            >
              <span
                className={
                  selected === "Eventi" && navHover === false
                    ? "text-main fw-bold"
                    : selected === "Eventi" && navHover === true
                    ? "navbarElementClicked fw-bold"
                    : ""
                }
              >
                I nostri Eventi
              </span>
            </Link>
            <Link
              onClick={() => {
                setSelected("Prenota");
              }}
              to="/book"
              className={
                navHover === true
                  ? "nav-link fw-bold ps-4 navbarElementHovered"
                  : "nav-link fw-bold ps-4 navbarElement"
              }
            >
              <span
                className={
                  selected === "Prenota" && navHover === false
                    ? "text-main fw-bold"
                    : selected === "Prenota" && navHover === true
                    ? "navbarElementClicked fw-bold"
                    : ""
                }
              >
                Prenota la Sala!
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
