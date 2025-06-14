import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pallets from "./Pages/Pellets";
import WoodBoiler from "./Pages/WoodBoiler";
import WoodCook from "./Pages/WoodCook";
import WoodStove from "./Pages/WoodStove";
import FireWood from "./Pages/FireWood";
import About from "./Pages/About";
import Trade from "./Pages/Trade";
import Contact from "./Pages/Contact";
import Verify from "./Pages/Verify";
import Product from "./Pages/Product";
import Payment from "./Pages/Payment";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/styles.css";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fire-wood" element={<FireWood />} />
        <Route path="/pallets" element={<Pallets />} />
        <Route path="/wood-boiler" element={<WoodBoiler />} />
        <Route path="/wood-cook" element={<WoodCook />} />
        <Route path="/wood-stove" element={<WoodStove />} />
        <Route path="/about" element={<About />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/product/:title" element={<Product />} />
        <Route path="/payment" element={<Payment />} />

      </Routes>
    </React.Fragment>
  );
}

export default App;


