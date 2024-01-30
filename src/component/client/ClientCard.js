import React from "react";
import "./ClientCard.css";

const ClientCard = ({ url }) => {
  return (
    <div className="profileCard">
      <img data-aos="flip-left" src={url} alt="clientimg" className="clientprofile" />
    </div>
  );
};

export default ClientCard;
