import React from 'react'
import logo from './assets/logo.png'
import './index.scss'

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <img src={logo} className="logo"/>
          </li>
          <li>
            <h2>my travel journal.</h2>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar