import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const PartnerPage = () => {
  return (
    <Container fluid className="m-0 p-0">
      <Row className="bg-dark2 m-0 p-0 v60">
        <Col className="bg-dark3 bounce-in-left p-5 fw-bold d-none d-lg-flex col-6 smaller d-flex flex-column justify-content-center h-100 m-0 p-0">
          <div>
            Benvenuti nella nostra comunità musicale! Siamo lieti di accogliervi
            nel nostro spazio dedicato alla passione per la musica.
            Registrandovi, avrete accesso esclusivo alla nostro mondo, dove
            potrete partecipare a sessioni musicali, ricevere informazioni
            dettagliate su corsi, workshop e eventi speciali. La vostra
            iscrizione non solo vi permetterà di esplorare le opportunità
            offerte dalla nostra associazione, ma contribuirà anche a sostenere
            la nostra missione senza scopo di lucro nel promuovere la musica e
            la cultura. Unirsi a noi è molto semplice e richiede pochissimo
            tempo, e vi garantirà un'esperienza musicale arricchente e
            stimolante. Non perdete l'opportunità di far parte di questa
            straordinaria comunità di appassionati di musica.
            <br />
            <br />
            Scarica ora il modulo di iscrizione, oppure compila i campi nella
            pagina seguendo le istruzioni per diventare socio e iniziate il tuo
            viaggio musicale con noi!
          </div>
          <div className="text-end mt-5 me-5">
            <span className="bg-light2 text-dark redShadowinHover rounded-4 py-1 px-3 display-inline-block">
              Scarica
            </span>
          </div>
        </Col>
        <Col className="bg-partner  m-0 p-0">
          <div className="h-100 w-100 filter-black2">
            <div className=" d-flex d-lg-none filter-black flex-column justify-content-center h-100">
              <div>
                Benvenuti nella nostra comunità musicale! Siamo lieti di
                accogliervi nel nostro spazio dedicato alla passione per la
                musica. Registrandovi, avrete accesso esclusivo alla nostro
                mondo, dove potrete partecipare a sessioni musicali, ricevere
                informazioni dettagliate su corsi, workshop e eventi speciali.
                La vostra iscrizione non solo vi permetterà di esplorare le
                opportunità offerte dalla nostra associazione, ma contribuirà
                anche a sostenere la nostra missione senza scopo di lucro nel
                promuovere la musica e la cultura. Unirsi a noi è molto semplice
                e richiede pochissimo tempo, e vi garantirà un'esperienza
                musicale arricchente e stimolante. Non perdete l'opportunità di
                far parte di questa straordinaria comunità di appassionati di
                musica.
                <br />
                <br />
                Scarica ora il modulo di iscrizione, oppure compila i campi
                nella pagina seguendo le istruzioni per diventare socio e
                iniziate il tuo viaggio musicale con noi!
              </div>
              <div className="text-end mt-5 me-5">
                <span className="  text-dark redShadowinHover rounded-4 py-1 px-3 display-inline-block">
                  Scarica
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="bg-dark1 p-0 m-0">
        <Col className="col-6 d-lg-block d-none">
          <div className="w-100 h-100 bg-dark3reverse d-none d-lg-flex align-items-center text-center justify-content-center smaller p-5 fw-bold">
            <ul>
              <li>input</li>
              <li>input</li>
              <li>input</li>
              <li>input</li>
              <li>input</li>
              <li>input</li>
              <li>input</li>
              <li>input</li>
            </ul>
          </div>
        </Col>
        <Col className="col-12 col-lg-6 bg-dark2reverse v60 p-0 m-0">
          <div className="w-100 h-100 bg-dark3reverse d-none d-lg-flex align-items-center text-center justify-content-center smaller p-5 fw-bold">
            <ul>
              <li>input</li>
              <li>input</li>
              <li>input</li>
              <li>input</li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="p-0 m-0 bg-dark2opposite v60">
        <Col className="p-0 m-0 bg-dark3opposite">
          <Row>
            <Col>
              <div className="w-100 h-100 d-lg-flex align-items-center text-center justify-content-center smaller p-5 fw-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                ullam dolore harum sunt amet nam laudantium, sequi, eos est
                perferendis accusamus, quidem debitis impedit tempore ad. Et,
                repudiandae? Totam, minus.
              </div>
            </Col>
            <Col>
              <div className="w-100 h-100 d-lg-flex align-items-center text-center justify-content-center smaller p-5 fw-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
                veritatis quibusdam, necessitatibus facere ab dolor, iusto amet
                esse velit voluptatem dicta quae modi rerum natus aliquid
                commodi. Voluptates, dignissimos maxime!
              </div>
            </Col>
            <Col>
              <div className="w-100 h-100 d-lg-flex align-items-center text-center justify-content-center smaller p-5 fw-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati omnis blanditiis, maxime quam, repudiandae ducimus,
                asperiores sunt tempore nobis nisi sapiente consequuntur quos
                perferendis! Aut sit minima officiis numquam iste.
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PartnerPage;
