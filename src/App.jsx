// App.jsx

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

// Layouts
import MainLayout from "./components/MainLayout";
import NextPage from "./components/NextPage";

// Public Pages
import Home from "./components/Home";








/**
 * A tiny component that scrolls the page to top
 * whenever the route path changes
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ParallaxProvider>
      <Router>
        {/* Global scroll-to-top for every route change */}
        <ScrollToTop />

        <Routes>
          {/* Public Routes (using MainLayout) */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            
           
          </Route>
          
          {/* Example Routes (using NextPage) */}
          <Route element={<NextPage />}>
             
           
           
          </Route>

          {/* Catch-all or 404 route could go here, if desired */}
        </Routes>
      </Router>
    </ParallaxProvider>
  );
}

export default App;