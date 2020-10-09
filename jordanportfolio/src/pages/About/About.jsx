import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Profile from "../../assets/img/profile/fun.jpg";
import "./About.css";

export default function About() {
  return (
    <div id="about">
      <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
      <Container>
        <Row>
          <Col md={6}>
            <Image
              className="profile justify-content-end"
              alt="profile"
              src={Profile}
              thumbnail
              fluid
            />
          </Col>
          <Col md={6}>
            <div className="my-details">
              <ul style={{ listStyle: "none" }}>
                <li className="contact-item">
                  <i className="fa fa-phone-square" aria-hidden="true"></i>
                  <span className="ml-2">801-660-0033</span>
                </li>
                <li className="contact-item">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  <span className="ml-2">joneal6694@gmail.com</span>
                </li>
                <li className="contact-item">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span className="ml-2">Salt Lake City, UT</span>
                </li>
              </ul>
            </div>

            <div className="my-details">
              <p style={{ width: "75%", margin: "auto"}}>
                I am a recent graduate of the University of Utah's Full Stack
                Developer Boot Camp. I am adept at engineering full-scale web
                applications from front to back. I have a passion for learning
                new technologies and working with dedicated teams to build
                robust applications.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
