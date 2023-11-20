import React from 'react';
import '../assets/css/work.css';
import ProjectCard from './ProjectCard';

import Awsomebooks from '../assets/img/Awsome-Books.png';
import Bookstore from '../assets/img/Book-Store-app.png';
import Rubyonrails from '../assets/img/Ruby-on-rails-small.png';
import MealDB from '../assets/img/MealDB-react-app-small.png';

const Works = () => {
  const projects = [
    {
      id: 1,
      image: Awsomebooks,
      projectTitle: 'Awsome Books',
      projectDescription: 'Book Reading status front-end with Java Script.',
      languages: [
        { id: 1, name: 'Java Script' },
        { id: 2, name: 'HTML' },
        { id: 3, name: 'CSS' },
      ],
      link: 'https://github.com/yosaddis/Awesome-Books-ES6',
      demoLink: 'https://yosaddis.github.io/Awesome-Books-ES6/',
    },
    {
      id: 2,
      image: Bookstore,
      projectTitle: 'Book Store',
      projectDescription: 'A Book Recording website built with React.',
      languages: [
        { id: 1, name: 'React' },
        { id: 2, name: 'Java Script' },
        { id: 3, name: 'HTML' },
        { id: 4, name: 'CSS' },
      ],
      link: 'https://github.com/yosaddis/Book-store-react',
      demoLink: 'https://yosaddis.github.io/Book-store-react/',
    },
    {
      id: 3,
      image: Rubyonrails,
      projectTitle: 'Expense Tracker',
      projectDescription: 'Expense tracker app built in Rails with postgresql.',
      languages: [
        { id: 1, name: 'Ruby' },
        { id: 2, name: 'Ruby on Rails' },
        { id: 3, name: 'HTML' },
        { id: 4, name: 'CSS' },
      ],
      link: 'https://github.com/yosaddis/ruby-on-rails-capstone',
      demoLink: 'https://rails-capstone-65y7.onrender.com/',
    },
    {
      id: 4,
      image: MealDB,
      projectTitle: 'Eat Healthy',
      projectDescription: 'Reciepe website built with React/Redux.',
      languages: [
        { id: 1, name: 'JavaScript' },
        { id: 2, name: 'REstAPI' },
        { id: 3, name: 'HTML5' },
        { id: 4, name: 'JSON' },
      ],
      link: 'https://github.com/yosaddis/MealDB',
      demoLink: 'https://eat-healthy.onrender.com/',
    },
    // Add more project data as needed
  ];

  return (
    <section className="works" id="work">
      <h2 className="section-title">Github Projects</h2>
      <div className="work__container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            languages={project.languages}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
