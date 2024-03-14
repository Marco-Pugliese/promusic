import { Col, Container, Row } from "react-bootstrap";
import SlidingImages from "./SlidingImages";

const ServicesPage = () => {
  return (
    <>
      <Container fluid id="services" className="p-0 m-0">
        <Row className="bg-dark1">
          <Col className=" text-center  py-4 minv60">
            <Row>
              <Col className="col-6 fw-bold fs-3 heroService text-shadow-red">
                I NOSTRI SERVIZI
              </Col>
              <div className="containerDiv py-5">
                <SlidingImages />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="minv60 bg-light2 ">
        <section className="m-0 p-0">
          <Row>
            <Col className=" col-12 fw-bold fs-5 py-4 dark2-text text-center heroService border-dark2 text-shadow">
              PRENOTA LA SALA
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-12 col-lg-10 col-xxl-8">
              <Row>
                <Col className="col-6 dark2-text heroService p-5">
                  Diventa Associato & Richiedi la Sala con il tuo codice!
                  <div className="w-100 text-center mt-5">
                    <span className="hover myBtn1 px-2 py-1 rounded-4">
                      Prenota
                    </span>
                  </div>
                </Col>
                <Col className="col-6 text-center">
                  <img
                    src="./assets/images/images/calendarioesempio.avif"
                    alt="calendar"
                    className="w-100 calendar"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
        <section className="p-0 m-0">
          <Row>
            <Col className=" col-12 fw-bold fs-5 py-4  light-text light-shadow text-center heroService bg-dark1 ">
              I NOSTRI EVENTI
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-12 col-lg-10 col-xxl-8">
              <Row>
                <Col className="col-6 dark2-text heroService p-5">
                  Controlla il nostro calendario Eventi
                  <div className="w-100 text-center mt-5">
                    <span className="hover myBtn1 px-2 py-1 rounded-4">
                      Controlla
                    </span>
                  </div>
                </Col>
                <Col className="col-6 dark2-text heroService p-5">
                  Oppure guarda le photoGallery degli eventi passati
                  <div className="w-100 text-center mt-5">
                    <span className="hover myBtn2 px-2 py-1 rounded-4">
                      PhotoGallery
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>{" "}
        <section className="p-0 m-0">
          <Row>
            <Col className=" col-12 fw-bold fs-5 py-4  light-text light-shadow text-center heroService bg-dark1 ">
              I NOSTRI CORSI
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="col-12 col-lg-10 col-xxl-8">
              <Row>
                <Col className="col-6 dark2-text heroService p-5">
                  Scegli il corso che preferisci e Richiedi l'iscrizione
                  <div className="w-100 text-center mt-5">
                    <span className="hover myBtn1 px-2 py-1 rounded-4">
                      Visualizza
                    </span>
                  </div>
                </Col>
                <Col className="col-6 text-center">
                  <img
                    src="./assets/images/images/calendarioesempio.avif"
                    alt="calendar"
                    className="w-100 calendar"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};
export default ServicesPage;
