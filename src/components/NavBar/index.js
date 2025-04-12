// Write your code here.

import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <p className="name">Emoji Game</p>
        </div>
        <div className="score-container">
          <p className="score">Score : 0</p>
          <p className="top-score">Top Score: 0</p>
        </div>
      </div>
    )
  }
}

export default NavBar
