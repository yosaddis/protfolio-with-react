import React from 'react';
import '../assets/css/styles.css';
import aboutImg from '../assets/img/About-page.webp';
import resume from '../assets/img/resume.pdf';

const About = () => {
  const resumeHandler = () => {
    window.open(resume);
  };

  return (
    <section className="about section " id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImg} alt="" />
        </div>
        <div>
          <h2 className="about__subtitle">I&apos;am Yoseph</h2>
          <p className="about__text">
            I&apos;m a passionate and dedicated full-stack software engineer
            with expertise in JavaScript, C#, Ruby, and Ruby on Rails,
            backed by solid SQL skills, including PostgreSQL and MS-SQL.
            I hold a BSc in Computer Science from Addis Ababa University.
            <br />
            {' '}
            <br />
            My journey started with website design using CMSs,
            and I quickly transitioned to developing a Hospital Management System
            in C# and SQL, which led to founding
            {' '}
            <a href="https://www.sefedsystems.com" target="_blank" rel="noreferrer">Sefed Systems</a>
            .
            Currently, I&apos;m broadening my horizons through Microverse while
            actively working on diverse projects for various companies.
            <br />
            {' '}
            <br />
            What sets me apart is my unwavering enthusiasm for coding and my
            relentless drive to create products that solve real-world problems.
            I&apos;m not only tech-savvy but also passionate about exploring new
            technologies, ensuring I can offer cutting-edge solutions.
            Additionally, my commitment to cybersecurity means I prioritize the
            safety and reliability of the software I develop.
            <br />
            {' '}
            <br />
            Ultimately, my goal is to make a positive impact on people&apos;s
            lives through technology.
            With two popular apps on the Play Store, I&apos;ve witnessed
            firsthand how technology can improve lives.
            I&apos;m eager to bring this unique blend of technical excellence,
            passion, and customer-focused mindset to your team.
            {' '}
            <a href="#contact"> Contact me</a>
            {' '}
            for collaboration opportunities.
            <button onClick={resumeHandler} className="contact__button button" type="button">Get My Resume</button>
          </p>

        </div>
      </div>
    </section>
  );
};

export default About;
