import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

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
          <Row className="renungan-row d-flex justify-content-around">
            {artikel.map((artikel) => (
              <Card className="article-card" style={{ width: "18rem" }}>
                <Card.Img variant="top" className="mt-2" src={artikel.url} />
                <Card.Body>
                  <Card.Title>{artikel.judul}</Card.Title>
                  <Card.Text>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: artikel.deskripsi.substring(0, 100),
                      }}
                    ></p>
                  </Card.Text>
                  <Link
                    to={`/artikel/detail-artikel/${artikel.id}`}
                    className="btn btn-primary renungan-btn"
                  >
                    Lihat Selengkapnya
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Artikel;
