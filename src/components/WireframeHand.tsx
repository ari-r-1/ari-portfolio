import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const HandWireframe = () => {
  const meshRef = useRef<THREE.Group>(null);

  // Create hand wireframe geometry
  const handGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    
    // Palm base points
    points.push(new THREE.Vector3(0, 0, 0));
    points.push(new THREE.Vector3(1, 0, 0));
    points.push(new THREE.Vector3(1, 1.5, 0));
    points.push(new THREE.Vector3(-0.5, 1.5, 0));
    points.push(new THREE.Vector3(-0.5, 0, 0));
    
    // Thumb
    points.push(new THREE.Vector3(-0.7, 0.5, 0));
    points.push(new THREE.Vector3(-1.2, 0.8, 0));
    points.push(new THREE.Vector3(-1.5, 1.2, 0));
    
    // Index finger
    points.push(new THREE.Vector3(-0.3, 1.5, 0));
    points.push(new THREE.Vector3(-0.3, 2.2, 0));
    points.push(new THREE.Vector3(-0.3, 2.8, 0));
    
    // Middle finger
    points.push(new THREE.Vector3(0.2, 1.5, 0));
    points.push(new THREE.Vector3(0.2, 2.5, 0));
    points.push(new THREE.Vector3(0.2, 3.0, 0));
    
    // Ring finger
    points.push(new THREE.Vector3(0.6, 1.5, 0));
    points.push(new THREE.Vector3(0.6, 2.3, 0));
    points.push(new THREE.Vector3(0.6, 2.7, 0));
    
    // Pinky
    points.push(new THREE.Vector3(1.0, 1.5, 0));
    points.push(new THREE.Vector3(1.0, 2.0, 0));
    points.push(new THREE.Vector3(1.0, 2.3, 0));

    return points;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Main hand wireframe */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={handGeometry.length}
            array={new Float32Array(handGeometry.flatMap(v => [v.x, v.y, v.z]))}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#d4af37" transparent opacity={0.8} linewidth={2} />
      </lineSegments>
      
      {/* Connection lines between fingers */}
      {handGeometry.map((point, index) => (
        <mesh key={index} position={[point.x, point.y, point.z]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.9} />
        </mesh>
      ))}
      
      {/* Additional grid pattern */}
      {Array.from({ length: 20 }).map((_, i) => (
        <lineSegments key={`grid-${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                -0.5 + (i * 0.1), 0, 0,
                -0.5 + (i * 0.1), 3, 0
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#d4af37" transparent opacity={0.3} />
        </lineSegments>
      ))}
    </group>
  );
};

const WireframeHand = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#d4af37" />
        <HandWireframe />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default WireframeHand;