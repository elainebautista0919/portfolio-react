import React from 'react';
import budgettracker from '../resources/budgettracker.png';
import './About.css';

function About(){
    return (
        <section id='about'>
            <h1 data-testid='h1tag'>about me</h1>

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