import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";     // Your "public" navbar
import Footer from "./Footer";     // Your "public" footer (if needed)

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />  {/* Renders the child route elements */}
      <Footer />
    </>
  );
};

export default MainLayout;