import React from "react";
import { Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import Slider from "../components/Slider";
import Header from "../components/Header";
import "../style/main.scss";
import Footer from "../components/Footer";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Container className="mt-5 container-home">
        <div className="body">
          <Row>
            <Col className="slider-content">
              <Slider />
            </Col>
          </Row>
        </div>
      </Container>

      <hr className="border-line" style={{ color: "black" }} />

      {/* Video */}
      {/* https://www.youtube.com/watch?v=z1PWp8YdWEU */}
      {/* https://www.youtube.com/watch?v=MWIw8nXjAfQ&t=1845s */}
      <Container>
        <Row>
          <Col className="text-center">
            <h4>Kumpulan Video</h4>
            <p>
              Jika engkau telah berlari dengan orang berjalan kaki, dan engkau
              telah dilelahkan, bagaimanakah engkau hendak berpacu melawan kuda?
              Dan jika di negeri yang damai engkau tidak merasa tenteram, apakah
              yang akan engkau perbuat di hutan belukar sungai Yordan ?
            </p>
          </Col>
          <Row>
            <Col className="d-flex mx-auto justify-content-between home-video">
              <div>
                <iframe
                  width="330"
                  height="200"
                  src="https://www.youtube.com/embed/kMliJTsRVm4?si=_lw_PYul9hHPd9Yi"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  width="330"
                  height="200"
                  src="https://www.youtube.com/embed/MWIw8nXjAfQ?si=10SGq8kfBX3GwCrC"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <iframe
                  width="330"
                  height="200"
                  src="https://www.youtube.com/embed/jPMDaPihdjk?si=KzSGYUIUQSz6cE_f"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>

      <hr className="border-line" style={{ color: "black" }} />

      {/* Tata Ibadah */}
      <Container className="renungan-container">
        <Row className="renungan-content">
          <Col>
            <h4>Tata Ibadah</h4>
          </Col>
        </Row>
        <Row className="renungan-row">
          <Col
            className="columns data-columns"
            lg={4}
            md={6}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="renungan-data">
              <h5 className="renungan-title">
                Tata Ibadah Minggu 5 Februari 2023
              </h5>
              <p className="renungan-desc">
                Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                tergoncangkan, marilah kita mengucap syukur dan beribadah kepada
                Allah menurut cara yang berkenan kepada-Nya, dengan hormat dan
                takut."
              </p>
              <button type="submit">Unduh Tata Ibadah</button>
            </div>
          </Col>
          <Col
            className="columns data-columns"
            data-aos="fade-left"
            data-aos-delay="200"
            lg={4}
            md={6}
          >
            <div className="renungan-data">
              <h5 className="renungan-title">
                Tata Ibadah Minggu 5 Februari 2023
              </h5>
              <p className="renungan-desc">
                Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                tergoncangkan, marilah kita mengucap syukur dan beribadah kepada
                Allah menurut cara yang berkenan kepada-Nya, dengan hormat dan
                takut."
              </p>
              <button type="submit">Unduh Tata Ibadah</button>
            </div>
          </Col>
          <Col
            className="columns data-columns"
            data-aos="fade-right"
            data-aos-delay="300"
            lg={4}
            md={6}
          >
            <div className="renungan-data">
              <h5 className="renungan-title">
                Tata Ibadah Minggu 5 Februari 2023
              </h5>
              <p className="renungan-desc">
                Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                tergoncangkan, marilah kita mengucap syukur dan beribadah kepada
                Allah menurut cara yang berkenan kepada-Nya, dengan hormat dan
                takut."
              </p>
              <button type="submit">Unduh Tata Ibadah</button>
            </div>
          </Col>
          <Col
            className="columns data-columns"
            data-aos="fade-left"
            data-aos-delay="400"
            lg={4}
            md={6}
          >
            <div className="renungan-data">
              <h5 className="renungan-title">
                Tata Ibadah Minggu 5 Februari 2023
              </h5>
              <p className="renungan-desc">
                Ibrani 12:28, "Jadi, karena kita menerima kerajaan yang tidak
                tergoncangkan, marilah kita mengucap syukur dan beribadah kepada
                Allah menurut cara yang berkenan kepada-Nya, dengan hormat dan
                takut."
              </p>
              <button type="submit">Unduh Tata Ibadah</button>
            </div>
          </Col>
        </Row>
        <Row className="text-center" data-aos="fade-down">
          <div className="btn-tata-home">
            <NavLink to="/tataibadah">
              <button className="button-home-tata-ibadah">
                Lihat Tata Ibadah Lainnya
              </button>
            </NavLink>
          </div>
        </Row>
      </Container>

      <hr className="border-line" style={{ color: "black" }} />

      {/* Warta Jemaat */}
      <Container data-aos="zoom-in-down" data-aos-delay="500">
        <Row>
          <Col className="text-center">
            <h4>Warta GKJ Salib Putih</h4>
          </Col>
        </Row>
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
        <Row className="text-center mt-4" data-aos="fade-down">
          <NavLink to="/tataibadah">
            <Link to="/warta-jemaat" className="btn btn-primary">
              Lihat Warta Lainnya
            </Link>
          </NavLink>
        </Row>
      </Container>

      <hr className="border-line" style={{ color: "black" }} />

      <Footer />
    </div>
  );
};

export default Home;
