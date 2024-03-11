import { useState } from "react";
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const JoinUs = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div id="joinUs">
      <div className="w-100 d-flex justify-content-center ">
        <ArrowDownCircleFill
          className={
            isShown === true
              ? "fs-4 arrowInHover mt-3 rotate0"
              : "fs-4 arrowInHover mt-3 rotate"
          }
          onClick={() => {
            setIsShown(!isShown);
          }}
        />
      </div>

      <div
        className={
          isShown === true
            ? "mt-1 px-5 py-2 text-center normal"
            : "mt-1 px-5 py-2 text-center minimize"
        }
      >
        <span className="redInHover">
          DIVENTA NOSTRO SOCIO CON POCHI CLICK!
        </span>
        <div className="w-100 text-center ">
          <Link to={"/join"} className="nav-link ">
            <span
              className={
                isShown === true
                  ? " rounded-3 text-dark px-2 py-1 mt-2 d-inline-block myBtn2 myBtn3"
                  : " rounded-3 text-dark"
              }
            >
              JOIN US
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
