import { Container } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <Container>
        <div className="mb-2">
          <a href="#" className="text-light mx-2"><FaFacebook size={24} /></a>
          <a href="#" className="text-light mx-2"><FaTwitter size={24} /></a>
          <a href="#" className="text-light mx-2"><FaInstagram size={24} /></a>
        </div>
        <p className="mb-0">
          © {new Date().getFullYear()} My React App. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
