// Write your code here.

import {Component} from 'react'
import './index.css'

class WinOrLoseCard extends Component {
  render() {
    const {score, isWin, onPlayAgain} = this.props
    const imageSrc = isWin
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
    return (
      <div className="status-container">
        <div className="result-container">
          {isWin ? (
            <h1 className="won-loss">You Won</h1>
          ) : (
            <h1 className="won-loss">You Lose</h1>
          )}
          {isWin ? (
            <p className="score-check">Best Score</p>
          ) : (
            <p className="score-check">Score</p>
          )}
          <p className="full-score">{score}/12</p>
          <button className="play-button" onClick={onPlayAgain} type="button">
            Play Again
          </button>
        </div>
        <div className="image-container">
          <img src={imageSrc} className="result-image" alt="win or lose" />
        </div>
      </div>
    )
  }
}

export default WinOrLoseCard
