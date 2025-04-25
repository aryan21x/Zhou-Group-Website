import React , { useState, useRef, useEffect } from "react";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF , PerspectiveCamera} from '@react-three/drei';
import * as THREE from 'three';
import { Carousel } from "./ui/carousel";


const courses = [
  {
    semester: "Fall 2024",
    classes: [
      "NANO 703 - Instrumentation and Characterization of Nanomaterials",
      "NANO 703L - Instrumentation and Characterization of Nanomaterials Lab",
    ],
  },
  {
    semester: "Spring 2024",
    classes: ["NANO 717 - Nanochemistry"],
  },
  {
    semester: "Fall 2023",
    classes: [
      "NANO 703 - Instrumentation and Characterization of Nanomaterials",
      "NANO 703L - Instrumentation and Characterization of Nanomaterials Lab",
      "BME 498 - Research",
      "BME 898D - Dissertation",
      "NANO 898D - Dissertation",
    ],
  },
  {
    semester: "Summer 2023",
    classes: [
      "BME 788 - Research Problems/Projects",
      "BME 798 - Thesis",
      "BME 898D - Dissertation",
      "NANO 898D - Dissertation",
    ],
  },
  {
    semester: "Spring 2023",
    classes: [
      "BME 690 - Seminar",
      "BME 790 - Seminar",
      "NANO 890 - Seminar",
      "BME 200 - Undergraduate Research",
    ],
  },
];

const outreachEvents = [
  { year: "2022 Fall", event: "RCAS 8th Grade College & Career Fair" },
];


const outreachImages = [
  { title: "Fall 2022: RCAS 8th Grade College & Career Fair", src: "/images/outreach1.jpg"},
  { title: "Fall 2022: RCAS 8th Grade College & Career Fair", src: "/images/outreach2.jpg"},
  { title: "Fall 2022: RCAS 8th Grade College & Career Fair", src: "/images/outreach3.jpg" },
];

const outreachImages2 = [
  { title: "Wise2025", src: "/images/wise1.jpg"},
  { title: "Wise2025", src: "/images/wise2.jpg"},
  { title: "Wise2025", src: "/images/wise3.jpg"},
  { title: "Wise2025", src: "/images/wise4.jpg"},
  { title: "Wise2025", src: "/images/wise5.jpg"},
];

const outreachImages3 = [
  { title: "Engineering Camp 2025", src: "/images/camp1.jpg"},
  { title: "Engineering Camp 2025", src: "/images/camp2.jpg"},
  { title: "Engineering Camp 2025", src: "/images/camp3.jpg"},
  { title: "Engineering Camp 2025", src: "/images/camp4.jpg"},
  { title: "Engineering Camp 2025", src: "/images/camp5.jpg"},
];


const TeachingOutreach = () => {

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

    <div className="teaching-container">
      <h1 className="teaching-title">Teaching & Outreach</h1>

      <h2 className="outreach-header text-center">Outreach in Action</h2>
      <section className="outreach-images animate__animated animate__fadeInLeft">
        <div className="image-gallery">
          {/* {outreachImages.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} className="outreach-image" />
          ))} */}
          <div className="relative overflow-hidden w-full h-full py-20">
            <h3 className="carousel-title"> RCAS 8th Grade College & Career Fair </h3>
            <Carousel slides={outreachImages} />
          </div>
          <div className="relative overflow-hidden w-full h-full py-20">
            <h3 className="carousel-title"> Wise2025 </h3>
            <Carousel slides={outreachImages2} />
          </div>
          <div className="relative overflow-hidden w-full h-full py-20">
            <h3 className="carousel-title"> Engineering Camp 2025 </h3>
            <Carousel slides={outreachImages3} />
          </div>
        </div>
      </section>

      <section className="teaching-philosophy animate__animated animate__fadeInLeft">
        <h2>Teaching Philosophy</h2>
        <p>
          As a researcher with training in a broad spectrum of chemistry and
          engineering disciplines, Dr. Zhou aims to create an inclusive and
          inspirational teaching environment that inspires young and fresh minds
          to develop an ability to pursue knowledge while making their own
          discoveries.
        </p>
      </section>
      
      <section className="courses">
        <h2>Courses</h2>
        {courses.map((course, index) => (
          <div key={index} className="course-section animate__animated animate__fadeInLeft">
            <h3>{course.semester}</h3>
            <ul>
              {course.classes.map((className, idx) => (
                <li key={idx}>{className}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TeachingOutreach;
