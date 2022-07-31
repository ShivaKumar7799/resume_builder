import React from 'react'
import "./FeedBackForm.css"

function FeedBackForm() {
  return (
    <div className='feedbackform__container' >
      <h1 className='feedback__heading'> We're happy to hear from you </h1>
      <div className='feedback__form__container' >
          <form>
            <label htmlFor='fullname' >Full Name</label>
            <input type= "text" id='fullname' placeholder='Jhon Doe' />
            <label htmlFor='email' > Email Address </label>
            <input type= "text" id='email' placeholder='name@example.com' autoComplete='off' />
            <label htmlFor='findUs' > How did you find us?</label>
            <select value= "Search Engine" >
                  <option>Freinds </option>
                  <option> Family</option>
                  <option> Search Engine </option>
                  <option> Advertisement</option>
                  <option> Others</option>
            </select>
            <textarea placeholder='Drop us a line' ></textarea>
            {/* <input type= "submit" value = "Submit" /> */}
            <button>Submit</button>
          </form>
          <div className='feedback__form__rightContent' >
            <img src='Images/feedback-images/feedback-form-icon.png' alt='feedback-form-icon' />
            <p>Say hello</p>
            <h1>Get in touch, send us an e-mail or call us</h1>
            <p>Our Vision is to - <span>Fight Galactic Unemployment</span></p>
            <p>Questions? Enquiries? Suggestions? Existential 
              doubts? Our teams are ready to hear about them!</p>
            <h3>Contact us now</h3>
            <h2>Email: resumebuilder@gmail.com</h2>
          </div>
      </div>
    </div>
  )
}

export default FeedBackForm