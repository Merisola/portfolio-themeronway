import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Preloader from "../PreLoader/PreLoader";
import ScrollTop from "../ScrollTop/ScrollTop";

const Layout = ({ children }) => {
  return (
    <>
      <Preloader />
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollTop/>
    </>
  );
};

export default Layout;
