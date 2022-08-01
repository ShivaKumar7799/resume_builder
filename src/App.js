import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LandingPage from './Components/Landing-page/LandingPage';
import ResumeBuilder from './Components/Resume Builder/ResumeBuilder';
function App() {
  return (
    <div>
      <Router>
         <Routes>
            <Route path='/' element = {<LandingPage />} />
            <Route path = '/resume-builder' element = {<ResumeBuilder />} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
