import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import Header from './header/header'
import Footer from './footer/footer'
import '../components/Main.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";


const Main  = () => {
    return (
        <main>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route exact={true} path="/" element={<Home/>} />
                <Route exact={true} path="/about" element={<About/>} />
            </Routes>
            <Footer />
            </BrowserRouter>
            
        </main>
    )
}

export default Main