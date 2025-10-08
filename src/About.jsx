import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      id="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container className="mt-5">
        <h2 className="text-center text-success mb-4">About Us</h2>
        <Card className="p-3 mt-4 shadow">
          <Card.Body>
            <Card.Title>About React App</Card.Title>
            <Card.Text>
              This app is fully responsive and built with React + Bootstrap. Smooth scrolling, animations, and a modern layout make it perfect for any project.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </motion.div>
  );
}

export default About;
