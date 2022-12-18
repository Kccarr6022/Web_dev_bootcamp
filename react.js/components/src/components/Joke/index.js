import React from 'react'
import './index.scss'

const Joke = (props) => {
    return (
        <div className='Joke'>
            {props.setup ? <h1 className='joke-setup'><b>Setup:</b> {props.setup}</h1> :<h1 className='joke-setup' />}
            <h1 className='joke-punchline'><b>Punchline:</b> {props.punchline}</h1>
        </div>
    )
}

export default Joke;