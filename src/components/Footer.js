import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Thanks for Visiting
              <i class='' />
            </Link>
          </div>
          <small class='website-rights'>Check out my Github, download my resume from Drive and visit my Linkedin for more</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to={{pathname: 'https://github.com/bash7325'}}
              target='_blank'
              aria-label='github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link drive'
              to={{pathname: 'https://drive.google.com/file/d/1SbXy9mhuxzWv-znNeOXE8gpLtCSOrXXA/view?usp=sharing'}}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-google-drive' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to={{pathname: 'https://www.linkedin.com/in/brandon-ashby-a8bb5411b/'}}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
