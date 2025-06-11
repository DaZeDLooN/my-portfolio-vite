import { useEffect, useState } from 'react';
import '../styles/preloader.css';

const Preloader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1800); // adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (loaded) return null;

  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Loading portfolio...</p>
    </div>
  );
};

export default Preloader;
