import React from "react";
import Navigationbar from "../Components/Navbar";
import LocationBar from "../Components/LocationBar";
import FeaturesSection from "../Components/FeatureSection";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import {ProductCard} from "../Components/ProductCard";
import fireWood from "../Shared/FireWoodData";
import pallets from "../Shared/PelletsData";
import woodBoiler from "../Shared/WoodBoilerData";
import woodCook from "../Shared/WoodCookData";
import woodStove from "../Shared/WoodStoveData";


function Trade() {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Trade"} />
      
      <div
          style={{
            margin: "30px",
          }}
        >
          <h1 style={{ color: "#3568C8" }}>Fire Wood</h1>
        <Row>
          {fireWood.slice().map((fire, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...fire} />
            </Col>
          ))}
        </Row>
        </div>

        <div
          style={{
            margin: "30px",
          }}
        >
          <h1 style={{ color: "#3568C8" }}>Pellets</h1>
        <Row>
          {pallets.slice().map((pallet, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...pallet} />
            </Col>
          ))}
        </Row>
          </div>

          <div
          style={{
            margin: "30px",
          }}
        >
          <h1 style={{ color: "#3568C8" }}>Wood Boiler</h1>
        <Row>
          {woodBoiler.slice().map((boiler, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...boiler} />
            </Col>
          ))}
        </Row>
          </div>

          <div
          style={{
            margin: "30px",
          }}
        >
          <h1 style={{ color: "#3568C8" }}>Wood Cook</h1>
        <Row>
          {woodCook.slice().map((cook, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...cook} />
            </Col>
          ))}
        </Row>
          </div>

          <div
          style={{
            margin: "30px",
          }}
        >
          <h1 style={{ color: "#3568C8" }}>Wood Stove</h1>
        <Row>
          {woodStove.slice().map((stove, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...stove} />
            </Col>
          ))}
        </Row>
        </div>
      
      <FeaturesSection />
      <Footer />
    </React.Fragment>
  );
}

export default Trade;
