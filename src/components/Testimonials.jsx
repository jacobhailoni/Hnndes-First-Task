import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Logo from "../assets/logo.png";
import { Container } from "react-bootstrap";
import "./Testimonials.scss";

function Testimonials() {
  return (
    <Container
      fluid="sm"
      className="testimonials text-center pb-3"
      style={{ backgroundColor: "#F9F9F9" }}
    >
      <h2>Testimonials</h2>
      <h1>What Customers Say?</h1>
      <p>
        After a construction project took longer than expected, my husband, my
        daughter and I needed a place to stay for a few nights. As a Chicago
        resident, we know a lot about our city, neighborhood and the types of
        housing options available and absolutely love our vacation at Sona
        Hotel.
      </p>
      <div className="rate">
        <StarIcon style={{ color: "#F5B917" }} />
        <StarIcon style={{ color: "#F5B917" }} />
        <StarIcon style={{ color: "#F5B917" }} />
        <StarIcon style={{ color: "#F5B917" }} />
        <StarHalfIcon style={{ color: "#F5B917" }} />
        <span>-Alexender Vasquez</span>
      </div>
      <img src={Logo} alt="logo" width={50} height={50} />
    </Container>
  );
}

export default Testimonials;
