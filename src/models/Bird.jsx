import React, { useEffect, useRef } from 'react'
import birdscene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdscene)
    const { actions } = useAnimations(animations, birdRef)

    useEffect(() => {
        actions['Take 001'].play();
    }, []);


    useFrame(({ clock, camera }) => {
        //**  Updating Y position to simulate bird like motion using a sine wave
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2
        //  **Checking th bird reaching a certain endpoint relative to the camera
        if (birdRef.current.position.x > camera.position.x + 10) {
            //**  Changing Direcetion backward 180 degree on y-axis
            birdRef.current.rotation.y = Math.PI;
        } else if (birdRef.current.position.x < camera.position.x - 10) {
            // **Changing Direction Forward and resting rotation 
            birdRef.current.rotation.y = 0
        }

        //**  Updating the x and z positions based on the direction 
        if (birdRef.current.rotation.y === 0) {
            // **Moving The Bird Forward
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            // ** Moving the bird Backward
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    })

    return (
        <mesh
            position={[-5, 2, 1]}
            scale={[0.003, 0.003, 0.003]}
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird