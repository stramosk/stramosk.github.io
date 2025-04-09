'use client';

import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

export type ShapeType = 'torus' | 'sphere' | 'cube' | 'torusKnot';
export type ShapeParams = {
  type: ShapeType;
  radius: number;
  tube: number;
  segments: number;
  twist: number;
  color: string;
  size?: number;
};

export function Shape({ params }: { params: ShapeParams }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerMeshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useFrame((state, delta) => {
    if (!meshRef.current || !innerMeshRef.current) return;

    const material = meshRef.current.material as THREE.MeshPhongMaterial;
    const innerMaterial = innerMeshRef.current.material as THREE.MeshPhongMaterial;
    
    const color = new THREE.Color();
    const targetColor = hovered ? '#8b5cf6' : params.color;
    
    color.set(material.color);
    color.lerp(new THREE.Color(targetColor), 0.1);
    material.color = color;
    innerMaterial.color = color;

    meshRef.current.rotation.z += delta * params.twist;
    innerMeshRef.current.rotation.z += delta * params.twist;

    const rotationSpeed = isDragging ? 0.1 : 0.3;
    meshRef.current.rotation.x += delta * rotationSpeed;
    meshRef.current.rotation.y += delta * rotationSpeed;
    innerMeshRef.current.rotation.x += delta * rotationSpeed;
    innerMeshRef.current.rotation.y += delta * rotationSpeed;

    if (clicked) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 4) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
      innerMeshRef.current.scale.set(scale * 0.98, scale * 0.98, scale * 0.98);
    } else {
      meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      innerMeshRef.current.scale.lerp(new THREE.Vector3(0.98, 0.98, 0.98), 0.1);
    }
  });

  const getGeometry = () => {
    switch (params.type) {
      case 'sphere':
        return <sphereGeometry args={[params.radius, params.segments, params.segments]} />;
      case 'cube':
        return <boxGeometry args={[params.size || 3, params.size || 3, params.size || 3]} />;
      case 'torusKnot':
        return <torusKnotGeometry args={[params.radius, params.tube, params.segments, 8, 2, 3]} />;
      default:
        return <torusGeometry args={[params.radius, params.tube, params.segments, 100]} />;
    }
  };

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group onPointerDown={() => setIsDragging(true)} onPointerUp={() => setIsDragging(false)}>
        <mesh
          ref={meshRef}
          onPointerOver={(e) => {
            e.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            setHovered(false);
          }}
          onClick={(e) => {
            e.stopPropagation();
            setClicked(!clicked);
          }}
        >
          {getGeometry()}
          <meshPhongMaterial
            color={params.color}
            wireframe={true}
            wireframeLinewidth={2}
          />
        </mesh>
        
        <mesh
          ref={innerMeshRef}
          scale={[0.98, 0.98, 0.98]}
        >
          {getGeometry()}
          <meshPhongMaterial
            color={params.color}
            opacity={0.1}
            transparent
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}