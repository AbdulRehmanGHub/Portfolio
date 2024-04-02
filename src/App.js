import React, { useEffect } from 'react';

import About from "./components/About";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";

function App() {
    useEffect(() => {
        document.title = "Dev Abdul Rehman";
    }, []);

    return (
        <div>
           <NavBar />
           <Home />
           <About />
           <Portfolio />
           <Experience />
           <Contact />
           <SocialLinks />
        </div>
    );
}

export default App;