import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ProductCard} from "../Components/ProductCard";
import fireWood from "../Shared/FireWoodData";
import Navigationbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationBar from "../Components/LocationBar";

const FireWood = () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Fire Wood"} />
      <div
          style={{
            margin: "30px",
          }}
        >
          <h1 style={{ color: "#3568C8" }}>Fire wood</h1>
        <Row>
          {fireWood.slice().map((fire, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...fire} />
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default FireWood;
