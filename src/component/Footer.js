import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <ul>
                <li className='footer-li'>

                    <a href='https://github.com/elainebautista0919'>
                        <img src='https://cdn.simpleicons.org/github/white' alt='github' className='icon'/></a>
                </li>
                <li className='footer-li'>
                <a href='https://www.linkedin.com/in/elaine-bautista-b7916452'>
                        <img src='https://cdn.simpleicons.org/linkedin/white' alt='linkedin' className='icon'/></a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;