import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "animate.css";

import fondoHome from "../assets/image/fondo-homepage.jpg";
import {useLogin} from "../hooks/useLogin";
import Header from "./Header";

const useStyle = makeStyles({
  container: {
    display: "flex",
    height: "100%",
    backgroundImage: `url(${fondoHome})`,
    backgroundSize: "cover",
    color: "#eee",
    justifyContent: "center",
    alignItems: "center"
  },
  containerLogin: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: 0,
    backgroundColor: `rgba(9,10,10,0.5)`,
    height: "100%",
    width: "400px",
    justifyContent: "center",
    borderRadius: "5px",
    marginTop: "50px",
    // border: '1px solid #eee'
  },
  subtitleForm: {
    marginBottom: "60px",
    textAlign: "center"
  },
  btnLogin: {
    marginTop: "10px",
    width: "300px"
  },
  inputForm: {
    marginBottom: "15px"
  },

  divMensaje: {
    display: "block",
    paddingBottom: "20px",
    width: "100%",
    textAlign: 'center'
  },
  enlaceRegister:{
    display: 'block',
    marginTop: '40px',
    textAlign: 'center'
  }
});

const Login = (props) => {
  const classes = useStyle();
  const [formValues, handleInputChange] = useState({email: "", password: ""});
  const [error, setError] = useState(false);
  const [IsLogged, setIsLogged] = useState(false);
  const {email, password} = formValues;
  const [loading, setLoading] = useState(false);

  const HandleChange = ({target}) => {
    handleInputChange({
      ...formValues,
      [target.name]: target.value
    });
  };

  const HandleSubmit = (evt) => {
    evt.preventDefault();

    setLoading(true);

    useLogin(email, password)
      .then((data) => {
        //console.log(data);
        if (data.ok) {
          setLoading(false)
          props.history.push('/contacts')

        } else {
          setError(true);
          setLoading(false)
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return (<Fragment>
    <Header logged={IsLogged}/>

    <div className={classes.container}>
      <div className={classes.containerLogin}>
        <Form
          onSubmit={HandleSubmit}
          className="animate__animated animate__bounce"
        >
          <h3 className={classes.subtitleForm}>Inicio de sesion</h3>

          {
            error
              ? <div className={classes.divMensaje}>
                  <Alert variant="danger">Email o contraseña incorrecta</Alert>
                </div>

              : ''

          }
          <Form.Label>Email:</Form.Label>
          <Form.Control
            required="required"
            name="email"
            className={classes.inputForm}
            type="email"
            placeholder="example@correo.com"
            onChange={HandleChange}
            value={email}
          />

          <Form.Label>Contraseña:</Form.Label>
          <Form.Control
            required="required"
            name="password"
            className={classes.inputForm}
            type="password"
            placeholder="*********"
            onChange={HandleChange}
            value={password}
          />
          <Button type="submit" className={classes.btnLogin}>
            Iniciar Sesion
          </Button>

          <Link 
            to={'/register'}
            className={classes.enlaceRegister}>
            <p>¿Aun no tienes una cuenta?</p>
          </Link>

        </Form>

        {
          loading
            ? <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
              </div>

            : ''
        }
      </div>
    </div>
  </Fragment>);
};

export default Login;
