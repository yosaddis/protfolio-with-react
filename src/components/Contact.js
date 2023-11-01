import React from 'react';
import '../assets/css/Contact.css'


const Contact = () => {
    return (
        <section className="contact section" id="contact">
        <div className="contact-info">
          <div className="contact-item">
            <i className="bx bxl-gmail"></i> {/* Font Awesome icon for Email */}
            <h2>email.to.yoseph@gmail.com</h2>
          </div>
      
          <div className="contact-item">
            <i className="bx bxl-phone"></i> {/* Font Awesome icon for Phone */}
            <h2>+251 911 03 26 29</h2>
          </div>
      
          <div className="contact-item">
            <a href="https://twitter.com/yosaddis" target="_blank">
              <i className="bx bxl-twitter"></i> {/* Font Awesome icon for Twitter */}
              <h2>https://twitter.com/yosaddis</h2>
            </a>
          </div>
      
          <div className="contact-item">
            <a href="https://www.linkedin.com/in/yoseph-addisu-abate/" target="_blank">
              <i className="bx bxl-linkedin"></i> {/* Font Awesome icon for LinkedIn */}
              <h2>https://www.linkedin.com/in/yoseph-addisu-abate/</h2>
            </a>
          </div>
      
          <div className="contact-item">
            <a href="https://github.com/yosaddis" target="_blank">
              <i className="bx bxl-github"></i> {/* Font Awesome icon for GitHub */}
              <h2>https://github.com/yosaddis</h2>
            </a>
          </div>
        </div>
      </section>      
    );
};

export default Contact;
