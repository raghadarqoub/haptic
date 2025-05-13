import React from "react";
import "./SessionOne.css";
import hapticImage from "../Image.jpeg"; 

const SessionOne = () => {
return (
    <section className="haptic-section">
    <div className="haptic-image-wrapper">
        <img
        src={hapticImage}
        alt="Haptic visual"
        className="haptic-image"
        />
    </div>
    <div style={{textAlign:"start", paddingLeft:"2%", color:"black", paddingTop:"5px"}}> <li> Why Haptic </li> </div>
    <div className="haptic-content">
        <p className="main-text">
        Startups come to us when<br />
        they need a team that can<br />
        deliver real results.
        </p>
        </div>
    </section>
    );
};

export default SessionOne;
