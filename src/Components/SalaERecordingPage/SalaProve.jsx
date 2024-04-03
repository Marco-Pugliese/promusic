import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CalendarioinModal from "./CalendarioinModal";

const SalaProve = () => {
  const [salaHovered, setSalaHovered] = useState(false);
  const [salaHoveredSmall, setSalaHoveredSmall] = useState(false);

  return (
    <div className="p-0 m-0 w-100 text-dark2">
      <Row className="p-0 m-0">
        <Col
          onMouseEnter={() => {
            setSalaHovered(true);
          }}
          onMouseLeave={() => {
            setSalaHovered(false);
          }}
          className={
            salaHovered === true
              ? "d-none d-lg-flex flex-column align-items-center justify-content-center col-6 filter-black"
              : "d-none d-lg-flex flex-column align-items-center justify-content-center col-6"
          }
        >
          <div className="fw-bold spacing-1 fs-4 border-bottom">Malù</div>
          <div className="spacing-1 fw-light">la nostra sala prove</div>
          <div className=" fw-bold mt-5 d-flex flex-column align-items-center justify-content-center">
            <CalendarioinModal />
          </div>
        </Col>
        <Col
          onMouseEnter={() => {
            setSalaHoveredSmall(true);
          }}
          onMouseLeave={() => {
            setSalaHoveredSmall(false);
          }}
          className="col-12 col-lg-6 bg-mixer v60 p-0 m-0"
        >
          <div className="w-100 h-100 filter-black d-lg-none d-flex position-relative">
            <div
              className={
                salaHoveredSmall === true
                  ? "hover transparent fw-bold spacing-1 fs-4 position-absolute top-50 start-50 translate-middle text-center"
                  : "fw-bold spacing-1 fs-4 position-absolute top-50 start-50 translate-middle text-center"
              }
            >
              <div className="border-bottom">Malù</div>
              <div className="fw-light">la nostra sala prove</div>
            </div>
            <div
              className={
                salaHoveredSmall === true
                  ? "hover fw-bold fs-4 d-flex flex-column align-items-center justify-content-center w-100 text-center"
                  : "hover transparent fw-bold fs-4 d-flex flex-column align-items-center justify-content-center w-100 text-center"
              }
            >
              <div>
                <div className="spacing-1">Pricing:</div>
                <div className="smaller my-5 spacing-1">10€/h</div>

                <CalendarioinModal />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default SalaProve;
