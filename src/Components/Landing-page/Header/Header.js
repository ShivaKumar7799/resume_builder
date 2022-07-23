import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header__container'>
      <div className='header__left' >
        <div className='header__name' >
          <span>Resume Builder</span>
        </div>
        <div className='header__links' >
          <span id='home__text' > Home </span>
          <span> Templates </span>
          <span> Feautures </span>
          <span> Services </span>
          <span> Blog </span>
          <span> Contact Us </span>
        </div>
      </div>
      <div className='heder__right' >
        <span id='login__text' > Login </span>
        <button id='signUp__button'> Sign Up </button>
      </div>
    </div>
  )
}

export default Header