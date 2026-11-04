"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";

function OrbitObject() {
  const sculpture = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!sculpture.current) return;
    sculpture.current.rotation.y += delta * 0.13;
    sculpture.current.rotation.x += (state.pointer.y * 0.12 - sculpture.current.rotation.x) * Math.min(delta * 2, 1);
    sculpture.current.rotation.z += (state.pointer.x * 0.08 - sculpture.current.rotation.z) * Math.min(delta * 2, 1);
  });

  return (
    <group ref={sculpture}>
      <mesh>
        <icosahedronGeometry args={[1.42, 3]} />
        <meshPhysicalMaterial color="#8C76CF" metalness={0.8} roughness={0.23} clearcoat={1} clearcoatRoughness={0.15} flatShading />
      </mesh>
      <mesh rotation={[1.02, 0.25, 0.4]}>
        <torusGeometry args={[2.05, 0.045, 12, 180]} />
        <meshStandardMaterial color="#D4AA76" metalness={0.9} roughness={0.23} />
      </mesh>
      <mesh rotation={[-0.35, 0.7, 0.4]}>
        <torusGeometry args={[1.85, 0.022, 10, 180]} />
        <meshStandardMaterial color="#E9E0F8" metalness={0.75} roughness={0.27} />
      </mesh>
      <mesh position={[1.76, 0.6, 0.08]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#F7D4A2" metalness={0.4} roughness={0.2} emissive="#8C5F2B" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
}

export default function OrbitScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6.8], fov: 44 }}
      gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      className="orbit-canvas"
    >
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 6, 5]} intensity={3.0} color="#F5E8D5" />
      <pointLight position={[-4, -1, 3]} intensity={65} color="#8E6DE6" />
      <OrbitObject />
    </Canvas>
  );
}

