import React from 'react';
//import '../assets/css/styles.css';
import '../assets/css/work.css';
//import '../assets/css/projectCard.css';
import ProjectCard from './ProjectCard';

import Awsomebooks from '../assets/img/Awsome-Books.png';
import Bookstore from '../assets/img/Book-Store-app.png';
import Rubyonrails from '../assets/img/Ruby-on-rails-small.png';
import MealDB from '../assets/img/MealDB-react-app-small.png';



const Works = () => {
    
    const projects = [
        {
          image: Awsomebooks,
          project_title: 'Awsome Books',
          languages: ['Java Script', 'HTML', 'CSS'],
          link: 'https://github.com/yosaddis/Awesome-Books-ES6',
        },
        {
          image: Bookstore,
          project_title: 'Book Store',
          languages: ['React', 'Java Script', 'HTML', 'CSS'],
          link: 'https://github.com/yosaddis/Book-store-react',
        },
        {
          image: Rubyonrails,
          project_title: 'Expense Tracker',
          languages: ['Ruby', 'Ruby on Rails', 'HTML', 'CSS', 'Bootstrap'],
          link: 'https://github.com/yosaddis/ruby-on-rails-capstone',
        },
        {
          image: MealDB,
          project_title: 'Eat Healthy',
          languages: ['JavaScript', 'REstAPI','HTML5','JSON','Webpack'],
          link: 'https://github.com/yosaddis/MealDB',
        },
        // Add more project data as needed
      ];

    return (
      <section className="works" id="work">
      <h2 className="section-title">Github Projects</h2>
      <div className="work__container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            project_title={project.project_title}
            languages={project.languages}
            link={project.link}
          />
        ))}
      </div>
    </section>
    );
};

export default Works;
