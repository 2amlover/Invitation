// import React from "react";
// import "./savedate.css";
// import backgroundImage from "../../../assets/savedate-bg.png";

// const SaveDate = () => {
//   return (

//     <div className="overlayyy">
//       <div
//         style={{
//           backgroundImage: `url(${backgroundImage})`, // Use the imported image
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           position: "relative",
//           filter: "blur(0px)",
//           zIndex: -1,
//           borderRadius: "20px",
//         }}
//       >
//         <div className="save-date-container">
//           <div className="names">Jhon X Deo</div>
//           <div className="subtext">We're getting married</div>
//           <div className="subtext1">Save the date</div>
//           <div className="date">October 15, 2023</div>
//           <button className="button">Save Date</button>
//         </div>
//       </div>
//     </div>

//   );
// };

// export default SaveDate;





import React from "react";
import "./savedate.css";
import backgroundImage from "../../../assets/savedate-bg.png";

const SaveDate = () => {
  const weddingDate = "October 15, 2023"; // Your wedding date

  const generateICSFile = () => {
    // Create an iCalendar (ICS) file with the event information
    const icsData = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Example Corp.//iCal 4.0//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:1@example.com
DTSTAMP:20231015T000000Z
DTSTART:20231015T000000Z
DTEND:20231015T235959Z
SUMMARY:Our Wedding
DESCRIPTION:Jhon X Deo's Wedding
LOCATION:Venue Name
END:VEVENT
END:VCALENDAR`;

    // Create a Blob containing the ICS data
    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);

    // Create a hidden anchor element for downloading
    const a = document.createElement("a");
    a.href = url;
    a.download = "WeddingDate.ics";
    document.body.appendChild(a);

    // Trigger the click event to initiate the download
    a.click();

    // Remove the anchor element
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











