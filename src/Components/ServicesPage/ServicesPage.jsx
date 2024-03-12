import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const ServicesPage = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Row className="bg-dark1">
        <Col
          className={
            scrollTop === 0
              ? "text-center display-4 fw-bold fade-in py-4"
              : "d-none"
          }
        >
          I Nostri Corsi
        </Col>
      </Row>
      <Row
        className={
          scrollTop === 0
            ? "text-center fade-in justify-content-center bg-dark1"
            : "d-none bg-dark1"
        }
      >
        <Col className="col-3 text-center">
          <Row>
            <Col className="col-12 fw-bold fs-4 py-2 text-main nav-scale hover">
              Corsi In Programma
            </Col>
            <Col className="smaller text-start">
              <ul>
                <li>Corso 1: Ogni Lunedì, 17:00-18:00</li>
                <li>Corso 2: Ogni Martedì, 17:00-18:00</li>
                <li>Corso 3: Ogni Mercoledì, 17:00-18:00</li>
                <li>Corso 4: Ogni Giovedì, 17:00-18:00</li>
                <li>Corso 5: Ogni Venerdì, 17:00-18:00</li>
                <li>Corso 6: Ogni Sabato, 17:00-18:00</li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="col-6 text-center">
          <Row>
            <Col className="col-12 fw-bold fs-4 py-2 text-main hover">
              Calendario Sala
            </Col>
            <Col>
              <img
                src="/assets/images/minimal-style-2024-new-year-calendar-template-office-desk-wall-vector_1017-48214.avif"
                alt="calendar"
                style={{ width: "300px" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default ServicesPage;
