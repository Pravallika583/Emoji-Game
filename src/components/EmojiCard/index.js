import './index.css'

const EmojiCard = props => {
  const {emojiDetails} = props
  return (
    <li className="emoji">
      <img
        src={emojiDetails.emojiUrl}
        alt={emojiDetails.emojiName}
        className="emoji-image"
      />
    </li>
  )
}

export default EmojiCard
