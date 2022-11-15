import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "./Trips.scss";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function Trips() {
  return (
    <Container fluid="sm" className="trips">
      <Row>
        <Col lg={4}>
          <Card id="beach">
            <span className="type">Travel Trip</span>
            <span className="title">Tremplent in Canada</span>
            <span className="date">
              <AccessTimeIcon />
              15TH APRIL, 2019
            </span>
          </Card>
        </Col>
        <Col lg={4}>
          <Card id="climping">
            <span className="type">Camping</span>
            <span className="title">Choosing A static Caravan</span>
            <span className="date">
              <AccessTimeIcon /> 15TH APRIL, 2019
            </span>
          </Card>
        </Col>
        <Col lg={4}>
          <Card id="mountain">
            <span className="type">Event</span>
            <span className="title">Copper Canyon</span>
            <span className="date">
              <AccessTimeIcon />
              15TH APRIL, 2019
            </span>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={8}>
          <Card id="sofa">
            <span className="type">Event</span>
            <span className="title">
              Trip To Iqaluit In Nunavut A Canadian Arctic City
            </span>
            <span className="date">
              <AccessTimeIcon />
              15TH APRIL, 2019
            </span>
          </Card>
        </Col>
        <Col lg={4}>
          <Card id="pineapple">
            <span className="type">Travel</span>
            <span className="title">Travelling To Barcelona</span>
            <span className="date">
              <AccessTimeIcon />
              15TH APRIL, 2019
            </span>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Trips;
