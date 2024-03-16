import { Col, Container, Row } from "react-bootstrap";
import SlidingImages from "./SlidingImages";
import PrenotaLaSala from "./PrenotaLaSala";
import INostriCorsi from "./INostriCorsi";
import NostriEventi from "./NostriEventi";

const ServicesPage = () => {
  return (
    <>
      <Container fluid id="services" className="p-0 m-0">
        <Row className="bg-dark1 p-0 m-0">
          <Col className=" text-center py-4 minv60">
            <Row>
              <Col className="col-12 col-lg-6 fw-bold fs-3 heroService text-shadow-red">
                I NOSTRI SERVIZI
              </Col>
              <div className="containerDiv py-5">
                <SlidingImages />
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="minv60 bg-light2 p-0 m-0">
        <PrenotaLaSala />
        <NostriEventi />
        <INostriCorsi />
      </Container>
    </>
  );
};
export default ServicesPage;
