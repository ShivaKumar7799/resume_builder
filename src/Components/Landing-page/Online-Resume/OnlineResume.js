import React from 'react'
import "./OnlineResume.css"

function OnlineResume() {
  return (
    <div className='online__resume__container' >
      <div className='online__resume__text' >
        <h2 className='online-resume-text-h2'>The Online Resume Builder </h2>
        <h2 className='online-resume-text-2ndh2'>You Deserve</h2>
        <p id='online-resume-text-p'>Creating a Professional Resume and Cover Letter Has Never Been <span id='so-easy' >So Easy</span></p>
        <button id='online-resume-text-button'> Get Started For Free</button>
      </div>
      <div className='online-resume-image' >
        <img id='online-resume-image' src='Images/online-resume-builder.png' alt='online-resume-builder' />
      </div>
    </div>
  )
}

export default OnlineResume