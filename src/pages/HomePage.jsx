import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/HomePage.scss';

const HomePage = () => {
  return (
    <div className="home__container">
      <div className="home__grid">
        {/* The logo tile will be positioned by CSS */}
        <div className="home__tile home__tile--logo">Playground</div>

        {/* Regular tiles - without links for now */}
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile home__tile--blue">WHOOO</div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        {/* Keep links for pages that have implementations */}
        <Link to="/page16" className="home__tile home__tile--yellow">About</Link>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <div className="home__tile"></div>
        <Link to="/hover-effects" className="home__tile home__tile--pink">Showcase</Link>
      </div>
    </div>
  );
};

export default HomePage;
