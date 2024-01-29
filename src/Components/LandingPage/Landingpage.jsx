import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const Landingpage = () => {
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
      <Row id="hero">
        <Col className="bounce-in-left p-5 fst-italic bg-darker col-12 col-lg-8 col-xl-7 col-xxl-6 smaller">
          "La ProMusic è un gruppo di giovani che hanno a cuore la cultura
          musicale e tutte le forme di arte e intrattenimento, e si propone di
          creare momenti di socializzazione positiva, di crescita culturale e
          realizzazioni artistico - musicali. La ProMusic mira a diventare un
          "luogo" reale e virtuale di incontro di passioni, un crocevia di
          destini, che si uniscono per trasformare, il luogo in cui vivono in
          quello che più assomiglia ai sogni di ciascuno. L'arte, la cultura,
          l'attenzione al sociale, la partecipazione attiva; queste le parole
          d'ordine, questa la nostra ispirazione, questi i nostri principi. La
          ProMusic propone attività che riguardano in maniera prevalente il
          coinvolgimento dei giovani, e di tutti nell’arte della musica. Di
          fondamentale importanza, nello spirito dell’ Associazione, è il
          concetto di partecipazione attiva. Il centro polivalente sarà sempre
          uno spazio aperto alla popolazione, un luogo dove sperimentare e
          sperimentarsi come cittadino attivo e partecipe al processo di
          crescita del territorio. Il tessuto giovanile procidano ha sempre dato
          prova di grande operosità, specie se sollecitato e sostenuto. Invitare
          alla partecipazione, coinvolgere, accogliere idee è un principio
          fondamentale della ProMusic."
        </Col>

        <Col className="bounce-in-right fs-1 text-center pt-5 col-12 col-lg-4 col-xl-5 col-xxl-6 d-none d-lg-block">
          <img
            src="assets/images/logo ProMusic copia.png"
            alt="logo"
            style={{ width: "300px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col
          className={
            scrollTop > 10
              ? "text-center display-4 fw-bold bounce-in-left-0 py-4"
              : "d-none"
          }
        >
          Malù
        </Col>
      </Row>
      <Row
        className={
          scrollTop > 70
            ? "text-center bounce-in-right justify-content-center"
            : "d-none"
        }
      >
        <Col className="col-3 text-center">
          <Row>
            <Col className="col-12 fw-bold fs-4 py-2 text-main nav-scale hover">
              Regolamento Sala
            </Col>
            <Col className="smaller text-start">
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
export default Landingpage;
