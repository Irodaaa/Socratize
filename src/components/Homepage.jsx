import React from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import SocialLinks from "./SocialLinks";
import About from "./About";
import Support from "./Support";
import AllInOne from "./AllInOne";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <>
        <Navbar />
    <Hero />
    <SocialLinks/>
    <About />
    <Support />
    <AllInOne />
            <Footer/>
        </>
    );
};

export default Homepage;