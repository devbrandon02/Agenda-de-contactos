import React, { Fragment, memo } from 'react'
import { makeStyles } from '@material-ui/core'
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
  navbarLink:{
    "&:hover": {
        textDecoration: 'none',
        color:'#eee',
      },
    textDecoration: 'none',
    color: 'rgba(255,255,255,.5)',
    marginRight:' 30px',
  },
  logo:{
    "&:hover": {
      textDecoration: 'none',
      color:'#eee',
    },
    marginRight: '50px',
    color: '#eef',
    textDecoration: 'none',
  },
})


const Header = memo(({logged}) => {
  const classes = useStyle()
  const wrapper = React.createRef();
  console.log(logged)

  return (
    <Fragment>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className={classes.nav}
        bg="dark"
        variant="dark"
      >

        <Link
          className={classes.logo}
          to={'/'}>
          <h2 >Logo</h2>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse ref={wrapper} id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              href="/"
              className={classes.navbarLink}>
              Home
            </Nav.Link>
          </Nav>

          <Link
              to={'/auth'}
              className={classes.navbarLink}>
              login
          </Link>

           <Link
              to={'/register'}
              className={classes.navbarLink}>
              Registro
            </Link>
         

        </Navbar.Collapse>

      </Navbar>
    </Fragment>
  )
})

export default Header
