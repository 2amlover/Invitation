import React from "react";

const SaveDate = () => {
  const weddingDate = "October 14, 2023"; // Your wedding date

  const addEventToCalendar = () => {
    const event = {
      start: new Date('2023-10-14T00:00:00Z'), // Replace with your actual start date
      end: new Date('2023-10-15T23:59:59Z'), // Replace with your actual end date
      summary: "Our Wedding",
      description: "Jhon X Deo's Wedding",
      location: "Venue Name",
    };

    const startDateStr = event.start.toISOString().replace(/-|:|\.\d+/g, "");
    const endDateStr = event.end.toISOString().replace(/-|:|\.\d+/g, "");

    const calendarUrl = `webcal://example.com?start=${startDateStr}&end=${endDateStr}&summary=${encodeURIComponent(event.summary)}&description=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;

    window.open(calendarUrl, '_blank');
  };

  return (
    <div className="overlayyy">
      <div className="save-date-container">
        <div className="names">Jhon X Deo</div>
        <div className="subtext">We're getting married</div>
        <div className="subtext1">Save the date</div>
        <div className="date">{weddingDate}</div>
        <button className="button" onClick={addEventToCalendar}>
          Save Date to Calendar
        </button>
      </div>
    </div>
  );
};

export default SaveDate;
