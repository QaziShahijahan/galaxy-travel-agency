import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Footer from "../../Components/Footer/Footer"
import Card from './Components/Card'
import "./PricingStyles.css"
import headerImg from "../../assets/hero2.jpeg"


const Pricing = () => {
  return (
    <>
    <Navbar />
    <Header heading={"Our Packages"} headerImg={headerImg}/>
    <Card />
    <Footer />
    </>
  )
}

export default Pricing