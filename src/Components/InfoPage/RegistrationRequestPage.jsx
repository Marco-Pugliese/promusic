import { useRef, useState } from "react";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const RegistrationRequestPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  //   const [ID, setID] = useState("");
  const [birthday, setBirthday] = useState("");
  const [showSend, setShowSend] = useState(false);
  const [showError, setShowError] = useState(false);
  // const [clicked, setClicked] = useState(false);
  const [isEverythingChecked, setIsEverythingChecked] = useState(false);
  const check = () => {
    email !== "" &&
    name !== "" &&
    surname !== "" &&
    telefono !== "" &&
    birthday !== ""
      ? // && ID !== ""
        setIsEverythingChecked(true)
      : setIsEverythingChecked(false);
  };
  // const nothing = () => {};

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_registerPromusic",
        "template_proMusicRegistr",
        form.current,
        {
          publicKey: "qPPk62aiLtoFATMcB",
        }
      )
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
        <Col className="col-6 fs-1 fw-bold">
          Invia La tua richiesta di Iscrizione!
        </Col>
        <form
          ref={form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Container className="mt-5 pt-5">
            <Row className="pt-5 mt-5">
              <Col className="col-12 col-lg-6 mt-5">
                <InputGroup className="border-change">
                  <InputGroup.Text
                    className="bg-transparent text-gray border-gray"
                    id="basic-addon1"
                  >
                    Nome
                  </InputGroup.Text>
                  <input
                    type="text"
                    required
                    name="user_name"
                    className="bg-transparent text-gray border-gray form-control"
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
              <Col className="col-12 col-lg-6 mt-5">
                <InputGroup className="border-change">
                  <InputGroup.Text
                    className="bg-transparent text-gray border-gray"
                    id="basic-addon1"
                  >
                    Cognome
                  </InputGroup.Text>
                  <input
                    type="text"
                    required
                    name="user_surname"
                    className="bg-transparent text-gray border-gray form-control"
                    aria-label="surname"
                    aria-describedby="basic-addon1"
                    value={surname}
                    onChange={(e) => {
                      setSurname(e.target.value);
                      setShowError(false);
                      setShowSend(false);
                    }}
                  />
                </InputGroup>
              </Col>

              <Col className="col-12 col-lg-6 mt-5">
                <InputGroup className="border-change">
                  <InputGroup.Text
                    className="bg-transparent text-gray border-gray"
                    id="basic-addon1"
                  >
                    eMail
                  </InputGroup.Text>
                  <input
                    type="email"
                    className="bg-transparent text-gray border-gray form-control"
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
              <Col className="col-12 col-lg-6 mt-5">
                <InputGroup className="border-change">
                  <InputGroup.Text
                    className="bg-transparent text-gray border-gray"
                    id="basic-addon1"
                  >
                    Telefono
                  </InputGroup.Text>
                  <input
                    type="tel"
                    className="bg-transparent text-gray border-gray form-control"
                    aria-label="telefono"
                    aria-describedby="basic-addon1"
                    name="user_telefono"
                    value={telefono}
                    onChange={(e) => {
                      setTelefono(e.target.value);
                      setShowError(false);
                      setShowSend(false);
                    }}
                  />
                </InputGroup>
              </Col>
              <Col className="col-12 col-lg-6 mt-5">
                <InputGroup className="border-change">
                  <InputGroup.Text
                    className="bg-transparent text-gray border-gray"
                    id="basic-addon1"
                  >
                    Data di Nascita
                  </InputGroup.Text>
                  <input
                    type="date"
                    className="bg-transparent text-gray border-gray form-control"
                    aria-label="birthday"
                    aria-describedby="basic-addon1"
                    name="user_birthDay"
                    value={birthday}
                    onChange={(e) => {
                      setBirthday(e.target.value);
                      setShowError(false);
                      setShowSend(false);
                    }}
                  />
                </InputGroup>
              </Col>
              {/* <Col className="col-12 mt-5">
                <div> Documento di Riconoscimento</div>
                <InputGroup className="border-change w-50">
                  <input
                    type="file"
                    className="bg-transparent text-gray border-gray form-control "
                    aria-label="ID"
                    aria-describedby="basic-addon1"
                    name="user_ID"
                    value={ID}
                    onChange={(e) => {
                      setID(e.target.value);
                      setShowError(false);
                      setShowSend(false);
                    }}
                  />
                </InputGroup>
              </Col> */}
              <Col className="col-12 h-100">
                {showSend && (
                  <div className="alert alert-success mt-3" role="alert">
                    La tua richiesta di iscrizione è stata inviata. Riceverai
                    presto un'email di risposta!
                  </div>
                )}
                {showError && (
                  <div className="alert alert-danger mt-3" role="alert">
                    Oooops. Sembra che ci sia stato un problema nell'invio della
                    richiesta. Ricarica la pagina e riprova!
                  </div>
                )}
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
                        setTelefono("");
                        setBirthday("");
                      }}
                    >
                      Invia
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
                        setTelefono("");
                        setBirthday("");
                      }}
                    >
                      Cancella
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </form>
      </Row>
    </Container>
  );
};
export default RegistrationRequestPage;
