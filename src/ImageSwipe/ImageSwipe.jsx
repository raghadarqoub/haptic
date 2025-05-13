import React from "react";
import "./ImageSwipe.css";

const images = [
  {
    main: "/Images/A1.jpeg",
    avatar: "/Images/a1.avif",
    label: "Harvard",
    text: "Empowering youth with neuroscience"
  },
  {
    main: "/Images/B2.jpeg",
    avatar: "/Images/b2.avif",
    label: "Neon Horizons",
    text: "Welcome to the cyberscape"
  },
  {
    main: "/Images/C3.jpeg",
    avatar: "/Images/c3.avif",
    label: "Spark",
    text: "Blockchain for commerce"
  },
  {
    main: "/Images/d44.jpg",
    avatar: "/Images/d4.avif",
    label: "Norby",
    text: "See your business clearly"
  },
  {
    main: "/Images/E5.jpeg",
    avatar: "/Images/e5.avif",
    label: "Momentify",
    text: "Capture live music experiences"
  },
  {
    main: "/Images/F6.jpeg",
    avatar: "/Images/f6.avif",
    label: "Google",
    text: "A new home for Angular"
  },
];

const ImageSlider = () => (
  <div className="gallery-scroll-wrapper">
    <div className="gallery-row">
      {images.map((img, i) => (
        <div className="gallery-card" key={i}>
          <div className="gallery-item">
            <img src={img.main} alt={img.label} />
          </div>
          <div className="gallery-caption">
            <div className="gallery-caption-top">
              <img className="gallery-avatar" src={img.avatar} alt={`Avatar ${i + 1}`} />
              <span className="gallery-label">{img.label}</span>
            </div>
            <span className="gallery-text">{img.text}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ImageSlider;
