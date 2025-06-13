import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Context/ProductProvider";
import { FaSearchPlus, FaHeart, FaBalanceScale } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import SimilarProducts from "./SimilarProducts"; // Import SimilarProducts

const ProductDetails = () => {
  const { title } = useParams();
  const products = useProducts();
  const decodedTitle = decodeURIComponent(title);
  const product = products.find((p) => p.title.toLowerCase() === decodedTitle.toLowerCase());

  const [quantity, setQuantity] = useState(1);
  if (!product) {
    return <div className="container py-5">Product not found</div>;
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="container py-5">
      <div className="row">
        {/* Thumbnail Gallery */}
        <div className="col-md-2 d-none d-md-block">
          <div className="d-flex flex-column">
            <img src={product.image} className="img-thumbnail mb-2" alt={product.title} />
            <img src={product.image} className="img-thumbnail mb-2" alt={product.title} />
            <img src={product.image} className="img-thumbnail" alt={product.title} />
          </div>
        </div>

        {/* Main Product Image */}
        <div className="col-md-5 position-relative">
          <div className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1 rounded">
            -{product.discount}%
          </div>
          <img src={product.image} className="img-fluid w-100" alt={product.title} />
          <FaSearchPlus className="position-absolute bottom-0 end-0 text-dark p-2 bg-light rounded-circle" size={24} />
        </div>

        {/* Product Details */}
        <div className="col-md-5">
          <h5 className="text-uppercase text-muted">Category</h5>
          <h2 className="fw-bold">{product.title}</h2>

          {/* Price Section */}
          <p className="fs-4">
            <span className="text-danger fw-bold me-2">{product.price}</span>
            <span className="text-muted text-decoration-line-through me-2">
              €{(parseFloat(product.price.replace("€", "")) / (1 - product.discount / 100)).toFixed(2)}
            </span>
            <span className="text-primary">({product.discount}% Off)</span>
          </p>

          <p className="text-success fw-bold">IN STOCK</p>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mb-3">
            <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>-</button>
            <span className="mx-3 fw-bold">{quantity}</span>
            <button className="btn btn-outline-secondary" onClick={increaseQuantity}>+</button>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="d-grid gap-2">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline-dark">Buy Now</button>
          </div>

          {/* Wishlist & Compare Icons */}
          <div className="mt-3 d-flex gap-3">
            <button className="btn btn-light"><FaHeart className="text-danger" /> Wishlist</button>
            <button className="btn btn-light"><FaBalanceScale className="text-secondary" /> Compare</button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="card p-4 mt-5">
        <h4 className="fw-bold">Product Description</h4>
        <p>{product.description}</p>
        <br />
        <p>{product.fullDescription}</p>
      </div>

      {/* Similar Products */}
      <SimilarProducts currentProductCategory={product.category} />
    </div>
  );
};

export default ProductDetails;
