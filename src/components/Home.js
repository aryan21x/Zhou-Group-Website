import React, { useState, useEffect } from "react";
import { AnimatedTooltip } from "./ui/animatedTooltip";

const people = [
  {
    id: 1,
    name: "Shan Zhou",
    designation: "Assistant Professor",
    image:
      "/images/shanZhou.jpg",
  },
  {
    id: 2,
    name: "Dr. Zinnia Mallick",
    designation: "Postdoc",
    image:
      "/images/zinnia.jpg",
  },
  {
    id: 3,
    name: "Junming Yue",
    designation: "Graduate Student",
    image:
      "/images/junming.jpg",
  },
  {
    id: 4,
    name: "Emily Marrs",
    designation: "Graduate Student",
    image:
      "/images/emily.jpg",
  },
  {
    id: 5,
    name: "Joshua Marquardt",
    designation: "BS Biomedical",
    image:
      "/images/joshua.jpg",
  },
  {
    id: 6,
    name: "Aryan Raval",
    designation: "BS Computer Science",
    image:
      "/images/aryan.jpg",
  },
];

const Home = () => {
  const [icon, setIcon] = useState("/images/atom.svg");
  const [atoms, setAtoms] = useState([
    { id: 1, position: { x: 100, y: 100 }, velocity: { x: 2, y: 2 } },
    { id: 2, position: { x: 300, y: 200 }, velocity: { x: -2, y: 2 } },
    { id: 3, position: { x: 500, y: 300 }, velocity: { x: 2, y: -2 } },
  ]);
  const [dragging, setDragging] = useState(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  

  useEffect(() => {
    // Set the icon based on time of day
    const currentHour = new Date().getHours();
    setIcon(currentHour < 12 ? "/images/atom2.svg" : "/images/atom.svg");

    const moveAtoms = () => {
      setAtoms((prevAtoms) =>
        prevAtoms.map((atom) => {
          let newX = atom.position.x + atom.velocity.x;
          let newY = atom.position.y + atom.velocity.y;

          const maxX = window.innerWidth - 100; // Subtracting the width of the atom
          const maxY = window.innerHeight - 100; // Subtracting the height of the atom

          if (newX <= 0 || newX >= maxX) {
            atom.velocity.x = -atom.velocity.x;
          }
          if (newY <= 0 || newY >= maxY) {
            atom.velocity.y = -atom.velocity.y;
          }

          newX = Math.max(0, Math.min(newX, maxX));
          newY = Math.max(0, Math.min(newY, maxY));

          return { ...atom, position: { x: newX, y: newY } };
        })
      );
    };

    const interval = setInterval(moveAtoms, 20);
    return () => clearInterval(interval);
  }, []);

  const startDrag = (e, atomId) => {
    setDragging(atomId);
    const atom = atoms.find((a) => a.id === atomId);
    setOffset({
      x: e.clientX - atom.position.x,
      y: e.clientY - atom.position.y,
    });
  };

  const onDrag = (e) => {
    if (dragging !== null) {
      setAtoms((prevAtoms) =>
        prevAtoms.map((atom) => {
          if (atom.id === dragging) {
            const maxX = window.innerWidth - 100;
            const maxY = window.innerHeight - 100;
            let newX = e.clientX - offset.x;
            let newY = e.clientY - offset.y;

            newX = Math.max(0, Math.min(newX, maxX));
            newY = Math.max(0, Math.min(newY, maxY));

            return { ...atom, position: { x: newX, y: newY } };
          }
          return atom;
        })
      );
    }
  };

  const endDrag = () => {
    setDragging(null);
  };

  return (
    <div className="home-container" onMouseMove={onDrag} onMouseUp={endDrag}>
      {/* Video Background */}
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="images/background3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better readability */}
      <div className="overlay">
        {/* Hero Section */}
        <header className="hero">
          <h1 className="hero-title animate__animated animate__fadeInDown">
            Materials-Interfaces Imaging <br /> and Design Laboratory
          </h1>
          <p className="hero-subtitle animate__animated animate__fadeInUp">
            Our mission: exploring the unknown realm of materials interfaces at the nanoscale
          </p>
        </header>
        <div className="flex flex-row items-center mb-10 w-full tooltip">
          <AnimatedTooltip items={people} />
        </div>
      </div>

      {/* Draggable & Moving SVGs */}
      {atoms.map((atom) => (
        <img
          key={atom.id}
          src={icon}
          alt="Custom SVG"
          style={{
            position: "absolute",
            left: atom.position.x,
            top: atom.position.y,
            cursor: "grab",
            width: "100px",
            // zIndex: "-1",
          }}
          className="atom-mobile"
          onMouseDown={(e) => startDrag(e, atom.id)}
        />
      ))}
      
    </div>
  );
};

export default Home;
