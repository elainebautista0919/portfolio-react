import React from 'react';
import './Project.css';

function Project(props) {
    const { name, githubLink, deployedLink, projectPhoto} = props;

    return (
        <div id='projects'>
            <img src={projectPhoto} className='project-photo' alt='project logo'/>
            <div className='photo-container'>
                <h1>
                    <a
                        href={deployedLink}
                        target='_blank'
                        rel='noreferrer'
                        className='project-name'>
                        {name}
                    </a>
                    <a 
                        href={githubLink}
                        target='_blank'
                        rel='noreferrer'>
                    </a>
                </h1>
            </div>
        </div>
    );
}

export default Project;