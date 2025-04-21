import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    const {score, topScore, isWin, isLoss} = this.props
    const navBar = isWin || isLoss ? 'align-navbar' : ''
    return (
      <div className={`navbar-container ${navBar}`}>
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo"
          />
          <h1 className="name">Emoji Game</h1>
        </div>
        {!(isWin || isLoss) && (
          <div className="score-container">
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    )
  }
}

export default NavBar
