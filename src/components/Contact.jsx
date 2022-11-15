import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.scss";

function Contact() {
  return (
    <Container fluid="md" className="contact">
      <h1 className="text-center">Contact Us</h1>
      <h2 className="text-center">Discover Our Services</h2>
      <Row id="name-country">
        <Col>
          <input type="text" name="name" id="name" placeholder="name" />
        </Col>
        <Col>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="country"
          />
        </Col>
      </Row>
      <input type="text" name="message" id="message" placeholder="Message" />
    </Container>
  );
}

export default Contact;
