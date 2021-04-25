import React from 'react'
import { Switch } from 'react-router'
import {Header, BackButton, Navbar, About, Skills, } from './components'


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
        
    
    
    </>
    );
}
export default App;

