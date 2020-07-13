import React, { Fragment } from 'react'
import styled from 'styled-components'
import fondoHome from '../assets/image/fondo-homepage.jpg';
import { makeStyles } from '@material-ui/styles';
import { Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';


const useStyle = makeStyles({
  container: {
    height: '100%',
  },
  title:{
    paddingBottom: '15px',
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: '#eee'
  }
})

const Homepage = styled.div`
  display: flex;
  background-image: url(${fondoHome});
  width: 100%;
  height: 100%;
  background-size: cover;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
`

const Home = (props) => {

  const classes = useStyle();
  const titleHome = 'Guarda tus contactos en la nube!'

  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <Homepage>
          <h1 
            className={classes.title}>
            { titleHome }
          </h1>

          <Button 
            color="primary"> 
            Ver Contactos
          </Button>

        </Homepage>
      </div>
      <Footer/>
    </Fragment>
  )
}

export default Home
