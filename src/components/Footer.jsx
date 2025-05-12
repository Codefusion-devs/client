import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
     <footer expand="lg" className="bg-dark text-light py-3 mt-auto w-100">
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</small>
      </Container>
    </footer>
  );
};

export default Footer;
