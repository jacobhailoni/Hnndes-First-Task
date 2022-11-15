import React from "react";
import MainNavbar from "../components/Navbar";
import {
  Col,
  Container,
  Row,
  Nav,
  Card,
  Form,
  Pagination,
} from "react-bootstrap";
import "./products.scss";

function Products() {
  return (
    <>
      <MainNavbar />
      <Container fluid>
        <Row className="">
          <Nav as="ul" className="d-flex justify-content-end">
            <Nav.Item as="li">
              <Nav.Link href="/home">All</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">Free</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">With 100</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">With 200</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">Premium</Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <Row>
          <Col sm="4">
            <>
              <Card>
                <Row>
                  <Form.Group className="">
                    <Form.Label>Sort:</Form.Label>
                    <Row>
                      <Col>
                        <Form.Select>
                          <option>Name</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Select>
                          <option>Price</option>
                        </Form.Select>
                      </Col>
                    </Row>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="">
                    <Form.Label>Search:</Form.Label>
                    <Row>
                      <Col>
                        <Form.Select>
                          <option>Name</option>
                        </Form.Select>
                      </Col>
                      <Col>
                        <Form.Control placeholder="Search" />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Label>Sorting with price:</Form.Label>
                        <Form.Range />
                      </Col>
                    </Row>
                  </Form.Group>
                </Row>
              </Card>
            </>
            <>
              <Card className="ads mt-3"></Card>
            </>
          </Col>
          <Col sm="8" className="justify-content-center">
            <Card className="my-3">
              <Card.Body>
                <Card.Title>
                  Web Development
                  <span
                    className="float-end"
                    style={{ fontSize: "20px", color: "#777777" }}
                  >
                    price:300
                  </span>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  hic!
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  Web Development
                  <span
                    className="float-end"
                    style={{ fontSize: "20px", color: "#777777" }}
                  >
                    price:300
                  </span>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  hic!
                </Card.Text>
              </Card.Body>
            </Card>
            <Pagination className="mt-5 justify-content-around w-80 ">
              <Pagination.Prev />
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{8}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
