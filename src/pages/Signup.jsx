import React from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Logo from "../assets/logo.png";

function Signup() {
  const [radio, setradio] = useState();
  const handleRadio = (i) => {
    setradio(i);
  };
  return (
    <Container fluid="md" className="login mt-3 text-center">
      <img src={Logo} alt="" height={250} width={250} />
      <h3>..Register with HNNDES..</h3>
      <Row>
        <Col>
          <span className="text-start">name</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            className="input_text"
          />
        </Col>
        <Col>
          <span className="text-start">password</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="input_text"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <span className="text-start">country</span>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="name"
            className="input_text"
          />
        </Col>
        <Col>
          <span className="text-start">Phone Number</span>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="phone"
            className="input_text"
          />
        </Col>
      </Row>
      <Row className="text-center justify-content-center">
        <Col xs={3}>
          <Form.Check
            onClick={() => {
              handleRadio(0);
            }}
            type="radio"
            name="gender"
            label={`Female`}
            id={`default-radio`}
            className={radio === 0 ? "active" : ""}
          />
        </Col>
        <Col xs={3}>
          <Form.Check
            onClick={() => {
              handleRadio(1);
            }}
            type="radio"
            name="gender"
            label={`Male`}
            id={`default-radio`}
            className={radio === 1 ? "active" : ""}
          />
        </Col>
      </Row>

      <Button variant="outline-dark" className="mt-2 w-100">
        Register
      </Button>
      <Row>
        <Col>
          <Button variant="danger" className="mt-2 w-100">
            Register with Google
          </Button>
        </Col>
        <Col>
          <Button className="mt-2 w-100">Register with Facebook</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
