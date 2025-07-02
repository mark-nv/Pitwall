'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture } from '@react-three/drei';

import * as THREE from 'three';
import { useRef, useState, forwardRef, useImperativeHandle } from 'react';

const Model = forwardRef((_props, ref) => {
  const { scene } = useGLTF('/assets/rb20/rb20.gltf');
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
          child.material.metalness = 0.0;
          child.material.roughness = 0.9;
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

  return <primitive object={scene} ref={modelRef} position={[0, -0.84, 0]} />;
});

Model.displayName = 'Model';

const Hero = () => {
  const modelComponentRef = useRef<{ setHasInteracted: (value: boolean) => void }>(null);

  return (
    <div className="h-screen w-full" style={{backgroundColor: '#222222'}}>
      <Canvas shadows camera={{ position: [8, 2.5, 8], fov: 30 }} gl={{ antialias: true, outputColorSpace: THREE.SRGBColorSpace }}>
        <color attach="background" args={['#222222']} />
        <ambientLight intensity={0.2} />
        <directionalLight
            position={[5, 10, 7.5]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-near={0.5}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
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
          onStart={() => modelComponentRef.current?.setHasInteracted(true)}
        />
        <Model ref={modelComponentRef} />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.81, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#222222" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Hero;
