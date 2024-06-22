import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="companyInfo">
          <h2>Logo</h2>
          <span>
            Lorem ipsum dolor sit amet 
          </span>
        </div>
        <div className="footerNavigation">
          <span className="title">Company</span>
          <li>About us</li>
          <li>Career</li>
          <li>Blog</li>
          <li>FAQs</li>
        </div>
        <div className="footerNavigation">
          <span className="title">Need Help?</span>
          <li>Contact us</li>
          <li>Shipping Services</li>
          <li>Payment Options</li>
          <li>Reaturns & Exchanges</li>
          <li>Unsubscribe</li>
        </div>
        <div className="footerNavigation">
          <span className="title">Follow us</span>
          <li>Instagram</li>
          <li>FaceBook</li>
          <li>Twitter</li>
          <li>Snapchat</li>
          <li>Pinterest</li>
        </div>
      </div>
      <div className="line"></div>
      <div className="credits-Rights">
        <p>Copyright @ Ronak Dhimmar 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
}
