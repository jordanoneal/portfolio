import React from "react";
import "./Projects.css";

import { Accordion, Button, Card, Col, Row } from "react-bootstrap";

// projects
import RehomeUtah from "../../assets/img/projects/Key.jpeg"
import SwellDwell from "../../assets/img/projects/swell.jpeg"
import wepost from "../../assets/img/projects/wepost.jpeg"

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";

export default function Projects() {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>{" "}
      <Row>
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
                  selling by creating a customizable service and marketing plan.
                  <hr />
                  <strong>Tech used:</strong>
                  <ul>
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
                          src={L_GIT}
                          alt="Github API"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        GitHub API
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>

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
                          src={L_GIT}
                          alt="Github API"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        GitHub API
                      </span>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Col>

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
                          src={L_GIT}
                          alt="Github API"
                          rounded
                          className="image-style1 m-1"
                        ></Image>{" "}
                        GitHub API
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
  );
}
