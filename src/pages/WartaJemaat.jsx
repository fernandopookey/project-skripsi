import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WartaJemaat = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row data-aos="fade-down" data-aos-delay="100">
              <Col className="page-heading">
                <p>
                  Warta Jemaat <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
            <Row data-aos="fade-left" data-aos-delay="200">
              <div className="warta-content">
                <Col>
                  <h4>Unduh Warta Jemaat</h4>
                </Col>
              </div>
            </Row>
            <div data-aos="fade-right" data-aos-delay="300">
              <Row className="text-center warta-table-head">
                <Col>
                  <b>Warta Jemaat</b>
                </Col>
                <Col>
                  <b>Downloaddd</b>
                </Col>
              </Row>
              <div className="warta-data-table">
                <Row className="text-center">
                  <Col>Warta Jemaat</Col>
                  <Col>Unduh</Col>
                </Row>
                <Row className="text-center">
                  <Col>Warta Jemaat</Col>
                  <Col>Unduh</Col>
                </Row>
                <Row className="text-center">
                  <Col>Warta Jemaat</Col>
                  <Col>Unduh</Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default WartaJemaat;
