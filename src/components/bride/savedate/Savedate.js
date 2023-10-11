import React from "react";
import backgroundImage from "../../../assets/savedate-bg.png";

const SaveDate = () => {
  const weddingDate = "October 14, 2023"; // Your wedding date

  const generateICSFile = () => {
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example Corp.//iCal 4.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:1@example.com
DTSTAMP:20231014T000000Z
DTSTART:20231014T000000Z
DTEND:20231015T235959Z
SUMMARY:Our Wedding
DESCRIPTION:Jhon X Deo's Wedding
LOCATION:Venue Name
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'WeddingDate.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

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
          <div className="date">{weddingDate}</div>
          <button className="button" onClick={generateICSFile}>
            Save Date
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveDate;