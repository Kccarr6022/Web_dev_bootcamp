import React from 'react'
import Trollface from './assets/trollface.png'
import './index.scss'

const Header = () => {
  return (
    <header>
      <img src={Trollface} className='logo' />
      <h1 className='title'>Meme Generator</h1>
      <h1 className='project'>React Course - Project 3</h1>
    </header>
  )
}

export default Header
