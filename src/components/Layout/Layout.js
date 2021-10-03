import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="container w-screen h-screen mx-auto">{children}</main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
