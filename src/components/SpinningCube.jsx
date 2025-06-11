import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const SpinningCube = () => {
  return (
    <Canvas style={{ width: '300px', height: '300px' }}>
    <ambientLight intensity={0.6} />
    <pointLight position={[5, 5, 5]} intensity={1} />
    <mesh rotation={[1, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#00d8ff" emissive="#00d8ff" emissiveIntensity={0.4} />
    </mesh>
    <OrbitControls enableZoom={false} />
    </Canvas>

  );
};

export default SpinningCube;
