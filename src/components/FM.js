import React , { useState, useRef, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF , PerspectiveCamera} from '@react-three/drei';
import * as THREE from 'three';


const FM = () => {

  const model1 = useGLTF('models/FM.glb');
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

  return (
      <section>
        {/* <h2>Outreach</h2> */}

        <p className="afm-title">Fusion Microscope</p>
        <p className="afm-description">
        The Fusion Microscope (FM) represents an advanced integration of multiple imaging technologies, enabling researchers to explore materials with unprecedented precision and depth. 
        By combining optical, atomic, and electronic imaging techniques, FM delivers high-resolution, multi-dimensional insights into complex samples. 
        This hybrid approach is especially valuable in nanotechnology, biomedical research, and materials science, where both surface detail and internal structure are critical. 
        Below is a 3D model of the Fusion Microscope.
        </p>

        <div className ="model">
        <Canvas>
          <color attach="background" args={["#f9fafb"]} />
          <PerspectiveCamera key={refreskKey} makeDefault position={[0, 100, 1000]} fov={45} near={10} far={2000} ref={cameraRef}/>
          <ambientLight intensity={0.75} position={[10, 10, 10]} />
          <directionalLight position={[400, 400, 1000]} intensity={0.75} castShadow />
          <pointLight position={[0, 0, 0]} intensity={500} color="#fff" />
          <OrbitControls target={[0, 0, 0]} maxDistance={1000} />
            <group position={[0, -100, 0]} scale={[scaleFactor*10, scaleFactor*10, scaleFactor*10]}  >
              <primitive object={model1.scene} ref={model1Ref} />
            </group>
        </Canvas>
        </div>
      </section>
  );
};

export default FM;