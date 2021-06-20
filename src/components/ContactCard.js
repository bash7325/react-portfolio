import React from 'react';
import './ContactCard.css';
import { Button } from './Button';
import emailjs from 'emailjs-com';


export default function ContactCard() {

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_vitfz9l', 'template_jmiqd7g', e.target, 'user_D7D5vrrsX9nMGOnxFWy35')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
  }

