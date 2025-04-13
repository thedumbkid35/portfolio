import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright">© {new Date().getFullYear()} YourName. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
