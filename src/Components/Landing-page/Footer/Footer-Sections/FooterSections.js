import React from 'react'
import "./FooterSections.css"

function FooterSections(props) {
  return (
    <div>
      {props.section.map((item,index) => {
        return <div className='footer__section' > <a className='footer__links' href = "https://www.google.com"> {item} </a> </div>
      })}
    </div>
  )
}

export default FooterSections