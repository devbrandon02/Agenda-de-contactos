import React, { Fragment} from 'react'
import {Card, Button, CardColumns, Alert } from "react-bootstrap";


const CardContacts = (props) => {
  const { card, cardContactos, contactsData} = props
  

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
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>

          </CardColumns>
        ))} 
      </div>
    </Fragment>
  )
}

export default CardContacts
