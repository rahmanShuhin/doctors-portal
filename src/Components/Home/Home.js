import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Mask_Group_1 from "../../images/Mask_Group_1.png";
import NavTop from "../NavTop/NavTop";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <NavTop></NavTop>
      <Container>
        <Row>
          <Col sm={6} className="d-flex justify-content-center align-items-center">
            <div className="px-md-2  my-3">
              <h2>Your New Smile Starts Here</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, corporis aperiam! Tenetur dicta possimus error pariatur iure in quasi tempore? Labore explicabo quo magni ducimus ea. Aliquam velit itaque praesentium.</p>
              <a className="btn btn-main" href="/appointment">GET APPOINTMENT</a>
            </div>
          </Col>
          <Col sm={6}>
            <div className="p-5">
              <img src={Mask_Group_1} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
        <Row className="px-md-5">
          <Col sm={4}>
            <Card className="mb-2">
              <Card.Body>
                <Row>
                  <Col className="m-auto"><FontAwesomeIcon icon={faClock} className="fa-3x" /></Col>
                  <Col xs={8}>
                    <h5>Opening Hours</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="mb-2">
              <Card.Body>
                <Row>
                  <Col className="m-auto"><FontAwesomeIcon icon={faClock} className="fa-3x" /></Col>
                  <Col xs={8}>
                    <h5>Opening Hours</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card className="mb-2">
              <Card.Body>
                <Row>
                  <Col className="m-auto"><FontAwesomeIcon icon={faClock} className="fa-3x" /></Col>
                  <Col xs={8}>
                    <h5>Opening Hours</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;