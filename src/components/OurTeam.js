import React from "react";
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
    designation: "Postdoc Nanoscience & Technology",
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
    name: "Natnael Sinebo",
    designation: "Graduate Student",
    image:
      "/images/Natnael.jpg",
  },
  {
    id: 5,
    name: "Emily Marrs",
    designation: "Graduate Student",
    image:
      "/images/emily.jpg",
  },
  {
    id: 6,
    name: "Joshua Marquardt",
    designation: "BS Biomedical",
    image:
      "/images/joshua.jpg",
  },
  {
    id: 7,
    name: "Aryan Raval",
    designation: "BS Computer Science",
    image:
      "/images/aryan.jpg",
  },
  {
    id: 8,
    name: "Ky Duyen Dao Nguyen",
    designation: "BS Computer Science",
    image:
      "/images/ky.jpg",
  },
  {
    id: 9,
    name: "Marc Tchona",
    designation: "BS Electrical Engineering",
    image:
      "/images/marc.jpg",
  },
];

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
      {
        name: "Natnael Sinebo",
        education: [
          "B.S., South Dakota School of Mines and Technology, 2019 - present"
        ],
        hobbies: "reading the bible, watching soccer and track events, hiking, and traveling",
        research: "study and understand the properties of nanomaterials and their application in diagnosis, drug delivery systems, implants, biosensing, and bioimaging devices",
        contact: "natnael[dot]sinebo[at]mines[dot]sdsmt[dot]edu",
        image: "/images/Natnael.jpg",
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
          "B.S. in Computer Science at South Dakota School of Mines and Technology, 2022-present ",
        ],
        hobbies: "working out at the gym, hiking, rock climbing, and watching soccer",
        research: "",
        contact: "aryan[dot]raval[at]mines[dot]sdsmt[dot]edu",
        image: "/images/aryan.jpg",
      },
      {
        name: "Marc Tchona",
        education: [
          "B.S., in Electrical Engineering, South Dakota School of Mines and Technology, 2022-present"
        ],
        hobbies: "Music, Table Tennis, Chess, Problem Solving",
        research: "Mechatronics and Applied Robotics",
        contact: "marc[dot]tchona[at]mines[dot]sdsmt[dot]edu",
        image: "/images/marc.jpg",
      },
    ],
  },
  {
    title: "TEM instrumentation specialist",
    members: [
      {
        name: "Vanessa Kee",
        education: [
          "B.S. in Chemical Engineering at South Dakota School of Mines and Technology",
        ],
        hobbies: "cell culture, transmission electron microscopy and atomic force microscopy",
        research: "cell culture, transmission electron microscopy and atomic force microscopy",
        contact: "Vanessa[dot]Kee[at]sdsmt[dot]edu , EEP235C",
        image: "/images/Vanessa.jpg",
      },
    ],
  },
  {
    title: "Alumni",
    members: [
      {
        name: "Kory Engelstad",
        education: [
          "B.S., South Dakota School of Mines and Technology, 2021 - present",
        ],
        hobbies: "playing violin, hiking and hunting, playing magic the gathering",
        research: "study and understand properties of nanomaterials and their application in tissue engineering and the medical field",
        contact: "kory[dot]engelstad[at]mines[dot]sdsmt[dot]edu",
        image: "/images/KoryDp.jpg",
      },
      {
        name: "Josiah Baumeister",
        education: [
          "B.S in Electrical Engineering at South Dakota School of Mines & Technology, 2023-Present",
          "M.S in Electrical Engineering at South Dakota School of Mines & Technology, 2024-Present",
          "Associates of Science at Front Range Community College, Completed, 2021-2023",
        ],
        hobbies: "weightlifting, travel, computers, woodworking, sports, bible study",
        contact: "josiah[dot]baumeister[at]mines[dot]sdsmt[dot]edu",
        image: "/images/josiah.jpg",
      },
    ],
  },
  
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <h1 className="team-title">Our Team</h1>
      <div className="flex flex-row items-center mb-10 w-full tooltip">
                <AnimatedTooltip items={people} />
      </div>
      {teamSections.map((section, index) => (
        <div key={index} className="team-section animate__animated animate__fadeInLeft">
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
                {member.hobbies && <p className="team-hobbies"> <strong> Hobbies:</strong> {member.hobbies}</p>}
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
