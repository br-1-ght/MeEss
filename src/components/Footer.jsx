import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">
        Adeleye Suliat Tolulope 
      </div>
      <div className="footer-links">
        <a href="mailto:adeleyesuliat04@gmail.com" className="footer-icon">
            <i class="bi bi-envelope-fill"></i>
        </a>
        <a href="https://www.tiktok.com/@me.essentials?_t=ZM-8wBObW7QSNZ&_r=1" target="_blank" rel="noopener noreferrer" className="footer-icon">
        <i class="bi bi-tiktok"></i>
        </a>
        <a href="tel:+2348135573634" className="footer-icon">
            <i class="bi bi-telephone-fill"></i>
        </a>
        <a href="https://snapchat.com/t/TpmTxclu" className="footer-icon">
            <i class="bi bi-snapchat"></i>
        </a>
      </div>
      <div className="footer-copyright">
        <p>Adeleye Suliat Tolulope</p>
        <p className="report-page">Report page<i class="bi bi-flag-fill"></i></p>
      </div>
    </footer>
  );
}