import React from "react";
import "./SessionTwo.css";
import hapticImage from "../Image.jpeg"; 

const SessionTwo = () => {
return (
    <section className="haptic-section">
    <div className="haptic-image-wrapper">
        <img
        src={hapticImage}
        alt="Haptic visual"
        className="haptic-image"
        />
    </div>
    <div style={{textAlign:"start", paddingLeft:"2%", color:"rgb(255, 105, 55)", paddingTop:"5px"}}> <li>Working at Haptic </li> </div>
    <div className="haptic-content">
        <p className="main-text">
        Startups come to us when<br />
        they need a team that can<br />
        deliver real results.
        </p>
        </div> <div style={{textAlign:"start", paddingLeft:"2%", color:"rgb(255, 105, 55)", paddingTop:"5px"}}> <li>Open Roles </li> </div>
    <div className="haptic-content">
        <p className="haptic-content2">Senior Designer</p>
        </div>
    </section>
    );
};

export default SessionTwo;
