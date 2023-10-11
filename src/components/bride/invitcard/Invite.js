import React from "react";
import backgroundImage from "../../../assets/invitefooter.png";

const Invite = () => {
  return (
    <div className="overlayyy">
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Use the imported image
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          filter: "blur(0px)",
          zIndex: -1,
          maxWidth: "95%", // Set the maximum width to 50% of the parent container
          borderRadius: "5px",
          marginLeft:"9px",
          marginBottom:"10px",
        }}
      >
        <div className="save-date-container fw-bold text-dark" style={{fontFamily:'-moz-initial'}}>
          <div className="text" >Y o u a r e</div>
          <div className="text">I n v i t e d </div>
          <div className="text">T o</div>
          <div className="text">C e l e b r a t e W i t h </div>
          <div className="text">u s ! </div>
        </div>
      </div>
    </div>
  );
};

export default Invite;