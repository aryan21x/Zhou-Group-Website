import React from "react";

const photosData = [
  { title: "Group lunch (Thanksgiving, 2024)", image: "/images/lunch.jpg" },
  { title: "Group activities (Thanksgiving, 2024)", image: "/images/activity.jpg" },
  { title: "Group tour at Mount Rushmore (September, 2024)", image: "/images/tour.jpg" },
  { title: "Group lunch (with Dr. Xinhua Bai, September, 2024)", image: "/images/lunch2.jpg" },
  { title: "Group tour at Bear Country (Photo 1, September, 2024)", image: "/images/bear1.jpg" }, { title: "Group tour at Bear Country (Photo 2, September, 2024)", image: "/images/bear2.jpg" }, { title: "Group tour at Bear Country (Photo 3, September, 2024)", image: "/images/bear3.jpg" }, { title: "Group tour at Bear Country (Photo 4, September, 2024)", image: "/images/bear4.jpg" },
  { title: "Joshua finishing up the SULI program at the Ames National Lab (July, 2024)", image: "/images/suli.jpg" },
  { title: "Group lunch at Golden Fortune (December, 2023)", image: "/images/golden.jpg" },
  { title: "Group gathering (December, 2023)", image: "/images/gathering.jpg" },
  { title: "Group lunch at Kathmandu Bistro (August, 2023)", image: "/images/kathmandu.jpg" },
  { title: "Kory's first experience with TEM (April, 2023)", image: "/images/kory.jpg" },
  { title: "Joshua winning the Outstanding BME Student Award (April, 2024)", image: "/images/award.jpg",special:true },
];


const Photos = () => {
  return (
    <div className="photos-container">
      <h1 className="photos-title">Photos</h1>
      <div className="photos-grid animate__animated animate__fadeInLeft">
        {photosData.map((photo, index) => (
          <div key={index} className={`photo-card ${photo.special ? "award-photo" : ""}`}>
            <img
              src={photo.image}
              alt={photo.title}
              className={`photo-img ${photo.special ? "award-img" : ""}`}
            />
            <p className="photo-title">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
