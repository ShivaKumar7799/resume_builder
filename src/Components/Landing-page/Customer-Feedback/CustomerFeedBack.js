import React from 'react'
import "./CustomerFeedback.css"
import FeedbackCard from './Feedback-Card/FeedbackCard'

function CustomerFeedBack() {
  return (
    <div className='customerFeedback__container' >
      <h1 className='feedback__heading' >See What our customers have to say</h1>
      <FeedbackCard />
    </div>
  )
}

export default CustomerFeedBack