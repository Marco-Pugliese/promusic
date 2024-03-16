import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { ArrowDownCircleFill } from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import DomenicoCard from "./DomenicoCard";
import MicheleCard from "./MicheleCard";
import InfoEmail from "./InfoEmail";
import InfoMap from "./InfoMap";
import InfoPhone from "./InfoPhone";

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
    <Container fluid className="text-light p-0 m-0">
      <Row id="contactme">
        <Col className="col-12 bg-infoPage text-shadow">
          <Row className="h-100 align-items-center justify-content-center">
            <Col className="col-6 text-center d-flex flex-column align-items-center justify-content-center fs-1 fw-bold text-light">
              I NOSTRI CONTATTI!
            </Col>
            <Col className="d-flex flex-column align-items-center justify-content-center">
              <InfoEmail />
              <InfoMap />
              <InfoPhone />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="bg-light2 border-bottom-red justify-content-center pb-5 text-dark ">
        <Col className="col-12 fw-bold fs-2 text-center pt-5 pb-2 text-shadow-light">
          CHI SIAMO?
        </Col>
        <Col className="text-center col-8 col-md-5 mt-4 col-xl-4 col-xxl-3 px-4">
          <MicheleCard />
        </Col>
        <Col className="text-center col-8 col-md-5 mt-4 col-xl-4 col-xxl-3 px-4">
          <DomenicoCard />
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
          className="br-redDark d-flex bg-blue align-items-center justify-content-center"
        >
          <div className="text-red text-shadow-red d-flex align-items-center">
            <ArrowDownCircleFill className="pulsate-fwd fs-2 mx-4" />
            <span className="fs-fluid">INVIACI UNA MAIL</span>
            <ArrowDownCircleFill className="pulsate-fwd fs-2 mx-4" />
          </div>
        </Container>
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
                    Oooops. Sembra ci sia stato un problema nella consegna del
                    messaggio. Riprova
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
