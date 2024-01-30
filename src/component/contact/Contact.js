import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contactpage mb-3 mt-4 ">
    <div className=" container-fluid px-0">
      <h2 className="contact_headline ">
        <span data-aos="fade-up">Ready to accelerate your business?{" "}</span>
        <span data-aos="fade-up" className="talk_option"> Let's talk.</span>
      </h2>
      <div className="contact_container my-3">
        <h2 >
         <span data-aos="fade-up">Keep track of the wolves</span> 
          <p data-aos="slide-right" className="arrow">&rarr; </p>
        </h2>
        <div className="contact_image">
          <img data-aos="flip-left" src="./Assets/contactimg1.png" alt="contactimg" />
          <img data-aos="fade-up" src="./Assets/contactimg2.png" alt="contactimg" />
          <img data-aos="flip-right" src="./Assets/contactimg3.png" alt="contactimg" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
