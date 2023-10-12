import React from 'react';
import '../assets/css/styles.css';
//import '../assets/css/mobNav.css'
import { useEffect } from 'react';


const Header = () => {

    // Menu toggle function
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };

   // Scroll to section function
   const linkAction = (navMenu) => {
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
  };


  useEffect(() => {
    // Initialize menu toggle and scroll functionality when the component mounts
    showMenu('nav-toggle', 'nav-menu');
    document.title = "Yoseph's Portfolio Website";
    const navMenu = document.getElementById('nav-menu');
    const navLink = document.querySelectorAll('.nav__link');

    navLink.forEach((link) => link.addEventListener('click', () => linkAction(navMenu)));

    // Scroll to sections on link click
    // sections.forEach((section) => {
    //   const sectionId = section.id;
    //   const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
    //   navLink.addEventListener('click', () => {
    //     document.querySelector('.nav__link.active').classList.remove('active');
    //     navLink.classList.add('active');
    //   });
    // });
  }, []);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo">Yoseph</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                            HomeM
                            </li>
                            <li className="nav-item">
                            About
                            </li>
                            <li className="nav-item">
                            Skills
                            </li>
                            <li className="nav-item">
                            Work
                            </li>
                            <li className="nav-item">
                            ContactM
                            </li>
                        </ul>
                    </div>
            </nav>
        </header>
    );
};

export default Header;
