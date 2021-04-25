import React from 'react'
import { Navbar} from './components'
import {About, Contact, Projects} from './pages'
import { Switch, Route } from 'react-router-dom';
import "./App.css";


const App = () => {
    return(
    <>
       <Navbar />

       <Switch>
           <Route exact path="/" component={About} />
           <Route path="/projects" component={Projects} />
           <Route path="/contact" component={Contact} />
       </Switch>
    </>
    );
}
export default App;

