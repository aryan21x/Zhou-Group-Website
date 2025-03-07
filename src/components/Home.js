import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* Overlay for better readability */}
      <div className="overlay">
        {/* Hero Section */}
        <header className="hero">
          <h1 className="hero-title animate__animated animate__fadeInDown">
          Materials-Interfaces Imaging and Design Laboratory
          </h1>
          <p className="hero-subtitle animate__animated animate__fadeInUp">
          Our mission: exploring the unknown realm of materials interfaces at the nanoscale
          </p>
        </header>

        {/* Content Section */}
        <section className="content">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            Shan Zhou Group is the Nanoscience and Biomedical department at South Dakota Mines. Our expertise spans with the atomic force microscope and other nanoscale technology.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
