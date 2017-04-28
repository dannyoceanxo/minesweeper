import React, { Component } from 'react'

class Home extends Component {
  _click = (event) => {
    window.fetch(`http://minesweeper-api.herokuapp.com/games`, {method: 'POST'})
    .then(res => res.json())
    .then(data => {
      this.props.history.push(`/game/${data.id}`)
    })
  }
  render () {
    return <div>
      <button onClick={this._click}>New Game?</button>
    </div>
  }
}

export default Home
