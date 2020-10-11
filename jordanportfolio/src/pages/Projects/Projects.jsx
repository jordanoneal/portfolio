import React from "react";
import "./Projects.css";
import { Accordion, Button, Card, Col, Row, Image } from "react-bootstrap";

// projects
import RehomeUtah from "../../assets/img/projects/Key.jpeg";
import SwellDwell from "../../assets/img/projects/swell.jpeg";
import wepost from "../../assets/img/projects/unity.jpeg";

// skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import jquery from "../../assets/img/skills/jquery.svg";
import mysql from "../../assets/img/skills/mysql.svg";
import mongodb from "../../assets/img/skills/mongodb.svg";
import passport from "../../assets/img/skills/passport.svg";
import googlemaps from "../../assets/img/skills/google-maps-2020-icon.svg";

export default function Projects() {
  return (
    <div id="projects">
      <div className="project-container">
        <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>{" "}
        <Row>
          {/* Cole Tanner Real Estate */}

          <Col md={3}>
            <Accordion>
              <Card style={{ width: "18rem" }}>
                <Card.Title>Cole Tanner Real Estate</Card.Title>

                <Card.Img variant="top" src={RehomeUtah}></Card.Img>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="p-2 text-center accordian-main"
                >
                  PROJECT DETAILS
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0" className="text-left">
                  <Card.Body>
                    <strong>Description:</strong> Website for simplifying home
                    selling by creating a customizable service and marketing
                    plan.
                    <hr />
                    <strong>Tech used:</strong>
                    <ul>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_TYPESCRIPT}
                            alt="TypeScript"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          TypeScript
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_REACT}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          React
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={mongodb}
                            alt="mongoDB"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          mongoDB
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_EXPRESS}
                            alt="express"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Express
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_NODE_JS}
                            alt="node"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Node
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={passport}
                            alt="node"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Passport
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_REACT_ROUTER}
                            alt="node"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          React Router
                        </span>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>

          {/* SWELL DWELL */}

          <Col md={3}>
            <Accordion>
              <Card style={{ width: "18rem" }}>
                <Card.Title>Swell Dwell</Card.Title>

                <Card.Img variant="top" src={SwellDwell}></Card.Img>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="p-2 text-center accordian-main"
                >
                  PROJECT DETAILS
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0" className="text-left">
                  <Card.Body>
                    <strong>Description:</strong> Website that pulls marine
                    weather data for water sports to determine if conditions are
                    ideal.
                    <hr />
                    <strong>Tech used:</strong>
                    <ul>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_JAVASCRIPT}
                            alt="HTML 5"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          JavaScript
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_HTML5}
                            alt="HTML 5"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          HTML5
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_CSS3}
                            alt="CSS 3"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          CSS3
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_BOOTSTRAP}
                            alt="CSS 3"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          Bootstrap
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={jquery}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          jQuery
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={googlemaps}
                            alt="Github API"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Google Maps API
                        </span>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>

          {/* Wepost */}

          <Col md={3}>
            <Accordion>
              <Card style={{ width: "18rem" }}>
                <Card.Title>wēpost</Card.Title>

                <Card.Img variant="top" src={wepost}></Card.Img>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  className="p-2 text-center accordian-main"
                >
                  PROJECT DETAILS
                </Accordion.Toggle>

                <Accordion.Collapse eventKey="0" className="text-left">
                  <Card.Body>
                    <strong>Description:</strong> App that records incidents of
                    police misconduct. We employ a truth system of user votes to
                    give posts a "Truth Score".
                    <hr />
                    <strong>Tech used:</strong>
                    <ul>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_JAVASCRIPT}
                            alt="JavaScript"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          JavaScript
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_HTML5}
                            alt="HTML 5"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          HTML5
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_CSS3}
                            alt="CSS 3"
                            rounded
                            className="image-style m-1"
                          ></Image>{" "}
                          CSS3
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_BOOTSTRAP}
                            alt="React"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Bootstrap
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={jquery}
                            alt="jQuery"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          jQuery
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_NODE_JS}
                            alt="Node"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Node
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={L_EXPRESS}
                            alt="Express"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Express
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={mysql}
                            alt="MySQL"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          MySQL
                        </span>
                      </li>
                      <li>
                        <span className="p-2">
                          <Image
                            src={passport}
                            alt="passport"
                            rounded
                            className="image-style1 m-1"
                          ></Image>{" "}
                          Passport
                        </span>
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </div>
    </div>
  );
}
