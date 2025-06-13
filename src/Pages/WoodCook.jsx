import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {ProductCard} from "../Components/ProductCard";
import woodCook from "../Shared/WoodCookData";
import Navigationbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LocationBar from "../Components/LocationBar";

const WoodCook = () => {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Wood Cook"} />
      <Container>
        <Row>
          {woodCook.slice().map((cook, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <ProductCard {...cook} />
            </Col>
          ))}
        </Row>
      </Container>

      <Footer />
    </React.Fragment>
  );
};

export default WoodCook;
