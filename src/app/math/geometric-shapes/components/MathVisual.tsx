'use client';

import { Shape, ShapeParams } from './Shape';
import { Controls } from './Controls'; 


import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';

export const MathVisual = () => {
  const [params, setParams] = useState<ShapeParams>({
    type: 'torus',
    radius: 3,
    tube: 1,
    segments: 32,
    twist: 0,
    color: '#6366f1',
    size: 3
  });

  return (
    <div className="h-screen w-full cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        className="bg-gradient-to-b from-indigo-500/10 to-purple-500/10"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <Shape params={params} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 3/4}
          dampingFactor={0.05}
          rotateSpeed={0.5}
        />
      </Canvas>
      <Controls params={params} setParams={setParams} />
    </div>
  );
}; 
