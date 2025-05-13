import React, { useState } from "react";
import "./Partners .css";

const projects = [
  {
    name: "Momentify",
    image: "/Images/img2.avif",
    title: "Brand, Web, Product",
    year: 2024,
    desc: "Capture live music experiences",
    icon: "/Images/e5.avif",
  },
  {
    name: "Norby",
    image: "/Images/img6.jpeg",
    title: "Motion",
    year: 2025,
    desc: "See your business clearly",
    icon: "/Images/d4.avif",
  },
  {
    name: "Spark",
    image: "/Images/img3.avif",
    title: "Brand, Web, Product",
    year: 2024,
    desc: "Blockchain for commerce",
    icon: "/Images/c3.avif",
  },
  {
    name: "Google",
    image: "/Images/imag4.avif",
    title: "Web, Product",
    year: 2024,
    desc: "A new home for Angular",
    icon: "/Images/f6.avif",
  },
  {
    name: "Harvard",
    image: "/Images/img1.avif",
    title: "Brand, Web, Product",
    year: 2025,
    desc: "Empowering youth with neuroscience",
    icon: "/Images/a1.avif",
  },
  {
    name: "Neon Horizons",
    image: "/Images/img5.jpeg",
    title: "Brand, Product",
    year: 2025,
    desc: "Welcome to the cyberscape",
    icon: "/Images/b2.avif",
  },
];

const Partners  = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  // للموبايل: عند الضغط على عنصر يتم فتحه فقط
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
    <div style={{textAlign:"start", paddingLeft:"2%",}}> <li> Partners + Projects</li> </div>
    <section className="projects-section">
      <div className="projects-list">
        <ul>
          {projects.map((proj, idx) => (
            <li
              key={proj.name}
              className={activeIdx === idx ? "active" : ""}
              onMouseEnter={() => setActiveIdx(idx)}
              onFocus={() => setActiveIdx(idx)}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              tabIndex={0}
            >
              {proj.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="projects-image">
        <img src={projects[activeIdx].image} alt={projects[activeIdx].name} />
      </div>
      <div className="projects-details">
        {projects.map((proj, idx) => (
          <div
            key={proj.name}
            className={`project-detail ${activeIdx === idx ? "active" : ""}`}
          >
            <div className="project-title">{proj.title}</div>
            <div className="project-year">{proj.year}</div>
          </div>
        ))}
      </div>

      {/* للموبايل فقط: قائمة رأسية مع أيقونة وصورة وتفاصيل */}
      <div className="projects-mobile-list">
        {projects.map((proj, idx) => (
          <div
            className={`mobile-project ${openIdx === idx ? "open" : ""}`}
            key={proj.name}
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
          >
            <div className="mobile-header">
              <img src={proj.icon} alt={proj.name} className="mobile-icon" />
              <div>
                <div className="mobile-name">{proj.name}</div>
                <div className="mobile-desc">{proj.desc}</div>
              </div>
            </div>
            {/* {openIdx === idx && (
              <div className="mobile-details">
                <img src={proj.image} alt={proj.name} className="mobile-image" />
                <div className="mobile-title">{proj.title}</div>
                <div className="mobile-year">{proj.year}</div>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Partners ;
