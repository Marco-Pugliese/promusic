import { Col, Row } from "react-bootstrap";

const Recording = () => {
  return (
    <Row className="p-0 m-0">
      <Col className="col-12 col-lg-6 p-0 m-0 img-recording">
        <div className="h-100 w-100  d-flex d-lg-none filter-black text-light flex-column align-items-center justify-content-center">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
          consequatur sunt, quos adipisci assumenda fugit eum ipsa nostrum
          ratione consequuntur qui voluptatem maxime molestias blanditiis quas
          voluptatum vitae cupiditate."
          <div className="mt-4">
            <button className="btn btn-dark fw-bold">RECORDING</button>
          </div>
        </div>
      </Col>
      <Col className="col-6 d-none d-lg-flex p-0 m-0 flex-column align-items-center justify-content-center fst-italic vhX">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
        consequatur sunt, quos adipisci assumenda fugit eum ipsa nostrum ratione
        consequuntur qui voluptatem maxime molestias blanditiis quas voluptatum
        vitae cupiditate."
        <div className="mt-4">
          <button className="btn btn-dark fw-bold">RECORDING</button>
        </div>
      </Col>
    </Row>
  );
};
export default Recording;
