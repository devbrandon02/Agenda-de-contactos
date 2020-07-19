import React, { Fragment, useState } from 'react'
import { makeStyles } from "@material-ui/core";
import { Container, Card, Button, Modal, Form } from 'react-bootstrap';
import fondoContainer from "../assets/image/fondo-homepage.jpg";
import Footer from '../components/Footer';


const useStyle = makeStyles({
  containerSecundario: {
    backgroundColor: `rgba(9,10,10,0.5)`,
    color: 'white',
    height: '100%',
    paddingTop: '40px',
    paddingBottom: '30px',
  },
  container: {
    width: '100%',
    height: 'auto',
    backgroundImage: `url(${fondoContainer})`,
  },
  cardContactos: {
    width: '90%',
    height: 'auto',
    marginTop: '30px',
    margin: '0 auto',
    color: 'black'
  },
  subtitle: {
    textAlign: 'center'
  },
  cards:{
    marginTop: '15px',
    marginBottom: '10px',
  },
  modal:{
    width: '100%',
    height: '100%'
  },
  btnModal:{
    marginRight: '10px'
  },
  inputForm:{
    marginBottom: '10px'
  }

})


const Contacts = (props) => {
  console.log(props)
  const classes = useStyle();
  const [show, setshow] = useState(false)
  
  return (
    <Fragment>
      <div className={classes.container}>
        <Container
          fluid="sm"
          className={classes.containerSecundario}>

           <Modal
              centered="true"
              show={show}
              className={classes.modal}
              aria-labelledby="example-modal-sizes-title-sm">

              <Modal.Header>
                <Modal.Title centered="true"id="example-modal-sizes-title-sm">
                  Registra tus Contactos
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form>
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
                    />

                    <Form.Label>N°Telefono:</Form.Label>
                    <Form.Control
                      className={classes.inputForm}
                      type="text"
                      maxlenght="11"
                      name="phone"
                    />

                    <Form.Label> Email: </Form.Label>
                    <Form.Control
                      className={classes.inputForm}
                      type="email"
                      name="email"
                    />

                    <Form.Label>Direccion:</Form.Label>
                    <Form.Control
                      className={classes.inputForm}
                      type="text"
                      name="address"
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

          <div className={classes.cardContactos}>
            <Button 
              variant="primary"
              onClick={() => setshow(true) }>
              
              Guardar Nuevo Contacto
            </Button>

            <Card className={classes.cards}>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card className={classes.btnCrearContacto}>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            
          </div>
        </Container>
        <Footer />
      </div>
    </Fragment>
  )
}

export default Contacts
