import { Col, Row } from "react-bootstrap";
import HeroSection from "./Hero/HeroSection";
import Aside from "./Aside/Aside";

const Landingpage = () => {
  return (
    <>
      <Row id="hero" className="p-0 m-0 h-100 w-100 ">
        <HeroSection />
      </Row>
      <Row>
        <Col className="col-12 text-dark text-center border-bottom border-black pb-2 fs-2 ">
          <span className="border-top border-black pt-2 px-5 text-shadow">
            HAVE A LOOK
          </span>
        </Col>
        <Col className="col-12 px-0">
          <Aside />
        </Col>
      </Row>
    </>
  );
};
export default Landingpage;
