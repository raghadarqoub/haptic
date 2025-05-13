
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="sidebar-overlay">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div>
            <span className="sidebar-hiring">Hiring</span>
            <span className="sidebar-title">Senior Designer</span>
          </div>
          <button className="sidebar-close" onClick={onClose} aria-label="Close">
            &times;
          </button>
        </div>
        <div className="sidebar-content">
          <h2>
            As a Senior Designer, you’ll be a driving force in shaping our creative output and studio culture.
          </h2>
          <div className="sidebar-tags">
            <span>Full-Time</span>
            <span>UK</span>
            <span>Europe</span>
            <span>Remote</span>
          </div>
          <button className="sidebar-apply">Apply</button>
          <div className="sidebar-image"></div>
          <section className="sidebar-section">
            <h3>About Us</h3>
            <p>
              Haptic is a forward-thinking design studio that seamlessly blends creativity and technology to craft powerful brand, web, motion, and product experiences. Our partners range from ambitious startups to global innovators, including industry leaders such as Google, IBM, Harvard University, and Reddit.
              <br /><br />
              As the new kids on the block, we've rapidly made our mark - in our first year alone, we've delivered over 50 projects and surpassed £1M in revenue. Now, we're poised for further growth and exciting expansion in 2025.
              <br /><br />
              At Haptic, we're driven by a passion for creation, whether collaborating with clients or pursuing our own exploratory projects. We embrace technology as our creative partner - a dynamic force that enhances human ingenuity, turning bold ideas into immersive experiences.
            </p>
          </section>
          <section className="sidebar-section">
            <h3>In This Role, You Will:</h3>
            <ul>
              <li>Present work directly to clients and gather feedback from stakeholders</li>
              <li>Provide constructive feedback and foster a collaborative, idea-driven environment</li>
              <li>Elevate concepts through thoughtful refinement and strategic decision-making</li>
              <li>Develop and maintain internal design systems and processes</li>
              <li>Explore new tools, techniques, and visual approaches to push creative boundaries</li>
            </ul>
          </section>
          <section className="sidebar-section">
            <h3>You Should Apply If:</h3>
            <ul>
              <li>You have 5+ years of design experience, including at least 2 years at an agency</li>
              <li>Your portfolio includes work for real-world clients across various mediums</li>
              <li>You have a keen eye for detail, a sharp sense of judgment, and a strategic approach to design</li>
              <li>You’re a creative problem-solver who knows when to adapt and iterate</li>
              <li>You understand design from both a creative and technical perspective, ensuring seamless handoffs between design and engineering</li>
              <li>You thrive in dynamic environments and enjoy pushing creative boundaries</li>
              <li>You communicate clearly and collaborate effectively with cross-functional teams</li>
              <li>You are a kind, solution-oriented person who others enjoy working with</li>
            </ul>
          </section>
          <section className="sidebar-section">
            <h3>Nice to Haves</h3>
            <ul>
              <li>Motion design</li>
              <li>Art direction</li>
              <li>Copywriting</li>
              <li>Coding</li>
              <li>3D design</li>
            </ul>
          </section>
          <section className="sidebar-section">
            <h3>Working Together</h3>
            <p>
              At Haptic, we believe in process. We take the time to deeply understand each project, ensuring that every detail is thoughtfully considered before moving forward.
              <br /><br />
              We are committed to the growth of our team. We value who you are now and who you are becoming, fostering an environment where everyone can learn, evolve, and thrive.
              <br /><br />
              There’s no single type of person we’re looking for-our strength comes from the diverse backgrounds, skills, and perspectives that fuel our creativity. By bringing together different experiences and ways of thinking, we push boundaries, challenge assumptions, and create truly innovative work.
            </p>
          </section>
          <section className="sidebar-section">
            <h3>Application</h3>
            <p>
              To apply, please click the 'Apply' button to email us. Please link us to your portfolio and your Linkedin, we’ll reach out if we’re interested in talking further.
            </p>
          </section>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
