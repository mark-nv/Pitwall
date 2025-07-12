'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';



import * as THREE from 'three';
import { useRef, useState, forwardRef, useImperativeHandle } from 'react';

const Model = forwardRef((_props, ref) => {
  const { scene } = useGLTF('/assets/rb20/rb20.glb');
  const modelRef = useRef<THREE.Group>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useImperativeHandle(ref, () => ({
    setHasInteracted,
  }));

  const modelTextureMap = {
    'model_0': '/assets/rb20/StandardSurface38_Base_color_1001.png',
    'model_1': '/assets/rb20/StandardSurface31_Base_color_1001.png',
    'model_3': '/assets/rb20/StandardSurface32_Base_color_1001.png',
    'model_4': '/assets/rb20/StandardSurface33_Base_color_1001.png',
    'model_5': '/assets/rb20/StandardSurface39_Base_color_1001.png',
    'model_6': '/assets/rb20/StandardSurface34_Base_color_1001.png',
  };

  const textures = useTexture(Object.values(modelTextureMap));

  const loadedTextures = Object.keys(modelTextureMap).reduce<Record<string, THREE.Texture>>((acc, key, index) => {
    acc[key] = textures[index];
    acc[key].flipY = false;
    return acc;
  }, {});


  scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      const modelName = child.name.replace('.001', '');
      const texture = loadedTextures[modelName];
      
      if (child.material instanceof THREE.MeshStandardMaterial) {
        if (texture) {
          child.material.map = texture;
          child.material.metalness = 0.1;
          child.material.roughness = 0.75;
        } else {
          child.material.metalness = -0.3;
          child.material.roughness = 0.7;
        }
        child.material.needsUpdate = true;
      }
    }
  });

  useFrame(() => {
    if (!hasInteracted && modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return <primitive object={scene} ref={modelRef} position={[STARTING_X_POSITION, STARTING_Y_POSITION, 0]} />;
});

Model.displayName = 'Model';

const STARTING_Y_POSITION = -0.7;
const STARTING_X_POSITION = 0;

const RedBullCar = () => {
  const modelComponentRef = useRef<{ setHasInteracted: (value: boolean) => void }>(null);

  return (
    <div className="relative h-screen w-full" style={{backgroundColor: 'var(--color-background)'}}>
      <Canvas shadows camera={{ position: [8, 2.5, 8], fov: 15 }} gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}>
        <ambientLight intensity={0.5} />
        <directionalLight
            position={[15, 20, 7.5]}
            intensity={4}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={0.5}
            shadow-camera-far={50}
            shadow-camera-left={-15}
            shadow-camera-right={15}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
        />
        <OrbitControls 
          target={[0, 0, 0]} 
          maxPolarAngle={Math.PI * 0.47}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            // MIDDLE: THREE.MOUSE.DOLLY,
            MIDDLE: undefined,
            RIGHT: undefined,
          }}
          enableZoom={false}
          onStart={() => modelComponentRef.current?.setHasInteracted(true)}
        />
        <Model ref={modelComponentRef} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, STARTING_Y_POSITION + 0.03, 0]} receiveShadow>
          <circleGeometry args={[3, 32]} />
          <shaderMaterial
            attach="material"
            args={[{
              uniforms: {
                color: { value: new THREE.Color("#333333") },
                opacity: { value: 0.5 },
                center: { value: new THREE.Vector2(0.5, 0.5) },
                radius: { value: 0.3 },
                fadePower: { value: 2.0 }
              },
              vertexShader: `
                varying vec2 vUv;
                void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
              `,
              fragmentShader: `
                uniform vec3 color;
                uniform float opacity;
                uniform float radius;
                uniform float fadePower;
                varying vec2 vUv;

                void main() {
                  float dist = distance(vUv, vec2(0.5, 0.5));
                  float alpha = 1.0 - smoothstep(radius - 0.1, radius + 0.1, dist);
                  gl_FragColor = vec4(color, alpha * opacity);
                }
              `,
              transparent: true,
            }]}
          />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, STARTING_Y_POSITION + 0.04, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <shadowMaterial transparent opacity={0.5} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default RedBullCar;
