"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, Text3D, Center, Stars, Sparkles } from "@react-three/drei"
import { useRef, Suspense } from "react"
import * as THREE from "three"

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#6366f1"
          emissive="#6366f1"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function FloatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={3}>
      <mesh ref={meshRef} position={[2, 1, 0]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.3}
          metalness={0.7}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={2.5}>
      <mesh ref={meshRef} position={[-2, -1, 0]}>
        <torusGeometry args={[0.8, 0.2, 16, 100]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
          metalness={0.9}
          roughness={0.05}
        />
      </mesh>
    </Float>
  )
}

function FloatingIcosahedron() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.18
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.22
    }
  })

  return (
    <Float speed={3.2} rotationIntensity={0.6} floatIntensity={3}>
      <mesh ref={meshRef} position={[1.5, -1.5, 0]}>
        <icosahedronGeometry args={[0.5]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={0.3}
          metalness={0.6}
          roughness={0.3}
          wireframe
        />
      </mesh>
    </Float>
  )
}

function FloatingCone() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.12
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.28
    }
  })

  return (
    <Float speed={2.8} rotationIntensity={0.7} floatIntensity={2.8}>
      <mesh ref={meshRef} position={[-1.5, 1.5, 0]}>
        <coneGeometry args={[0.5, 1, 32]} />
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.25}
          metalness={0.75}
          roughness={0.15}
        />
      </mesh>
    </Float>
  )
}

function AnimatedText() {
  return (
    <Center position={[0, 3, 0]}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        Inspire Leap
        <meshNormalMaterial />
      </Text3D>
    </Center>
  )
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 1000
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03
    }
  })

  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10
    positions[i + 1] = (Math.random() - 0.5) * 10
    positions[i + 2] = (Math.random() - 0.5) * 10
    
    colors[i] = 0.4 + Math.random() * 0.6
    colors[i + 1] = 0.4 + Math.random() * 0.6
    colors[i + 2] = 0.8 + Math.random() * 0.2
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <Sparkles count={200} scale={10} size={1} speed={0.3} />
          
          <FloatingCube />
          <FloatingSphere />
          <FloatingTorus />
          <FloatingIcosahedron />
          <FloatingCone />
          <ParticleField />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}