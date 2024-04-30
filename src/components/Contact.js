import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
      <div>
        <a href="https://twitter.com/memecoin">Twitter</a>
        <a href="https://facebook.com/memecoin">Facebook</a>
        <a href="https://instagram.com/memecoin">Instagram</a>
      </div>
    </div>
  );
}

export default Contact;
