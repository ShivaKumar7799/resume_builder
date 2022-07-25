import React from 'react'
import "./FeedbackCard.css"
const customerFeedbacks = [
  {
    id : 1,
    text : "Very easy to use and looks great. Saved me a ton of time. Awesome template need to have some more specialization of keyword and data figure example.",
    image : "../../../../../public/Images/feedback-persons/person1.jpg",
    name : "Joana Silva"
  },
  {
    id : 2,
    text : "Thank you for sharing these free templates to the job seekers! Looking forward to hearing from you! I am wowed by your service. Thank you!",
    image : "public/Images/Feedback-Persons/person2.jpg",
    name : " Alberto Duncan"
  },
  {
    id : 3,
    text : "t helped me with my CV and the outcome was fabulous, I even got a job with it. You guys saved me a lot of time and made my CV look better than ever, thanks.",
    image : "public/Images/Feedback-Persons/person3.jfif",
    name : "Milton Chapman"
  }
]
function FeedbackCard() {
  return (
    <div className='feedback__container' >
      {
        customerFeedbacks.map((item,index) => {
          return <div key={index} > 
                    <div> <p>{item.text}</p></div>
                    <div> 
                      <img src={item.image} alt = {item.id} />
                      <span>{item.name}</span>
                    </div>
                </div>
        })
      }
    </div>
  )
}

export default FeedbackCard