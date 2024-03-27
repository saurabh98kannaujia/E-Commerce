import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import Header from './header/header'
import Footer from './footer/footer'
import '../components/Main.css'


const Main  = () => {
    return (
        <main>
            <Header />
            <Footer />
        </main>
    )
}

export default Main