import { useEffect, useState } from 'react';
import '../styles/scrolltop.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return visible ? (
    <button className="scroll-top-btn" onClick={scrollToTop} title="Back to Top">
      ↑
    </button>
  ) : null;
};

export default ScrollToTopButton;
