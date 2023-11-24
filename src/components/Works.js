import React from 'react';
import '../assets/css/work.css';
import ProjectCard from './ProjectCard';
import Awsomebooks from '../assets/img/projects/Awsome-Book-app.png';
import MealDB from '../assets/img/projects/Eat-healthy-app.png';
import Carrental from '../assets/img/projects/Car-rental-app.png';
import Calculator from '../assets/img/projects/Math-mgicians-app.png';

const Works = () => {
  const projects = [
    {
      id: 1,
      image: Carrental,
      projectTitle: 'Car Rental Management System',
      projectDescription: `A full-stack web application that enables users to view a list of cars, 
      access detailed information about each car, rent cars, add new car items, delete existing car items, 
      and list all rentals associated with a specific user.`,
      languages: [
        { id: 1, name: 'React with Redux' },
        { id: 2, name: 'Ruby on Rails' },
        { id: 3, name: 'PostgresSQL' },
        { id: 4, name: 'Bootstrap' },
      ],
      link: 'https://github.com/yosaddis/Full-Stack-Capstone-Backend',
      demoLink: 'https://rent-a-car-front-end.onrender.com/',
    },
    {
      id: 2,
      image: Awsomebooks,
      projectTitle: 'Awsome Books',
      projectDescription: `Awsome Book is a web application that uses to registe and display Books we liked.
       The app make use of the browsers local storage to store data.`,
      languages: [
        { id: 1, name: 'Java Script' },
        { id: 2, name: 'HTML' },
        { id: 3, name: 'CSS' },
      ],
      link: 'https://github.com/yosaddis/Awesome-Books-ES6',
      demoLink: 'https://yosaddis.github.io/Awesome-Books-ES6/',
    },
    {
      id: 3,
      image: Calculator,
      projectTitle: 'Calculator',
      projectDescription: 'This simple calculator is designed to perform basic arithmetic calculations quickly and easily.',
      languages: [
        { id: 1, name: 'React' },
        { id: 2, name: 'Java Script' },
        { id: 3, name: 'CSS' },
      ],
      link: 'https://github.com/yosaddis/math-magicians',
      demoLink: 'https://math-magicians-vxz7.onrender.com/calculator',
    },
    {
      id: 4,
      image: MealDB,
      projectTitle: 'Eat Healthy',
      projectDescription: `"Eat Healthy" is a website featuring recipes for nutritious dishes sourced from an external API. 
      The site not only showcases a variety of healthy meals but also allows users to express their preferences by liking dishes.
       Additionally, users can provide valuable feedback by commenting on recipes after trying them.
      `,
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
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
