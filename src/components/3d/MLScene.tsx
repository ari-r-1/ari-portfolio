import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralNode({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3 + position[0] + position[1]) * 0.2;
      meshRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.1]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

function NeuralNetwork() {
  const layers = [
    { x: -1.5, nodes: 4, color: "#8B5CF6" },
    { x: -0.5, nodes: 6, color: "#06B6D4" },
    { x: 0.5, nodes: 6, color: "#10B981" },
    { x: 1.5, nodes: 3, color: "#F59E0B" },
  ];

  return (
    <group>
      {layers.map((layer, layerIndex) => {
        const startY = -(layer.nodes - 1) * 0.3 / 2;
        return layer.nodes && Array.from({ length: layer.nodes }).map((_, nodeIndex) => (
          <NeuralNode
            key={`${layerIndex}-${nodeIndex}`}
            position={[layer.x, startY + nodeIndex * 0.3, 0]}
            color={layer.color}
          />
        ));
      })}
    </group>
  );
}

function DataFlow() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, 1, 0]}>
      {Array.from({ length: 20 }).map((_, i) => {
        const angle = (i / 20) * Math.PI * 2;
        const radius = 0.8;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * radius,
              Math.sin(angle * 2) * 0.2,
              Math.sin(angle) * radius
            ]}
          >
            <sphereGeometry args={[0.02]} />
            <meshStandardMaterial color="#EC4899" emissive="#EC4899" emissiveIntensity={0.5} />
          </mesh>
        );
      })}
    </group>
  );
}

export const MLScene = () => {
  return (
    <div className="w-full h-48 bg-gradient-to-br from-purple-900 to-pink-900 rounded-t-2xl">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        
        <NeuralNetwork />
        <DataFlow />
        
        <Text
          position={[0, -1.5, 0]}
          fontSize={0.3}
          color="#8B5CF6"
          anchorX="center"
          anchorY="middle"
        >
          AI/ML
        </Text>
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};