import { Container, Row, Col } from "react-bootstrap";
import { ProductCard } from "../ProductCard";

const BestSellersSection = ({ bestSellersLists = [], displayCount = 4 }) => {
  // Flatten the arrays while limiting the number of items taken from each array
  const limitedBestSellers = bestSellersLists.flatMap((list) => list.slice(0, displayCount));

  return (
    <Container className="my-4 text-center">
      <h1 className="text-primary mb-4">Best Sellers</h1>

      {/* Product Grid */}
      <Row className="g-4 justify-content-center">
        {limitedBestSellers.map((product, idx) => (
          <Col key={idx} xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BestSellersSection;
