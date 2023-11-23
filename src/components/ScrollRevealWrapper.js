import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import PropTypes from 'prop-types';

const ScrollRevealWrapper = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .home__img, .about__subtitle, .about__text, .skills__img, .skills__container , .home__social-icon, .skills__data, .work__img, .contact__input, .work-card, .product-card', {

      origin: 'top',
      distance: '60px',
      duration: 2000,
      delay: 200,
      // Customize ScrollReveal options here
      // duration: 1000,
      // delay: 200,
      // Other options...
    });
  }, []); // Run once on component mount

  return <div className="scroll-reveal-wrapper">{children}</div>;
};

ScrollRevealWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ScrollRevealWrapper;
