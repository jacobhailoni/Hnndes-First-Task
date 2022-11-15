import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../assets/clu-soh-oga9Xg0KVnU-unsplash.png";
import LogoImg from "../assets/logo.png";

function About() {
  return (
    <>
      <Container className="text-center" fluid="md">
        <Row className="mt-5">
          <Col
            xs="12"
            sm={6}
            className="text-center"
            style={{ fontSize: "28px", padding: "0" }}
          >
            <p style={{ color: "#DFA974" }}>About us</p>
            <h2>International Service Provider Meets Your Needs</h2>
            <p style={{ fontSize: "18px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              corporis voluptates ea quidem commodi amet eligendi blanditiis,
              quo numquam quod quam inventore molestiae obcaecati error eos ,
              voluptatem placeat recusandae consequuntur.
            </p>
            <p style={{ fontSize: "18px" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              corporis voluptates ea quidem commodi amet eligendi blanditiis
            </p>
          </Col>
          <Col xs="12" sm={6} style={{ padding: "0" }}>
            <div className="images">
              <img
                src={LogoImg}
                style={{ position: "absolute", marginTop: "5rem" }}
                alt=""
                id="logo"
              />
              <img
                src={AboutImg}
                style={{ marginLeft: "7.5rem" }}
                alt=""
                id="about"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
