import { Col, Row } from "react-bootstrap";

const Aside = () => {
  return (
    <>
      <Row className="bg-1 pt-5 d-flex flex-row justify-content-center ">
        <Col className="px-0 mx-0 h-100 col-5 col-lg-4 col-xxl-4 h-100 d-flex flex-column  align-items-start justify-content-between">
          <div className="w-100"></div>
        </Col>
      </Row>
      <Row className="bg-1 py-3 d-flex flex-row justify-content-center ">
        <Col className="col-1"></Col>
      </Row>
    </>
  );
};
export default Aside;
