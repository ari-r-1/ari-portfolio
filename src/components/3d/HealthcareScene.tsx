import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Torus } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function PulsingHeart({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      meshRef.current.scale.setScalar(scale);
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#EF4444" emissive="#ff0000" emissiveIntensity={0.2} />
    </mesh>
  );
}

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[1.5, 0, 0]}>
      {Array.from({ length: 8 }).map((_, i) => {
        const y = (i - 4) * 0.2;
        const angle = i * Math.PI * 0.5;
        return (
          <group key={i} rotation={[0, angle, 0]}>
            <Sphere position={[0.5, y, 0]} args={[0.05]}>
              <meshStandardMaterial color="#3B82F6" />
            </Sphere>
            <Sphere position={[-0.5, y, 0]} args={[0.05]}>
              <meshStandardMaterial color="#10B981" />
            </Sphere>
          </group>
        );
      })}
    </group>
  );
}

function MedicalCross() {
  return (
    <group position={[-1.5, 0, 0]}>
      <mesh>
        <boxGeometry args={[0.6, 0.2, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
      <mesh>
        <boxGeometry args={[0.2, 0.6, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" />
      </mesh>
    </group>
  );
}

export const HealthcareScene = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-red-900 to-blue-900 rounded-t-2xl">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <PulsingHeart position={[0, 0.5, 0]} />
        <DNAHelix />
        <MedicalCross />
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
        >
          HEALTHCARE
        </Text>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};