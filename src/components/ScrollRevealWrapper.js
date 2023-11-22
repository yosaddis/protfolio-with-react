import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import PropTypes from 'prop-types';

const ScrollRevealWrapper = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {

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
