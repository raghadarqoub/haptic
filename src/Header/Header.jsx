import React from 'react';
import './Header.css';

const OvalShape = () => (
  <svg
    width="68"
    height="35"
    viewBox="0 0 91 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="side-box-image"
    aria-hidden="true"
    focusable="false"
  >
    <g clipPath="url(#clip0)">
      <g transform="matrix(1.011,0,0,1,-50,-3.35)" opacity="1">
        <g transform="matrix(1.3333,0,0,1.3333,0,0)" opacity="1">
          <path
            fillRule="evenodd"
            fill="rgb(216,216,216)"
            fillOpacity="1"
            d="M0,0.27 C0,19 15.18,34.19 33.91,34.19 C52.64,34.19 67.83,19 67.83,0.27 C67.83,0.27 0,0.27 0,0.27Z"
          />
        </g>
      </g>
      <g transform="matrix(1,0,0,1,0,0)" opacity="1">
        <path fill="rgb(0,0,0)" fillOpacity="0" d="M91,0 C91,0 0,0 0,0 C0,0 0,46 0,46 C0,46 91,46 91,46 C91,46 91,0 91,0Z" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="91" height="46" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const HeroHeader = () => (
  <section className="hero-header-container">
    <section className="hero-header">
      <h1>
        We help{' '}
        <span className="icon-group">
          <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg">
            <g>
              <path d="M4 14L16 4V24L4 14Z" fill="#111" />
              <path d="M17 14L29 4V24L17 14Z" fill="#111" />
              <path d="M30 14L38 8V20L30 14Z" fill="#111" />
            </g>
          </svg>
        </span>
        ambitious<br />
        teams turn bold visions<br />
        into{' '}
        <span className="icon-group">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon-svg">
            <circle cx="18" cy="18" r="18" fill="#111" />
            <rect x="7" y="7" width="22" height="22" fill="#FF4D12" />
          </svg>
        </span>
        lasting impact.
      </h1>
    </section>

    <aside className="side-box">
      <div className="side-box-label">Hiring</div>
      <div className="side-box-title-container">
        <div className="side-box-images-grid">
          <OvalShape />
          <OvalShape />
          <OvalShape />
          <OvalShape />
        </div>
        <span className="side-box-title">Senior Designer</span>
        <button className="side-box-plus-btn" aria-label="More info">
          <span className="plus-icon">+</span>
        </button>
      </div>
    </aside>
  </section>
);

export default HeroHeader;
