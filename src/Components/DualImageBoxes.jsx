import React from 'react';
import { Row, Col } from 'react-bootstrap';
import leftImg from '../assets/burningPellets.jpg';
import rightImg from '../assets/handedPellets2.webp';

const ImageBoxes = () => {
  return (
    <Row className="justify-content-center">
      <Col md={5} className="mb-4">
        <div className="image-box">
          <img
            src={leftImg}
            alt="Left"
            className="img-fluid rounded shadow"
          />
        </div>
      </Col>
      <Col md={5} className="mb-4">
        <div className="image-box">
          <img
            src={rightImg}
            alt="Right"
            className="img-fluid rounded shadow"
          />
        </div>
      </Col>
    </Row>
  );
};

export default ImageBoxes;
