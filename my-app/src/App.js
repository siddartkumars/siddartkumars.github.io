import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Introduction from './component/Intro';
// import Navbar from './component/Navbar';
import Navbar2 from './component/Navbar2';
import Aboutme from './component/Aboutme';
import Home from './component/Home';


function App() {
  return (
    <html>
    <link rel="stylesheet" href="asset/css/open-iconic-bootstrap.min.css"/>
            <link rel="stylesheet" href="asset/css/animate.css"/>
            <link rel="stylesheet" href="asset/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="asset/css/owl.theme.default.min.css"/>
            <link rel="stylesheet" href="asset/css/magnific-popup.css"/>
            <link rel="stylesheet" href="asset/css/aos.css"/>
            <link rel="stylesheet" href="asset/css/ionicons.min.css"/>
            <link rel="stylesheet" href="asset/css/flaticon.css"/>
            <link rel="stylesheet" href="asset/css/icomoon.css"/>
            <link rel="stylesheet" href="asset/css/style.css"></link>
    <div className="App">
      {/* <Navbar></Navbar> */}
      <Navbar2></Navbar2>
       <Home></Home>
      <Aboutme></Aboutme>
      

      </div>
      </html>
  );
}

export default App;
