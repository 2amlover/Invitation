import React from "react";


// import backgroundImage from "../../../assets/funheader.png";
import Pooja from "./tabs/Pooja";
import Haldi from "./tabs/Haldi";
import Mehendi from "./tabs/Mehendi";
import Music from "./tabs/Music";
import Wedding from "./tabs/Wedding";
import Reception from "./tabs/Reception";

const Function = () => {
  return (
    <div>
      <h2
        className="text-decoration-underline fw-bold"
        style={{ color: "#ff3e6c", fontFamily: "fantasy" }}
      >
        - : Functions : -
      </h2>
      <div className="pooja mt-3">
        <Pooja />
      </div>
      <div className="haldi mt-5">
        <Haldi />
      </div>
      <div className="mehendi mt-5">
        <Mehendi />
      </div>
      <div className="music mt-5">
        <Music />
      </div>
      <div className="wedding mt-5">
        <Wedding />
      </div>
      <div className="reception mt-5">
        <Reception />
      </div>
    </div>
  );
};

export default Function;