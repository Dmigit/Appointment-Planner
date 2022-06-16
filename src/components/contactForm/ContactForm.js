import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Contact Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="tel"
          name="phone"
          value={phone}
          placeholder="Contact's Phone Number"
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          required
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input 
          type="email"
          name="email"
          value={email}
          placeholder="Contact's Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <input type="submit" value="Add Contact"/>
    </form>


  );
};
