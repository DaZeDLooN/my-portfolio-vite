// components/SnowBlizzard.jsx
import Snowfall from 'react-snowfall';

const SnowBlizzard = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none', // So it doesn't block clicks
        zIndex: 1000,
      }}
    >
      <Snowfall snowflakeCount={200} />
    </div>
  );
};

export default SnowBlizzard;