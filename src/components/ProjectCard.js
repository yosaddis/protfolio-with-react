import React from "react";
import "../assets/css/styles.css";
import "../assets/css/footer.css";
import "../assets/css/projectCard.css";

const ProjectCard = ({ image, project_title, languages, link }) => {
    return (
        <div className="work-card">
			<div className="category-image">
				<img src={image} alt="skill icon"/>
			</div>
			<h3 className="skill-name">{project_title}</h3>
			<ul className="languages-list">
				{languages.map((language, index) => (
					<li key={index}>{language}</li>
				))}
			</ul>
			<a href={link} target="_blank" rel="noopener noreferrer" className="project-link-button">View Project</a>
		</div>
    )
}

export default ProjectCard;