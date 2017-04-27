import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import GameBoard from './GameBoard'

class App extends Component {
  render () {
    return <div>
      <h1>SWEEP THE MINE, YOU FOOLS</h1>
      <GameBoard />
    </div>
  }
}

export default App
