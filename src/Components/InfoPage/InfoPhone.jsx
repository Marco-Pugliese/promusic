import { useState } from "react";
import { TelephoneFill } from "react-bootstrap-icons";

const InfoPhone = () => {
  const [PhoneHovered, setPhoneHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setPhoneHovered(true);
      }}
      onMouseLeave={() => {
        setPhoneHovered(false);
      }}
      className="d-flex flex-row"
    >
      <TelephoneFill
        className={
          PhoneHovered === true
            ? "me-2 fs-4 text-red transition"
            : "me-2 fs-4 text-light transition"
        }
      />{" "}
      :
      <a
        className={
          PhoneHovered === true
            ? "nav-link mx-2 text-red transition"
            : "nav-link mx-2 text-light transition"
        }
        href="call:+390123456789"
      >
        +39 0123456789
      </a>
    </div>
  );
};
export default InfoPhone;
