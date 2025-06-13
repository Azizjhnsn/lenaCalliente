import { Link } from "react-router-dom";
import {React, useState} from 'react';
import { Card } from 'react-bootstrap';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/product.css';
import { useCart } from '../Context/CartContext';


// Original ProductCard Component
const ProductCard = ({ id, image, title, description, price, discount }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    const productData = {
      id,
      image,
      title,
      description,
      price: parseFloat(price.replace("€", "")),
      discount,
      numberOfItem: 1,
    };
    addToCart(productData);
  };

  return (
    <div
      className="text-center mb-5"
      style={{ width: "100%", maxWidth: "300px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${encodeURIComponent(title)}`} style={{ textDecoration: "none", color: "inherit" }}>
        <Card className="product-card h-100 position-relative">
          <Card.Img
            variant="top"
            src={image}
            alt={title}
            className="product-image"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
          <div className="discount-badge">{discount}%</div>
          <Card.Body>
            <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: isHovered ? "blue" : "inherit", transition: "color 0.3s ease-in-out" }}>
              {title}
            </Card.Title>
            <Card.Text style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {description}
              <br />
            </Card.Text>
            <Card.Text className="price">{price}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
      <div className="btn btn-primary mt-2 add-button w-100" onClick={handleAddToCart}>
        Add to cart
      </div>
    </div>
  );
};


// New WideProductCard Component
const WideProductCard = ({ id, image, title, description, price, discount }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    const product = {
      id,
      image,
      title,
      description,
      price: parseFloat(price.replace("€", "")),
      discount,
      numberOfItem: 1,
    };
    addToCart(product);
  };

  return (
    <div
      className="text-center"
      style={{ maxWidth: "400px", width: "100%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
            <Link to={`/product/${encodeURIComponent(title)}`} style={{ textDecoration: "none", color: "inherit" }}>

      <Card className="wide-product-card position-relative">
        <div className="row g-0">
          <div className="col-md-4">
              <Card.Img variant="top" src={image} alt={title} className="img-fluid" />
          </div>
          <div className="col-md-8">
            <Card.Body>
              {!isHovered && <div className="discount-badge position-absolute top-0 end-0 m-2">{discount}%</div>}
              <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: isHovered ? "blue" : "inherit", transition: "color 0.3s ease-in-out" }}>
                <Link to={`/product/${encodeURIComponent(title)}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {title}
                </Link>
              </Card.Title>
              <Card.Text style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {description}
              </Card.Text>
              <Card.Text className="price">{price} €</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
      </Link>

      <button className="btn btn-primary add-button w-100 mt-2" onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};


export { ProductCard, WideProductCard };
