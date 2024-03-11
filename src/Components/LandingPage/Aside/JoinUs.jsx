import { useState } from "react";
import { ArrowDownCircleFill, ArrowUpCircleFill } from "react-bootstrap-icons";

const JoinUs = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div id="joinUs">
      <div className="w-100 d-flex justify-content-center mt-3">
        <div
          className={
            isShown === false
              ? "h-100 d-flex align-items-center mt-2 justify-content-center"
              : " h-100 d-flex align-items-center mt-2 justify-content-center d-none"
          }
        >
          <ArrowUpCircleFill
            className="fs-4 pointer"
            onClick={() => {
              setIsShown(true);
            }}
          />
          <span className="mx-2">JOIN US !</span>
          <ArrowUpCircleFill
            className="fs-4 pointer"
            onClick={() => {
              setIsShown(true);
            }}
          />
        </div>
        <div
          className={
            isShown === true
              ? " h-100 d-flex align-items-center mt-2 justify-content-center"
              : " h-100 d-flex align-items-center mt-2 justify-content-center d-none"
          }
        >
          <ArrowDownCircleFill
            className="fs-4 pointer"
            onClick={() => {
              setIsShown(false);
            }}
          />
          <span className="mx-2">JOIN US !</span>
          <ArrowDownCircleFill
            className="fs-4 pointer"
            onClick={() => {
              setIsShown(false);
            }}
          />
        </div>
      </div>

      <div
        className={
          isShown === true ? "mt-1 px-5 py-2 slideup" : "mt-1 px-5 py-2 close"
        }
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui labore
        pariatur praesentium soluta eaque illo cupiditate excepturi dolore?
        Commodi obcaecati quis necessitatibus minima! Porro, sunt! Animi natus
        ipsam aspernatur provident. JOIN US
        <button>JOIN US</button>
      </div>
    </div>
  );
};
export default JoinUs;
