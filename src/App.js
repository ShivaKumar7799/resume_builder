import './App.css';
import AppNextLevel from './Components/Landing-page/Application-next-level/AppNextLevel';
import CustomerFeedBack from './Components/Landing-page/Customer-Feedback/CustomerFeedBack';
import FeedBackForm from './Components/Landing-page/Feedback-form/FeedBackForm';
import Footer from './Components/Landing-page/Footer/Footer';
import Header from './Components/Landing-page/Header/Header';
import OnlineResume from './Components/Landing-page/Online-Resume/OnlineResume';
import OurTemplate from './Components/Landing-page/Our-Template/OurTemplate';
import ResumeFeautures from './Components/Landing-page/Resume-Feautures/ResumeFeautures';

function App() {
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
  );
}

export default App;
