import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { switchSectionAction } from "../../../redux/Actions";

const CorsiEMaster = () => {
  const dispatch = useDispatch();
  return (
    <Row className="p-0 m-0">
      <Col className="col-12 col-lg-6 p-0 m-0 img-corsi">
        <div className="h-100 w-100  d-flex d-lg-none filter-black text-light flex-column align-items-center justify-content-center">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
          consequatur sunt, quos adipisci assumenda fugit eum ipsa nostrum
          ratione consequuntur qui voluptatem maxime molestias blanditiis quas
          voluptatum vitae cupiditate."
          <div className="mt-4">
            <Link
              onClick={() => {
                dispatch(switchSectionAction("Services"));
              }}
              to="./services/courses"
              className="nav-link fst-normal"
            >
              <div className="btn btn-dark fw-bold">CORSI && MASTER</div>
            </Link>
          </div>
        </div>
      </Col>
      <Col className="col-6 d-none p-0 m-0 d-lg-flex flex-column align-items-center justify-content-center fst-italic vhX">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusamus
        consequatur sunt, quos adipisci assumenda fugit eum ipsa nostrum ratione
        consequuntur qui voluptatem maxime molestias blanditiis quas voluptatum
        vitae cupiditate."
        <div className="mt-4">
          <Link
            onClick={() => {
              dispatch(switchSectionAction("Services"));
            }}
            to="./services/courses"
            className="nav-link fst-normal"
          >
            <div className="btn btn-dark fw-bold">CORSI && MASTER</div>
          </Link>
        </div>
      </Col>
    </Row>
  );
};
export default CorsiEMaster;
