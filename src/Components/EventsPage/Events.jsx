import { Col, Container, Row } from "react-bootstrap";

const Events = () => {
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
            <Col className="text-center text-dark fs-3 fst-italic">
              I NOSTRI EVENTI
            </Col>
          </Row>
          <Row className="bg-light2">
            <Col className="col-6 d-none d-lg-block text-center fs-4 my-auto dark2-text ">
              EVENTI IN PROGRAMMA
            </Col>
            <Col className="col-12 col-lg-6 text-center fs-4 my-auto bg-dark1 py-3">
              <ul>
                <li>EVENTO IN PROGRAMMA n°1</li>
                <li>EVENTO IN PROGRAMMA n°2</li>
                <li>EVENTO IN PROGRAMMA n°3</li>
                <li>EVENTO IN PROGRAMMA n°4</li>
              </ul>
            </Col>
          </Row>
          <Row className="bg-light2">
            <Col className="col-12 col-lg-6 text-center fs-4 my-auto bg-dark1 py-3">
              <ul>
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
