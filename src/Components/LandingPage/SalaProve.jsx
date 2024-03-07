import { useState } from "react";
import { Col } from "react-bootstrap";

const SalaProve = () => {
  const [navHover2, setNavHover2] = useState(false);

  return (
    <Col
      onMouseEnter={() => {
        setNavHover2(true);
      }}
      onMouseLeave={() => {
        setNavHover2(false);
      }}
      className="px-0 mx-0 h-100 col-4 col-lg-3 col-xl-2"
    >
      <div className="bg-recording w-100 text-center">
        <div
          className={
            navHover2 === true
              ? "bg-transition3 p-2 h-100"
              : "bg-transitionbck p-2 h-100"
          }
        >
          <div
            className={
              navHover2 === true
                ? "salaProve position-relative salaProveHovered d-flex align-items-end justify-content-center fs-3"
                : "salaProve position-relative d-flex align-items-end justify-content-center fs-3"
            }
          >
            <div
              className={
                navHover2 === true
                  ? "text-contrast position-absolute top-50 left-50 translate-middle-y "
                  : "transparency position-absolute top-50 left-50 translate-middle-y"
              }
            >
              Malù
            </div>

            <div
              className={
                navHover2 === true
                  ? "bg-gray bg-grayHovered text-dark2 fst-italic w-100 py-2"
                  : "bg-gray w-100 py-2 text-dark2 fst-italic "
              }
            >
              sala prove
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default SalaProve;
