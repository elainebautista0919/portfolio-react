import React from 'react';
import './Home.css';

function Home() {
    return (
        <section
            id='home'
            className='home-photo'
            alt='desktop photo'>
                <div className='home-textbox'>
                    <h1>
                        hello, i'm elaine.
                        <br />
                        welcome to my website.
                    </h1>                    
                </div>
        </section>
    );
}

export default Home;