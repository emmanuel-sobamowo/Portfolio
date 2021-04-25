import React from 'react'
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
        

        
    
    
    </>
    );
}
export default App;

