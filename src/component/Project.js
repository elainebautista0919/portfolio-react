import React from 'react';

function Project(props) {
    const { name, githubLink, deployedLink, projectPhoto} = props;

    return (
        <div id='projects'>
            <img src={projectPhoto} className='project-photo'></img>
            <div className='photo-container'>
                <h1>
                    <a
                        href={deployedLink}
                        target='_blank'
                        className='project-name'>
                        {name}
                    </a>
                    <a 
                        href={githubLink}
                        target='_blank'>
                    </a>
                </h1>
            </div>
        </div>
    );
}

export default Project;