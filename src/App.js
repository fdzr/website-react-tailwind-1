import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Support from './components/Support';
import AllInOne from './components/AllInOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
// } from "react-router-dom";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Support />
            <AllInOne/>
            <Pricing />
            <Footer />
        </>
    )
}

export default App;