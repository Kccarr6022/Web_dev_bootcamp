import React from 'react'
import './index.css'
import { ReactComponent as Star } from './assets/star-solid.svg'

const Card = props => {
  let badgeText
  if (props.card.spots == 0) {
    badgeText = 'SOLD OUT'
  } else if (props.card.location === 'Online') {
    badgeText = 'ONLINE'
  } else {
    badgeText = null
  }

  return (
    <div className='card'>
      {badgeText && <div className='badge'>{badgeText}</div>}
      <img src={props.card.image} className='card-image'></img>
      <div className='card-stats'>
        <Star fill='red' width='14px' />
        <span>{props.card.rating}</span>
        <span className='gray'>({props.card.reviews}) ·</span>
        <span className='gray'>{props.card.location}</span>
      </div>
      <p className='card-header'>{props.card.title}</p>
      <p className='card-text'>
        <b>From ${props.card.price}</b> / person
      </p>
    </div>
  )
}

export default Card
