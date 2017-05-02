import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GameBoard from './GameBoard'
import Home from './Home'

class App extends Component {
  create (difficulty) {
    console.log(difficulty)
  }
  render () {
    return <Router>
      <div>
        <h1>SWEEP THE MINE, YOU FOOLS</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/game/:id' component={GameBoard} />
        </Switch>
        <footer>
          <h5>&copy; dannyoceanxo, 2017</h5>
        </footer>
      </div>
    </Router>
  }
}

export default App
