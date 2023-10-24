import React from "react";
import "../assets/css/styles.css";
import "../assets/css/footer.css";
import "../assets/css/projectCard.css";

const ProjectCard = ({ image, project_title, languages }) => {
    return (
        <div className="work-card">
			<div className="category-image">
				<img src={image} alt="skill icon"/>
			</div>
			<h3 className="skill-name">{project_title}</h3>
			<ul className="skill-list">
				{languages.map((language, index) => (
					<li key={index}>{language}</li>
				))}
			</ul>
		</div>
    )
}

export default ProjectCard;