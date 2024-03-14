import { useRef, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import emailjs from "@emailjs/browser";

const CorsiEMasterPage = () => {
  const form = useRef();

  const [name, setName] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [associate, setAssociate] = useState("");
  const [corso, setCorso] = useState("Canto");
  const [showSend, setShowSend] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isEverythingChecked, setIsEverythingChecked] = useState(false);
  const check = () => {
    name !== "" &&
    cognome !== "" &&
    phone !== "" &&
    email !== "" &&
    associate !== "" &&
    corso !== ""
      ? setIsEverythingChecked(true)
      : setIsEverythingChecked(false);
    console.log(name, cognome, phone, email, associate);
  };

  const sendEmail = () => {
    emailjs
      .sendForm("service_promusic", "template_culxn4h", form.current, {
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
      <Container fluid className="bg-Corsi p-0 m-0">
        <Container fluid className=" minv90 p-0 m-0">
          <Row>
            <Col className="col-12 col-lg-6 text-center d-flex align-items-center flex-column justify-content-center v90 my-auto fs-3 px-5 filter-black filter-black2">
              " Esplora le nostre proposte, iscriviti ai nostri Corsi e
              perfeziona le tue passioni "
              <div className="fs-6 mt-4 btn-light btn hover bg-light2 text-dark2 px-3 py-2 rounded-4 border border-2 ">
                Visualizza Calendario
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="bg-dark1 p-0 m-0">
        <Row>
          <Col className="text-light2 py-4 mt-5 text-center fs-2 spacing-1 shadow-white">
            I NOSTRI CORSI
          </Col>
        </Row>
        <Row className="p-0 m-0 w-75 mx-auto">
          <Col className="col-6 p-0 m-0 text-center">
            <img
              src=".././assets/images/images/calendarioesempio.avif"
              alt="calendar"
              className="w-100 calendar"
            />
          </Col>
          <Col className="d-flex align-items-center">
            <ul>
              <li className="mb-3">
                Corso introduzione alla Musica (Età : 5anni
                <ArrowRight className="mx-2" />
                15anni)
                <ul>
                  <li>d: Lunedi,Martedi,Mercoledì</li>
                  <li>h: 15-17</li>
                </ul>
              </li>
              <li className="mb-3">
                Corso di Chitarra
                <ul>
                  <li>d: Lunedi,Martedi,Mercoledì</li>
                  <li>h: 17-19</li>
                </ul>
              </li>
              <li className="mb-3">
                Corso di Batteria
                <ul>
                  <li>d: Giovedì,Venerdì,Sabato</li>
                  <li>h: 15-17</li>
                </ul>
              </li>

              <li>
                Corso di Canto
                <ul>
                  <li>d: Giovedì,Venerdì,Sabato</li>
                  <li>h: 17-19</li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-light2 py-4 mt-5 text-center fs-3 spacing-1 shadow-white">
            I tuoi dati
            <Container>
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
                    <Col className="col-12 col-lg-6 ">
                      <InputGroup className="mt-4">
                        <InputGroup.Text
                          className="bg-transparent text-gray"
                          id="basic-addon1"
                        >
                          Cognome
                        </InputGroup.Text>
                        <input
                          autoComplete="OFF"
                          type="text"
                          required
                          name="user_cognome"
                          className="bg-transparent text-gray form-control"
                          aria-label="cognome"
                          aria-describedby="basic-addon1"
                          value={cognome}
                          onChange={(e) => {
                            setCognome(e.target.value);
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
                    <Col className="col-12 col-lg-6">
                      <InputGroup className="mt-4">
                        <InputGroup.Text
                          className="bg-transparent text-gray"
                          id="basic-addon1"
                        >
                          Telefono
                        </InputGroup.Text>
                        <input
                          autoComplete="OFF"
                          placeholder="+39 0123456789"
                          type="tel"
                          className="bg-transparent text-gray form-control"
                          aria-label="phone"
                          aria-describedby="basic-addon1"
                          name="user_phone"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
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
                          Num. Associato
                        </InputGroup.Text>
                        <input
                          autoComplete="OFF"
                          required
                          className="bg-transparent text-gray form-control"
                          aria-label="associate"
                          aria-describedby="basic-addon1"
                          name="user_associate"
                          value={associate}
                          onChange={(e) => {
                            setAssociate(e.target.value);
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
                          Corso
                        </InputGroup.Text>
                        <Form.Select
                          name="user_corso"
                          value={corso}
                          aria-label="Default select example"
                          onChange={(e) => {
                            setCorso(e.target.value);
                          }}
                        >
                          <option value="Canto">Canto</option>
                          <option value="Batteria">Batteria</option>
                          <option value="Chitarra">Chitarra</option>
                          <option value="Introduzione">
                            Introduzione alla Musica
                          </option>
                        </Form.Select>
                      </InputGroup>
                    </Col>

                    <Col className="col-12 h-100">
                      <>
                        {showSend && (
                          <div
                            className="alert alert-success mt-3"
                            role="alert"
                          >
                            Il tuo messaggio è stato inviato correttamente!
                          </div>
                        )}
                        {showError && (
                          <div className="alert alert-danger mt-3" role="alert">
                            Oooops. Sembra ci sia stato un problema nella
                            consegna del messaggio. Riprova
                          </div>
                        )}
                      </>
                    </Col>
                    <Col className="col-10 offset-1 py-3 mt-3">
                      <Row className="text-center">
                        <Col className="text-center offset-1 col-4">
                          <button
                            type="submit"
                            className="myBtn1 fs-6 py-1 px-3 rounded-3"
                            onClick={(e) => {
                              e.preventDefault();

                              check();
                              isEverythingChecked === true
                                ? sendEmail()
                                : setShowError(true);
                              setName("");
                              setCognome("");
                              setPhone("");
                              setEmail("");
                              setAssociate("");
                            }}
                          >
                            Richiedi Iscrizione
                          </button>
                        </Col>
                        <Col className="col-1"></Col>
                        <Col className="text-center offset-1 col-4">
                          <button
                            type="button"
                            className="myBtn2 fs-6 py-1 px-3 rounded-3"
                            onClick={(e) => {
                              setName("");
                              setCognome("");
                              setPhone("");
                              setEmail("");
                              setAssociate("");
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
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CorsiEMasterPage;
