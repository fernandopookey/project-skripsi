import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const TataIbadah = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading">
                <p>
                  Tata Ibadah <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="renungan-container">
          <Row className="renungan-content">
            <Col>
              <h4>Tata Ibadah</h4>
            </Col>
          </Row>
          <Row className="renungan-row">
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Tata Ibadah Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                  tergoncangkan, marilah kita mengucap syukur dan beribadah
                  kepada Allah menurut cara yang berkenan kepada-Nya, dengan
                  hormat dan takut."
                </p>
                <button type="submit">Unduh Tata Ibadah</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Tata Ibadah Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                  tergoncangkan, marilah kita mengucap syukur dan beribadah
                  kepada Allah menurut cara yang berkenan kepada-Nya, dengan
                  hormat dan takut."
                </p>
                <button type="submit">Unduh Tata Ibadah</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Tata Ibadah Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                  tergoncangkan, marilah kita mengucap syukur dan beribadah
                  kepada Allah menurut cara yang berkenan kepada-Nya, dengan
                  hormat dan takut."
                </p>
                <button type="submit">Unduh Tata Ibadah</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Tata Ibadah Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                  tergoncangkan, marilah kita mengucap syukur dan beribadah
                  kepada Allah menurut cara yang berkenan kepada-Nya, dengan
                  hormat dan takut."
                </p>
                <button type="submit">Unduh Tata Ibadah</button>
              </div>
            </Col>
            <Col className="columns data-columns" lg={4} md={6}>
              <div className="renungan-data">
                <h5 className="renungan-title">
                  Tata Ibadah Minggu 5 Februari 2023
                </h5>
                <p className="renungan-desc">
                  Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                  tergoncangkan, marilah kita mengucap syukur dan beribadah
                  kepada Allah menurut cara yang berkenan kepada-Nya, dengan
                  hormat dan takut."
                </p>
                <button type="submit">Unduh Tata Ibadah</button>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default TataIbadah;
