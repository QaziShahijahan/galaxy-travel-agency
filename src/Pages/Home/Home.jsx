import React from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import CallToAction from "./Components/CallToAction.jsx";
import Faq from "./Components/Faq.jsx";
import Footer from "../../Components/Footer/Footer.jsx";


import "../Home/HomeStyles.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About heading="About Us"/>
      <Services />
      <CallToAction />
      <Faq/>
      <Footer />
    </>
  );
};

export default Home;
