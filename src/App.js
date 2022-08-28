import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Project from './Components/Project'
import { BrowserRouter } from 'react-router-dom'
// import Contact from './Components/Contact';


function App() {  
  return (
    <BrowserRouter> 
    <Navbar />
    <About />
    <Project />
    <Footer />
    </BrowserRouter>
  );
}

export default App;
