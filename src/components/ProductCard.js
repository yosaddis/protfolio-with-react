import React from 'react';
import '../assets/css/ProductCard.css';
import "../assets/css/styles.css";

const ProductCard = ({ image, project_title, description, link }) => {
    return (
        <div className="product-card">
        <div className="product__img">
            <img src={image} alt="skill icon"/>
        </div>
        <h3 className="skill-name">{project_title}</h3>
        <ul className="languages-list">
           <p>{description}</p>
        </ul>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">Read More</a>
    </div>
    );
};

export default ProductCard;