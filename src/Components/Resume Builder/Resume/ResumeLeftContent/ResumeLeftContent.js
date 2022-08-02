import React from 'react'
import Contact from '../../../Resume Sections/Contact/Contact'
import Interests from '../../../Resume Sections/Interests/Intereste'
import Languages from '../../../Resume Sections/Languages/Languages'
import Skills from '../../../Resume Sections/Skills/Skills'
import Tools from '../../../Resume Sections/Tools/Tools'
import "./ResumeLeftContent.css"

function ResumeLeftContent({data}) {
  return (
    <div>
      <Contact data = {data} />
      <Skills data = {data} />
      <Tools data = {data} />
      <Languages data = {data} />
      <Interests data = {data} />
    </div>
  )
}

export default ResumeLeftContent