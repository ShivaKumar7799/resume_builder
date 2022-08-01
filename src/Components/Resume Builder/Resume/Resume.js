import React from 'react'
import "./Resume.css"
import ResumeLeftContent from './ResumeLeftContent/ResumeLeftContent'
import ResumeRightContent from './ResumeRightContent/ResumeRightContent'

function Resume({data}) {
  return (
    <div className='resume__content__container' >
      <div className='resume__left__content' >
        <ResumeLeftContent data = {data} />
      </div>
      <div className='resume__right__content' >
        <ResumeRightContent />
      </div>
    </div>
  )
}

export default Resume