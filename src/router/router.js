import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from '../views/home/index'
import Card from '../views/card/card'
import Find from '../views/find/find'
import Type from '../views/type/type'
import User from '../views/user/user'

const RouteConfig = () => (
  <Router >
    <div id='page'>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
      <Route path='/type' exact component={Type} />
      <Route path='/find' exact component={Find} />
      <Route path='/card' exact component={Card} />
      <Route path='/user' exact component={User} />
    </div>
  </Router>
)

export default RouteConfig
