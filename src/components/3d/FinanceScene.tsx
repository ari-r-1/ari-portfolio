import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedCoin({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.3, 0.3, 0.1, 32]} />
      <meshStandardMaterial color="#FFD700" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}

function ChartBars() {
  const heights = [0.5, 0.8, 0.6, 1.0, 0.7];
  
  return (
    <group position={[0, -0.5, 0]}>
      {heights.map((height, index) => (
        <Box
          key={index}
          position={[(index - 2) * 0.3, height / 2, 0]}
          args={[0.2, height, 0.2]}
        >
          <meshStandardMaterial color="#4F46E5" />
        </Box>
      ))}
    </group>
  );
}

export const FinanceScene = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-blue-900 to-purple-900 rounded-t-2xl">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <AnimatedCoin position={[-1.5, 0.5, 0]} />
        <AnimatedCoin position={[1.5, 0.5, 0]} />
        <AnimatedCoin position={[0, 1, -0.5]} />
        
        <ChartBars />
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="#FFD700"
          anchorX="center"
          anchorY="middle"
        >
          FINTECH
        </Text>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};