import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DetailArtikel = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getArtikelById();
  }, []);

  const getArtikelById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/artikel/${id}`
    );
    setJudul(response.data.judul);
    setDeskripsi(response.data.deskripsi);
  };

  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading" lg={12}>
                <p>{judul}</p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="renungan-container">
          <Row className="renungan-content">
            <Col className="text-start">
              <span
                className="text-left"
                dangerouslySetInnerHTML={{ __html: deskripsi }}
              ></span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/artikel" className="btn btn-primary btn-block">
                Kembali
              </Link>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default DetailArtikel;
