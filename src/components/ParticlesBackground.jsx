import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
            color: { value: '#1e1e2f' },
        },
        fpsLimit: 60,
        particles: {
            number: {
            value: 80, // 🔼 increased from 40
            density: { enable: true, area: 800 },
            },
            color: { value: '#00d8ff' },
            shape: { type: 'circle' },
            opacity: {
            value: 0.5,
            random: true,
            },
            size: {
            value: { min: 2, max: 4 }, // 🔼 more size variation
            },
            links: {
            enable: true,              // 🌀 links between particles
            distance: 150,
            color: '#00d8ff',
            opacity: 0.4,
            width: 1,
            },
            move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            outMode: 'bounce',
            },
        },
        interactivity: {
            events: {
            onHover: {
                enable: true,
                mode: 'grab',           // 🌀 particles follow mouse
            },
            },
            modes: {
            grab: {
                distance: 200,
                links: {
                opacity: 0.6,
                },
            },
            },
        },
        detectRetina: true,
        }}
    />
  );
};

export default ParticlesBackground;

