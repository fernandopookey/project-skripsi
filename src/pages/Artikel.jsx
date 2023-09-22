import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Artikel = () => {
  const [artikel, setArtikel] = useState([]);
  const getArtikel = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/artikel`
    );
    setArtikel(response.data);
  };

  useEffect(() => {
    getArtikel();
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
                  Artikel <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="renungan-container mt-5">
          {/* <Row className="renungan-content">
            <Col>
              <h4>Renungan</h4>
            </Col>
          </Row> */}
          <Row className="renungan-row">
            {artikel.map((artikel) => (
              <Col className="columns data-columns" lg={4} md={6}>
                <div className="renungan-data">
                  <h5 className="renungan-title">{artikel.judul}</h5>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: artikel.deskripsi.substring(0, 100),
                    }}
                  ></p>
                  <Link
                    to={`/artikel/detail-artikel/${artikel.id}`}
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

export default Artikel;
