import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { InstancedBoxes } from './InstancedBoxes';
import { MergedMesh } from './MergedMesh';
import { TestMesh } from './TestMesh';
import { useCallback, useState, useEffect, Suspense } from 'react';
import { Html, useGLTF } from '@react-three/drei';

export const MainCanvas = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleModelLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleModelLoaded();
      console.log('Loading finished');
    }, 5000);
    return () => clearTimeout(timeout);
  }, [handleModelLoaded]);

  console.log('isLoading: ', isLoading);
  
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      camera={{
        position: [10, 10, 10],
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
      {/* <MergedMesh /> */}
      <Suspense fallback={<Html><div>Loading...</div></Html>}>
        {isLoading ? null : <TestMesh />}
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload(['/dancer01.glb', '/dancer02.glb', '/dancer03.glb']);