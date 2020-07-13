import React from 'react'
import {Route, Switch , BrowserRouter  } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

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
        
      </Switch>
    </BrowserRouter> 
  )
}

export default routes
