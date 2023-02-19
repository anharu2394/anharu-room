import { CuboidCollider } from "@react-three/rapier";

const Ground = () => {
  return (
    <group>
      <mesh receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[1000, 1000]} />
      </mesh>
      <CuboidCollider position={[0, 0, 0]} args={[20, 0.5, 20]} />
    </group>
  );
}

export default Ground;