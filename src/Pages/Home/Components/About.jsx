import React from "react";
import aboutImage from "../../../assets/about2.jpeg";

const About = ({heading}) => {
  return (
    <>
    <h1 className="heading">{heading}</h1>
      <section className="about">
        <img src={aboutImage} alt="" />
        <div className="content">
          <h2>Lorem, ipsum dolor.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            culpa cumque consectetur autem non fugit amet harum excepturi unde
            ab?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            culpa cumque consectetur autem non fugit amet harum excepturi unde
            ab?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            culpa cumque consectetur autem non fugit amet harum excepturi unde
            ab?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
