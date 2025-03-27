import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { InstancedBoxes } from './InstancedBoxes';
import { MergedMesh } from './MergedMesh';

export const MainCanvas = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      camera={{
        position: [5, 5, 5],
        aspect: window.innerWidth / window.innerHeight,
        fov: 60,
        near: 0.1,
        far: 100000,
      }}
      scene={{
        background: new THREE.Color(0x000000),
      }}
    >
      <ambientLight intensity={2} />
      <directionalLight
        intensity={2}
        position={[100, 100, 100]}
      />
      <OrbitControls />
      {/* <InstancedBoxes /> */}
      <MergedMesh />
    </Canvas>
  );
};