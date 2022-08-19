import React, { useState } from "react";
import "./contact.css";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormDetails(formInitialDetails);
  };
  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="align-item-center">
          <Col md="6">
            <img
              src={require("../../assets/img/contact-img.svg").default}
              alt="contact-img"
              width="100%"
            />
          </Col>
          <Col md="6">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm="6" className="px-1 my-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => {
                      setFormDetails({
                        ...formDetails,
                        firstName: e.target.value,
                      });
                    }}
                    required
                  />
                </Col>
                <Col sm="6" className="px-1 my-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => {
                      setFormDetails({
                        ...formDetails,
                        lastName: e.target.value,
                      });
                    }}
                    required
                  />
                </Col>
                <Col sm="6" className="px-1 my-1">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formDetails.email}
                    onChange={(e) => {
                      setFormDetails({
                        ...formDetails,
                        email: e.target.value,
                      });
                    }}
                    required
                  />
                </Col>
                <Col sm="6" className="px-1 my-2">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formDetails.phone}
                    onChange={(e) => {
                      setFormDetails({
                        ...formDetails,
                        phone: e.target.value,
                      });
                    }}
                    required
                  />
                </Col>
                <Col md="12" sm="12">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => {
                      setFormDetails({
                        ...formDetails,
                        message: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col sm="12" md="12">
                  <button>Send</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
