import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ProductCard} from "../Components/ProductCard";
import woodStove from "../Shared/WoodStoveData";
import Navigationbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationBar from "../Components/LocationBar";

const WoodStove = () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Wood Stove"} />
      <Container>
        <Row>
          {woodStove.slice().map((stove, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...stove} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default WoodStove;
