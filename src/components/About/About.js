import React from 'react';
import './About.css'

const About = (props) => {
    const { title, details, img } = props.details;

    return (
        <div className="about-item">
            <img className="img-fluid mb-4" src={img} alt="" />
            <h2>{title}</h2>
            <p>{details}</p>
        </div>
    );
};

export default About;