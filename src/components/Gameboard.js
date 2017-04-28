import React, { Component } from 'react'

class GameBoard extends Component {
  state = {
    gameboard: []
  }

  componentDidMount () {
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          gameboard: data.board,
          state: data.state
        })
      })
  }
  _rightClick = (x, y) => {
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.props.match.params.id}/flag`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        row: y,
        col: x
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        gameboard: data.board,
        state: data.state
      })
    })
  }
  _click = (x, y) => {
    window.fetch(`http://minesweeper-api.herokuapp.com/games/${this.props.match.params.id}/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        row: y,
        col: x
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        gameboard: data.board,
        state: data.state
      })
    })
  }

  render () {
    if (this.state.state === 'playing' || this.state.state === 'new') {
      return <table>
        <tbody>
          {this.state.gameboard.map((row, y) => {
            return <tr key={y}>
              {row.map((col, x) => {
                return <td key={x} onContextMenu={(event) => {
                  event.preventDefault()
                  this._rightClick(x, y)
                }} onClick={() => {
                  this._click(x, y)
                }}>{col}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    } else {
      if (this.state.state === 'won') {
        return <h1>You're winner!</h1>
      } else {
        return <h1>You suck!</h1>
      }
    }
  }
}

export default GameBoard
