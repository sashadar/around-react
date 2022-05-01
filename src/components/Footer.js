import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="copyright">&copy; {currentYear} Around The U.S.</p>
    </footer>
  );
}

export default Footer;
