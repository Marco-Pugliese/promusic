import { Col, Container, InputGroup, Row } from "react-bootstrap";
import {
  ArrowDownCircleFill,
  Envelope,
  PinMapFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const InfoPage = () => {
  const form = useRef();
  const [envelopeHovered, setEnvelopeHovered] = useState(false);
  const [pinMapHovered, setPinMapHovered] = useState(false);
  const [PhoneHovered, setPhoneHovered] = useState(false);
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
    <Container fluid onClick={() => {}} className="text-light p-0 m-0">
      <Row id="contactme">
        <Col className="col-12 bg-infoPage">
          <Row className="h-100 align-items-center justify-content-center">
            <Col className="col-6 text-center d-flex flex-column align-items-center justify-content-center fs-1 fw-bold text-light">
              I NOSTRI CONTATTI!
            </Col>
            <Col className="d-flex flex-column align-items-center justify-content-center">
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
                />{" "}
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
            </Col>
          </Row>
        </Col>
      </Row>

      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        id="form"
        className="bg-form d-flex flex-column justify-content-between align-items-center"
      >
        <Container
          fluid
          id="scrivici"
          className="d-flex bg-blue align-items-center justify-content-center"
        >
          <div className="text-red fs-1 ">
            <ArrowDownCircleFill className="pulsate-fwd mx-4" />
            INVIACI UNA MAIL{" "}
            <ArrowDownCircleFill className="pulsate-fwd mx-4" />
          </div>
        </Container>
        <Container>
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
        <Container className="useslessPadding"></Container>
      </form>
    </Container>
  );
};
export default InfoPage;
