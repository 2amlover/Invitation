import React from "react";
import "./savedate.css";
import backgroundImage from "../../../assets/savedate-bg.png";

const SaveDate = () => {
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
          borderRadius: "20px",
        }}
      >
        <div className="save-date-container">
          <div className="names">Jhon X Deo</div>
          <div className="subtext">We're getting married</div>
          <div className="subtext1">Save the date</div>
          <div className="date">October 15, 2023</div>
          <button className="button">Save Date</button>
        </div>
      </div>
    </div>

  );
};

export default SaveDate;