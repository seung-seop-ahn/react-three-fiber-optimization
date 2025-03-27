import { useGLTF } from '@react-three/drei';

export const TestMesh = () => {
  const gltfs = useGLTF(['/dancer01.glb', '/dancer02.glb', '/dancer03.glb']);

  return (<>
    {gltfs.map((gltf, idx) => (
      <primitive key={idx} object={gltf.scene} scale={0.1} rotation-y={(Math.PI / 2) * idx} />
    ))}
  </>
  );
};