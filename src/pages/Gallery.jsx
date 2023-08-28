import React from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gereja1 from "../img/gereja1.jpg";
import Gereja2 from "../img/gereja2.jpg";
import Gereja3 from "../img/gereja3.jpg";
import Gereja4 from "../img/gereja4.jpg";
import Gereja5 from "../img/gereja5.jpg";
import Gereja6 from "../img/gereja6.jpg";
import Gereja7 from "../img/gereja7.jpg";
import Gereja8 from "../img/gereja8.jpg";
import Gereja9 from "../img/gereja9.jpg";
import Gereja10 from "../img/gereja10.jpg";

const Gallery = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading">
                <p>
                  Gallery <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
          </div>
          <Row className="rows">
            <Tabs defaultActiveKey="induk" id="induk" className="mb-1" fill>
              <Tab eventKey="induk" title="Gereja Induk" className="mt-3 mb-4">
                <Row className="jadwal-home-row">
                  <div>
                    <img src={Gereja1} alt="" className="image-gallery" />
                    <img src={Gereja2} alt="" className="image-gallery" />
                    <img src={Gereja3} alt="" className="image-gallery" />
                    <img src={Gereja4} alt="" className="image-gallery" />
                    <img src={Gereja5} alt="" className="image-gallery" />
                    <img src={Gereja6} alt="" className="image-gallery" />
                    <img src={Gereja7} alt="" className="image-gallery" />
                    <img src={Gereja8} alt="" className="image-gallery" />
                    <img src={Gereja9} alt="" className="image-gallery" />
                    <img src={Gereja10} alt="" className="image-gallery" />
                  </div>
                </Row>
              </Tab>
              <Tab eventKey="kegiatan" title="Kegiatan" className="mt-3 mb-4">
                <Row className="jadwal-home-row">
                  <div>
                    <img src={Gereja1} alt="" className="image-gallery" />
                    <img src={Gereja3} alt="" className="image-gallery" />
                    <img src={Gereja5} alt="" className="image-gallery" />
                    <img src={Gereja7} alt="" className="image-gallery" />
                    <img src={Gereja9} alt="" className="image-gallery" />
                  </div>
                </Row>
              </Tab>
              <Tab eventKey="ibadah" title="Ibadah" className="mt-3 mb-4">
                <Row className="jadwal-home-row">
                  <Row className="jadwal-home-row">
                    <div>
                      <img src={Gereja2} alt="" className="image-gallery" />
                      <img src={Gereja4} alt="" className="image-gallery" />
                      <img src={Gereja6} alt="" className="image-gallery" />
                      <img src={Gereja8} alt="" className="image-gallery" />
                      <img src={Gereja10} alt="" className="image-gallery" />
                    </div>
                  </Row>
                </Row>
              </Tab>
            </Tabs>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
