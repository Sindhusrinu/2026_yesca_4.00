"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";

function RotatingMesh() {
  const ref = useRef();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.001;
  });

  return (
    <Float>
      <Center>
        <mesh ref={ref} scale={0.2}>
          <torusKnotGeometry args={[3, 1, 64, 16]} />
          <meshStandardMaterial
            wireframe
            color={"red"}
            roughness={0.5}
            metalness={0.9}
          />
        </mesh>
      </Center>
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas shadows camera={{ position: [1, 1.5, 8], fov: 25 }}>
      <Environment preset="city" />
      <directionalLight position={[0, 0, 5]} />
      <directionalLight position={[3, 0, 5]} />
      <OrbitControls
        minPolarAngle={Math.PI / 3}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
      />

      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1.09, 0]}
        opacity={0.35}
        blur={3}
      />

      <RotatingMesh />
    </Canvas>
  );
}
