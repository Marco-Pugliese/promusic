import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const PartnerPage = () => {
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
          <div className="d-flex flex-column">
            <div className="mb-4">
              Benvenuti nella nostra comunità musicale! Siamo lieti di
              accogliervi nel nostro spazio dedicato alla passione per la
              musica. Registrandovi, avrete accesso esclusivo alla nostro mondo,
              dove potrete partecipare a sessioni musicali, ricevere
              informazioni dettagliate su corsi, workshop e eventi speciali. La
              vostra iscrizione non solo vi permetterà di esplorare le
              opportunità offerte dalla nostra associazione, ma contribuirà
              anche a sostenere la nostra missione senza scopo di lucro nel
              promuovere la musica e la cultura. Unirsi a noi è molto semplice e
              richiede pochissimo tempo, e vi garantirà un'esperienza musicale
              arricchente e stimolante. Non perdete l'opportunità di far parte
              di questa straordinaria comunità di appassionati di musica.
              <br />
              <br />
              Scarica ora il modulo di iscrizione, segui le istruzioni per
              diventare socio e iniziate il vostro viaggio musicale con noi!
            </div>
            <div className="text-end me-5">
              <span className=" btn btn-main rounded-4 py-1 px-3 display-inline-block">
                Scarica
              </span>
            </div>
          </div>
        </Col>

        <Col className="bounce-in-right fs-1 text-center pt-5 col-12 col-lg-4 col-xl-5 col-xxl-6 d-none d-lg-block">
          <img
            src="assets/images/logo ProMusic copia.png"
            alt="logo"
            style={{ width: "300px" }}
          />
        </Col>
      </Row>{" "}
      <Row>
        <Col
          className={
            scrollTop > 10
              ? "text-center display-4 fw-bold fade-in py-4"
              : "d-none"
          }
        >
          I Nostri Corsi
        </Col>
      </Row>
      <Row
        className={
          scrollTop > 70
            ? "text-center fade-in justify-content-center"
            : "d-none"
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
      <Row>
        <Col
          className={
            scrollTop > 550
              ? "text-center display-4 fw-bold fade-in py-4"
              : "d-none"
          }
        >
          I Nostri Eventi
        </Col>
      </Row>
      <Row
        className={
          scrollTop > 670
            ? "text-center fade-in justify-content-center"
            : "d-none"
        }
      >
        <Col className="col-3 text-center">
          <Row>
            <Col className="col-12 fw-bold fs-4 py-2 text-main nav-scale hover">
              Eventi In Programma
            </Col>
            <Col className="smaller text-start">
              <ul>
                <li>Evento 1: Lunedì 3/03/2024, start: 17</li>
                <li>Evento 2: Martedì 6/06/2024, start: 18:00</li>
                <li>Evento 3: Mercoledì 10/10/2024, start 20:00</li>
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
export default PartnerPage;
