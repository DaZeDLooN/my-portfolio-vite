import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader'; // 🆕 added import
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import SnowBlizzard from './components/SnowBlizzard';
import About from './pages/About';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

function App() {
  const location = useLocation();
  const [loadingDone, setLoadingDone] = useState(false); // 🆕

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, 1800); // ⏳ adjust duration if needed
    return () => clearTimeout(timer);
  }, []);

  if (!loadingDone) return <Preloader />; // 🧠 show spinner until loaded

  return (
    <>
      <SnowBlizzard />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTopButton />
      </AnimatePresence>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default App;

