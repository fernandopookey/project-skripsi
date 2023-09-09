import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";

const Renungan = () => {
  const [renungan, setRenungan] = useState([]);

  useEffect(() => {
    getRenungan();
  }, []);

  const getRenungan = async () => {
    const response = await axios.get("http://localhost:3000/renungan");
    setRenungan(response.data);
  };

  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading">
                <p>
                  Renungan <br /> GKJ Salib Putih
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
            {renungan.map((renungan) => (
              <Col className="columns data-columns" lg={4} md={6}>
                <div className="renungan-data">
                  <h5 className="renungan-title">{renungan.title}</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: renungan.description.substring(0, 100),
                    }}
                  ></p>
                  <Link
                    to={`/renungan/detail-renungan/${renungan.id}`}
                    className="btn btn-primary renungan-btn"
                  >
                    Lihat Selengkapnya
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Renungan;
