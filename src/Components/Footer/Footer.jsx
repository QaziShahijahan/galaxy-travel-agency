import React from "react";
import { Link } from "react-router-dom";
import fb from "../../assets/facebook1.png";
import insta from "../../assets/instafinal.jpg";
import twitter from "../../assets/xfinal.jpg";
import "./footer.css"

const Footer = () => {
  const social = [fb, insta, twitter];
  return (
    <>
      {/* <h1 className="heading">Footer</h1> */}
      <footer>
        <h1>GXL TRVL</h1>
        <div className="links">
          <h3>Useful Links</h3>
          <div className="link">
            <Link to="/">Home</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/training">Training</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="social">
          {social.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </footer>
    </>
  );
};

export default Footer;
