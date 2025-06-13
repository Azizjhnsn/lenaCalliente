import React from "react";
import { useProducts } from "../../Context/ProductProvider"; // Import the product context
import "bootstrap/dist/css/bootstrap.min.css";

const SimilarProducts = ({ currentProductCategory }) => {
  const allProducts = useProducts();

  // Filter products by the current product's category
  const similarProducts = allProducts.filter(
    (product) => product.category === currentProductCategory
  );

  return (
    <div className="container my-4">
      <h3 className="fw-bold mb-3">Similar Products</h3>

      {/* Scrollable Row */}
      <div className="d-flex overflow-auto">
        {similarProducts.map((product) => {
          // Ensure price and originalPrice are defined
          const price = product.price ? parseFloat(product.price.replace("€", "")) : 0;
          const originalPrice = product.originalPrice ? parseFloat(product.originalPrice.replace("€", "")) : 0;

          return (
            <div key={product.id} className="card me-3" style={{ width: "16rem", minWidth: "16rem" }}>
              {/* Discount Badge */}
              <span className="position-absolute top-0 start-0 bg-primary text-white px-2 py-1 rounded">
                -{product.discount}%
              </span>

              {/* Product Image */}
              <img src={product.image} className="card-img-top" alt={product.name} />

              <div className="card-body">
                {/* Category Label */}
                <span className="badge bg-secondary">{product.category}</span>

                {/* Product Name & Description */}
                <h5
                  className="card-title mt-2"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 3,
                  }}
                >
                  {product.name}
                </h5>
                <p
                  className="card-text text-muted"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitLineClamp: 3,
                  }}
                >
                  {product.description}
                </p>

                {/* Price Section */}
                <p className="fw-bold text-danger mb-2">
                  €{price.toFixed(2)}{" "}
                  <span className="text-muted text-decoration-line-through ms-1">
                    €{originalPrice.toFixed(2)}
                  </span>
                </p>

                {/* Add to Cart Button */}
                <button className="btn btn-primary w-100">Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SimilarProducts;
