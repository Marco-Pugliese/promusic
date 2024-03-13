import { useState } from "react";
import { PinMapFill } from "react-bootstrap-icons";

const InfoMap = () => {
  const [pinMapHovered, setPinMapHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setPinMapHovered(true);
      }}
      onMouseLeave={() => {
        setPinMapHovered(false);
      }}
      className="d-flex flex-row"
    >
      <PinMapFill
        className={
          pinMapHovered === true
            ? "me-2 fs-4 text-red transition"
            : "me-2 fs-4 text-light transition"
        }
      />
      :
      <a
        className={
          pinMapHovered === true
            ? "nav-link mx-2 text-red transition"
            : "nav-link mx-2 text-light transition"
        }
        href="https://maps.app.goo.gl/uBaKwPZRb54vLnxc6"
      >
        Via Marcello Scotti, 15 - Procida(Na) - 80079
      </a>
    </div>
  );
};
export default InfoMap;
