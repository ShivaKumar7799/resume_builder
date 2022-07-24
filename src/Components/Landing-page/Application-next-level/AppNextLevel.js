import React from 'react'
import './AppNextLevel.css'

function AppNextLevel() {
  return (
    <div className='nextLevel__container' >
      <div className='nextLevel__image' >
        <img  src='Images/next-level-image.png' alt='next-level' />
      </div>
      <div className='nextLevel__info' >
        <h2>Take your application to the next level</h2>
        <p>Want even more tools for your job application? Register for 
          a low-cost Premium account so you can produce multiple 
          resumes online, have access to more design features, or 
          create a longer curriculum vitae (CV). You can even test 
          the Premium features first for free.</p>
          <p>Want an amazing cover letter to pair with your resume? 
            Use one of our cover letter templates to create the
             total package for impressing employers. Your resume 
             and cover letter will have the same design and fonts,
              making them the ideal match.</p>
        <button className='discoverMore__button' >Discover More</button>
      </div>
    </div>
  )
}

export default AppNextLevel