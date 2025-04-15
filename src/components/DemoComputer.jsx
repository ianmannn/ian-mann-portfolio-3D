import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const DemoComputer = (props) => {
  const group = useRef();
  const { scene } = useGLTF('/models/3DComputer.glb');

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive
        object={scene}
        scale={3.5}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]} // ← flips the model to face forward
        />
    </group>
  );
};

export default DemoComputer;