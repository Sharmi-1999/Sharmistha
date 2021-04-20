import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.style.css";

export default function Experience() {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center ab pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              ></Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">NIT Rourkela</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Research Intern
                    </strong>
                    <br />
                    <strong>Technology:</strong> Deep Learning, Python
                    <br />
                    <strong>Duration:</strong> April 2020 - September 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong> explored </strong> the topic "Neighborhood
                        based Collaborative Filtering in Recommender System" and
                        various deep learning models in the light of recommender
                        systems.
                      </li>
                      <li>
                        <strong>Worked &amp; contributed</strong> towards
                        drafting a research article which is now under review.
                      </li>
                      <li>
                        <strong>Contributed</strong> on Proposed Methodology
                        Part.
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              ></Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    RJ Infocom Pvt. Ltd.
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Software Engineer Intern
                    </strong>
                    <br />
                    <strong>Technology:</strong> HTML, CSS, JS, PHP, MySql
                    <br />
                    <strong>Duration:</strong> November 2020 - January 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong> working </strong> on fullstack Ecommerce stores
                        with Payment Gateway.
                      </li>
                      <li>
                        <strong>Performed</strong> CRUD operations on multiple
                        databases to load/ remove data according to the business
                        requirements.
                      </li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
}
