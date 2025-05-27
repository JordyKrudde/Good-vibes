import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/AboutPage.scss';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__content">
        <h1 className="about__title">About This Project</h1>
        
        <div className="about__bio">
          <div className="about__profile">
            {/* You can add a profile image here */}
            <div className="about__profile-image"></div>
          </div>
          
          <div className="about__bio-content">
            <h2 className="about__bio-heading">Hello, I'm Jordy</h2>
            <p className="about__bio-text">
              Welcome to my interactive playground! This project showcases various web development 
              techniques, creative coding experiments, and interactive designs.
            </p>
            <p className="about__bio-text">
              Each tile in the homepage grid leads to a unique experience, from animations to 
              games and visual experiments.
            </p>
            <p className="about__bio-text">
              Feel free to explore and enjoy the different interactions I've created!
            </p>
          </div>
        </div>
        
        <div className="about__skills">
          <h2 className="about__skills-heading">Skills & Technologies</h2>
          <div className="about__skills-grid">
            <div className="about__skill-item">React</div>
            <div className="about__skill-item">JavaScript</div>
            <div className="about__skill-item">CSS/SCSS</div>
            <div className="about__skill-item">Animation</div>
            <div className="about__skill-item">Interactive Design</div>
            <div className="about__skill-item">Creative Coding</div>
          </div>
        </div>
      </div>
      
      <Link to="/" className="about__back-button">Back to Home</Link>
    </div>
  );
};

export default AboutPage;
