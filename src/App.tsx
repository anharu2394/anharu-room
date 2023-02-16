import { VRButton, XR, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import {  Html, OrbitControls, Sky } from '@react-three/drei';
import React from "react";
import { Physics } from "@react-three/cannon";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <VRButton />
      <Canvas>
        <XR>
          <Hands />
          <Physics
            gravity={[0, -2, 0]}
            iterations={20}
            defaultContactMaterial={{
              friction: 0.09,
            }}
          >
            <Sky />
            <OrbitControls />
            <Html transform position={[0, 0, -30]}>
              <embed
                type="text/html"
                src="https://technologies.anharu.me"
                width="500"
                height="1000"
              />
            </Html>
            <Html transform position={[20, 0, -30]}>
              <embed
                type="text/html"
                src="https://semp.jp"
                width="500"
                height="1000"
              />
            </Html>
            <Html transform position={[-40, 0, -30]}>
              <embed
                type="text/html"
                src="https://pvyoho.weatherdatascience.tokyo"
                width="2000"
                height="1400"
              />
            </Html>
            <ambientLight intensity={0.5} />
          </Physics>
        </XR>
      </Canvas>
    </Box>
  );
}

export default App;