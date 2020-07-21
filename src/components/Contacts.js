import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Card, Button, Modal, Form, Alert } from "react-bootstrap";
import fondoContainer from "../assets/image/fondo-homepage.jpg";
import Footer from "../components/Footer";
import CardContacts from "./CardContacts";

const useStyle = makeStyles({
  containerSecundario: {
    backgroundColor: `rgba(9,10,10,0.5)`,
    color: "white",
    height: "100%",
    overflow: "auto",
    paddingTop: "40px",
    paddingBottom: "30px",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${fondoContainer})`,
  },
  cardContactos: {
    width: "100%",
    marginTop: "10px",
    margin: "0",
    color: "black",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "50px",
  },
  cards: {
    color: "#eee",
    backgroundColor: "black",
    width: "200%",
    marginRight: "10px",
  },
  cardColumn: {
    display: "inline-flex",
    overflow: "auto",
    width: "50%",
  },
  modal: {
    width: "100%",
    height: "100%",
  },
  btnModal: {
    marginRight: "10px",
  },
  inputForm: {
    marginBottom: "10px",
  },
});

const Contacts = (props) => {
  const classes = useStyle();
  const [show, setshow] = useState(false);
  const [data, setdata] = useState([]);
  const [consultData, setconsultData] = useState(true);
  const [jwt, setjwt] = useState(localStorage.getItem("token"));
  const [payloadstate, setpayload] = useState()
  let GlobalURL = "https://agendacontactocfcf.herokuapp.com/";


  const [formData, setformData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    console.log('consult data cambio')
  },[data])

  useEffect(() => {

    const itsAuth = async () => {
      if (jwt && consultData) {
        const payload = getPayload(jwt);
        setpayload(payload)
        let URL = `${GlobalURL}${payload.usuario.id}`;

        await fetch(URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: jwt,
          }
        })
          .then((res) => res.json())
          .catch((err) => console.log(err))
          .then((contacts) => {
            setdata(contacts.ContactosDb);
            setconsultData(false);
            console.log('contactos')
          });
      } 
      else if(jwt == null){
        console.log('se redirecciona')
        props.history.push('/auth')
      }
    };

    itsAuth();
  }, [data]);


  const getPayload = (jwt) => {
    let base64Url = jwt.split(".")[1];
    let base64 = base64Url.replace("-", "+").replace("_", "/");
    let payloadData = JSON.parse(window.atob(base64));

    return payloadData;
  }
  

  const handleSubmitModal = (evt) => {
    evt.preventDefault();
    registerContact(formData)
  }
  

  const handleModal = (evt) => {
    const { target } = evt;
    console.log(evt.target.name);
    setformData({
      ...formData,
      [target.name]: target.value,
      
    });

    
  };
 
  

  const registerContact = (contacts) => {
    const { usuario } = payloadstate
    console.log(contacts)

    let contactsForm = {
      id: usuario.id,
      nombre: contacts.name,
      email: contacts.email,
      telefono: contacts.phone
    }

     fetch(GlobalURL, {
        method: 'POST',
        body: JSON.stringify(contactsForm),

        headers: {
          "Content-Type": "application/json"
        }
     })

     .then((res) => res.json())
     .catch((err) => console.log(err))
     .then((response => {
        console.log(response);
        setshow(false);
        setconsultData(true)
        props.history.push('/contacts')
      }))
  }

  return (
    <Fragment>
      <div className={classes.container}>
        <Container fluid="sm" className={classes.containerSecundario}>
          <Modal
            centered="true"
            show={show}
            className={classes.modal}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header>
              <Modal.Title centered="true" id="example-modal-sizes-title-sm">
                Registra tus Contactos
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={ handleSubmitModal } >
                <Form.Group>
                  <Form.Label>
                    Nombre: <span className={classes.spanRequired}>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    className={classes.inputForm}
                    type="text"
                    minlenght="1"
                    name="name"
                    onChange={handleModal}
                    autoFocus={true}
                  />

                  <Form.Label>N°Telefono:</Form.Label>
                  <Form.Control
                    className={classes.inputForm}
                    type="number"
                    maxlenght="11"
                    name="phone"
                    onChange={handleModal}
                    required
                  />

                  <Form.Label> Email: </Form.Label>
                  <Form.Control
                    className={classes.inputForm}
                    type="email"
                    name="email"
                    onChange={handleModal}
                  />
                </Form.Group>

                <Button
                  className={classes.btnModal}
                  type="submit"
                  variant="primary">
                  Registrar Contacto
                </Button>

                <Button 
                  onClick={() => setshow(false)} 
                  variant="danger">
                  Cancelar
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          <h3 className={classes.subtitle}>Tus Contactos</h3>
          <Button onClick={() => setshow(true)} variant="primary">
            Guardar Nuevo Contacto
          </Button>

          {data.length <= 0 ? (
            <Alert variant="info">No tiene contactos registrados</Alert>
          ) 
          : 
          (
            <CardContacts
              cardContactos={classes.cardContactos}
              card={classes.cards}
              contactsData={data}
              cardColumn={classes.cardColumn}
              btnmodal = { classes.btnModal } 
            />
          )}
        </Container>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contacts;
