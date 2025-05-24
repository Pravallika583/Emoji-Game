import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    visitedEmojis: [],
    score: 0,
    topScore: 0,
    isWin: false,
    isLoss: false,
  }

  shuffleEmoji = id => {
    const {visitedEmojis, score} = this.state
    const {emojisList} = this.props

    if (!visitedEmojis.includes(id)) {
      const newVisited = [...visitedEmojis, id]
      const updatedEmojisList = this.shuffledEmojisList()

      const hasWon = newVisited.length === 12

      this.setState({
        visitedEmojis: newVisited,
        emojisList: updatedEmojisList,
        score: score + 1,
        isWin: hasWon,
      })
    } else {
      this.setState({isLoss: true})
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return [...emojisList].sort(() => Math.random() - 0.5)
  }

  onPlayAgain = () => {
    const {score, topScore} = this.state
    const newTopScore = score > topScore ? score : topScore
    this.setState({
      visitedEmojis: [],
      score: 0,
      topScore: newTopScore,
      isWin: false,
      isLoss: false,
    })
  }

  render() {
    const {emojisList} = this.props
    const {isWin, isLoss, score, topScore, visitedEmojis} = this.state

    // Show the emojis shuffled unless game is won or lost
    const shuffledList = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <NavBar
          score={score}
          topScore={topScore}
          isWin={isWin}
          isLoss={isLoss}
        />
        <div className="emojis-container">
          {isWin || isLoss ? (
            <WinOrLoseCard
              score={score}
              isWin={isWin}
              onPlayAgain={this.onPlayAgain}
            />
          ) : (
            <ul className="emojis-list">
              {shuffledList.map(({id, ...emojiDetails}) => (
                <EmojiCard
                  key={id}
                  emojiDetails={{id, ...emojiDetails}}
                  shuffleEmoji={() => this.shuffleEmoji(id)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
