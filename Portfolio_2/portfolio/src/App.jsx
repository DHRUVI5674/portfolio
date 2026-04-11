import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import SplashScreen from './components/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <Background />
      <div className="relative z-10 font-sans text-gray-200 selection:bg-neon-cyan selection:text-black">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;