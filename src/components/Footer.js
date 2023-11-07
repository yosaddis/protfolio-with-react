import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <a href="https://www.github.com/yosaddis" className="footer__icon" alt="github icon"><i className="bx bxl-github" /></a>
      <a href="https://www.linkedIn.com/in/yoseph-addisu-abate" className="footer__icon" alt="linked in icon"><i className="bx bxl-linkedin" /></a>
      <a href="https://www.twitter.com/yosaddis" className="footer__icon" alt="X icon"><i className="bx bxl-twitter" /></a>
    </div>
    <p className="footer__copy">&#169; Yosaddis. All rigths reserved</p>
  </footer>
);

export default Footer;
