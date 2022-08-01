import React from 'react'
import AppNextLevel from './Application-next-level/AppNextLevel';
import CustomerFeedBack from './Customer-Feedback/CustomerFeedBack';
import FeedBackForm from './Feedback-form/FeedBackForm';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import OnlineResume from './Online-Resume/OnlineResume';
import OurTemplate from './Our-Template/OurTemplate';
import ResumeFeautures from './Resume-Feautures/ResumeFeautures';
function LandingPage() {
  return (
    <div>
              <Header />
              <OnlineResume />
              <AppNextLevel />
              <ResumeFeautures />
              <OurTemplate />
              <CustomerFeedBack />
              <FeedBackForm />
              <Footer />
    </div>
  )
}

export default LandingPage