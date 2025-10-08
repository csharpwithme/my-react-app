import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaMobileAlt, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

function Features() {
  return (
    <motion.div id="features" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Container className="mt-5">
        <h2 className="text-center text-secondary mb-4">Our Features</h2>
        <Row>
          <Col xs={12} md={4}>
            <Card className="mb-4 shadow text-center p-3">
              <FaMobileAlt size={50} className="mb-3 text-primary" />
              <Card.Body>
                <Card.Title>Mobile Friendly</Card.Title>
                <Card.Text>
                  Fully responsive layout for phones and tablets.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-4 shadow text-center p-3">
              <FaLaptopCode size={50} className="mb-3 text-primary" />
              <Card.Body>
                <Card.Title>Clean Code</Card.Title>
                <Card.Text>
                  React + Bootstrap for maintainable and reusable components.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-4 shadow text-center p-3">
              <FaRocket size={50} className="mb-3 text-primary" />
              <Card.Body>
                <Card.Title>Fast Performance</Card.Title>
                <Card.Text>
                  Optimized React app with Vite for blazing speed.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Features;
