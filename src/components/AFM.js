import React , { useState, useRef, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF , PerspectiveCamera} from '@react-three/drei';
import * as THREE from 'three';


const AFM = () => {

  const model1 = useGLTF('models/part1.glb');
  const model2 = useGLTF('models/part2.glb');
  const model3 = useGLTF('models/part3.glb');
  const model4 = useGLTF('models/mainb2.glb');

  const model1Ref = useRef();
  const model2Ref = useRef();
  const model3Ref = useRef();
  const model4Ref = useRef();

  const [refreskKey, setRefreshKey] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(10); // Default scale for desktop
  const [yposition, setYposition] = useState(0); // Default scale for desktop
  const [zposition, setZposition] = useState(0); // Default scale for desktop
  const [y2position, setY2position] = useState(0); // Default scale for desktop
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const cameraRef = useRef();
  const mixerRef = useRef(null); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScaleFactor(10); // Scale for mobile
        setYposition(5);
        setZposition(25);
        setY2position(-4.25);
      } else {
        setScaleFactor(10); // Default scale for desktop
        setZposition(0);
        setYposition(0);
        setYposition(-6);
        setY2position(-6.00);
      }
    };

    // Initial check and setting scale on load
    handleResize();

    // Add resize event listener to update scale on window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    return () => {
      setAnimationPlayed(false); // Reset animation state when component unmounts
      if (mixerRef.current) {
      mixerRef.current.stopAllAction();
      mixerRef.current = null;
    }
      setRefreshKey((prev) => prev + 1);
    };
    
  }, []);


  const playModel4Animation = () => {
    if (model4.animations.length > 0 && model4Ref.current) {
      if (mixerRef.current) mixerRef.current.stopAllAction();
      const mixer = new THREE.AnimationMixer(model4Ref.current);
      mixerRef.current = mixer;

      const action = mixer.clipAction(model4.animations[0]);
      action.reset();
      action.setLoop(THREE.LoopOnce);
      action.clampWhenFinished = true;
      action.play();
      setAnimationPlayed(true);

      const clock = new THREE.Clock();
      const animate = () => {
        if (animationPlayed) return;
        requestAnimationFrame(animate);
        mixer.update(clock.getDelta());
      };
      animate();
    }
  };

  const handleClickAnimation = () => {
    if (!animationPlayed) {
      playModel4Animation();
    }
  };

  return (
      <section >
        {/* <h2>Outreach</h2> */}

        <p className="afm-title">Atomic Force Microscope - Click to Open</p>
        <p className="afm-description">
        The Atomic Force Microscope (AFM) is a powerful tool used to image surfaces at the nanometer scale. 
        It operates by scanning a sharp tip over a sample surface, allowing researchers to study material properties 
        at an atomic level. AFM is widely used in physics, chemistry, and biology for nanoscale imaging and analysis. 
        Below is a 3D model of the AFM. Learn more about AFM and interact with a detailed model here:
        <a href="https://atomicforcemicroscope.netlify.app/" target="_blank" rel="noopener noreferrer"> Atomic Force Microscopy</a>.
        </p>
        <div className ="model">
        <Canvas>
          <color attach="background" args={["#f9fafb"]} />
          <PerspectiveCamera key={refreskKey} makeDefault position={[0, 100, 1000]} fov={45} near={10} far={2000} ref={cameraRef}/>
          <ambientLight intensity={0.75} position={[10, 10, 10]} />
          <directionalLight position={[400, 400, 1000]} intensity={0.75} castShadow />
          <pointLight position={[0, 0, 0]} intensity={500} color="#fff" />
          <OrbitControls target={[0, 0, 0]} maxDistance={1000} />
            <group position={[0, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} rotation={[0, 3 * Math.PI / 2, 0]} >
              <primitive object={model1.scene} ref={model1Ref} />
            </group>
            
            <group position={[0, -5, -2]} scale={[scaleFactor - 2, scaleFactor - 2, scaleFactor - 2]} >
              <primitive object={model2.scene} ref={model2Ref} />
            </group>

            <group position={[0, y2position, -2]} scale={[scaleFactor - 4, scaleFactor - 4, scaleFactor - 4]} >
              <primitive object={model3.scene} ref={model3Ref} />
            </group>
            
            <group position={[0, -40 + yposition, -110 + zposition]} scale={[scaleFactor * 3, scaleFactor * 3, scaleFactor * 3]} rotation={[0, Math.PI / 2, 0]}
              onClick={() => handleClickAnimation()} >
              <primitive object={model4.scene} ref={model4Ref} />
            </group>
        </Canvas>
        </div>
      </section>
  );
};

export default AFM;