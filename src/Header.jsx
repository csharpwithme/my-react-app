import { Container, Button } from "react-bootstrap";

function Header() {
  return (
    <div className="bg-light p-5 rounded-lg m-3">
      <Container className="text-center">
        <h1 className="display-4 text-primary">Welcome to My React App</h1>
        <p className="lead">
          A modern, responsive website built with React + Bootstrap
        </p>
        <Button variant="success" size="lg" className="mt-3">
          Get Started
        </Button>
      </Container>
    </div>
  );
}

export default Header;
