import React, { useEffect } from 'react';
import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import Home from "./component/home/Home.js";
import Client from "./component/client/Client.js";
import Contact from "./component/contact/Contact.js";
import FooterComp from "./component/footerComp/FooterComp.js";
import About from "./component/about/About.js";
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Specify the duration of the animation in milliseconds
      easing: 'ease-in-out', // Specify the easing function
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Client />
      <Contact />
      <FooterComp />
    </div>
  );
}

export default App;
