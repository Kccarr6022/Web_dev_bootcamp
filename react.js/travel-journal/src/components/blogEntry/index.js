import React from 'react'
import locationMark from './assets/location.png'
import './index.scss'

const blogEntry = props => {
  return (
    <>
      <div className='blog'>
        <img className='picture' src={props.data.image} />
        <div className='post'>
          <div className='location'>
            <img src={locationMark} className='location-mark' />
            <h2 className='location-text'>{props.data.location}</h2>
            <a href={props.data.locationUrl} className='location-link'>
              View on Google Maps
            </a>
          </div>
          <h1 className='title'>{props.data.title}</h1>
          <h2 className='date'>{props.data.date}</h2>
          <p className='content'>{props.data.content}</p>
        </div>
      </div>
    </>
  )
}

export default blogEntry
