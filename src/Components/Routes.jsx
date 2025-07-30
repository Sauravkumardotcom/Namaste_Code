import React, { Component } from 'react';
import { BrowserRouter as Router ,  Routes , Route , useLocation} from "react-router-dom";
import HomePage from './Home';
import Contact from './Contact';
import About from './About';
import Project from './Project';

function Routes() {
    
            return (
               <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/contect' element={<Contact />} />
                </Routes>
               </BrowserRouter>
            ); 
}
export default Routes;