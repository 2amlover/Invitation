import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/content.png";

import "./content.css";

const Content = () => {
  return (
    <div className="overlay">
      <h4 className="mt-5 fw-bold text-dark">WELCOME</h4>
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
        <div className="mt-5">
          <h4>.</h4>
          <h4>.</h4>
          <h4>.</h4>
          <div className="buttons mt-5">
            <div className="bride">
              <Link to="/bride" className="btn btn-warning mb-2 px-5">
                Bride{" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ marginLeft: "10px" }}
                />
              </Link>
            </div>
            <div className="groom">
              <Link to="/groom" className="btn btn-danger mb-5 px-5">
                Groom <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;