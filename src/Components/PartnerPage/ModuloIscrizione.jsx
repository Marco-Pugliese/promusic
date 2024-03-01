import { Col, Container, Row } from "react-bootstrap";

const ModuloIscrizione = () => {
  return (
    <Container>
      <Row>
        SEGUI LE ISTRUZIONI:
        <Col>1{")"}: SCARICA E COMPILA IL MODULO</Col>
        <Col>
          2{"("}: INVIA UN' EMAIL CON IL MODULO COMPILATO a:
          procidapromusic@esempio.it
        </Col>
        <Col>3{")"}: ATTENDI LA NOSTRA CONFERMA CON TUTTI I TUOI DATI!</Col>
        <Col>
          4{")"}: GODITI TUTTI I BENEFICI DI ESSERE UN SOCIO DELLA PROMUSIC
        </Col>
      </Row>{" "}
    </Container>
  );
};
export default ModuloIscrizione;
