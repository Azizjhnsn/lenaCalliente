import { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { WideProductCard } from "../ProductCard";

const DailyOffersSection = ({ dailyDealsLists = [], displayCount = 6 }) => {
  const itemsPerPage = 6;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Step 1: Extract the specified number of items from each array
  const selectedDeals = dailyDealsLists.map(arr => arr.slice(0, displayCount));

  // Step 2: Interleave the selected items
  const mergedDeals = [];
  const maxLength = Math.max(...selectedDeals.map(arr => arr.length));

  for (let i = 0; i < maxLength; i++) {
    selectedDeals.forEach(arr => {
      if (arr[i]) mergedDeals.push(arr[i]);
    });
  }

  const totalSlides = Math.ceil(mergedDeals.length / itemsPerPage);

  return (
    <div className="bg-light py-4">
      <Container>
        <h1 className="mb-5 pb-3 text-dark border-bottom border-secondary">Daily Offers</h1>

        <Carousel
          indicators={false} // Hide Bootstrap default indicators
          activeIndex={currentIndex}
          onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
          interval={null} // Disable auto-sliding
          controls={false} // Hide side arrows
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <Carousel.Item key={index}>
              <Row className="g-4">
                {mergedDeals
                  .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
                  .map((deal, idx) => (
                    <Col key={idx} xs={12} sm={6} md={4}>
                      <WideProductCard {...deal} />
                    </Col>
                  ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Custom Indicators Below */}
        <div className="d-flex justify-content-center mt-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`btn mx-2 ${currentIndex === index ? "btn-primary" : "btn-outline-primary"}`}
              style={{
                width: "15px",
                height: "15px",
                borderRadius: "50%",
                padding: 0,
                borderWidth: "2px",
              }}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DailyOffersSection;
