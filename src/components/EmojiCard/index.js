import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffleEmoji} = props
  return (
    <li className="emoji">
      <button onClick={shuffleEmoji} type="button">
        <img
          src={emojiDetails.emojiUrl}
          alt={emojiDetails.emojiName}
          className="emoji-image"
        />
      </button>
    </li>
  )
}

export default EmojiCard
