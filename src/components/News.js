import React from "react";

const newsItems = [
  { date: "02/2025", event: "Welcome Emily to the group!" },
  { date: "12/2024", event: "Welcome Aryan and Ky Duyen to the group!" },
  { date: "09/2024", event: "Welcome Zinnia to the group!" },
  { date: "09/2024", event: "Our group received a DOE award on Building EPSCoR-State/National Laboratory Partnerships! Thanks DOE for supporting our research and our great partners at the Ames National Lab." },
  { date: "08/2024", event: "Welcome Junming to the group!" },
  { date: "08/2024", event: "Our group is part of the team receiving an ExpandQISE Track 2 grant! Thanks NSF for supporting our research." },
  { date: "08/2024", event: "Our group received an NSF MRI award on acquiring a new scanning transmission electron microscope! Thanks NSF for supporting our research, and the great efforts from all the co-investigators." },
  { date: "07/2024", event: "Our group gave a demo experiment on making nanoparticles to 8th-12th graders in the Camp BioMed." },
  { date: "06/2024", event: "Our group received a South Dakota Board of Regents Competitive Research Grant (CRG) award! Congratulations to the group and thanks SDBOR for the support!" },
  { date: "05/2024", event: "Joshua won the Undergraduate RESPEC Research Grant! Congratulations, Joshua!" },
  { date: "03/2024", event: "Joshua won the Outstanding Undergraduate BME Student Award. Congratulations, Joshua!" },
  { date: "02/2024", event: "Joshua got accepted to the Department of Energy’s (DOE) Science Undergraduate Laboratory Internships (SULI) program at the Ames National Laboratory (AMES) for the Summer 2024 Term. Congratulations, Joshua!" },
  { date: "11/2023", event: "Our group received an ACS PRF award! Congratulations to the group and thanks ACS for the support!" },
  { date: "08/2023", event: "Welcome Joshua to the group!" },
  { date: "06/2023", event: "Our group received an NSF ERI award! Congratulations to the group and thanks NSF for the support!" },
  { date: "05/2023", event: "Dr. Zhou received the Nelson Research Grant Award." },
  { date: "04/2023", event: "Kory got into the final round of the Undergraduate RESPEC Research Grant competition! Well done, Kory!" },
  { date: "03/2023", event: "Natnael received the Ivanhoe Excellence Fellowship for the Academic Year 2023-2024! Congratulations Natnael!" },
  { date: "03/2023", event: "Dr. Zhou delivered an invited talk at the 2023 ACS Spring meeting in honor of Dr. Younan Xia's ACS National Award for Creative Innovation!" },
  { date: "12/2022", event: "Welcome Kory to the group!" },
  { date: "11/2022", event: "Welcome Natnael to the group!" },
  { date: "11/2022", event: "Our work on 'Chiral assemblies of pinwheel superlattices on substrates' is published in Nature! Read the news highlighted by School of Mines here and Illinois News Bureau here." },
  { date: "10/2022", event: "An OFDA Microgrant has been awarded to the team of Dr. Zhou, Dr. Steve Smith, and Ms. Vanessa Kee. Congratulations!" },
  { date: "08/2022", event: "Dr. Zhou officially started the position at South Dakota School of Mines." },
];

const News = () => {
  return (
    <div className="news-container">
      <h1 className="news-title">Latest News</h1>
      <div className="news-list">
        {newsItems.map((news, index) => (
          <div key={index} className="news-item">
            <span className="news-date">{news.date}</span>
            <p className="news-event">{news.event}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
