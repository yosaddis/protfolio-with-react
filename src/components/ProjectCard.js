import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/styles.css';
import '../assets/css/footer.css';
import '../assets/css/projectCard.css';

const ProjectCard = ({
  image, projectTitle, languages, link,
}) => (
  <div className="work-card">
    <div className="category-image">
      <img src={image} alt="skill icon" />
    </div>
    <h3 className="skill-name">{projectTitle}</h3>
    <ul className="languages-list">
      {languages.map((language) => (
        <li key={language.id}>{language.name}</li>
      ))}
    </ul>
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">View Project</a>
  </div>
);

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  languages: PropTypes.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
