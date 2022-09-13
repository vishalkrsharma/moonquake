import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import moon from '../assets/moon.jpg';
import { useState } from 'react';
import { useRef } from 'react';
import gsap from 'gsap';


function Moon() {
  const moonTexture = useLoader(THREE.TextureLoader, moon);
  const sphereRef = useRef()
  const groupRef =useRef()
  
  const [cursor,changeCursor]=useState({
    x:0,
    y:0
  })
  document.addEventListener("mousemove",(e)=>{
    changeCursor({
      x:(e.clientX/window.innerWidth)*2-1,
      y:(e.clientY/window.innerHeight)*2+1
    })
  })
  useFrame(()=>{
    sphereRef.current.rotation.y+=0.002
    gsap.to(
      groupRef.current.rotation,
      {
        y:cursor.x*0.5,
        duration:2
      }
    )
    
  })

  return (
    <>
      <Stars radius={300} depth={60} count={204000} factor={7} saturation={0} fade={true} />
      <group ref={groupRef}>
      <mesh ref={sphereRef} rotation={[0, -Math.PI/5, 0]}>
        <sphereGeometry attach='geometry' args={[1, 100, 100]} />
        <meshPhongMaterial color='black' />
        <meshStandardMaterial map={moonTexture} />
      </mesh>
      </group>
    </>
  );
}

export default Moon;
