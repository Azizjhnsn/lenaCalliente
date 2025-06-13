import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../Context/CartContext"; // Import cart context
import Navigationbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { clearCart } from "../utils.js";

const Verify = () => {
  const { cartItems, updateQuantity, removeItem, totalPrice } = useCart();

  console.log("Rendering Verify Page, Cart Items:", cartItems); // ✅ Log cart content

  return (
    <React.Fragment>
      <Navigationbar />
      <Container className="py-5">
        <h1 className="text-center text-primary mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-muted">Your cart is empty.</p>
        ) : (
          <>
            <Row>
              {cartItems.map((item, index) => (
                <Col xs={12} md={6} key={index} className="mb-4">
                  <Card className="shadow">
                    <Row className="g-0">
                      <Col md={4}>
                        <Card.Img
                          variant="top"
                          src={item.image}
                          alt={item.title}
                          className="img-fluid"
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <h5
                            className="card-title"
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                            title={item.title} // Show full title on hover
                          >
                            {item.title}
                          </h5>
                          <p className="fw-bold">€{item.price.toFixed(2)}</p>

                          {/* Quantity Controls */}
                          <div className="d-flex align-items-center mb-2">
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => {
                                console.log(
                                  "Decreasing Quantity for:",
                                  item.title
                                );
                                updateQuantity(item.title, -1);
                              }}
                            >
                              −
                            </Button>
                            <span className="mx-3">{item.numberOfItem}</span>
                            <Button
                              variant="outline-secondary"
                              size="sm"
                              onClick={() => {
                                console.log(
                                  "Increasing Quantity for:",
                                  item.title
                                );
                                updateQuantity(item.title, 1);
                              }}
                            >
                              +
                            </Button>
                          </div>

                          {/* Remove Button */}
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={() => {
                              console.log("Removing Item:", item.title);
                              removeItem(item.title);
                            }}
                          >
                            Remove
                          </Button>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Total Price & Checkout */}
            <div className="text-center mt-4">
              <h4>Total: €{totalPrice.toFixed(2)}</h4>
              {/* Reset price button */}
              <div
                className="text-center btn btn-primary mt-3"
                onClick={clearCart}
              >
                Clear Cart
              </div>
            </div>
          </>
        )}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Verify;
