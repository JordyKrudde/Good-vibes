import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/HoverEffectsPage.scss';

const HoverEffectsPage = () => {
  // State for tracking which effect is being hovered
  const [activeEffect, setActiveEffect] = useState(null);
  
  // These effect items were defined for documentation purposes but are implemented directly in the JSX
  // We're using the activeEffect state to track which effect is being hovered instead
  
  // Magnetic button effect logic
  const handleMagneticMove = (e) => {
    const magneticButton = document.getElementById('magnetic-button');
    if (!magneticButton) return;
    
    const rect = magneticButton.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Apply transform based on cursor position
    magneticButton.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };
  
  const handleMagneticLeave = () => {
    const magneticButton = document.getElementById('magnetic-button');
    if (magneticButton) {
      magneticButton.style.transform = 'translate(0px, 0px)';
    }
  };
  

  
  return (
    <div className="hover-effects">
      <h1 className="hover-effects__title">Advanced Hover Effects & Microinteractions</h1>
      <p className="hover-effects__intro">
        Explore these interactive elements to see various hover effects and microinteractions.
        Each demonstrates a different technique for creating engaging user experiences.
      </p>
      
      <div className="hover-effects__showcase">
        {/* Magnetic Button */}
        <div 
          className={`hover-effects__container ${activeEffect === 'magnetic' ? 'hover-effects__container--active' : ''}`}
          onMouseEnter={() => setActiveEffect('magnetic')}
          onMouseLeave={() => setActiveEffect(null)}
        >
          <h2 className="hover-effects__container-title">Magnetic Button</h2>
          <div className="hover-effects__demo magnetic__demo" onMouseMove={handleMagneticMove} onMouseLeave={handleMagneticLeave}>
            <button id="magnetic-button" className="magnetic__button">
              Hover Me
            </button>
          </div>
          <p className="hover-effects__description">
            This button is attracted to your cursor, creating a playful interaction that makes
            the interface feel more responsive and alive.
          </p>
        </div>
        
        {/* Glow Effect */}
        <div 
          className={`hover-effects__container ${activeEffect === 'glow' ? 'hover-effects__container--active' : ''}`}
          onMouseEnter={() => setActiveEffect('glow')}
          onMouseLeave={() => setActiveEffect(null)}
        >
          <h2 className="hover-effects__container-title">Glow Effect</h2>
          <div className="hover-effects__demo glow__demo">
            <div className="glow__item">Hover for Glow</div>
          </div>
          <p className="hover-effects__description">
            A subtle glow effect can draw attention to interactive elements and create a sense
            of depth and dimension on the page.
          </p>
        </div>
        
        {/* Content Reveal */}
        <div 
          className={`hover-effects__container ${activeEffect === 'reveal' ? 'hover-effects__container--active' : ''}`}
          onMouseEnter={() => setActiveEffect('reveal')}
          onMouseLeave={() => setActiveEffect(null)}
        >
          <h2 className="hover-effects__container-title">Content Reveal</h2>
          <div className="hover-effects__demo reveal__demo">
            <div className="reveal__card">
              <div className="reveal__face reveal__face--front">Hover to Reveal</div>
              <div className="reveal__face reveal__face--back">Secret Content!</div>
            </div>
          </div>
          <p className="hover-effects__description">
            Revealing content on hover creates a sense of discovery and encourages users
            to explore your interface.
          </p>
        </div>
      </div>
      
      <Link to="/" className="hover-effects__back-button">Back to Home</Link>
    </div>
  );
};

export default HoverEffectsPage;
