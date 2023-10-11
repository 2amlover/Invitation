import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCodeReact from "qrcode.react";
import { Link } from "react-router-dom";

const QR = () => {
  return (
    <div className="container mt-5">
      <div className="qr-code">
        <QRCodeReact />
      </div>
      <div className="open-button mt-4">
        <Link to="/content" className="btn btn-primary px-5">
          Scan me
        </Link>
      </div>
    </div>
  );
};

export default QR;
