import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sphere,
  Sparkles,
} from "@react-three/drei";
import { useRef } from "react";

function Core() {
  const mesh = useRef();
  const clickSpin = useRef(0);

  useFrame((state, delta) => {
    if (!mesh.current) return;

    const spinSpeed = 0.28 + clickSpin.current;

    mesh.current.rotation.x += delta * spinSpeed * 0.65;
    mesh.current.rotation.y += delta * spinSpeed;
    clickSpin.current = Math.max(0, clickSpin.current - delta * 2.4);
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <Sphere
        ref={mesh}
        args={[1.35, 64, 64]}
        onClick={(event) => {
          event.stopPropagation();
          clickSpin.current = 2.4;
        }}
      >
        <meshStandardMaterial
          color="#6d5dfc"
          metalness={0.85}
          roughness={0.2}
          emissive="#302070"
          emissiveIntensity={0.6}
        />
      </Sphere>
    </Float>
  );
}

function AIOrb() {
  return (
    <div className="ai-orb">
      <Canvas
        camera={{
          position: [0, 0, 4.5],
          fov: 45,
        }}
      >

        <ambientLight intensity={1.3} />

        <directionalLight
          position={[3, 3, 4]}
          intensity={3}
        />

        <pointLight
          position={[-3, -2, 3]}
          intensity={2}
          color="#705cff"
        />

        <Core />

        <Sparkles
          count={90}
          scale={5}
          size={2}
          speed={0.4}
        />

      </Canvas>
    </div>
  );
}

export default AIOrb;