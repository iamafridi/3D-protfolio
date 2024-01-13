import React from 'react'
import birdscene from '../assets/3d/bird.glb'
import { useGLTF } from '@react-three/drei'
const Bird = () => {
    const {scene, animations} = useGLTF(birdscene)
  return (
    <mesh >
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird