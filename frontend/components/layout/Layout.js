import React from "react";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, title = "WorkTether - Find you Job Now" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Script
        strategy="beforeInteractive"
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      ></Script>
      <Script
        src="https://kit.fontawesome.com/9edb65c86a.js"
        crossOrigin="anonymous"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      ></Script>

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
