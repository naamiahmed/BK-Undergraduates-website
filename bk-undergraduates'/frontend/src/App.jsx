// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Gallery from './components/Gallery.jsx';
// import Team from './components/Team';
// import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer.jsx';
import FeedbackForm from './components/FeedbackForm.jsx';
// import RegistrationPage from './components/RegistrationPage/RegistrationPage.jsx';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Gallery />
        {/* <Team />   */}
        {/* <ImageSlider /> */}
        <FeedbackForm />
        {/* <Routes>
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;