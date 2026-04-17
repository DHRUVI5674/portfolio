import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Hackathons from './sections/Hackathons';
import Education from './sections/Education';
import LeetCode from './sections/LeetCode';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Profiles from './sections/Profiles';
import SplashScreen from './components/SplashScreen';

// All sections in order — ids must match the `id` on each <section>
const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'certificates', 'hackathons', 'education', 'leetcode', 'contact'];

function ScrollSpy() {
  const isClickScrolling = useRef(false); // flag set by navbar clicks

  useEffect(() => {
    // On first load, if a clean path is present scroll to that section
    const initialSection = window.location.pathname.replace('/', '');
    if (initialSection && SECTION_IDS.includes(initialSection)) {
      setTimeout(() => {
        const el = document.getElementById(initialSection);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    // Listen for navbar-triggered scrolls so we don't fight with IntersectionObserver
    const onNavClick = (e) => {
      isClickScrolling.current = true;
      setTimeout(() => { isClickScrolling.current = false; }, 1000);
    };
    window.addEventListener('navclick', onNavClick);

    // IntersectionObserver: whichever section is most visible wins the URL
    const observers = [];
    const visibility = {};

    const updateHash = () => {
      if (isClickScrolling.current) return;
      // Pick the section with the highest visibility ratio
      let best = null;
      let bestRatio = -1;
      SECTION_IDS.forEach((id) => {
        if ((visibility[id] || 0) > bestRatio) {
          bestRatio = visibility[id] || 0;
          best = id;
        }
      });
      if (best && best !== 'hero') {
        const newPath = '/' + best;
        if (window.location.pathname !== newPath) {
          history.replaceState(null, '', newPath);
        }
      } else if (best === 'hero') {
        if (window.location.pathname !== '/') {
          history.replaceState(null, '', '/');
        }
      }
    };

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility[id] = entry.intersectionRatio;
          });
          updateHash();
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i * 0.05) }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
      window.removeEventListener('navclick', onNavClick);
    };
  }, []);

  return null;
}

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
        <ScrollSpy />

        {/* Single-page layout — all sections visible; URL hash updates on scroll */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Hackathons />
          <Education />
          <LeetCode />
          <Contact />
          <Profiles />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;