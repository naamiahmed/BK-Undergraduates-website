// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';
import FeedbackForm from './components/FeedbackForm.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      
      <About />
      <Gallery />
      <Team />
      <ImageSlider />
      <FeedbackForm />
      <Footer />
    </div>
  );
}

export default App;
