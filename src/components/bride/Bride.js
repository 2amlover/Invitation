import React from "react";
import "./bride.css";
import Savedate from "./savedate/Savedate";
import Carou from "./carousel/Carou";
import PreShoot from "./vedio/PreShoot";
import Poster from "./poster/Poster";
import Functions from "./functions/Functions";
import Invite from "./invitcard/Invite";

const Bride = () => {
  return (
    <div>
      {/* <div className="preshoot mb-3">
        <PreShoot />
      </div> */}
      <div className="savedate mb-3">
        <Savedate />
      </div>
      <div className="carousel">
        <Carou />
      </div>
      <div className="poster">
        <Poster />
      </div>
      <div className="functions">
        <Functions />
      </div>
      <div className="invite">
        <Invite />
      </div>
    </div>
  );
};

export default Bride;
