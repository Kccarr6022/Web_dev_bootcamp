import React, { useEffect, useState } from 'react'
import images from './imagedata.js'
import './index.scss'

const MemeGenerator = () => {
  const [meme, setMeme] = useState({
    topMemeText: '',
    bottomMemeText: '',
    image: '',
  })

  const handleTopMemeChange = e => {
    setMeme(oldMeme => ({ ...oldMeme, topMemeText: e.target.value }))
  }

  const handleBottomMemeChange = e => {
    setMeme(oldMeme => ({ ...oldMeme, bottomMemeText: e.target.value }))
  }

  const setImage = e => {
    setMeme(oldMeme => ({ ...oldMeme, image: e }))
  }

  const getImage = () => {
    const random = Math.floor(Math.random() * 4)
    if (meme.image === `./images/${images[random]}`) {
      getImage()
    } else {
      setImage(`./images/${images[random]}`)
    }
  }

  useEffect(() => {
    getImage()
  }, [])

  return (
    <div className='page'>
      <div className='text-input'>
        <input type='text' onChange={handleTopMemeChange} value={meme.topMemeText} />
        <input type='text' onChange={handleBottomMemeChange} value={meme.bottomMemeText} className='input-right' />
      </div>
      <button onClick={getImage}>Get a new meme image </button>
      <div className='meme'>
        {meme.image && <img src={meme.image} className='image' />}
        <h1 className='meme-content-top'>{meme.image ? meme.topMemeText : ''}</h1>
        <h1 className='meme-content-bottom'>{meme.image ? meme.bottomMemeText : ''}</h1>
      </div>
    </div>
  )
}

export default MemeGenerator
