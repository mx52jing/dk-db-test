import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Login from './Login'
import Article from './Article'

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path='/' component={Login}/>
              <Route path='/article' component={Article}/>
              <Redirect to='/' />
          </Switch>
      </Router>
  )
}

export default App;
