import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Made with ❤️ by LuSaenz.</p>
    </footer>
  );
};

export default Footer;
