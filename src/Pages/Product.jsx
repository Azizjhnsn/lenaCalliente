import React from "react";
import Navigationbar from "../Components/Navbar";
import LocationBar from "../Components/LocationBar";
import FeaturesSection from "../Components/FeatureSection";
import Footer from "../Components/Footer";
import { Container, Form, Button } from "react-bootstrap";
import ProductDetails from "../Components/Product/ProductDetails";
import SimilarProducts from "../Components/Product/SimilarProducts";

function Product() {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Product"} />
      <Container className="py-5">
        <ProductDetails/>
        <SimilarProducts/>
      </Container>

      <FeaturesSection />
      <Footer />
    </React.Fragment>
  );
}

export default Product;
