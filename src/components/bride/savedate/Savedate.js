import React from "react";

const SaveDate = () => {
  const weddingDate = "October 14, 2023"; // Your wedding date

  const addEventToGoogleCalendar = () => {
    const event = {
      start: new Date('2023-10-14T00:00:00Z'), // Replace with your actual start date
      end: new Date('2023-10-15T23:59:59Z'), // Replace with your actual end date
      summary: "Our Wedding",
      description: "Jhon X Deo's Wedding",
      location: "Venue Name",
    };

    const gapi = window.gapi; // Assuming that you've already loaded the Google API client

    gapi.auth2.getAuthInstance().signIn().then(() => {
      const request = gapi.client.calendar.events.insert({
        calendarId: 'primary', // 'primary' is the default calendar for the authenticated user
        resource: event,
      });

      request.execute((response) => {
        console.log('Event added:', response);
      });
    });
  };

  return (
    <div className="overlayyy">
      <div className="save-date-container">
        <div className="names">Jhon X Deo</div>
        <div className="subtext">We're getting married</div>
        <div className="subtext1">Save the date</div>
        <div className="date">{weddingDate}</div>
        <button className="button" onClick={addEventToGoogleCalendar}>
          Save Date to Google Calendar
        </button>
      </div>
    </div>
  );
};

export default SaveDate;
