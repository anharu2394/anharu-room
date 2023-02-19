import { Canvas } from "@react-three/fiber";
import {  Html, KeyboardControls, KeyboardControlsEntry, OrbitControls, PerformanceMonitor, PerspectiveCamera, Sky  } from '@react-three/drei';
import React, { Suspense, useMemo, useState } from "react";
import {  Physics } from "@react-three/rapier";
import { Box } from "@chakra-ui/react";
import Ground from "./components/Ground";
import round from "lodash/round";
import Darkrai from "./components/Darkrai";

enum Controls {
  forward = "forward",
  back = "back",
  left = "left",
  right = "right",
  jump = "jump",
}

function App() {
  const map = useMemo<KeyboardControlsEntry<Controls>[]>(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "w", "W"] },
      { name: Controls.back, keys: ["ArrowDown", "s", "S"] },
      { name: Controls.left, keys: ["ArrowLeft", "a", "A"] },
      { name: Controls.right, keys: ["ArrowRight", "d", "D"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );
  const [dpr, setDpr] = useState(2);
  return (
    <KeyboardControls map={map}>
      <Box h="100vh">
        <Canvas dpr={dpr} performance={{ min: 0.1 }}>
          <PerformanceMonitor
            factor={1}
            onChange={({ factor }) => setDpr(round(0.5 + 1.5 * factor, 1))}
          >
            <Suspense>
              <Physics>
                <Sky />
                <OrbitControls />
                <Ground />
                <Darkrai />
                <PerspectiveCamera makeDefault position={[0, 0, 2]} />
                <Html transform occlude="blending" position={[0, 10, -50]}>
                  <embed
                    type="text/html"
                    src="https://technologies.anharu.me"
                    width="380"
                    height="700"
                  />
                </Html>
                <Html transform occlude="blending" position={[13, 10, -50]}>
                  <embed
                    type="text/html"
                    src="https://semp.jp"
                    width="380"
                    height="700"
                  />
                </Html>
                <Html transform occlude="blending" position={[-20, 10, -50]}>
                  <embed
                    type="text/html"
                    src="https://pvyoho.weatherdatascience.tokyo"
                    width="1000"
                    height="700"
                  />
                </Html>
                <ambientLight intensity={0.8} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
              </Physics>
            </Suspense>
          </PerformanceMonitor>
        </Canvas>
      </Box>
    </KeyboardControls>
  );
}

export default App;