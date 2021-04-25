import React from 'react'
import { Switch } from 'react-router'
import {Header, BackButton, Navbar, About, Skills,Contact } from './components'


const App = () => {
    return(
    <>
        <Navbar />
        <Header />
       
        <div id="About-container"> 
             <About />
        </div>
        <div id="Skills-container">
             <Skills />
        </div>
        <div id="contact">
            <Contact />
        </div>

        
    
    
    </>
    );
}
export default App;

