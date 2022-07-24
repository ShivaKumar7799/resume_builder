import React from 'react'
import TemplateCard from './Our-Template-Cards/TemplateCard'
import './OurTemplate.css'

const cardDetails = [
  {
    id : "1",
    title : "For Freshers",
    image : "Images/template-card-images/card-image1.png"
  },
  {
    id : "2",
    title : "For Mobile Developers",
    image : "Images/template-card-images/card-image1.png"
  },
  {
    id : "1",
    title : "For Web Developers",
    image : "Images/template-card-images/card-image1.png"
  },
  {
    id : "1",
    title : "For Software Engineer",
    image : "Images/template-card-images/card-image1.png"
  }
]

function OurTemplate() {
  return (
    <div className='template__container'>
      <div>
        <h2 className='template__title' >Our Templates</h2>
        <p className='template__text' >Making a resume is the first step of any job search.
          Not sure how to make a resume? Our online resume builder 
          gives you free resume templates to follow.</p>
      </div>
      <div className='template__cards__container' >
        {
          cardDetails.map((item,index) => {
            return <TemplateCard image = {item.image} title = {item.title} />
          })
        }
      </div>
    </div>
  )
}

export default OurTemplate