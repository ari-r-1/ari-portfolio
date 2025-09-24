import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Torus } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Airplane() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0.5, 0]}>
      {/* Fuselage */}
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 0.8]} />
        <meshStandardMaterial color="#E5E7EB" />
      </mesh>
      {/* Wings */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <boxGeometry args={[0.6, 0.05, 0.1]} />
        <meshStandardMaterial color="#9CA3AF" />
      </mesh>
    </group>
  );
}

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -0.5, 0]}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshStandardMaterial 
        color="#3B82F6" 
        wireframe 
        wireframeLinewidth={2}
      />
    </mesh>
  );
}

function FloatingDestinations() {
  const destinations = [
    { pos: [-1.5, 0.8, 0] as [number, number, number], color: "#EF4444" },
    { pos: [1.5, 0.8, 0] as [number, number, number], color: "#10B981" },
    { pos: [-1.2, -1.2, 0.5] as [number, number, number], color: "#F59E0B" },
    { pos: [1.2, -1.2, 0.5] as [number, number, number], color: "#8B5CF6" },
  ];

  return (
    <group>
      {destinations.map((dest, index) => (
        <mesh key={index} position={dest.pos}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial 
            color={dest.color} 
            emissive={dest.color} 
            emissiveIntensity={0.4} 
          />
        </mesh>
      ))}
    </group>
  );
}

function FlightPath() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <Torus args={[1.2, 0.02, 8, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.3} />
      </Torus>
    </group>
  );
}

export const TravelScene = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-violet-900 to-blue-900 rounded-t-2xl">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <Globe />
        <Airplane />
        <FloatingDestinations />
        <FlightPath />
        
        <Text
          position={[0, -1.8, 0]}
          fontSize={0.3}
          color="#A855F7"
          anchorX="center"
          anchorY="middle"
        >
          TRAVEL
        </Text>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};