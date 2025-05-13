
import React from "react";
import "./BrandSwipe.css";
const images = [
  "Images/b1.jpeg",
  "Images/ba2.jpeg",
  "Images/b3.jpeg",
  "Images/b4.jpeg",
  "Images/b5.jpeg",
  "Images/b6.jpeg",
  "Images/b7.jpeg",
  "Images/b8.jpeg",
  "Images/b9.jpeg",
  "Images/b10.jpeg",
  "Images/b11.jpeg",
  "Images/b12.jpeg",
  "Images/b13.jpeg",
  "Images/b14.jpeg",
];

const BrandSwipe = () => {
   return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {[...images, ...images].map((src, idx) => (
          <div className="carousel-item" key={idx}>
            <img src={src} alt={`image-${idx + 1}`} className="carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandSwipe;