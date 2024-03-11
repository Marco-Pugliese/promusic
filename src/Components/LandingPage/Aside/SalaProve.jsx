import { Col, Row } from "react-bootstrap";

const SalaProve = () => {
  return (
    <Row className="p-0 m-0">
      <Col className="col-6  m-0 p-0 d-none d-lg-flex flex-column align-items-center justify-content-center fst-italic vhX">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
        consequatur sunt, quos adipisci assumenda fugit eum ipsa nostrum ratione
        consequuntur qui voluptatem maxime molestias blanditiis quas voluptatum
        vitae cupiditate."
        <div className="mt-4">
          <button className="btn btn-dark fw-bold">SALA PROVE</button>
        </div>
      </Col>
      <Col className="col-12 col-lg-6 p-0 m-0 img-piano">
        <div className="h-100 w-100  d-flex d-lg-none filter-black text-light flex-column align-items-center justify-content-center">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
          consequatur sunt, quos adipisci assumenda fugit eum ipsa nostrum
          ratione consequuntur qui voluptatem maxime molestias blanditiis quas
          voluptatum vitae cupiditate."
          <div className="mt-4">
            <button className="btn btn-dark fw-bold">SALA PROVE</button>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default SalaProve;
