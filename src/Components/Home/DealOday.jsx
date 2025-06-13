import { useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { WideProductCard } from "../ProductCard";

const DealOfDaySection = ({ dealOfDayLists = [], displayCount = 6 }) => {
  const itemsPerPage = 6;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Step 1: Extract the specified number of items from each array
  const selectedDeals = dealOfDayLists.map(arr => arr.slice(0, displayCount));

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
    <div className="mt-4 px-3">
      <Container>
        <Row className="align-items-center">
          {/* Deal of the Day Section */}
          <Col xs={12} md={4} className="mb-4">
            <div className="mb-2 pb-2 border-bottom border-primary" style={{ borderBottomWidth: "3px" }}>
              <h1 className="mb-4 pb-2 text-dark border-bottom border-secondary">
                Deal of the Day
              </h1>
            </div>
          </Col>

          {/* Carousel for Product Cards */}
          <Col xs={12} md={8} className="mb-4">
            <Carousel
              indicators={false} // Hide default Bootstrap indicators
              activeIndex={currentIndex}
              onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}
              interval={null} // Disable auto-slide
              controls={false} // Hide side arrows
            >
              {Array.from({ length: totalSlides }).map((_, index) => (
                <Carousel.Item key={index}>
                  <Row className="g-4">
                    {mergedDeals
                      .slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)
                      .map((deal, idx) => (
                        <Col xs={12} md={6} key={idx}>
                          <WideProductCard {...deal} />
                        </Col>
                      ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>

            {/* Custom Carousel Indicators */}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DealOfDaySection;
