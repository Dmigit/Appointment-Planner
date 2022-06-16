import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
       <input 
          type="text"
          name="title"
          value={title}
          placeholder="Title of Appointment"
          required
          onChange={(e) => setTitle(e.target.value)}
       />
      </label>
      <br />
      <label>
        <ContactPicker 
          name="contact"
          value={contact}
          contacts={getContactNames()}
          placeholder="Appointment with"
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          name="date"
          min={getTodayString()}
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input 
          type="time"
          name="time"
          value={time}
          required
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
