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
    <div className="contact-container">
      <section className='contact-subscription'>
        <p className='contact-subscription-heading'>
          <p>Questions?  Please contact me using the form below</p>
        </p>
        <div className='input-areas'>
    <form className="contact-form email-input" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <Button buttonStyle='btn--outline' type="submit" value="Send">Send</Button>
    </form>
    </div>
    </section>
    </div>
  );
  }

