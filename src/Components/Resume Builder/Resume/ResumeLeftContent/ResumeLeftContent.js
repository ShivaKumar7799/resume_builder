import React from 'react'
import Contact from '../../../Resume Sections/Contact/Contact'
import "./ResumeLeftContent.css"

function ResumeLeftContent({data}) {
  return (
    <div>
      <Contact data = {data} />
    </div>
  )
}

export default ResumeLeftContent