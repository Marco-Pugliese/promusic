import { Card } from "react-bootstrap";

const MicheleCard = () => {
  return (
    <Card className="shadow-lg">
      <Card.Img
        variant="top"
        src="./assets/images/picsPromusic/michele.jpeg"
        className="w-100 filterBW"
      />
      <span className="text-light py-2 nameonpic fw-bold">
        Michele Lubrano Lavadera
      </span>
      <Card.Body>
        <Card.Text className="px-3 mb-4 fst-italic">
          Una forte passione per la musica, e per il suo territorio, lo spinge a
          promuovere la musica live, sull'isola di Procida, ed esportarla fuori
          i suoi confini
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default MicheleCard;
