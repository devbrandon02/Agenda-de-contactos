// import { clienteAxios } from '../axios/axios';
let URL = "https://agendacontactocfcf.herokuapp.com/api/auth";

export const useLogin = async (email, password) => {
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



