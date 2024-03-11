import { Container } from "react-bootstrap";
import CorsiEMaster from "./CorsiEMaster";
import SalaProve from "./SalaProve";
import Recording from "./Recording";
import LiveMusic from "./LiveMusic";
import JoinUs from "./JoinUs";

const Aside = () => {
  return (
    <div className="w-100" id="aside">
      <Container className="text-dark p-0 m-0 text-center mx-auto">
        <CorsiEMaster />
        <LiveMusic />
        <Recording />
        <SalaProve />
      </Container>
      <Container>
        <JoinUs />
      </Container>
    </div>
  );
};
export default Aside;
