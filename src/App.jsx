import { Navbar, Container, Nav } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#">ReactApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ScrollLink to="home" smooth={true} duration={500} offset={-70} className="nav-link">
                Home
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="nav-link">
                About
              </ScrollLink>
              <ScrollLink to="features" smooth={true} duration={500} offset={-70} className="nav-link">
                Features
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="nav-link">
                Contact
              </ScrollLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sections */}
      <Home />
      <About />
      <Features />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
