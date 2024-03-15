import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ContattaciInModal from "./ContattaciInModal";

const Recording = () => {
  const [salaHovered, setSalaHovered] = useState(false);
  const [salaHoveredSmall, setSalaHoveredSmall] = useState(false);

  return (
    <div className="p-0 m-0 w-100 text-dark2">
      <Row className="p-0 m-0">
        <Col
          className="col-12 col-lg-6 bg-lights v60 p-0 m-0"
          onMouseEnter={() => {
            setSalaHoveredSmall(true);
          }}
          onMouseLeave={() => {
            setSalaHoveredSmall(false);
          }}
        >
          <div className="w-100 h-100 filter-black d-lg-none d-flex position-relative">
            <div
              className={
                salaHoveredSmall === true
                  ? "hover transparent fw-bold spacing-1 fs-4 position-absolute top-50 start-50 translate-middle text-center"
                  : "fw-bold spacing-1 fs-4 position-absolute top-50 start-50 translate-middle text-center"
              }
            >
              <div>Malù</div>
              <div className="fw-light">Recording Session</div>
            </div>
            <div
              className={
                salaHoveredSmall === true
                  ? "hover fw-bold fs-4 d-flex flex-column align-items-center justify-content-center w-100 text-center"
                  : "transparent fw-bold fs-4 d-flex flex-column align-items-center justify-content-center w-100 text-center"
              }
            >
              <div>
                <div className="smaller my-5 spacing-1">
                  Contattaci per ottenere Info
                </div>
                <div className="hover">
                  <ContattaciInModal />
                </div>
              </div>
            </div>
          </div>
        </Col>
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
          <div className="spacing-1 fw-bold mt-5 smaller d-flex flex-column align-items-center justify-content-center">
            <div className="border-bottom fs-4">Malù</div>
            <div className="fw-light">Recording Session</div>
          </div>
          <div className="mt-5 hover">
            <ContattaciInModal />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Recording;
