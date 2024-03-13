import { useState } from "react";
import { Envelope } from "react-bootstrap-icons";

const InfoEmail = () => {
  const [envelopeHovered, setEnvelopeHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setEnvelopeHovered(true);
      }}
      onMouseLeave={() => {
        setEnvelopeHovered(false);
      }}
      className="d-flex flex-row"
    >
      <Envelope
        className={
          envelopeHovered === true
            ? "me-2 fs-4 text-red transition"
            : "me-2 fs-4 text-light transition"
        }
      />
      :
      <a
        className={
          envelopeHovered === true
            ? "nav-link mx-2 text-red transition"
            : "nav-link mx-2 text-light transition"
        }
        href="mailto:promusicisoladiprocida@esempio.com"
      >
        promusicisoladiprocida@esempio.com
      </a>
    </div>
  );
};

export default InfoEmail;
