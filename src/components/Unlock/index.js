// Write your code here
import {useState} from 'react'

import {DivCon, HeadingCon, Button, ImageCon} from './styledComponents'

const Unlock = () => {
  const [setting, setTrue] = useState(true)
  const imageUrl = setting
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const para = setting ? 'Your Device is Locked' : 'Your Device is Unlocked'
  const buttonText = setting ? 'unlock' : 'lock'
  const altText = setting ? 'Lock' : 'Unlock'
  const onClickButton = () => {
    setTrue(prevState => !prevState)
  }

  return (
    <DivCon>
      <ImageCon src={imageUrl} alt={altText} />
      <HeadingCon>{para}</HeadingCon>
      <Button onClick={onClickButton}>{buttonText}</Button>
    </DivCon>
  )
}

export default Unlock
