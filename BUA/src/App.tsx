import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NewsEvents from './components/NewsEvents';
import Gallery from './components/Gallery';
import Members from './components/Members';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <NewsEvents /> */}
        <Gallery />
        <Members />
        {/* <JoinUs /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;