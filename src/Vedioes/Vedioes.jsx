import React, { useRef, useState } from "react";
import "./Vedioes.css";

const Vedioes = ({ videoSrc, name, title, avatarSrc }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="video-card">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={videoSrc}
          className="video"
          muted
          playsInline
          controls={false}
          poster=""
        />
        {!isPlaying && (
          <button className="play-btn" onClick={handlePlay} aria-label="Play video">
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="24" fill="#fff" opacity="0.9" />
              <polygon points="20,16 34,24 20,32" fill="#222" />
            </svg>
          </button>
        )}
      </div>
      <div className="video-info">
        {avatarSrc && (
          <img src={avatarSrc} alt={name} className="video-avatar" />
        )}
        <div className="video-name">{name}</div>
        <div className="video-title">{title}</div>
      </div>
    </div>
  );
};

const TestimonialVideos = () => {
  return (
    <div className="videos-grid">
      <Vedioes
        videoSrc="Images/XMwwb4nP2hKlj2AMlyQ79Ou8g8.mp4"
        name="Danny Quick"
        title="Founder, Powerups"
        avatarSrc="Images/icon1.avif"
      />
      <Vedioes
        videoSrc="Images/bout3KxbMaPTRUvJGVwRzI0WM.mp4"
        name="Adam McIntee"
        title="Co-Founder, Apollo"
        avatarSrc="Images/icon2.avif"
      />
    </div>
  );
};

export default TestimonialVideos;
