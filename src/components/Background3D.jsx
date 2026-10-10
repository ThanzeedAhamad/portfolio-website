import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Stars,
  Sparkles,
  MeshDistortMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MainOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.08;
      meshRef.current.rotation.y = time * 0.12;

      meshRef.current.position.x =
        state.pointer.x * 0.12;

      meshRef.current.position.y =
        state.pointer.y * 0.08;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.4}
      floatIntensity={0.7}
    >
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 5]} />

        <MeshDistortMaterial
          color="#7568ff"
          emissive="#241b70"
          emissiveIntensity={0.7}
          roughness={0.25}
          metalness={0.8}
          distort={0.22}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function WireOrb() {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x =
        time * -0.04;

      meshRef.current.rotation.y =
        time * 0.06;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.8}>
      <icosahedronGeometry args={[1, 2]} />

      <meshBasicMaterial
        color="#9b92ff"
        wireframe
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

function FloatingParticles() {
  return (
    <>
      <Sparkles
        count={120}
        scale={[14, 10, 10]}
        size={2}
        speed={0.25}
        color="#aaa4ff"
      />

      <Stars
        radius={30}
        depth={15}
        count={1000}
        factor={1.2}
        saturation={0}
        fade
        speed={0.3}
      />
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />

      <pointLight
        position={[4, 3, 5]}
        intensity={12}
        color="#7568ff"
      />

      <pointLight
        position={[-5, -3, 2]}
        intensity={8}
        color="#4f46e5"
      />

      <FloatingParticles />

      <MainOrb />

      <WireOrb />
    </>
  );
}

function Background3D() {
  return (
    <div className="background-3d">
      <Canvas
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default Background3D;