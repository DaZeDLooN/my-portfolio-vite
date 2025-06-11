import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import PageWrapper from '../components/PageWrapper';
import ParticlesBackground from '../components/ParticlesBackground';
import SpinningCube from '../components/SpinningCube';
import '../styles/home.css';

const Home = () => {
  return (
    <PageWrapper>
      <div className="home-wrapper">
        <ParticlesBackground />

        <div className="home-container">
          <div className="card-section">
            <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }} glareEnable={true} glareMaxOpacity={0.45} scale={1.02}>
              <div className="card">
                <h1>Hello, I’m Lionel</h1>

                <TypeAnimation
                  sequence={[
                    'AI + Web Dev Enthusiast', 2000,
                    'Frontend Developer', 2000,
                    'Open Source Contributor', 2000,
                    'React Explorer', 2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="p"
                  className="typewriter-text"
                />

                <motion.p
                  className="quote"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                >
                  “The best error message is the one that never shows up.”
                  <br />
                  <span>— Thomas Fuchs</span>
                </motion.p>

                <Link to="/contact" className="connect-btn">
                  Let’s Connect →
                </Link>
              </div>
            </Tilt>

            <div className="cube-wrapper">
              <SpinningCube />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Home;
