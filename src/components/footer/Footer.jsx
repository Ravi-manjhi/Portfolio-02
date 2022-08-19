import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://in.linkedin.com/" target={"blank"}>
                <img
                  src={require("../../assets/img/nav-icon1.svg").default}
                  alt="social-1"
                />
              </a>
              <a href="https://facebook.com" target={"blank"}>
                <img
                  src={require("../../assets/img/nav-icon2.svg").default}
                  alt="social-2"
                />
              </a>
              <a href="https://instagram.com" target={"blank"}>
                <img
                  src={require("../../assets/img/nav-icon3.svg").default}
                  alt="social-2"
                />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
