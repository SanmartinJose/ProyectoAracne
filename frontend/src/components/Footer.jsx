import React from 'react';
import logo from '../assets/logob&w.png'
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} width="150" height="150" alt="Logo" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <h5>Trademark</h5>
            <p>Some trademark info here.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Contact info here.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
