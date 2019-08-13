import React from 'react';
import Container from '@Components/Container';
import style from './style.scss';

const Footer = () => (
  <footer className={style.Footer}>
    <Container>
      <p className={style.FooterText}>
        made with love by
        <a
          className={style.FooterLink}
          href="https://github.com/martinsbicudo"
          target="_blank"
          rel="noopener noreferrer"
        >
          @martinsbicudo
        </a>
      </p>
    </Container>
  </footer>
);

export default Footer;
