import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ProductCard} from "../Components/ProductCard";
import woodBoiler from "../Shared/WoodBoilerData";
import Navigationbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationBar from "../Components/LocationBar";

const WoodBoiler = () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Wood boiler"} />
      <Container>
        <Row>
          {woodBoiler.slice().map((boiler, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...boiler} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default WoodBoiler;
