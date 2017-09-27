
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

/* --------- Pages --------- */
import Home from './components/Header.jsx'
// import NotFound from './components/NotFound'

export default () => (
  <Switch>

    <Route exact path="/" component={Home} />

    {/* <Route component={NotFound} /> */} */}

  </Switch>
)
