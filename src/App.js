import { useEffect } from 'react';
//import {ScrollReveal} from 'https://unpkg.com/scrollreveal@4.0.9/dist/scrollreveal.js';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  useEffect(() => {
    /*===== MENU SHOW =====*/
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener('click', () => {
          nav.classList.toggle('show');
        });
      }
    };
    showMenu('nav-toggle', 'nav-menu');

    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link');

    function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      // When we click on each nav__link, we remove the show-menu class
      navMenu.classList.remove('show');
    }
    navLink.forEach((n) => n.addEventListener('click', linkAction));

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]');

    function scrollActive() {
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
      });
    }
    window.addEventListener('scroll', scrollActive);

    /*===== SCROLL REVEAL ANIMATION =====*/
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
      // reset: true
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
    sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
    sr.reveal('.home__social-icon', { interval: 200 });
    sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
  }, []);

  
  return (
    <main className="l-main">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="../assets/css/styles.css" />
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet' />
        <title>Yoseph's Portfolio website</title>
        <script src="https://unpkg.com/scrollreveal"></script>
        <div className="App">
            <Header />
            <Home />
            <About />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
    </main>
  );
}

export default App;
