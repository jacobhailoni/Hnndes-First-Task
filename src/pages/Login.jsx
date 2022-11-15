import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Login.scss";

function Login() {
  return (
    <Container fluid="md" className="login mt-3 text-center">
      <img src={Logo} alt="" height={250} width={250} />
      <h3>..Welcome back to HNNDES..</h3>
      <span className="text-start">name</span>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        className="input_text"
      />
      <span className="text-start">password</span>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="input_text"
      />
      <Button variant="outline-dark" className="mt-2 w-100">
        Login
      </Button>
      <Row>
        <Col>
          <Button variant="danger" className="mt-2 w-100">
            Login with Google
          </Button>
        </Col>
        <Col>
          <Button className="mt-2 w-100">Login with Facebook</Button>
        </Col>
      </Row>
      <h5>
        Don't Have an account? <Link to={"/signup"}>Sign UP</Link>
      </h5>
    </Container>
  );
}

export default Login;
