import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Page.scss';

// Simple page component for demonstration
const Page = ({ title }) => {
  return (
    <div className="page-container">
      <h1>{title}</h1>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
};

export default Page;
