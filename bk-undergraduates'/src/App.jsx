// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Events from './components/Events';
import About from './components/About';
import Gallery from './components/Gallery';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Events />
      <About />
      <Gallery />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
