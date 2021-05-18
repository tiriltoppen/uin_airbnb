import { useState } from 'react';

const ContactForm = ({ loading, onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // kaller funksjonen i Contact.js inni pages.
    onSubmit({ name, message });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <label id="name">
        Navnet ditt
        <input
          onChange={(event) => setName(event.target.value)}
          value={name}
          type="text"
          id="name"
          placeholder="Hva heter du?"
          required
        />
      </label>
      <label id="message">
        Hva lurer du på?
        <textarea
          rows="4"
          cols="50"
          onChange={(event) => setMessage(event.target.value)}
          value={message}
          type="text"
          id="message"
          placeholder="Hva kan vi hjelpe deg med?"
          required
        />
      </label>
      <button type="submit">{loading ? 'Sender ...' : 'Send'}</button>
    </form>
  );
};

export default ContactForm;
