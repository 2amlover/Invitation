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

    const params = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Example Corp.//iCal 4.0//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${new Date().toISOString()}`,
      `DTSTAMP:${new Date().toISOString()}`,
      `DTSTART:${event.start.toISOString()}`,
      `DTEND:${event.end.toISOString()}`,
      `SUMMARY:${event.summary}`,
      `DESCRIPTION:${event.description}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR',
    ];

    const calendarData = params.join('\n');

    // Create a data URI with the calendar data
    const dataUri = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(calendarData);

    // Create an anchor element to trigger the user's calendar app
    const a = document.createElement('a');
    a.href = dataUri;
    a.download = 'WeddingDate.ics';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
