import React, { Fragment, useEffect, useState} from 'react'
import {Card, Button, CardColumns, Alert } from "react-bootstrap";


const CardContacts = (props) => {
  const { 
    card, 
    cardContactos, 
    contactsData, 
    btnmodal } = props


  return (
    <Fragment>
      <div className={ cardContactos }>  
         {contactsData.map((contact) => ( 
          <CardColumns 
            key={ contact._id}
            className="cardColumn">

            <Card className={card}>
              <Card.Body>
                <Card.Title>
                  { contact.Nombre }
                </Card.Title>
                <Card.Text>
                  Telefono: {contact.Telefono}
                </Card.Text>
                <Card.Text>
                  Email: { contact.Email }
                </Card.Text>
                <Button
                  onClick={() => alert('Esta funcionalidad aun no esta desarrollada :v')}
                  className={btnmodal} 
                  variant="primary">
                  Actualizar
                </Button>

                <Button
                  onClick={() => alert('Esta funcionalidad aun no esta desarrollada :v')}
                  variant="danger">
                  Eliminar
                </Button>
              </Card.Body>
            </Card>

          </CardColumns>
        ))} 
      </div>
    </Fragment>
  )
}

export default CardContacts
