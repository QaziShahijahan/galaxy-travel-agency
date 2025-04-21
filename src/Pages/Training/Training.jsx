import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from "../../Components/Footer/Footer"
import About from "../Home/Components/About"
import headerImg from "../../assets/hero_last.webp"


const Training = () => {
  return (
    <>
    <Navbar />
    <Header  heading={"Welcome To Training Page"} headerImg={headerImg}/>
    <About heading="Training"/>
    <Footer />
    </>
  )
}

export default Training