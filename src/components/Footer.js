import React from "react";
import "../assets/css/styles.css";
import "../assets/css/footer.css";

const Footer = () => {
    return (
    <footer className="footer">
        <p className="footer__title">Yoseph</p>
        <div className="footer__social">
            <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
            <a href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
            <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
        </div>
        <p className="footer__copy">&#169; Yosaddis. All rigths reserved</p>
    </footer>
    )
}

export default Footer;