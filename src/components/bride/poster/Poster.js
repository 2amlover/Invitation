import React from "react";
import Image1 from "../../../assets/maleposter.png";
import Image2 from "../../../assets/femaleposter.png";
import backgroundImage from "../../../assets/poster-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const Poster = () => {
  const imageSize = {
    maxWidth: "50%", // Set the maximum width to 50% of the parent container
    maxHeight: "200px", // Set the maximum height (adjust this value as needed)
    borderRadius: "20px",
  };

  const personStyle = {
    display: "flex",
    flexDirection: "row", // Display content in a row
    alignItems: "center", // Vertically align content
    marginBottom: "20px",
    marginLeft: "10px", // Add spacing between rows
  };

  const descriptionStyle = {
    width: "200px", // Set a fixed width for the description container
    marginLeft: "10px", // Add spacing between the image and description
  };

  return (
    <div>
      <div className="overlayy">
        <h2 className="mt-3">
          <span className="title text-danger fw-bold"> John</span>{" "}
          <span className="weds text-muted fw-bold">❤️</span>{" "}
          <span className="name text-danger fw-bold">Deo</span>
        </h2>
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`, // Use the imported image
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            filter: "blur(0px)",
            zIndex: -1,
          }}
        >
          <h2>.</h2>
          <div className="me-2" style={personStyle}>
            <div style={descriptionStyle}>
              <h3 className="text-danger fw-bold">John</h3>
              <p>MBBS</p>
            </div>
            <img src={Image1} alt="John" style={imageSize} />
          </div>
          <div style={personStyle}>
            <img src={Image2} alt="Deo" style={imageSize} />
            <div style={descriptionStyle}>
              <h3 className="text-danger fw-bold">Deo</h3>
              <p>Engineering</p>
            </div>
          </div>{" "}
          <h2>.</h2>
          {/* Add a rose flower design here */}
          <div className="rose-design"></div>
        </div>
      </div>
    </div>
  );
};

export default Poster;