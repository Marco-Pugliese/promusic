import { useRef, useState } from "react";
import { Carousel, Col, Container, InputGroup, Row } from "react-bootstrap";
import emailjs from "@emailjs/browser";
const PartnerPage = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [indirizzo, setIndirizzo] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [via, setVia] = useState("");
  const [CAP, setCAP] = useState("");
  const [natoA, setNatoA] = useState("");
  const [natoIl, setNatoIl] = useState("");
  const [showSend, setShowSend] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isEverythingChecked, setIsEverythingChecked] = useState(false);
  const check = () => {
    name !== "" &&
    cognome !== "" &&
    email !== "" &&
    phone !== "" &&
    indirizzo !== "" &&
    checkbox === true &&
    via !== "" &&
    CAP !== "" &&
    natoA !== "" &&
    natoIl !== ""
      ? setIsEverythingChecked(true)
      : setIsEverythingChecked(false);
    console.log(
      name,
      cognome,
      email,
      phone,
      indirizzo,
      checkbox,
      via,
      CAP,
      natoA,
      natoIl
    );
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
    <Container fluid className="m-0 p-0">
      <Row className=" p-0 m-0  bg-partner">
        <Col className="m-0 filter-black">
          <Row>
            <Col className="py-5">
              <div className="minv60 py-2 mx-auto d-none d-lg-block w-75 fw-bold text-center">
                Benvenuti nella nostra comunità musicale! Siamo lieti di
                accogliervi nel nostro spazio dedicato alla passione per la
                musica. Registrandovi, avrete accesso esclusivo alla nostro
                mondo, dove potrete partecipare a sessioni musicali, ricevere
                informazioni dettagliate su corsi, workshop e eventi speciali.
                La vostra iscrizione non solo vi permetterà di esplorare le
                opportunità offerte dalla nostra associazione, ma contribuirà
                anche a sostenere la nostra missione senza scopo di lucro nel
                promuovere la musica e la cultura. Unirsi a noi è molto semplice
                e richiede pochissimo tempo, e vi garantirà un'esperienza
                musicale arricchente e stimolante. Non perdete l'opportunità di
                far parte di questa straordinaria comunità di appassionati di
                musica.
                <br />
                <br />
                Scarica ora il modulo di iscrizione, oppure compila i campi
                nella pagina seguendo le istruzioni per diventare socio e
                iniziate il tuo viaggio musicale con noi!
                <div className="text-center mt-5">
                  <span className="bg-light2 mt-5 text-dark redShadowinHover rounded-3 py-1 px-3 display-inline-block">
                    Scarica
                  </span>
                </div>
              </div>
              <div className="minv60 p-5 text-center d-lg-none fw-bold">
                Benvenuti nella nostra comunità musicale! Siamo lieti di
                accogliervi nel nostro spazio dedicato alla passione per la
                musica. Registrandovi, avrete accesso esclusivo alla nostro
                mondo, dove potrete partecipare a sessioni musicali, ricevere
                informazioni dettagliate su corsi, workshop e eventi speciali.
                La vostra iscrizione non solo vi permetterà di esplorare le
                opportunità offerte dalla nostra associazione, ma contribuirà
                anche a sostenere la nostra missione senza scopo di lucro nel
                promuovere la musica e la cultura. Unirsi a noi è molto semplice
                e richiede pochissimo tempo, e vi garantirà un'esperienza
                musicale arricchente e stimolante. Non perdete l'opportunità di
                far parte di questa straordinaria comunità di appassionati di
                musica.
                <br />
                <br />
                Scarica ora il modulo di iscrizione, oppure compila i campi
                nella pagina seguendo le istruzioni per diventare socio e
                iniziate il tuo viaggio musicale con noi!
                <div className="text-center mt-5">
                  <span className="bg-light2 mt-5 text-dark redShadowinHover rounded-3 py-1 px-3 display-inline-block">
                    Scarica
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mb-5 d-none d-lg-flex justify-content-center">
            <Col className="px-3 pb-1 mx-2 myCard position-relative d-flex flex-column col-3">
              <div className="position-absolute top-0 end-0 me-3">1</div>
              <div className="my-auto text-center pt-3 fs-5">
                Scarica il Modulo
              </div>
              <div className="my-auto extrasmall">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                ab ipsam explicabo ipsum, itaque minus inventore similique
                tenetur adipisci corporis iusto quam molestiae voluptate
                dolores. Quisquam libero ipsa repellendus modi!
              </div>
            </Col>
            <Col className="px-3 pb-1 mx-2 myCard position-relative d-flex flex-column col-3">
              <div className="position-absolute top-0 end-0 me-3">2</div>
              <div className="my-auto text-center pt-3 fs-5">
                Compilalo online
              </div>
              <div className="my-auto extrasmall">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                ab ipsam explicabo ipsum, itaque minus inventore similique
                tenetur adipisci corporis iusto quam molestiae voluptate
                dolores. Quisquam libero ipsa repellendus modi!
              </div>
            </Col>
            <Col className="px-3 pb-1 mx-2 myCard position-relative d-flex flex-column col-3">
              <div className="position-absolute top-0 end-0 me-3">3</div>
              <div className="my-auto text-center pt-3 fs-5">
                Effettua Pagamento
              </div>
              <div className="my-auto extrasmall">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                ab ipsam explicabo ipsum, itaque minus inventore similique
                tenetur adipisci corporis iusto quam molestiae voluptate
                dolores. Quisquam libero ipsa repellendus modi!
              </div>
            </Col>
          </Row>
          <Row className="d-flex d-lg-none justify-content-center carouselRow">
            <Col className="col-8">
              <Carousel>
                <Carousel.Item>
                  <div className="px-5 pb-1 myCard position-relative d-flex flex-column ">
                    <div className="position-absolute top-0 end-0 me-3">1</div>
                    <div className="my-auto text-center pt-3 fs-5">
                      Scarica il Modulo
                    </div>
                    <div className="my-auto extrasmall">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quos ab ipsam explicabo ipsum, itaque minus inventore
                      similique tenetur adipisci corporis iusto quam molestiae
                      voluptate dolores. Quisquam libero ipsa repellendus modi!
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="px-5 pb-1 myCard position-relative d-flex flex-column ">
                    <div className="position-absolute top-0 end-0 me-3">2</div>
                    <div className="my-auto text-center pt-3 fs-5">
                      Compilalo online
                    </div>
                    <div className="my-auto extrasmall">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quos ab ipsam explicabo ipsum, itaque minus inventore
                      similique tenetur adipisci corporis iusto quam molestiae
                      voluptate dolores. Quisquam libero ipsa repellendus modi!
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="px-5 pb-1 myCard position-relative d-flex flex-column ">
                    <div className="position-absolute top-0 end-0 me-3">3</div>
                    <div className="my-auto text-center pt-3 fs-5">
                      Effettua il Pagamento
                    </div>
                    <div className="my-auto extrasmall">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quos ab ipsam explicabo ipsum, itaque minus inventore
                      similique tenetur adipisci corporis iusto quam molestiae
                      voluptate dolores. Quisquam libero ipsa repellendus modi!
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row className="mb-5"></Row>
        </Col>
      </Row>
      <Row className=" p-0 m-0  bg-dark1 minv60 justify-content-center">
        <Col className="text-center col-12 fs-4 pt-5 pb-3">
          <span className="border-bottom border-light mt-2 mb-1">
            Iscriviti con pochi click!
          </span>
        </Col>
        <Col className="col-12">
          <form
            ref={form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            className="d-flex flex-column justify-content-between align-items-center"
          >
            <Container className="">
              <Row>
                {/* Nome */}
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
                {/* Cognome */}
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
                      aria-label="name"
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
                {/* Nato a */}
                <Col className="col-12 col-lg-6 ">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      Nato/a a
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      type="text"
                      required
                      name="user_natoA"
                      className="bg-transparent text-gray form-control"
                      aria-label="natoA"
                      aria-describedby="basic-addon1"
                      value={natoA}
                      onChange={(e) => {
                        setNatoA(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>
                {/* Il */}
                <Col className="col-12 col-lg-6 ">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      Nato/a il
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      type="date"
                      required
                      name="user_natoIl"
                      className="bg-transparent text-gray form-control"
                      aria-label="natoIl"
                      aria-describedby="basic-addon1"
                      value={natoIl}
                      onChange={(e) => {
                        setNatoIl(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>
                {/* Residente a */}
                <Col className="col-12 col-lg-6">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      Residente a
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      required
                      className="bg-transparent text-gray form-control"
                      aria-label="indirizzo"
                      aria-describedby="basic-addon1"
                      name="user_indirizzo"
                      value={indirizzo}
                      onChange={(e) => {
                        setIndirizzo(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>
                {/* In via */}
                <Col className="col-12 col-lg-6">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      In via
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      required
                      className="bg-transparent text-gray form-control"
                      aria-label="via"
                      aria-describedby="basic-addon1"
                      name="user_via"
                      value={via}
                      onChange={(e) => {
                        setVia(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>
                {/* CAP di residenza*/}
                <Col className="col-12 col-lg-6">
                  <InputGroup className="mt-4">
                    <InputGroup.Text
                      className="bg-transparent text-gray"
                      id="basic-addon1"
                    >
                      CAP
                    </InputGroup.Text>
                    <input
                      autoComplete="OFF"
                      type="text"
                      className="bg-transparent text-gray form-control"
                      aria-label="CAP"
                      aria-describedby="basic-addon1"
                      name="user_CAP"
                      value={CAP}
                      onChange={(e) => {
                        setCAP(e.target.value);
                        setShowError(false);
                        setShowSend(false);
                      }}
                    />
                  </InputGroup>
                </Col>
                {/* Email */}
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
                {/* Telefono */}
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
                <Col className="col-12 mt-5">
                  <div className="mt-4">
                    <div
                      className="bg-transparent text-gray fw-bold border-0 shadow-sm "
                      id="basic-addon1"
                    >
                      Dopo aver
                      <span className="myBtn1 text-dark px-2 mx-2 py-1 mt-4 hover rounded-3">
                        visionato
                      </span>
                      lo statuto
                    </div>
                  </div>
                </Col>
                <Col className="col-12 ">
                  <hr />
                  <div className="my-2">
                    <div
                      className="bg-transparent text-gray fw-bold border-0 shadow-sm "
                      id="basic-addon1"
                    >
                      CHIEDE
                    </div>
                  </div>
                  <hr />
                </Col>
                <Col className="col-12">
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => {
                        setCheckbox(!checkbox);
                      }}
                      checked={checkbox}
                      className="me-3"
                      required
                    />
                    di essere ammesso come socio all'Associazione Culturale e
                    Musicale "PROMUSIC"
                  </div>
                  <div className="mt-3 d-flex flex-column">
                    <div className="w-100">
                      E di impegnarsi al pagamento d'iscrizione tramite bonifico
                      della quota associativa di euro: 20,00 (Venti)
                    </div>
                    <div className="mt-2">
                      <span className="myBtn1 hover text-dark px-2 py-1 mt-1 rounded-3">
                        Dati per il Bonifico
                      </span>
                    </div>
                  </div>
                </Col>

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
                <Col className="col-10 offset-1 py-3 mt-4 ">
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
        </Col>
      </Row>
    </Container>
  );
};
export default PartnerPage;
