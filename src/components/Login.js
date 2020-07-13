import React, { Fragment, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { makeStyles } from "@material-ui/core";
import fondoHome from "../assets/image/fondo-homepage.jpg";
import Header from "./Header";
import "animate.css";
import useLogin from "../hooks/useLogin";

const useStyle = makeStyles({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${fondoHome})`,
    backgroundSize: "cover",
    color: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  containerLogin: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: 0,
    backgroundColor: `rgba(9,10,10,0.5)`,
    height: "70%",
    width: "400px",
    justifyContent: "center",
    marginTop: "50px",
    borderRadius: "5px",
    // border: '1px solid #eee'
  },
  subtitleForm: {
    marginBottom: "90px",
    textAlign: "center",
  },
  btnLogin: {
    marginTop: "10px",
    width: "300px",
  },
  inputForm: {
    marginBottom: "15px",
  },

  divMensaje: {
    display: "none",
    paddingBottom: "20px",
    width: "80%",
    textAlign: 'center'
  },
});

const Login = () => {
  const classes = useStyle();

  const [formValues, handleInputChange] = useState({
    email: "",
    password: "",
  });

  const [IsLogged, setIsLogged] = useState(false);

  const { email, password } = formValues;

  const HandleChange = ({ target }) => {
    handleInputChange({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const HandleSubmit = (evt) => {
    evt.preventDefault();

    useLogin(email, password)
      .then((data) => {
        console.log(data);

        if (data.ok === false) {
          console.log("inicio de sesion fallido");
        }else{
          setIsLogged(true);
          console.log('iniciando sesion...')
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Header logged={IsLogged}/>

      <div className={classes.container}>
        <div className={classes.containerLogin}>

          <Form
            onSubmit={HandleSubmit}
            className="animate__animated animate__bounce"
          >
            <div className={classes.divMensaje}>
              <Alert variant="danger">Error</Alert>
            </div>

            <Form.Label>Email:</Form.Label>
            <Form.Control
              required
              name="email"
              className={classes.inputForm}
              type="email"
              placeholder="example@correo.com"
              onChange={HandleChange}
              value={email}
            />

            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              required
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
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
