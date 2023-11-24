import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/styles.css';
import '../assets/css/footer.css';
import '../assets/css/projectCard.css';

const ProjectCard = ({
  image, projectTitle, projectDescription, languages, link, demoLink,
}) => (
  <div className="work-card">
    <div className="work-thumbnail">
      <img src={image} alt="skill icon" />
    </div>
    <h3 className="skill-name">{projectTitle}</h3>
    <p>{projectDescription}</p>
    <ul className="languages-list">
      {languages.map((language) => (
        <li key={language.id}>{language.name}</li>
      ))}
    </ul>
    <div className="project-buttons">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">Source Code</a>
      <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link-button">Live</a>
    </div>
  </div>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming 'id' is a number
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  link: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};

export default ProjectCard;
