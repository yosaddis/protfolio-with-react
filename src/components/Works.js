import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/work.css';
import '../assets/css/projectCard.css'
import ProjectCard from './ProjectCard';

import Awsomebooks from '../assets/img/Awsome-Books.png';
import Bookstore from '../assets/img/Book-Store-app.png';
import Portfolio from '../assets/img/Portfolio.png';
import Rubyonrails from '../assets/img/Ruby-on-rails.png';
import MealDB from '../assets/img/MealDB-react-app.png';
import Libraryapp from '../assets/img/Library-app.png';


const Works = () => {
    
    const projects = [
        {
          image: Awsomebooks,
          project_title: 'Awsome Books',
          languages: ['Java Script', 'HTML', 'CSS'],
        },
        {
          image: Bookstore,
          project_title: 'Book Store',
          languages: ['React', 'Java Script', 'HTML', 'CSS'],
        },
        {
          image: Portfolio,
          project_title: 'Portfolio',
          languages: ['Java Script', 'HTML', 'CSS'],
        },
        {
          image: Rubyonrails,
          project_title: 'Expense Tracker',
          languages: ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'Bootstrap'],
        },
        {
          image: MealDB,
          project_title: 'Eat Healthy',
          languages: ['Language 10', 'Language 11'],
        },
        {
          image: Libraryapp,
          project_title: 'Library App',
          languages: ['Ruby'],
        },
        // Add more project data as needed
      ];

    return (
        <section className="works" id="work">
            <h2 className="section-title">Github Projects</h2>
            {projects.map((project, index) => (
                <ProjectCard
                key={index}
                image={project.image}
                project_title={project.project_title}
                languages={project.languages}
                />
            ))}
        </section>
    );
};

export default Works;
