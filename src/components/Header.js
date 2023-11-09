import React, { useState, useEffect } from 'react';
import '../assets/css/styles.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log('clicked');
    console.log(isMenuOpen);
  };

  useEffect(() => {
    document.title = "Yoseph's Portfolio Website";
  }, []);

  const sections = document.querySelectorAll('section[id]');

  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active');
      } else {
        document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);

  // /*= ==== SCROLL REVEAL ANIMATION ===== */
  // const sr = ScrollReveal({
  //   origin: 'top',
  //   distance: '60px',
  //   duration: 2000,
  //   delay: 200,
  //   //     reset: true
  // });

  // sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
  // sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
  // sr.reveal('.home__social-icon', { interval: 200 });
  // sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <a href="https://yoseph-portfolio.onrender.com/" className="nav__logo">Yoseph</a>
        </div>

        <div className={`nav__menu ${isMenuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
            <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
            <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
            <li className="nav__item"><a href="#work" className="nav__link">Projects</a></li>
            <li className="nav__item"><a href="#product" className="nav__link">Products</a></li>
            <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>

        <button type="button" className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          {' '}
          <i className="bx bx-menu" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
