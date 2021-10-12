import React, { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className="w-auto h-auto mx-auto">{children}</main>

      <Footer />
    </Fragment>
  );
};

export default Layout;
