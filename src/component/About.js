import React from 'react';
import icon from '../resources/icon.png';
import './About.css';

function About(){
    return (
        <section id='about'>


            <img
                scr={icon}
                alt='placeholder image'
                className='photo'
            />

            <h4 className='section-text'>
                full stack developer with 1 year experience
                <br />
                experienced in delivering javascript, html & css applications
                <br />
                loves travelling and hiking
            </h4>

        </section>
    );
}

export default About;