import React from 'react'
import './index.css'
import { ReactComponent as Star } from './assets/star-solid.svg'

const Card = props => {
  let badgeText
  if (props.spots == 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE'
  } else {
    badgeText = null
  }

  return (
    <div className='card'>
      {badgeText && <div className='badge'>{badgeText}</div>}
      <img src={props.image} className='card-image'></img>
      <div className='card-stats'>
        <Star fill='red' width='14px' />
        <span>{props.rating}</span>
        <span className='gray'>({props.reviews}) ·</span>
        <span className='gray'>{props.location}</span>
      </div>
      <p className='card-header'>{props.title}</p>
      <p className='card-text'>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  )
}

export default Card
