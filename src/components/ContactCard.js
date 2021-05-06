import React from 'react';
import './ContactCard.css';
import { Button } from './Button';

function ContactCard() {
  return (
    <div className='contact-container'>
      <section className='contact-subscription'>
        <p className='contact-subscription-heading'>
          <p>Questions?  Please contact me using the form below</p>
          Email me at: bash7325@gmail.com or call/text at: 435-503-6255
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='email-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Send</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactCard;