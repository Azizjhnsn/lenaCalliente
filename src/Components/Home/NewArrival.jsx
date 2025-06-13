import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../ProductCard";

const NewArrivalsSection = ({ newArrivalsLists = [] }) => {
  // Flatten the arrays to get a single list of all new arrivals
  const allArrivals = newArrivalsLists.flat();

  return (
    <Container className="my-4 text-center">
      <h1 className="text-primary mb-4">New Arrivals</h1>
      
      {/* Product Grid */}
      <Row className="g-4 justify-content-center">
        {allArrivals.map((arrival, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <ProductCard {...arrival} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default NewArrivalsSection;
