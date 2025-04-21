import React from "react";
import "./Header.css";
// import heroImg from "../../assets/hero_last.webp";
const Header = ({ heading  , headerImg}) => {
  return (
    <>
      <section
        className="header"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>{heading}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quam.
        </p>
      </section>
    </>
  );
};

export default Header;
