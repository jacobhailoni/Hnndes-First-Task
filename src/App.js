import "./App.scss";
import Carousel from "react-bootstrap/Carousel";
import Firstslide from "./assets/10854749.png";
import Secondslide from "./assets/brandon-romanchuk-R1Io5Eeh6sI-unsplash (3).png";
import MainNavbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Trips from "./components/Trips";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={Firstslide} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Secondslide} alt="Second slide" />
        </Carousel.Item>
      </Carousel>

      <div className="main-card">
        <div className="card-text">
          <h1>
            <span>HNNDES</span> Corporation
          </h1>
          <h2>
            Service <span>Provider</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            laudantium doloremque et rem nihil velit fuga officiis iste! Dolor,
            odio?
          </p>
          <a href="">See more</a>
        </div>
      </div>
      <About />
      <Services />
      <Contact />
      <Testimonials />
      <Trips />
    </div>
  );
}

export default App;
