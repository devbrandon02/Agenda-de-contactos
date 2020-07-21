let URL =  "https://agendacontactocfcf.herokuapp.com/api/user";

export const useeRegister = async ({ email, last , name , password }) => {
    let dataForm = {
      nombre: name,
      apellido: last,
      email,
      password
    }

    console.log(dataForm.password)

    return await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers:{
        "Content-Type": "application/json"
      }
    }).then((res) => {
        return res.json()

      }).catch((err) => {
        return err

    }).then((data) => {
      return data
    })
};