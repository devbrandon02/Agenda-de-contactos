import { useState } from "react";
// import { clienteAxios } from '../axios/axios';
let URL = "http://192.168.0.23:4000/api/auth";

const useLogin = async (email, password) => {
  let dataForm = {
    email,
    password,
  };

  return await fetch(URL, {
    method: "POST",
    body: JSON.stringify(dataForm),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    })
    .then((data) => {
      return data;
    });
};

export default useLogin;
