import { Canvas } from '@react-three/fiber';
import { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleHand = () => {
  const meshRef = useRef<THREE.Points>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Create hand silhouette with particles
  const { positions, colors, sizes } = useMemo(() => {
    const particleCount = 800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    // Define hand shape path points
    const handPath = [
      // Palm
      { x: 0, y: 0, density: 0.8 },
      { x: 0.5, y: 0, density: 0.8 },
      { x: 1, y: 0, density: 0.8 },
      { x: 1.2, y: 0.5, density: 0.6 },
      { x: 1, y: 1.5, density: 0.8 },
      { x: 0.5, y: 1.8, density: 0.8 },
      { x: 0, y: 1.8, density: 0.8 },
      { x: -0.5, y: 1.5, density: 0.8 },
      { x: -0.3, y: 0.5, density: 0.6 },
      
      // Thumb
      { x: -0.8, y: 0.3, density: 0.7 },
      { x: -1.2, y: 0.6, density: 0.6 },
      { x: -1.5, y: 1.0, density: 0.5 },
      { x: -1.3, y: 1.4, density: 0.4 },
      
      // Index finger
      { x: -0.3, y: 2.0, density: 0.7 },
      { x: -0.3, y: 2.5, density: 0.6 },
      { x: -0.3, y: 3.0, density: 0.5 },
      { x: -0.3, y: 3.3, density: 0.3 },
      
      // Middle finger
      { x: 0.2, y: 2.0, density: 0.7 },
      { x: 0.2, y: 2.7, density: 0.6 },
      { x: 0.2, y: 3.5, density: 0.5 },
      { x: 0.2, y: 3.8, density: 0.3 },
      
      // Ring finger
      { x: 0.6, y: 2.0, density: 0.7 },
      { x: 0.6, y: 2.5, density: 0.6 },
      { x: 0.6, y: 3.2, density: 0.5 },
      { x: 0.6, y: 3.5, density: 0.3 },
      
      // Pinky
      { x: 1.0, y: 1.8, density: 0.6 },
      { x: 1.0, y: 2.3, density: 0.5 },
      { x: 1.0, y: 2.8, density: 0.4 },
      { x: 1.0, y: 3.0, density: 0.2 },
    ];

    let index = 0;
    
    // Generate particles for each hand path point
    handPath.forEach((point, pathIndex) => {
      const particlesForPoint = Math.floor(particleCount * point.density / handPath.length);
      
      for (let i = 0; i < particlesForPoint && index < particleCount; i++) {
        // Add some randomness around each point
        const radius = 0.3 + Math.random() * 0.4;
        const angle = Math.random() * Math.PI * 2;
        
        positions[index * 3] = point.x + Math.cos(angle) * radius + (Math.random() - 0.5) * 0.3;
        positions[index * 3 + 1] = point.y + Math.sin(angle) * radius + (Math.random() - 0.5) * 0.3;
        positions[index * 3 + 2] = (Math.random() - 0.5) * 0.5;

        // Golden color variations
        const golden = new THREE.Color('#d4af37');
        const brightness = 0.7 + Math.random() * 0.3;
        colors[index * 3] = golden.r * brightness;
        colors[index * 3 + 1] = golden.g * brightness;
        colors[index * 3 + 2] = golden.b * brightness;

        // Particle size variation
        sizes[index] = 2 + Math.random() * 4;
        
        index++;
      }
    });

    // Fill remaining particles with scattered particles
    for (let i = index; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = Math.random() * 5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

      const golden = new THREE.Color('#d4af37');
      const brightness = 0.3 + Math.random() * 0.4;
      colors[i * 3] = golden.r * brightness;
      colors[i * 3 + 1] = golden.g * brightness;
      colors[i * 3 + 2] = golden.b * brightness;

      sizes[i] = 1 + Math.random() * 2;
    }

    return { positions, colors, sizes };
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      // Animate particles with floating and dissolving effects
      for (let i = 0; i < positions.length; i += 3) {
        // Floating motion
        positions[i + 1] += Math.sin(time * 2 + i * 0.01) * 0.002;
        positions[i] += Math.cos(time * 1.5 + i * 0.02) * 0.001;
        
        // Dissolving effect - some particles drift away
        if (Math.random() > 0.998) {
          positions[i + 2] += (Math.random() - 0.5) * 0.05;
        }
        
        // Reset particles that drift too far
        if (Math.abs(positions[i + 2]) > 2) {
          positions[i + 2] = (Math.random() - 0.5) * 0.5;
        }
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Subtle rotation
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      meshRef.current.rotation.z = Math.sin(time * 0.2) * 0.05;
    }
  });

  return (
    <points ref={meshRef} position={[-0.5, -1.8, 0]} scale={[0.8, 0.8, 0.8]}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const WireframeHand = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#d4af37" />
        <pointLight position={[-5, -5, 5]} intensity={0.4} color="#ffd700" />
        <ParticleHand />
      </Canvas>
    </div>
  );
};

export default WireframeHand;