import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import HeroSection from "./HeroSection";
import SalaProve from "./SalaProve";

const Landingpage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [navHover, setNavHover] = useState(false);
  // const [navHover2, setNavHover2] = useState(false);

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
      <Row id="hero" className="p-0 m-0 h-100 w-100">
        <HeroSection />
      </Row>
      {/* <Row>
        <Col
          className={
            scrollTop === 0
              ? "text-center display-4 fw-bold fade-in py-4"
              : "d-none"
          }
        >
          Malù
          <div className="fs-2 fw-normal">La nostra sala</div>
        </Col>
      </Row> */}
      {/* <Row
        className={
          scrollTop === 0
            ? "text-center fade-in justify-content-center"
            : "d-none"
        }
      > */}
      {/* <Col className="col-3 text-center">
          <Row>
            <Col className="col-12 fw-bold fs-4 py-2 text-main nav-scale hover">
              Regolamento
            </Col>
            <Col className="smaller text-start ">
              Da anni il gruppo ProMusic s’impegna a ad essere un punto
              d’incontro tra i diversi gruppi musicali del territorio, favorendo
              e talora coordinando utilizzo di sale prove e realizzazione di
              spettacoli ed attività artistiche. La passione per la musica ci ha
              portato alla realizzazione di un sogno, la sala prove "Malù". La
              nuova sala prove è un luogo completamente insonorizzato e
              perfettamente allestito ed arredato per consentire,in un ambiente
              idoneo, a chiunque si approcci all’arte della musica di poter
              esprimere al meglio tale passione. La cura del suono e
              dell’acustica interna, l’allestimento della sala Malù con la
              presenza di un ampia strumentazione, e di un’ottima amplificazione
              curata in ogni dettaglio, vogliono rendere la sala prove un vero e
              proprio cuore pulsante e musicale per l'isola di Procida
            </Col>
          </Row>
        </Col> */}
      {/* <Col className="col-6 text-center">
          <Row>
            <Col className="col-12 fw-bold fs-4 py-2 text-main hover">
              Calendario
            </Col>
            <Col>
              <img
                src="/assets/images/minimal-style-2024-new-year-calendar-template-office-desk-wall-vector_1017-48214.avif"
                alt="calendar"
                style={{ width: "300px" }}
              />
            </Col>
          </Row>
        </Col> */}
      {/* </Row> */}

      <Row className="px-0 mx-0 mt-5 h-100 w-100">
        <Col className="col-12 px-0 mt-5 ">
          <SalaProve />
        </Col>
      </Row>
    </>
  );
};
export default Landingpage;
