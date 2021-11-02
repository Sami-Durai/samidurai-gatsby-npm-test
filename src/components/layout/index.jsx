import React from "react";

// components
import Header from "./Header";

import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="app-wrapper">
            <Header />

            <div className="main-wrapper">
                {children}
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
