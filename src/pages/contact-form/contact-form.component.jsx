import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.style.css";
import Flip from "react-reveal/Flip";

export default function Contact() {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center ab pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a
                href="mailto:sm2244@it.jgec.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flip left>
                  <Button variant="outline-danger" title="sm2244@it.jgec.ac.in">
                    <i className="fas fa-envelope-square"></i> Email Me
                  </Button>
                </Flip>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/sharmistha-mandal-636744194/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flip left>
                  <Button variant="outline-primary" title="Visit my LinkenIn">
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </Button>
                </Flip>
              </a>
            </div>

            <div className="m-2">
              <a
                href="https://github.com/Sharmi-1999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flip left>
                  <Button variant="outline-dark" title="My other projects">
                    <i className="fab fa-github-square"></i> GitHub
                  </Button>
                </Flip>
              </a>
            </div>
            <div className="m-2">
              <a
                href="https://www.instagram.com/sharmistha.___/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flip left>
                  <Button variant="outline-danger" title="Say hello on FB">
                    <i className="fab fa-instagram-square"></i> Instagram
                  </Button>
                </Flip>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
}
