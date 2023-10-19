import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContactPage from './ContactPage';
import JobsPage from './JobsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/jobs" element={<JobsPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App;