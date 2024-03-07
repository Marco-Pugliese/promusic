import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeroSectionForMobile = () => {
  const [heroHover, setHeroHover] = useState(false);
  return (
    <Container fluid className="p-0 m-0">
      <Row
        onMouseEnter={() => {
          setHeroHover(true);
        }}
        onMouseLeave={() => {
          setHeroHover(false);
        }}
        className={heroHover === true ? "hover p-0 m-0" : "p-0 m-0"}
      >
        <Col className="col-12 bg-music d-flex align-items-center justify-content-center fw-bold fs-lg-2 p-5 text-center">
          <div
            className={
              heroHover === true
                ? "w-100 h-100 border-contrast bg-transition bg-2 text-contrast d-flex align-items-center justify-content-center text-center "
                : "w-100 h-100 border-white d-flex align-items-center justify-content-center text-center"
            }
          >
            <div className="fade-in text-shadow fw-bold herotext px-4 text-center">
              "MUSIC IS THE ONLY REASON"
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default HeroSectionForMobile;
