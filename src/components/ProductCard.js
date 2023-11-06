import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/ProductCard.css';
import '../assets/css/styles.css';

const ProductCard = ({
  image, projectTitle, description, link,
}) => (
  <div className="product-card">
    <div className="product__img">
      <img src={image} alt="skill icon" />
    </div>
    <h3 className="skill-name">{projectTitle}</h3>
    <ul className="languages-list">
      <p>{description}</p>
    </ul>
    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">Read More</a>
  </div>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  projectTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProductCard;
