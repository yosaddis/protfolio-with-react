import React from 'react';
import '../assets/css/Contact.css';

const Contact = () => (
  <section className="contact section" id="contact">
    <h2 className="section-title">Contact</h2>
    {/** <div className="contact-info">
      <h2 className="about__subtitle">
        I&apos;m always interested in hearing about new projects,
        so if you&apos;d like to chat please get in touch.
      </h2>
      <div className="contact-item">
        <i className="fa-envelope" />
        {' '}

        <h2>email.to.yoseph@gmail.com</h2>
      </div>

      <div className="contact-item">
        <i className="bx bxl-phone" />
        {' '}

        <h2>+251 911 03 26 29</h2>
      </div>

      <div className="contact-item">
        <a href="https://twitter.com/yosaddis" target="_blank" rel="noreferrer">
          <i className="bx bxl-twitter" />
          {' '}

          <h2>https://twitter.com/yosaddis</h2>
        </a>
      </div>

      <div className="contact-item">
        <a href="https://www.linkedin.com/in/yoseph-addisu-abate/" target="_blank" rel="noreferrer">
          <i className="bx bxl-linkedin" />
          {' '}

          <h2>https://www.linkedin.com/in/yoseph-addisu-abate/</h2>
        </a>
      </div>

      <div className="contact-item">
        <a href="https://github.com/yosaddis" target="_blank" rel="noreferrer">
          <i className="bx bxl-github" />
          {' '}

          <h2>https://github.com/yosaddis</h2>
        </a>
      </div>
    </div>* */}

    <div className="contact__container bd-grid">
      <form action="" className="contact__form">
        <input type="text" placeholder="Name" className="contact__input" />
        <input type="mail" placeholder="Email" className="contact__input" />
        <textarea name="" id="" cols="0" rows="10" className="contact__input" />
        <input type="button" value="Send" className="contact__button button" />
      </form>
    </div>
  </section>
);

export default Contact;
