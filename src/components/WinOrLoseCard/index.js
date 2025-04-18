// Write your code here.

import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    return (
      <div className="status-container">
        <div className="result-container">
          <h1 className="won-loss">You Won</h1>
          <p className="score-check">Best Score</p>
          <h1 className="full-score">12/12</h1>
          <button className="play-button">Play Again</button>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            className="result-image"
          />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
