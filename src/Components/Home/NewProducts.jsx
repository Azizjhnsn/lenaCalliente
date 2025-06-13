import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../ProductCard";

const NewProductsSection = ({ newArrivalsLists = [], displayCount = 4 }) => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Step 1: Extract the specified number of items from each array
  const selectedArrivals = newArrivalsLists.map(arr => arr.slice(0, displayCount));

  // Step 2: Interleave the selected items
  const mergedArrivals = [];
  const maxLength = Math.max(...selectedArrivals.map(arr => arr.length));

  for (let i = 0; i < maxLength; i++) {
    selectedArrivals.forEach(arr => {
      if (arr[i]) mergedArrivals.push(arr[i]);
    });
  }

  const totalSlides = Math.ceil(mergedArrivals.length / itemsPerPage);

  return (
    <Container className="my-4 text-center ">
      <h1 className=" mb-4">New Products</h1>

      {/* Product Grid */}
      <Row className="g-4 justify-content-center">
        {mergedArrivals
          .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
          .map((arrival, idx) => (
            <Col key={idx} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <ProductCard {...arrival} />
            </Col>
          ))}
      </Row>

      {/* Bootstrap Carousel Indicators at Bottom */}
      <div className="d-flex justify-content-center mt-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`btn btn-sm mx-1 rounded-circle ${index === currentIndex ? "btn-primary" : "btn-outline-primary"}`}
            style={{ width: "12px", height: "12px", padding: "0", borderRadius: "50%" }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </Container>
  );
};

export default NewProductsSection;
