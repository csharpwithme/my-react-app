import { Container, Button } from "react-bootstrap";
import Hero from "./Hero";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Container className="text-center mt-4 mb-5">
        <Button variant="success" size="lg">
          Get Started
        </Button>
      </Container>
    </motion.div>
  );
}

export default Home;
