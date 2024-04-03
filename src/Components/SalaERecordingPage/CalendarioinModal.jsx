import { useState } from "react";
import { Modal } from "react-bootstrap";

const CalendarioinModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <span
        className="myBtn1 text-dark2 px-3 py-2 rounded-4 fw-bold pointer"
        onClick={handleShow}
      >
        Visualizza Calendario!
      </span>
      <Modal show={show} onHide={handleClose}>
        <div className="calendarioINIFRAME">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=Europe%2FRome&bgcolor=%23ffffff&title=WEB&mode=WEEK&showNav=0&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showDate=0&src=YXNzb2NpYXppb25lcHJvbXVzaWNAZ21haWwuY29t&src=azEyZWVkOGZkbGRvcTdhcnZ1dXY2NnYxOGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NzRqdmNpNWd1aWV0NTNhMm1qcHV0cGh2cHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aXQuaXRhbGlhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23039BE5&color=%23616161&color=%23E67C73&color=%23009688"
            className="w-100 h-100 rounded-3"
          />
        </div>
      </Modal>
    </>
  );
};
export default CalendarioinModal;
