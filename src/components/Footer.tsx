import React from 'react'
import '../styles/Footer.scss'

export const Footer = () => (
  <footer>
    <div className='social-links'>
      <a
        href='https://github.com/Msulecki/'
        aria-label='Github link'
        target='_blank'
        rel='noopener noreferrer'
      >
        Github
      </a>
      <span>|</span>
      <a
        href='https://www.linkedin.com/in/msulecki/'
        aria-label='Linkedin link'
        target='_blank'
        rel='noopener noreferrer'
      >
        LinkedIn
      </a>
    </div>
  </footer>
)
