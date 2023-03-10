import React, { useState } from 'react';
import Navigation from './componentNavigation';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Resume from './component/Resume';
import Footer from './component/Footer';

function App() {
    const pages = ['home', 'about', 'portfolio', 'contact', 'resume'];
    const [activePage, setactivePage] = useState(pages[0]);

    function conditionalNav() {
        if (activePage === 'home' || activePage === 'about') {
            return (
                <>
                    <Home></Home>
                    <About></About>
                </>
            );
    } else if (activePage === 'portfolio') {
        return <Portfolio></Portfolio>;
    } else if (activePage === 'contact') {
        return <Contact></Contact>;
    } else if (activePage === 'resume') {
        return <Resume></Resume>;
    }
}

return (
    <div className='App'>
        <Navigation
            pages={pages}
            activePage={activePage}
            setActivePage={setactivePage}></Navigation>
        
        <main>{conditionalNav()}</main>

        <Footer></Footer>
    </div>
);
}

export default App;