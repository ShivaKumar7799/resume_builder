import React from 'react'
import "./FeedbackCard.css"
const customerFeedbacks = [
  {
    id : 1,
    text : "Very easy to use and looks great. Saved me a ton of time. Awesome template need to have some more specialization of keyword and data figure example.",
    image : "Images/feedback-images/customer-1.jpg",
    name : "Joana Silva"
  },
  {
    id : 2,
    text : "Thank you for sharing these free templates to the job seekers! Looking forward to hearing from you! I am wowed by your service. Thank you!",
    image : "Images/feedback-images/customer-2.jpg",
    name : " Alberto Duncan"
  },
  {
    id : 3,
    text : "t helped me with my CV and the outcome was fabulous, I even got a job with it. You guys saved me a lot of time and made my CV look better than ever, thanks.",
    image : "Images/feedback-images/customer-3.jpg",
    name : "Milton Chapman"
  }
]
function FeedbackCard() {
  return (
    <div className='feedback__container' >
      {
        customerFeedbacks.map((item,index) => {
          return <div className='feedback__data__container'  key={index} > 
                    <div> <p>{item.text}</p> </div>
                    <div className='feedback__person__details' > 
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