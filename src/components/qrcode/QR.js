import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import QRCodeReact from "qrcode.react";
import { Link } from 'react-router-dom';

const QR = () => {
  // The complete URL of the content page you want to open
  const contentPageURL = "https://invite-2amlover.vercel.app/content"; // Replace with your actual URL
  // You can encode the contentPageURL directly into the QR code
  const qrCodeContent = contentPageURL;

  return (
    <div className="container mt-5">
      <div className="qr-code">
        <QRCodeReact value={qrCodeContent} />
      </div>
      <div className="open-button mt-4">
        {/* The Link component should point to the content page */}
        <Link to={contentPageURL} className="btn btn-primary px-5">
          Scan me
        </Link>
      </div>
    </div>
  );
};

export default QR;