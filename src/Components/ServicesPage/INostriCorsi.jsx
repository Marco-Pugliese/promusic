import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const INostriCorsi = () => {
  return (
    <>
      <Row>
        <Col className=" col-12 fw-bold fs-5 py-4  light-text light-shadow text-center heroService bg-dark1 ">
          I NOSTRI CORSI
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="col-12 col-lg-10 col-xxl-8">
          <Row>
            <Col className="col-12 col-lg-6 text-center">
              <img
                src="./assets/images/images/calendarioesempio.avif"
                alt="calendar"
                className="w-100 calendar"
              />
            </Col>
            <Col className="col-12 col-lg-6 dark2-text heroService p-5">
              Scegli il corso che preferisci e Richiedi l'iscrizione
              <div className="text-center mt-5">
                <Link to={"/services/courses"} className="nav-link">
                  <span className="hover myBtn1 px-2 ls-normal py-1 rounded-4">
                    Visualizza
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default INostriCorsi;
