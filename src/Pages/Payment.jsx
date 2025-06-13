import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navigationbar from "../Components/Navbar";
import LocationBar from "../Components/LocationBar";
import { Form, Button, Container } from "react-bootstrap";

function Payment() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolderName: "",
    amount: 0, // Add amount field
    userEmail: "" // Add user email field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Payment successful:", result);
        // Handle successful payment (e.g., show a success message)
      } else {
        console.error("Payment failed");
        // Handle failed payment (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error during payment:", error);
    }
  };

  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Payment"} />
      <Container className="py-5">
        <h2 className="text-center text-primary mb-4">Payment</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="expiryDate">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="cvv">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="cardHolderName">
            <Form.Label>Card Holder Name</Form.Label>
            <Form.Control
              type="text"
              name="cardHolderName"
              value={formData.cardHolderName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="amount">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="userEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="userEmail"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Pay Now
          </Button>
        </Form>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Payment;
