import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const getGallery = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/gallery`
    );
    setGallery(response.data);
  };

  useEffect(() => {
    getGallery();
  }, []);

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
            <Row className="jadwal-home-row">
              <div>
                {gallery.map((gallery) => (
                  <img src={gallery.url} alt="" className="image-gallery" />
                ))}
              </div>
            </Row>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Gallery;
