import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  const [heroHover, setHeroHover] = useState(false);
  return (
    <Container fluid className="m-o p-0">
      <Row
        id="heroSection"
        className={
          heroHover === true
            ? "bg-transition p-0 m-0 h-100 mx-auto"
            : "bg-transitionbck p-0 m-0 h-100 mx-auto"
        }
        onMouseEnter={() => {
          setHeroHover(true);
        }}
        onMouseLeave={() => {
          setHeroHover(false);
        }}
      >
        <Col className="col-1 col-lg-2 h-100"></Col>
        <Col className="p-0 m-0 fade-in fst-italic bg-darker col-10 smaller text-blue">
          <Row className="p-0 m-0 border-blues h-100">
            <Col
              className={
                heroHover === true
                  ? "d-flex h-100 align-items-center text-center text-contrast px-5 py-1 p-0 m-0 col-12 col-lg-9 col-xxl-8"
                  : "d-flex h-100 align-items-center text-center px-5 py-1 p-0 m-0 col-12 col-lg-9 col-xxl-8"
              }
            >
              "La ProMusic è un gruppo di giovani che hanno a cuore la cultura
              musicale e tutte le forme di arte e intrattenimento, e si propone
              di creare momenti di socializzazione positiva, di crescita
              culturale e realizzazioni artistico - musicali. La ProMusic mira a
              diventare un "luogo" reale e virtuale di incontro di passioni, un
              crocevia di destini, che si uniscono per trasformare, il luogo in
              cui vivono in quello che più assomiglia ai sogni di ciascuno.
              L'arte, la cultura, l'attenzione al sociale, la partecipazione
              attiva; queste le parole d'ordine, questa la nostra ispirazione,
              questi i nostri principi. La ProMusic propone attività che
              riguardano in maniera prevalente il coinvolgimento dei giovani, e
              di tutti nell’arte della musica. Di fondamentale importanza, nello
              spirito dell’ Associazione, è il concetto di partecipazione
              attiva. Il centro polivalente sarà sempre uno spazio aperto alla
              popolazione, un luogo dove sperimentare e sperimentarsi come
              cittadino attivo e partecipe al processo di crescita del
              territorio. Il tessuto giovanile procidano ha sempre dato prova di
              grande operosità, specie se sollecitato e sostenuto. Invitare alla
              partecipazione, coinvolgere, accogliere idee è il principio
              fondamentale della ProMusic."
            </Col>
            <Col className="h-100 bg-blue d-none d-lg-flex col-2 col-lg-3 col-xxl-4">
              <div className="h-100 p-0 m-0 align-items-center text-center bg-blue">
                <img
                  src="assets/images/logo ProMusic copia.png"
                  alt="logo"
                  style={{ width: "250px" }}
                />
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-1 bg-blue d-none d-lg-block"></Col>
      </Row>
    </Container>
  );
};
export default HeroSection;
