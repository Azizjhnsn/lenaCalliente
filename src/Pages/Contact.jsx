import React from "react";
import Navigationbar from "../Components/Navbar";
import LocationBar from "../Components/LocationBar";
import FeaturesSection from "../Components/FeatureSection";
import Footer from "../Components/Footer";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <React.Fragment>
      <Navigationbar />
      <LocationBar currentPage={"Contact Us"} />
      <Container className="py-5">
        <h1 className="text-center mb-4 text-primary">Contact Us</h1>
        <p className="text-center text-muted">
          Have any questions or inquiries? Fill out the form below, and we'll get back to you as soon as possible.
        </p>

        {/* Contact Form */}
        <Form className="mx-auto" style={{ maxWidth: "600px" }}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Write your message here..." required />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>

      <FeaturesSection />
      <Footer />
    </React.Fragment>
  );
}

export default Contact;
