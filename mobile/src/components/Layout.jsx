import React from "react";
import Header from "./Header";
import FloatingMenu from "./FloatingMenu";
import Footer from "./Footer";

export default function Layout({ children, title, onBackClick, navigate }) {
  return (
    <>
      <Header title={title} onBackClick={onBackClick} />
      <main>{children}</main>
      <FloatingMenu navigate={navigate} />
      <Footer />
    </>
  );
}
