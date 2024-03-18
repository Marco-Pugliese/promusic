import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const NostriEventi = () => {
  return (
    <>
      <Row>
        <Col className=" col-12 fw-bold fs-5 py-4 light-text light-shadow text-center heroService bg-dark1 ">
          I NOSTRI EVENTI
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
              Controlla il nostro calendario Eventi Oppure guarda le foto degli
              eventi passati
              <div className="text-center mt-5">
                <Link to={"/services/events"} className="nav-link">
                  <span className="hover myBtn2 ls-normal px-2 py-1 rounded-4">
                    PhotoGallery
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
export default NostriEventi;
