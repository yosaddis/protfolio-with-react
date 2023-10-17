import React from "react";
import "../assets/css/styles.css";
import "../assets/css/footer.css";

const Footer = () => {
    return (
    <footer className="footer">
        <p className="footer__title">Yoseph</p>
        <div className="footer__social">
            <a href="https://www.linkedin.com/in/yoseph-addisu-abate/" className="footer__icon"><i className='bx bxl-linkedin'></i></a>
            <a href="https://twitter.com/yosaddis" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            <a href="https://github.com/yosaddis" className="footer__icon"><i className='bx bxl-github' ></i></a>
        </div>
        <p className="footer__copy">&#169; Yosaddis. All rigths reserved</p>
    </footer>
    )
}

export default Footer;