import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./Services.scss";

function Services() {
  return (
    <Container fluid="md" className="text-center services">
      <h1>What We Do</h1>
      <h2>Discover Our Services</h2>
      <Row>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
