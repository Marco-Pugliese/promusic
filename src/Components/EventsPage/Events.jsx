import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Events = () => {
  const [nextHovered, setNextHovered] = useState(false);
  const [prevHovered, setPrevHovered] = useState(false);
  return (
    <Container fluid className="p-0 m-0">
      <Row className="p-0 m-0 bg-Events v60 justify-content-center">
        <Col className="col-12 p-0 m-0 h-100 d-flex align-items-center justify-content-center filter-black text-center">
          <Row className="p-0 m-0 justify-content-center">
            <Col className="text-center my-auto col-12 col-lg-9 col-xxl-7 fst-italic spacing-1 flicker-in-1">
              "Il vero potere della musica live risiede nella sua capacità di
              creare un'esperienza unica e irrepetibile per chiunque sia
              presente." - Dave Matthews
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="minv60">
        <Col className="p-0 m-0">
          <Row>
            <Col className="text-center text-dark fs-3 fst-italic py-4">
              I NOSTRI EVENTI
            </Col>
          </Row>
          <Row
            className="bg-light2"
            onMouseEnter={() => {
              setNextHovered(true);
            }}
            onMouseLeave={() => {
              setNextHovered(false);
            }}
          >
            <Col className="col-6 d-none d-lg-block text-center fs-4 my-auto dark2-text ">
              EVENTI IN PROGRAMMA
            </Col>
            <Col
              className={
                nextHovered === true
                  ? "col-12 col-lg-6 text-center fs-4 my-auto bg-dark1 py-3 position-relative "
                  : "col-12 col-lg-6 text-center fs-4 my-auto bg-dark1 py-3 position-relative"
              }
            >
              <div
                className={
                  nextHovered === true
                    ? "d-block d-lg-none position-absolute top-50 start-50 translate-middle transition1s transparent"
                    : "d-block d-lg-none position-absolute top-50 start-50 translate-middle transition1s"
                }
              >
                Eventi in Programma
              </div>
              <ul
                className={
                  nextHovered === true
                    ? "transition 1s hover"
                    : "transition1s transparent"
                }
              >
                <li>EVENTO IN PROGRAMMA n°1</li>
                <li>EVENTO IN PROGRAMMA n°2</li>
                <li>EVENTO IN PROGRAMMA n°3</li>
                <li>EVENTO IN PROGRAMMA n°4</li>
              </ul>
            </Col>
          </Row>
          <Row
            className="bg-light2"
            onMouseEnter={() => {
              setPrevHovered(true);
            }}
            onMouseLeave={() => {
              setPrevHovered(false);
            }}
          >
            <Col
              className={
                prevHovered === true
                  ? "col-12 col-lg-6 text-center fs-4 my-auto bg-dark1 py-3 position-relative "
                  : "col-12 col-lg-6 text-center fs-4 my-auto bg-dark1 py-3 position-relative"
              }
            >
              <div
                className={
                  prevHovered === true
                    ? "d-block d-lg-none position-absolute top-50 start-50 translate-middle transition1s transparent"
                    : "d-block d-lg-none position-absolute top-50 start-50 translate-middle transition1s"
                }
              >
                PhotoGallery Eventi
              </div>
              <ul
                className={
                  prevHovered === true
                    ? "transition 1s hover"
                    : "transition1s transparent"
                }
              >
                <li>EVENTO PASSATO n°1</li>
                <li>EVENTO PASSATO n°2</li>
                <li>EVENTO PASSATO n°3</li>
                <li>EVENTO PASSATO n°4</li>
              </ul>
            </Col>
            <Col className="col-6 d-none d-lg-block text-center fs-4 my-auto dark2-text ">
              PhotoGallery
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Events;
