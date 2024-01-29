import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import Home from "./component/home/Home.js";
import Client from "./component/client/Client.js";
import Contact from "./component/contact/Contact.js";
import FooterComp from "./component/footerComp/FooterComp.js";
import About from "./component/about/About.js";

function App() {
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
