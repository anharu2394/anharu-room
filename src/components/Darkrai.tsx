import { useState, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, useProgress, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <p>
        {progress} % loaded
      </p>
    </Html>
  );
};

useGLTF.preload("/darkrai.glb");

const Darkrai = () => {

    const { scene, animations  } = useGLTF("/darkrai.glb");
    const [ mixer ] = useState( () => new THREE.AnimationMixer( scene ) );

    void mixer.clipAction(animations[0]).play();
    useFrame((state, delta) => {
        mixer.update(delta);
        // console.log(ca);
    });

    return (
      <Suspense fallback={<Loader />}>
        <primitive object={scene} position={[0, 0, 0]} />
      </Suspense>
    );
};

export default Darkrai;
