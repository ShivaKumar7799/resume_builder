import React from 'react'
import FooterSections from './Footer-Sections/FooterSections'
import "./Footer.css"

function Footer() {
  const FooterSection1 = ["Get Help", "Read FAQ", "View All Templates", "About Us"];
  const FooterSection2 = ["Privacy Policy", "Cookie Policy", "Terms of Use", "Contact Us"]
  return (
    <div className='footer__container' >
      <div className='footer__flex' >
        <div className='footer__header' >
          <h2> Resume Builder Web App </h2>
          <p>Email: resumebuilder@gmail.com</p>
          <p>Phone: +990 1234 56789</p>
        </div>
        <div>
          <FooterSections section = {FooterSection1} />
        </div>
        <div>
          <FooterSections section = {FooterSection2} />
        </div>
      </div>
      <div className='footer__copyWrite' >
        <p>Copyright © 2020 Resume Builder Web App</p>
      </div>
    </div>
  )
}

export default Footer