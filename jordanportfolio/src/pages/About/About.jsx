import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Profile from "../../assets/img/profile/fun.jpg";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <div className="about-section">
        <h1 className="pt-3 text-center pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image
                  className="profile justify-content-end"
                  alt="profile"
                  src={Profile}
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hello! I am <strong>&nbsp;Jordan O'Neal</strong>A recent
                graduate of the University of Utah's Full Stack Developer Boot
                Camp. I am adept at engineering full-scale web applications from
                front to back. I have a passion for learning new technologies
                and working with dedicated teams to build robust applications.
                <Col className="d-flex justify-content-center flex-wrap">
                  <div className="m-2">
                    <a
                      href="mailto:joneal6694@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline-danger"
                        title="joneal6694@gmail.com"
                      >
                        <i className="fa fa-envelope"></i> Email Me
                      </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a
                      href="https://www.linkedin.com/in/jordan-o-neal-385407120/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline-primary"
                        title="Visit my LinkenIn"
                      >
                        <i className="fa fa-linkedin-square"></i> LinkedIn
                      </Button>
                    </a>
                  </div>
                  <div className="m-2">
                    <a
                      href="https://github.com/jordanoneal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline-dark" title="My other projects">
                        <i className="fa fa-github-square"></i> GitHub
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
