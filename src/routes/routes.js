import React from 'react'
import {Route, Switch , BrowserRouter  } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import getContacts from '../components/Contacts'




const routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route
          exact
          path='/'
          component={Home}
        />
        
        <Route 
          exact
          path='/auth'
          component={Login}
	      />

        <Route
          exact
          path='/register'
          component={Register}
        />

        <Route
          exact
          path='/contacts'
          component={getContacts}
        />

        
      </Switch>
    </BrowserRouter> 
  )
}

export default routes
