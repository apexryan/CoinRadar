import React from "react";
import Navbar from "./components/navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/footer/footer";
import Pricing from "./pages/Pricing/Pricing";
import Features from "./pages/Features/Features";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
