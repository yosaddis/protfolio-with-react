import React from 'react';
import '../assets/css/styles.css';
import perfil from '../assets/img/perfil.png';

const Home = () => (
  <section className="home bd-grid" id="home">
    <div className="home__data">
      <h1 className="home__title">
        Hi,
        <br />
        I&apos;am &nbsp;
        <span className="home__title-color">Yoseph</span>
        <br />
        {' '}
        Fullstack Developer
      </h1>
      <p className="about__text">
        Seasoned software developer with a decade of hands-on experience.
        <br />
        Proven track record in developing impactful software products,
        <br />
        leveraging expertise in React, Rails, and Postgres.
      </p>
    </div>

    <div className="home__social">
      <a href="https://www.linkedin.com/in/yoseph-addisu-abate/" className="home__social-icon" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin" style={{ fontSize: '48px' }} alt="linked-in-icon" /></a>
      <a href="https://twitter.com/yosaddis" className="home__social-icon" target="_blank" rel="noreferrer"><i className="bx bxl-twitter" style={{ fontSize: '48px' }} alt="x-icon" /></a>
      <a href="https://github.com/yosaddis" className="home__social-icon" target="_blank" rel="noreferrer"><i className="bx bxl-github" style={{ fontSize: '48px' }} alt="github-icon" /></a>
    </div>

    <div className="home__img">
      <svg className="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <mask id="mask0" mask-type="alpha">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
        </mask>
        <g mask="url(#mask0)">
          <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
          <image className="home__blob-img" x="50" y="60" href={perfil} />
        </g>
      </svg>
    </div>
  </section>
);
export default Home;
