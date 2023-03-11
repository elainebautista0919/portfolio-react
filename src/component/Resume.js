import React from 'react';

function Resume() {
    return (
        <section className='resume-section'>
            <div className='resume-container'>
                <h1>resume</h1>
                    <p>download my <span></span>
                        <a href='https://drive.google.com/file/d/1bh4QFYT7JJhAbOPKkjfBZf5Uq0Qco3NM/view?usp=share_link'
                            target='_blank' rel='noreferrer'>resume</a>
                    </p>
                    <br />

                <h2>front end</h2>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>javascript</li>
                    <li>react</li>
                </ul>
                     <br />

                <h2>back end</h2>
                <ul>
                    <li>api</li>
                     <li>express</li>
                    <li>node</li>
                    <li>mysql</li>
            </ul>
            </div>
        </section>
    );
}

export default Resume;