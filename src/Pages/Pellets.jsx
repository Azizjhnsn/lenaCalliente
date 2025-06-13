import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ProductCard} from "../Components/ProductCard";
import pallets from "../Shared/PelletsData";
import Navigationbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationBar from "../Components/LocationBar";

const Pallets = () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Pallets"} />
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

      <Footer />
    </React.Fragment>
  );
};

export default Pallets;
