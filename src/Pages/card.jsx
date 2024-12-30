import React from 'react';
import './card.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, imageUrl, projectLink }) => {
  return (
    <a href={projectLink} className="card-link">
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='link-icon'/></h3>
      </div>
    </div>
    </a>
  );
};

export default Card;