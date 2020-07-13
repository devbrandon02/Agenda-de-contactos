import React from 'react'
import { makeStyles } from '@material-ui/core';



const useStyle = makeStyles({
  footer:{
    display: 'flex',
    backgroundColor: '#343a40',
    color: '#eee',
    height: '50px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky'
  },
})

const Footer = () => {
  const classes = useStyle()

  return (
    <footer className={classes.footer}>
      © Todos los Derechos Reservados {new Date().getFullYear()} <br/>
    </footer>
  )
}

export default Footer
