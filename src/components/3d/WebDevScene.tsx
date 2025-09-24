import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Plane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FloatingCode({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.2, 0.05]} />
      <meshStandardMaterial color="#22C55E" emissive="#00ff00" emissiveIntensity={0.1} />
    </mesh>
  );
}

function BrowserWindow() {
  return (
    <group position={[0, 0, 0]}>
      {/* Browser frame */}
      <Plane args={[2, 1.2]} position={[0, 0, -0.1]}>
        <meshStandardMaterial color="#374151" />
      </Plane>
      {/* Browser content */}
      <Plane args={[1.8, 1]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#1F2937" />
      </Plane>
      {/* Address bar */}
      <Plane args={[1.6, 0.15]} position={[0, 0.4, 0.01]}>
        <meshStandardMaterial color="#4B5563" />
      </Plane>
    </group>
  );
}

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += 0.005;
    }
  });

  const positions: [number, number, number][] = [
    [-1, 0.8, 0.5],
    [1, 0.8, 0.5],
    [-1, -0.8, 0.5],
    [1, -0.8, 0.5],
  ];

  return (
    <group ref={groupRef}>
      {positions.map((pos, index) => (
        <mesh key={index} position={pos}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  );
}

export const WebDevScene = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-green-900 to-teal-900 rounded-t-2xl">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <BrowserWindow />
        <NetworkNodes />
        
        <FloatingCode position={[-1.5, 0.5, 0.8]} />
        <FloatingCode position={[1.5, -0.3, 0.8]} />
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.25}
          color="#22C55E"
          anchorX="center"
          anchorY="middle"
        >
          WEB DEV
        </Text>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};