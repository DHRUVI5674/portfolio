import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
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

function ScrollHandler() {
  const location = useLocation();

  React.useEffect(() => {
    const path = location.pathname.substring(1);
    const sectionId = path || 'hero';
    
    // Tiny delay to ensure elements are rendered
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (!path || path === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  }, [location.pathname]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <SplashScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <Router>
      <ScrollHandler />
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