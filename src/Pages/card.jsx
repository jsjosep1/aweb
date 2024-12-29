import React from 'react';
import './card.css'; // Import the CSS file for styling

const Card = ({ title, imageUrl, projectLink }) => {
  return (
    <a href={projectLink} className="card-link">
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
    </a>
  );
};

export default Card;