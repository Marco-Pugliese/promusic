import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PrenotaLaSala = () => {
  return (
    <>
      <Row className="p-0 m-0">
        <Col className="p-0 m-0 col-12 fw-bold fs-5 py-4 dark2-text text-center heroService text-shadow">
          PRENOTA LA SALA
        </Col>
      </Row>
      <Row className="justify-content-center p-0 m-0">
        <Col className="col-12 col-lg-10 col-xxl-8 p-0 m-0">
          <Row className="p-0 m-0">
            <Col className="col-12 col-lg-6 text-center p-0 m-0">
              <img
                src="./assets/images/images/calendarioesempio.avif"
                alt="calendar"
                className="w-100 calendar"
              />
            </Col>
            <Col className="col-12 col-lg-6 dark2-text heroService p-5">
              Diventa Associato & Richiedi la Sala con il tuo codice!
              <div className="text-center mt-5">
                <Link to={"/services/sala&recording"} className="nav-link">
                  <span className="hover myBtn1 px-2 py-1 rounded-4 ls-normal">
                    Prenota
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
export default PrenotaLaSala;
