import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { Envelope, PinMapFill, TelephoneFill } from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const InfoPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showSend, setShowSend] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isEverythingChecked, setIsEverythingChecked] = useState(false);
  const check = () => {
    email !== "" && subject !== "" && name !== "" && message.length > 0
      ? setIsEverythingChecked(true)
      : setIsEverythingChecked(false);
  };
  // const nothing = () => {};

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
    <Container onClick={() => {}} className="mt-5 pt-5" id="contactme">
      <Row className="py-5 my-5">
        <Col className="col-6 fs-1 fw-bold">RESTIAMO IN CONTATTO!</Col>
        <Col>
          <div className="d-flex align-items-center my-2">
            <Envelope className="me-2 fs-4" /> :
            <a
              className="nav-link mx-2"
              href="mailto:promusicisoladiprocida@esempio.com"
            >
              promusicisoladiprocida@esempio.com
            </a>
          </div>
          <div className="d-flex align-items-center my-2">
            <PinMapFill className="me-2 fs-4" /> :
            <a
              className="nav-link mx-2"
              href="https://maps.app.goo.gl/uBaKwPZRb54vLnxc6"
            >
              Via Marcello Scotti, 15 - Procida(Na) - 80079
            </a>
          </div>
          <div className="d-flex align-items-center my-2">
            <TelephoneFill className="me-2 fs-4" /> :
            <a className="nav-link mx-2" href="call:+390123456789">
              +39 0123456789
            </a>
          </div>
        </Col>
      </Row>

      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Container className="mt-5 pt-5">
          <Row className="pt-5 mt-5">
            <Col className="col-12 col-lg-6 mt-5">
              <InputGroup className="mt-4">
                <InputGroup.Text
                  className="bg-transparent text-gray"
                  id="basic-addon1"
                >
                  Nome
                </InputGroup.Text>
                <input
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
                    Your message has been sent properly!
                  </div>
                )}
                {showError && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Oooops. We had a problem on delivering your message, try
                    again!
                  </div>
                )}
              </>
            </Col>
            <Col className="col-10 offset-1 py-3 mt-3">
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
                    Cancel
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </form>
      {/* <Container id="icons-wrap" className="mt-4">
        <Icons />
      </Container> */}
    </Container>
  );
};
export default InfoPage;
