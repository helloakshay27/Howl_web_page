import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <div className="main_left_container">
        <div data-aos="fade-right" className="home_headline_1">
          We exist because we want to help you navigate and harness the
          potential of this ever-changing digital landscape.
        </div>
        <div className="heading_2_container">
          <h2 data-aos="fade-right" className="home_headline_2">Your</h2>
          <h2 data-aos="fade-right" className="home_headline_2">Growth</h2>
          <h2  data-aos="fade-right"className="home_headline_2">Partner</h2>
        </div>
      </div>

      <div className="main_right_container">
        <div className="home_image_container">
          <img data-aos="zoom-in-up"
            src="./Assets/homeimg-1.jpg"
            alt="homeImage"
            className="home_img_1"
          />
          <img data-aos="zoom-in-up"
            src="./Assets/homeimg-2.png"
            alt="homeImage"
            className="home_img_2" 
          />
        </div>
        <div data-aos="fade-left" className="home_headline_3">
          It's not a game of guesses, it's a game of numbers where growth is the
          ultimate goal. We leverage cutting-edge technology and data-driven
          insights to help you answer questions that unlock growth.
        </div>
      </div>
    </main>
  );
};

export default Home;
