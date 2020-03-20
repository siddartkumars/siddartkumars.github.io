import React from 'react';
import './App.css';

import Header from './component/Header';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import Aboutme from './component/Aboutme';
import Skills from './component/Skills';
import Footer from './component/Footer';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Projects from './component/Projects';
import Experience from './component/Experience';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Footer></Footer>
    </div>  
  );
}

export default App;
