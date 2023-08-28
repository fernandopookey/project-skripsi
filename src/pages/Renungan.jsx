import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Renungan = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading">
                <p>
                  Renungan Harian <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="renungan-container">
          <Row className="renungan-content">
            <Col>
              <h4>Renungan</h4>
            </Col>
          </Row>
          <Row className="renungan-row">
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Renungan, Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Tema: Jadilah Garam dan Terang Dunia
                </p>
                <button type="submit">Unduh</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Renungan, Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Tema: Jadilah Garam dan Terang Dunia
                </p>
                <button type="submit">Unduh</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Renungan, Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Tema: Jadilah Garam dan Terang Dunia
                </p>
                <button type="submit">Unduh</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Renungan, Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Tema: Jadilah Garam dan Terang Dunia
                </p>
                <button type="submit">Unduh</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Renungan, Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Tema: Jadilah Garam dan Terang Dunia
                </p>
                <button type="submit">Unduh</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Renungan, Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Tema: Jadilah Garam dan Terang Dunia
                </p>
                <button type="submit">Unduh</button>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Renungan;
