import React, { Component } from 'react'

class Home extends Component {
  create = (difficulty) => {
    window.fetch(`http://minesweeper-api.herokuapp.com/games?difficulty=${difficulty}`, {method: 'POST'})
    .then(res => res.json())
    .then(data => {
      this.props.history.push(`/game/${data.id}`)
    })
  }
  render () {
    return <div>
      <div className='menu'>
        <button onClick={() => this.create(0)}>Beginner</button>
        <button onClick={() => this.create(1)}>Scaled</button>
        <button onClick={() => this.create(2)}>RX</button>
      </div>
    </div>
  }
}

export default Home
