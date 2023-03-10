import React from 'react';

function Navigation(props) {
    const {pages = [], activePage, setActivePage } = props;

    return (
        <header>
            <nav>
                <ul className='main-nav'>
                    <li
                        className={`${activePage === 'home' && 'nav-active'}`}>
                            <span
                                onClick={() => 
                                    setActivePage('home')}>
                                        <a href='#'>elaine's portfolio</a>
                            </span>
                    </li>
                    <li
                        className={`${activePage === 'about' && 'nav-active'}`}>
                            <span
                                onClick={() => 
                                    setActivePage('about')}>
                                        <a href='#about'>about</a>
                            </span>
                    </li>
                    <li
                        className={`${activePage === 'portfolio' && 'nav-active'}`}>
                            <span
                                onClick={() => 
                                    setActivePage('portfolio')}>
                                        <a href='#portfolio'>portfolio</a>
                            </span>
                    </li>
                    <li
                        className={`${activePage === 'contact' && 'nav-active'}`}>
                            <span
                                onClick={() => 
                                    setActivePage('contact')}>
                                        <a href='#contact'>contact</a>
                            </span>
                    </li>
                    <li
                        className={`${activePage === 'resume' && 'nav-active'}`}>
                            <span
                                onClick={() => 
                                    setActivePage('resume')}>
                                        <a href='#resume'>resume</a>
                            </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;