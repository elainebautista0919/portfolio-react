import React from 'react';
import Project from './Project';
import codewith from '../resources/codingwith.png';
import budgettracker from '../resources/budgettracker.png';
import jate from '../resources/jate.png';
import './Portfolio.css';

function Portfolio(props) {
    return (
        <div className='portfolio-container'>
            <Project
                name='codewith'
                githubLink='https://github.com/The-Schwiz/Coding-With'
                deployedLink='https://codingwith.herokuapp.com/'
                projectPhoto={codewith}>
            </Project>
            <Project
                name='budgettracker'
                githubLink='https://github.com/cdennis27/budgettrackergroup2'
                deployedLink='https://cdennis27.github.io/budgettrackergroup2/'
                projectPhoto={budgettracker}>
            </Project>
            <Project
                name='jate'
                githubLink='https://github.com/elainebautista0919/pwa-text-editor'
                deployedLink='https://elaine0919-text-editor.herokuapp.com/'
                projectPhoto={jate}>
            </Project>
        </div>
    );
}

export default Portfolio;