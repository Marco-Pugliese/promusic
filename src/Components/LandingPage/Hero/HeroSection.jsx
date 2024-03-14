import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  // const [heroHover, setHeroHover] = useState(false);
  return (
    <Container fluid className="p-0 m-0">
      <Row
        // onMouseEnter={() => {
        //   setHeroHover(true);
        // }}
        // onMouseLeave={() => {
        //   setHeroHover(false);
        // }}
        className="p-0 m-0"
      >
        <Col className="col-12 bg-proMusic"></Col>
        <Col className="col-12 bg-proMiddle p-0 m-0">
          <div
            id="heroFrase"
            className="w-100 h-100 d-flex align-items-center justify-content-center bg-filterdark text-center"
          >
            "MUSIC{"  "}IS{"  "}THE{"  "}ONLY{"  "}REASON"
          </div>
        </Col>
        <Col className="col-12 bg-proMusic2"></Col>
      </Row>
    </Container>
  );
};
export default HeroSection;
