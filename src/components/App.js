import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import GameBoard from './GameBoard'
import Home from './Home'

class App extends Component {
  render () {
    return <Router>
      <div>
        <h1>SWEEP THE MINE, YOU FOOLS</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game/:id' component={GameBoard} />
        </Switch>
      </div>
    </Router>
  }
}

export default App
