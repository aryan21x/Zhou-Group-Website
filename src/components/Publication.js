import React from "react";

const publications = [
  {
    title: "Characterizing Self-Assembly of Plasmonic Nanostructures in Real Space and Reciprocal Space in Self-Assembly of Plasmonic Nanostructures, World Scientific Publishing Company (2020).",
    image: "/images/dp.jpg",
    type: "book chapters",
    year: 2020,
    author: "Zhou, S.; Chen, W. and Chen, Q",
    link: "#",
  },
  {
    title: "Patchy Nanoparticle Synthesis and Self-Assembly in Self-Assembly of Nanostructures, IntechOpen (2020).",
    image: "/images/dp.jpg",
    type: "book chapters",
    year: 2020,
    author: "Kim, A.; Yao, L.; Kalutantirige, F.; Zhou, S. and Chen, Q",
    link: "#",
  },
  {
    title: "Nonclassical Crystallization Observed by Liquid-Phase Transmission Electron Microscopy in Crystallization via non-classical pathways, ACS (2020).",
    image: "/images/dp.jpg",
    type: "book chapters",
    year: 2020,
    author: "Liu, C.; Ou, Z.; Zhou, S. and Chen, Q",
    link: "#",
  },
  {
    title: "Metallic nanostructures for electronics and optoelectronics in Metallic nanostructures: from controlled synthesis to applications (Editors: Xiong, Y.; Lu, X.), Springer (2014).",
    image: "/images/dp.jpg",
    type: "book chapters",
    year: 2014,
    author: "Zhou, S. and Xiong, Y. Chapter 9.",
    link: "#",
  },

  {
    title : `A Library of Seed@High-Entropy-Alloy Core-Shell Nanocrystals with Controlled Facets for Catalysis", Advanced Materials, 2024, 	accepted`,
    image: "/images/dp.jpg",
    type: "PEER-REVIEWED PUBLICATIONS: After joining SDSMT (*corresponding author)",
    year: 2024,
    author: "Hsiao, Y.-C.; Wu, C.-Y.; Lee, C.-H.; Huang, W.-Y.; Thang, H. V.; Chi, C.-C.; Zeng, W.-J.; Gao, J.-Q.; Lin, C.-Y.; Lin, J.-T.; Gardner, A. M.; Jang, H.; 	Juang, R.-H.; Liu, Y.-H.; Mekhemer, I. M. A.; Lu, M.-Y.; Lu, Y.-R.; Chou, H.-H.; Kuo, C.-H.; Zhou, S.; Hsu, L.-C.; Chen, H.-Y. T.; Cowan, A. J.; Hung, S.-F.; 	Yeh, J.-W.; Yang, T.-H.",
    link: "#",
  }
];

// Group publications by type
const groupedPublications = publications.reduce((groups, pub) => {
  if (!groups[pub.type]) {
    groups[pub.type] = [];
  }
  groups[pub.type].push(pub);
  return groups;
}, {});

const Publications = () => {
  return (
    <div className="publications-page">
      <h1 className="page-title">Publications</h1>
      {Object.keys(groupedPublications).map((type) => (
      <div className="publications-list">
        <h2 className="publication-type-title">{type}</h2>
        {groupedPublications[type].map((pub, index) => (
          <div key={index} className="publication-row">
            <img src={pub.image} alt={pub.title} className="publication-image" />
            <div className="publication-content">
              <h3 className="publication-title">{pub.title}</h3>
              <h3 className="publication-author">{pub.author}</h3>
              <a href={pub.link} className="read-more-btn">Link Here</a>
            </div>
          </div>
        ))}
      </div>
      ))}
    </div>
  );
};

export default Publications;
