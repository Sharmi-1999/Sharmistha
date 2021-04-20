import React from "react";
import "./about.style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Procfile from "../../assets/img/myimg/ten.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function About() {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ml-2">
                <Image
                  className="procfile justify-content-end"
                  src={Procfile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded p-5">
                I am Sharmistha Mandal,currently pursuing B.tech in Information
                Technology department at Jalpaiguri Govt. Engineering
                College,Jalpaiguri.
                <br />
                <br />I love learning about new technologies, what problems are
                they solving and How can I use them to build better and scalable
                products.
              </Row>
              <Row className="d-flex justify-content-center flex-wrap pt-3">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://drive.google.com/drive/u/0/folders/1hUUTnCZJx63x1leVh4bNdteHNcOTkQ-w"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/Sharmi-1999"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/sharmistha-mandal-636744194/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
