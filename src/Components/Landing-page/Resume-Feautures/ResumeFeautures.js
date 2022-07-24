import React from 'react'
import FeauturesWrapper from './Featres-Wrapper/FeauturesWrapper'
import "./ResumeFeautures.css"

const FeautruesWrapperInformation = [
  {
    id : 1,
    title : "Live Feedback to Improve Your Content",
    text : "If you aren't sure how to write a resume, don't worry. Our content optimizer analyzes your resume and gives you suggested revisions to increase the quality of your content.",
    image : "Images/resume-feautures-image/Feauture wrapper icons/icon1.png",
    alt : "Feauture Wrapper icon 1"
  },
  {
    id : 2,
    title : "Free Resume Templates and Cover Letter",
    text : "Not only do you get to build your resume for free, you also get access to successful resume samples and cover letter examples that you can use for guidance.",
    image : "Images/resume-feautures-image/Feauture wrapper icons/icon2.png",
    alt : "Feauture Wrapper icon 2"
  },
  {
    id : 3,
    title : "Templates Suited to Your Exact Needs",
    text : "Let our free resume templates and cover letter templates do the work for you. Choose from a selection of recruiter-approved layout designs for different job types.",
    image : "Images/resume-feautures-image/Feauture wrapper icons/icon3.png",
    alt : "Feauture Wrapper icon 3"
  }
]

function ResumeFeautures() {
  return (
    <div className='resumeFeautures__container' >
      <div className='resumeFeautures__textContainer' >
        <h1 className='resumeFeautures__title' >Our resume Builder Features</h1>
        <p>A creative, professional layout can grab a recruiter's 
          attention. Our resume layout optimizer makes sure all 
          your content is aligned and organized so your resume 
          looks like a work of art.</p>
        <div>
          {
            FeautruesWrapperInformation.map((item,index) => {
              return <FeauturesWrapper image = {item.image} alt = {item.alt} title = {item.title} text = {item.text} />
            })
          }
        </div>
      </div>
      <div className='feauture__images__container' >
        <img className='feauture__image' src='Images/resume-feautures-image/feauture-image-1.png' alt = "feauture__image1" />
        <img className='feauture__image' src='Images/resume-feautures-image/feauture-image-2.png' alt = "feauture__image2" />
      </div>
      
    </div>
  )
}

export default ResumeFeautures