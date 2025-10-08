import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <div
      className="text-center text-light d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x600/?technology')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
      }}
    >
      <Container>
        <h1 className="display-3 fw-bold">Build Amazing React Apps</h1>
        <p className="lead mb-4">Responsive, modern, and fully functional</p>
        <Button variant="success" size="lg">Get Started</Button>
      </Container>
    </div>
  );
}

export default Hero;
