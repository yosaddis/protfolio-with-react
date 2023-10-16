import React from 'react';
import '../assets/css/styles.css';
import '../assets/css/work.css';
import work1 from '../assets/img/work1.jpg';
import work2 from '../assets/img/work2.jpg';
import work3 from '../assets/img/work3.jpg';
import work4 from '../assets/img/work4.jpg';
import work5 from '../assets/img/work5.jpg';
import work6 from '../assets/img/work6.jpg';

const Works = () => {
    return (
        <section className="work section" id="work">
            <h2 className="section-title">Work</h2>

            <div className="work__container bd-grid">
                <a href="" className="work__img">
                    <img src={work1} alt=""/>
                </a>
                <a href="" className="work__img">
                    <img src={work2} alt=""/>
                </a>
                <a href="" className="work__img">
                    <img src={work3} alt=""/>
                </a>
                <a href="" className="work__img">
                    <img src={work4} alt=""/>
                </a>
                <a href="" className="work__img">
                    <img src={work5} alt=""/>
                </a>
                <a href="" className="work__img">
                    <img src={work6} alt=""/>
                </a>
            </div>
        </section>
    );
};

export default Works;
