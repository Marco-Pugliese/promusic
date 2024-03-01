import { Container } from "react-bootstrap";
import {
  Envelope,
  Facebook,
  Instagram,
  Telephone,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  return (
    <div className="pt-5 mt-5">
      <div className="bg-blue pb-4 mt-2">
        <Container className="text-center navHover2 mt-5 py-3 smaller">
          <span>
            Associazione Culturale e Musicale ©ProMusic. All rights reserved -{" "}
            <span className="small">{today.getFullYear()}</span>
          </span>
        </Container>
        <Container className="d-flex border-topGreen pt-2 ">
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
              <Facebook className="navHover2 mx-3 " />
            </Link>
            <Link to="/phone">
              <Telephone className="navHover2 mx-3 " />
            </Link>
            <Link to="/mail">
              <Envelope className="navHover2 mx-3 " />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
