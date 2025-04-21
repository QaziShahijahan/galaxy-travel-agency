import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Form from "./Components/Form";
import "./ContactStyle.css";
import headerImg from "../../assets/photo-1534294228306-bd54eb9a7ba8.avif"
const Contact = () => {
  return (
    <>
      <Navbar />
      <Header heading={"Welcome To Contact Page"} headerImg={headerImg}/>
      <Form />
      <Footer />
    </>
  );
};

export default Contact;
