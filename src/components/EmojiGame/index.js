/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  render() {
    const {emojisList} = this.props
    return (
      <div className="bg-container">
        <NavBar />
        <div className="emojis-container">
          <ul className="emojis-list">
          {emojisList.map(eachemoji => (
            <EmojiCard key={eachemoji.id} emojiDetails={eachemoji} />
          ))}
        </ul>
        </div>
      </div>
    )
  }
}

export default EmojiGame


