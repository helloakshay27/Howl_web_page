import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contactpage mb-3 mt-4 ">
    <div className=" container">
      <h2 className="contact_headline my-3">
        Ready to accelerate your business?{" "}
        <span className="talk_option"> Let's talk.</span>
      </h2>
      <div className="contact_container my-3">
        <h2>
          Keep track of the wolves
          <p className="arrow">&rarr; </p>
        </h2>
        <div className="contact_image">
          <img src="./Assets/contactimg1.png" alt="contactimg" />
          <img src="./Assets/contactimg2.png" alt="contactimg" />
          <img src="./Assets/contactimg3.png" alt="contactimg" />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
