import React from 'react';
import './App.css';

import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Aboutme from './component/Aboutme';
import Skills from './component/Skills';
import Footer from './component/Footer';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// import '../node_modules/fortawesome/free-brand-svg-icons'; 




function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Home></Home>
      <Aboutme></Aboutme>
      <Skills></Skills>
      <Footer></Footer>
    </div>  
  );
}

export default App;
