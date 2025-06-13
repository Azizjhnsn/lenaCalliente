import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import bgImg from '../assets/banner-18.jpg'

const PromotionBanner = () => {
  return (
    <Container
      fluid
      className="text-white py-5"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Row className="align-items-center">
        <Col className="text-center">
          <span className="fw-bold">Winter Sale: 35% off</span>
        </Col>
        <Col className="text-center">
          <span className="fw-bold bg-white text-primary px-3 py-1 rounded">
            SALEOFF-35
          </span>
        </Col>
        <Col className="text-center">
          <span className="fw-bold">Free shipping on all orders over €199</span>
        </Col>
      </Row>
    </Container>
  );
};

export default PromotionBanner;
