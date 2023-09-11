import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const DetailRenungan = () => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getRenunganById();
  }, []);

  const getRenunganById = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/renungan/editrenungan/${id}`
    );
    setTitle(response.data.title);
    setDescription(response.data.description);
  };

  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading" lg={12}>
                <p>{title}</p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="renungan-container">
          <Row className="renungan-content">
            <Col className="text-start">
              <span
                className="text-left"
                dangerouslySetInnerHTML={{ __html: description }}
              ></span>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link to="/renungan" className="btn btn-primary btn-block">
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

export default DetailRenungan;
