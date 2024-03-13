import { Card } from "react-bootstrap";

const DomenicoCard = () => {
  return (
    <Card className="shadow-lg">
      <Card.Img
        variant="top"
        src="./assets/images/images/duechitarre.jpeg"
        className="w-100"
      />
      <span className="text-light py-2 nameonpic fw-bold">
        Domenico Mattera
      </span>
      <Card.Body>
        <Card.Text className="px-3 mb-4 fst-italic">
          Maestro di musica e musicista di talento, si impegna a pieno nella
          realizzazione di eventi, che amplifichino la cultura della musica live
          sul territorio procidano.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default DomenicoCard;
