import React, { Component } from 'react'

class GameBoard extends Component {
  state = {
    gameboard: []
  }

  componentDidMount () {
    window.fetch('http://minesweeper-api.herokuapp.com/games/32')
      .then(res => res.json())
      .then(data => {
        this.setState({
          gameboard: data.board
        })
      })
  }

  _click = (x, y) => {
    window.fetch('http://minesweeper-api.herokuapp.com/games/32/check', {
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
        gameboard: data.board
      })
    })
  }

  render () {
    return <table>
      <tbody>
        {this.state.gameboard.map((row, y) => {
          return <tr key={y}>
            {row.map((col, x) => {
              return <td key={x} onClick={() => {
                this._click(x, y)
              }}>{col}</td>
            })}
          </tr>
        })}
      </tbody>
    </table>
  }
}

export default GameBoard
