import { useState } from "react";
import { Col, Row } from "react-bootstrap";

const SalaProve = () => {
  const [navHover2, setNavHover2] = useState(false);
  return (
    <Row
      onMouseEnter={() => {
        setNavHover2(true);
      }}
      onMouseLeave={() => {
        setNavHover2(false);
      }}
      className={
        navHover2 === true
          ? "bg-transition2 px-0 mx-0 h-100 w-100"
          : "px-0 mx-0 h-100 w-100"
      }
    >
      <Col className="col-1 col-lg-2 bg-blue h-100 border-blues text-center fs-4 d-flex align-items-center h-100 justify-content-center">
        Sala Prove
      </Col>
      <Col
        className={
          navHover2 === true
            ? "border-blues text-contrast h-100 d-flex align-items-center px-5 py-3"
            : "border-blues text-blue h-100 d-flex align-items-center px-5 py-3"
        }
      >
        Da anni il gruppo ProMusic s’impegna a ad essere un punto d’incontro tra
        i diversi gruppi musicali del territorio, favorendo e talora coordinando
        utilizzo di sale prove e realizzazione di spettacoli ed attività
        artistiche. La passione per la musica ci ha portato alla realizzazione
        di un sogno, la sala prove "Malù". La nuova sala prove è un luogo
        completamente insonorizzato e perfettamente allestito ed arredato per
        consentire,in un ambiente idoneo, a chiunque si approcci all’arte della
        musica di poter esprimere al meglio tale passione. La cura del suono e
        dell’acustica interna, l’allestimento della sala Malù con la presenza di
        un ampia strumentazione, e di un’ottima amplificazione curata in ogni
        dettaglio, vogliono rendere la sala prove un vero e proprio cuore
        pulsante e musicale per l'isola di Procida
      </Col>
      <Col className="col-1 col-lg-3 h-100"></Col>
    </Row>
  );
};
export default SalaProve;
