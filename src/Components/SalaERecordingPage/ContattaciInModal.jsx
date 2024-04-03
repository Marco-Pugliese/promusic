import { useRef, useState } from "react";
import { Col, Container, InputGroup, Modal, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const ContattaciInModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSend, setShowSend] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isEverythingChecked, setIsEverythingChecked] = useState(false);
  const check = () => {
    email !== "" && subject !== "" && name !== ""
      ? setIsEverythingChecked(true)
      : setIsEverythingChecked(false);
    console.log(email, subject, name, message);
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_promusic", "template_w1nrwer", form.current, {
        publicKey: "qPPk62aiLtoFATMcB",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowSend(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowError(true);
        }
      );
  };

  return (
    <>
      <span
        className="myBtn2 text-dark2 px-3 py-2 rounded-4 fw-bold"
        onClick={handleShow}
      >
        Contattaci!
      </span>
      <Modal show={show} onHide={handleClose} className="text-dark2 rounded-3">
        <Modal.Header closeButton>
          <Modal.Title>
            <span>
              <img
                src="/assets/images/logo ProMusic copia.png"
                alt="logo"
                className="w-10"
              />
            </span>
            <span className="fs-6">
              <span className="smaller">
                Associazione Culturale & Musicale ProMusic
              </span>
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark1 rounded-bottom-1">
          <form
            ref={form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="d-flex flex-column justify-content-between align-items-center"
          >
            <Container className="">
              <Row>
                <Col className="col-12 col-lg-6 ">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      Nome
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      type="text"
                      required
                      name="user_name"
                      className="bg-transparent text-gray form-control"
                      aria-label="name"
                      aria-describedby="basic-addon1"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col className="col-12 col-lg-6">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      eMail
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      type="email"
                      className="bg-transparent text-gray form-control"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                      name="user_email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>
                <Col className="col-12 col-lg-6 offset-lg-3">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      Oggetto
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      required
                      className="bg-transparent text-gray form-control"
                      aria-label="subject"
                      aria-describedby="basic-addon1"
                      name="user_subject"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>

                <Col className="col-12 h-100">
                  <InputGroup className="mt-4 h-100">
                    <InputGroup.Text className="bg-transparent text-gray ">
                      Testo
                    </InputGroup.Text>
                    <textarea
                      autoComplete="OFF"
                      required
                      className="bg-transparent text-gray form-control"
                      as="textarea"
                      aria-label="With textarea"
                      name="message"
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>

                  <>
                    {showSend && (
                      <div className="alert alert-success mt-3" role="alert">
                        Il tuo messaggio è stato inviato correttamente!
                      </div>
                    )}
                    {showError && (
                      <div className="alert alert-danger mt-3" role="alert">
                        Oooops. Sembra ci sia stato un problema nella consegna
                        del messaggio. Riprova
                      </div>
                    )}
                  </>
                </Col>
                <Col className="col-10 offset-1 pt-3 pb-1 mt-5">
                  <Row className="text-center">
                    <Col className="text-center offset-1 col-4">
                      <button
                        type="submit"
                        className="w-100 myBtn1 py-1 rounded-3"
                        onClick={(e) => {
                          e.preventDefault();

                          check();
                          isEverythingChecked === true
                            ? sendEmail()
                            : setShowError(true);
                          setName("");
                          setEmail("");
                          setSubject("");
                          setMessage("");
                        }}
                      >
                        Send
                      </button>
                    </Col>
                    <Col className="col-1"></Col>
                    <Col className="text-center offset-1 col-4">
                      <button
                        type="button"
                        className="w-100 myBtn2 py-1 rounded-3"
                        onClick={(e) => {
                          setName("");
                          setEmail("");
                          setSubject("");
                          setMessage("");
                        }}
                      >
                        Clear
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ContattaciInModal;
