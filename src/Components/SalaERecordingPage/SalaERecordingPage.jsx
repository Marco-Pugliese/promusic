import { Container } from "react-bootstrap";
import Recording from "./Recording";
import SalaProve from "./SalaProve";

const SalaERecordingPage = () => {
  return (
    <Container fluid className="p-0 m-0">
      <div className="minv60 bg-disco">
        <div className="v60-2 filter-black">
          <span className="h-100 d-flex align-items-center fs-5 justify-content-center spacing-1">
            “La musica è per l'anima quello che la ginnastica è per il corpo.”
            {`<Platone>`}
          </span>
        </div>
      </div>

      <SalaProve />

      <Recording />
    </Container>
  );
};
export default SalaERecordingPage;
