import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/styles.css';
import '../assets/css/footer.css';
import '../assets/css/projectCard.css';

const ProjectCard = ({
  image, projectTitle, languages, link, discrption,
}) => (
  <div className="work-card">
    <div className="category-image">
      <img src={image} alt="skill icon" />
    </div>
    <h3 className="skill-name">{projectTitle}</h3>
    <p className="skill-description">{discrption}</p>
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
  discrption: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Assuming 'id' is a number
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
