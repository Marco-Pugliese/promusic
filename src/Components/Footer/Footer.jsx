import { Container } from "react-bootstrap";
import {
  Envelope,
  Facebook,
  HeartFill,
  Instagram,
  Telephone,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  return (
    <div id="footer" className="pt-5 v-60">
      <div className="pt-5">
        <Container className="text-center navHover2 py-3 smaller">
          <span className="me-5 ">
            Made with <HeartFill className="mx-2 text-red" /> by Marco Pugliese
          </span>
          |
          <span className="ms-5">
            Associazione Culturale e Musicale ©ProMusic. All rights reserved -{" "}
            <span className="small">{today.getFullYear()}</span>
          </span>
        </Container>
        <Container className="d-flex border-topGreen  ">
          <div className=" fs-4 text-center w-100 extrasmall">
            <Link
              onClick={() => {
                window.open(
                  "https://www.instagram.com/promusic_isola_di_procida_/"
                );
              }}
            >
              <Instagram className="navHover2 mx-3 " />
            </Link>

            <Link
              onClick={() => {
                window.open(
                  "https://www.facebook.com/promusic.procida/?locale=it_IT"
                );
              }}
            >
              <Facebook className="navHover2 miniscale mx-3 " />
            </Link>
            <Link to="/phone">
              <Telephone className="navHover2 miniscale mx-3 " />
            </Link>
            <Link to="/mail">
              <Envelope className="navHover2 miniscale mx-3 " />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
