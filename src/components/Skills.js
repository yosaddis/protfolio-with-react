import React from 'react';
import '../assets/css/styles.css'
import '../assets/css/skills.css'

const Skills = () => {
    return (
    <section id="skills">
        <h2 className="section-title">Professional Skills</h2>
            <p>Here, I'll detail my core competencies and the technologies that enable me to build cutting-edge
                 software solutions and create positive change in the digital world.
            </p>
        <div className="skills__container bd-grid" >
            <div className="category">
                <h3>Front-End Development</h3>
                <ul className="skills-list">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>jQuery</li>
                    <li>CSS3</li>
                    <li>XML</li>
                </ul>
            </div>

                <div className="category">
                <h3>Back-End Development</h3>
                <ul className="skills-list">
                    <li>C#</li>
                    <li>Ruby</li>
                    <li>ROR</li>
                    <li>Laravel</li>
                    <li>PostgreSQL</li>
                    <li>MSSQL</li>
                </ul>
                </div>

                <div className="category">
                <h3>Version Control</h3>
                <ul className="skills-list">
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
                </div>

                <div className="category">
                <h3>Development Tools</h3>
                <ul className="skills-list">
                    <li>Chrome Dev Tools</li>
                    <li>Visual Studio</li>
                    <li>Visual Studio Code</li>
                </ul>
                </div>

                <div className="category">
                <h3>Professional Skills</h3>
                <ul className="skills-list">
                    <li>Remote Pair-Programming</li>
                    <li>Teamwork</li>
                    <li>Mentoring</li>
                </ul>
                </div>

                <div className="category">
                <h3>Entrepreneurial Experience</h3>
                <ul className="skills-list">
                    <li>Founding Startup</li>
                    <li>Managing Products</li>
                    <li>Working Independently</li>
                </ul>
                </div>

        </div>
    </section>
    );
};

export default Skills;
