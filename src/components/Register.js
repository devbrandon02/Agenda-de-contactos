import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Form, Button, Alert } from "react-bootstrap";
import fondoHome from "../assets/image/fondo-homepage.jpg";
import Header from "./Header";
import { useeRegister } from "../hooks/useRegister";
import "animate.css";

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
    height: "100%",
    width: "400px",
    borderRadius: "5px",
    justifyContent: "center",
    // border: '1px solid #eee'
  },
  inputForm: {
    marginBottom: "12px",
    width: "300px",
  },
  btnRegister: {
    textAlign: "center",
    width: "300px",
    marginTop: "20px",
  },
  spanRequired: {
    color: "#CF2107",
  },
  subtitleForm: {
    marginTop: "60px",
    marginBottom: "40px",
    textAlign: "center",
  },
  errorDiv: {
    marginTop: "10px",
    width: "300px",
    textAlign: "center",
  },
});

const Register = (props) => {
  const classes = useStyle();
  const [errorForm, seterrorForm] = useState(false);
  const [mensajeError, setmensajeError] = useState("");
  const [register, setregister] = useState(false);
  const [dataRegister, setDataRegister] = useState({
    name: "",
    last: "",
    email: "",
    password: "",
  });

  const { name, last, email, password } = dataRegister;

  const handleChangeForm = ({ target }) => {
    setDataRegister({
      ...dataRegister,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (email === "" || password === "" || name === "") {
      console.log("formulario vacio");
      seterrorForm(true);
      setmensajeError("¡Rellene los campos obligatorios!");
    } else {
      useeRegister(dataRegister).then((data) => {
        if (!data.ok) {
          seterrorForm(true);
          setmensajeError("¡Error! , Usuario ya se encuentra registrado :(");
        } else {
          seterrorForm(false);
          setregister(true);
          setTimeout(() => {
            props.history.push("/auth");
          }, 2000);
        }
        console.log(data);
      });
    }
  };

  return (
    <Fragment>
      <Header />
      <div className={classes.container}>
        <div className={classes.containerLogin}>
          <Form
            onSubmit={handleSubmit}
            className="animate__animated animate__bounce"
          >
            <h3 className={classes.subtitleForm}>Registro</h3>
            <Form.Group>
              <Form.Label>
                Nombre: <span className={classes.spanRequired}>*</span>
              </Form.Label>
              <Form.Control
                className={classes.inputForm}
                type="text"
                minlenght="1"
                name="name"
                onChange={handleChangeForm}
              />
              <Form.Label>Apellido:</Form.Label>
              <Form.Control
                className={classes.inputForm}
                type="text"
                minlenght="1"
                name="last"
                onChange={handleChangeForm}
              />

              <Form.Label>
                Email: <span className={classes.spanRequired}>*</span>
              </Form.Label>
              <Form.Control
                className={classes.inputForm}
                type="email"
                minlenght="5"
                name="email"
                onChange={handleChangeForm}
              />

              <Form.Label>
                Contraseña: <span className={classes.spanRequired}>*</span>
              </Form.Label>
              <Form.Control
                className={classes.inputForm}
                type="password"
                minlenght="6"
                name="password"
                onChange={handleChangeForm}
              />
            </Form.Group>

            <Button
              type="submit"
              className={classes.btnRegister}
              variant="primary"
            >
              Registrarse
            </Button>

            {errorForm ? (
              <div className={classes.errorDiv}>
                <Alert variant="danger">{mensajeError}</Alert>
              </div>
            ) : (
              ""
            )}
            {register ? (
              <div className={classes.errorDiv}>
                <Alert variant="success">¡Su registro a sido Exitoso!</Alert>
              </div>
            ) : (
              ""
            )}
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
