import React from "react";

import Facebook from "../assets/icons/SVG/facebook";
import Twitter from "../assets/icons/SVG/twitter";
import Instagram from "../assets/icons/SVG/instagram";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section footer-flex">
        <div className="footer-section">
          <h3>Collections</h3>
          <div className="">Rings</div>
          <div className="">Beads</div>
          <div className="">Necklaces/Pendants</div>
          <div className="">Cufflinks</div>
          <div className="">Custom</div>
        </div>
        <div className="footer-section">
          <h3>The Brand</h3>
          <div className="">About</div>
          <div className="">Conspiracy</div>
          <div className="">Stocklist</div>
          <div className="">Contact us</div>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <div className="">Shipping & Returns</div>
          <div className="">Terms & Conditions</div>
          <div className="">Privacy Policy</div>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links" >
            <Facebook />
            <Twitter />
            <Instagram />
          </div>
        </div>
        <div className="footer-section cards">
          <img
            src="https://www.merchantequip.com/image/?logos=v|m|a|d|p&height=32"
            alt="Merchant Equipment Store Credit Card Logos"
          />
        </div>
      </div>
      <div className="">
        Copyright © 2017 The 101 Corporation. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
