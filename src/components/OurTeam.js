import React from "react";
import { database } from "../firebaseConfig";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-database.js";

const authRef = ref(database, 'auth');

onValue(authRef, (snapshot) => {
  const auth = snapshot.val();
  console.log(auth);
});

const teamSections = [
  {
    title: "Principal Investigator",
    members: [
      {
        name: "Dr. Shan Zhou",
        role: "Assistant Professor",
        research: "Nanoparticle synthesis and assembly, 2D materials, plasmonic metamaterials, regioselective surface chemistry control, and advanced in situ characterization techniques including electron microscopy and electrochemical 3D atomic force microscopy. ",
        department: "Nanoscience & Biomedical Engineering, South Dakota School of Mines and Technology",
        education: [
          "Ph.D., Georgia Institute of Technology",
          "B.S., University of Science and Technology of China",
        ],
        expertise: "Nanoparticle synthesis and assembly, 2D materials, plasmonic metamaterials, regioselective surface chemistry control, and advanced in situ characterization techniques including electron microscopy and electrochemical 3D atomic force microscopy.",
        contact: "shan[dot]zhou[at]sdsmt[dot]edu, EEP 228",
        image: "/images/shanZhou.jpg",
      },
    ],
  },
  {
    title: "Postdoc",
    members: [
      {
        name: "Dr. Zinnia Mallick",
        education: [
          "PhD, Nano Science and Technology, INST-IISER, Mohali, India (2018-2024)",
        ],
        hobbies: "Reading literature, watching animated movies, and exploring global music",
        research: "Exploration of nanoscale structural, electrical, and surface properties using scanning probe microscopy-based techniques",
        contact: "mallickzinnia[a]gmail[dot]com",
        image: "/images/zinnia.jpg",
      },
    ],
  },
  {
    title: "Graduate Students",
    members: [
      {
        name: "Junming Yue",
        education: ["M.S., Newcastle University", "B.S., Shandong Normal University"],
        hobbies: "Watching football games, listening to Rock music, and traveling",
        research: "Nanoparticle synthesis and assembly, advanced in situ characterization techniques",
        contact: "junming[dot]yue[at]mines[dot]sdsmt[dot]edu",
        image: "/images/junming.jpg",
      },
      {
        name: "Emily Marrs",
        education: [
          "M.S. in Biomedical Engineering, South Dakota School of Mines and Technology, 2024-present",
          "B.S. in Biochemistry, Black Hills State University, 2020-2023",
        ],
        hobbies: "Baking, running, and backpacking",
        research: "Nanoparticle synthesis",
        contact: "emily[dot]bates[at]mines[dot]sdsmt[dot]edu",
        image: "/images/emily.jpg",
      },
    ],
  },
  {
    title: "Undergraduate Students",
    members: [
      {
        name: "Joshua Marquardt",
        education: [
          "B.S. in Biomedical Engineering, South Dakota School of Mines and Technology, 2023-present",
          "Associate of Liberal Arts and Sciences, Rochester Community and Technical College, 2021-2023",
        ],
        hobbies: "Reading the Bible, reading, and hiking",
        research: "Studying nanomaterials for medical applications",
        contact: "joshua[dot]marquardt[at]mines[dot]sdsmt[dot]edu",
        image: "/images/joshua.jpg",
      },

      {
        name: "Ky Duyen Dao Nguyen",
        education: [
          "B.S. in Computer Science at South Dakota School of Mines and Technology, Class of 2028 ",
        ],
        hobbies: "video games",
        research: "data science and AI Integrations in image processing",
        contact: "kyduyen[dot]daonguyen[at]mines[dot]sdsmt[dot]edu",
        image: "/images/ky.jpg",
      },

      {
        name: "Aryan Raval",
        education: [
          "B.S. in Computer Science at South Dakota School of Mines and Technology, 2022–present ",
        ],
        hobbies: "working out at the gym, hiking, rock climbing, and watching soccer",
        research: "",
        contact: "aryan[dot]raval[at]mines[dot]sdsmt[dot]edu",
        image: "/images/aryan.jpg",
      },
    ],
  },
  
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <h1 className="team-title">Our Team</h1>
      {teamSections.map((section, index) => (
        <div key={index} className="team-section">
          <h2 className="team-section-title">{section.title}</h2>
          <div className="team-grid">
            {section.members.map((member, idx) => (
              <div key={idx} className="team-member">
                <img src={member.image} alt={member.name} className="team-photo" />
                <h3 className="team-name">{member.name}</h3>
                {member.role && <p className="team-role">{member.role}</p>}
                {member.department && <p className="team-department">{member.department}</p>}
                
                <h4> Education </h4>
                {member.education && (
                  <ul className="team-education">
                    {member.education.map((edu, eduIdx) => (
                      <li key={eduIdx}>{edu}</li>
                    ))}
                  </ul>
                )}
                {member.research && <h4> Research </h4> }
                {member.research && <p className="team-research">{member.research}</p>}
                {member.hobbies && <p className="team-hobbies">Hobbies: {member.hobbies}</p>}
                <h4 className="team-contact">Contact: {member.contact}</h4>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="openings">
        <h2>Opportunities</h2>
        <p>
          We currently have one opening for a <strong> postdoc researcher  </strong> and <strong> three openings for graduate research assistants </strong>.
          We always welcome undergraduate students with backgrounds in materials science, chemistry, physics, computer science,
          and mechanical engineering. Contact Dr. Zhou at shan[dot]zhou[at]sdsmt[dot]edu for more details.
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
