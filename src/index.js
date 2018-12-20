import React from 'react'
import { Switch } from 'react-router'
import history from './components/dependencies/history'
import { Route, Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import * as serviceWorker from './serviceWorker'
import './styles/styles.scss'

ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/profile' exact component={Profile} />
    </Switch>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
