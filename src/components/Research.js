import React from "react";

const Research = () => {
  const researchAreas = [
    {
      title: "Nanoscale Surface Chemistry",
      description:
        "Nanoscale surface chemistry determines properties for natural and engineered materials such as plasmonic nanoparticles, 2D materials, and polymeric nanoparticles. Our goal is to develop new synthetic strategies to precisely engineer the surface chemistry of materials with nanoscale precision, to realize emergent plasmonic, chiroptical and catalytic properties for potential applications in computing, energy, and biomedicines.",
      image: "/images/nanoscale.jpg",
    },
    {
      title: "Solid-Liquid Interfaces",
      description:
        "Solid-liquid interfaces are ubiquitous and the electric double layers (EDLs) at the interface have great impacts on electrocatalytic reactions, which are key processes to generate renewable fuels. We use in-situ electrochemical-3D-atomic force microscopy (EC-3D-AFM) to directly image the molecular structures at the solid-liquid interface. This mechanistic understanding can help guiding the design of low-cost, highly efficient catalysts for energy applications.",
      image: "/images/solid.jpg",
    },
    {
      title: "Bio-Interfaces",
      description:
        "Understandings of the cell-materials interactions at the bio-interfaces involved in various transfection pathways are still missing due to the limited in-situ techniques with required spatiotemporal resolution. The EC-3D-AFM is a powerful tool for investigating the dynamic changes occurring at the soft and dynamic bio-interfaces. The new insights can offer guidelines in nanoparticle design and regioselective surface control for the next-generation drug carriers.",
      image: "/images/bio.jpg",
    },
  ];

  return (
    <div className="research-container">
      <h1 className="research-title">Our Research Areas</h1>
      {researchAreas.map((area, index) => (
        <div key={index} className="research-section animate__animated animate__fadeInLeft">
          <div className="image-wrapper">
            <img src={area.image} alt={area.title} className="research-image" />
          </div>
          <div className="text-content">
            <h2 className="section-title">{area.title}</h2>
            <p className="section-description">{area.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Research;
