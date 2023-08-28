import React from "react";
import { Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import Slider from "../components/Slider";
import Header from "../components/Header";
import "../style/main.scss";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
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

      {/* Jadwal Ibadah */}
      <Container data-aos="fade-up" data-aos-delay="500">
        <Row className="rows">
          <Tabs defaultActiveKey="induk" id="induk" className="mb-1" fill>
            <Tab eventKey="induk" title="Gereja Induk" className="mt-3 mb-4">
              <Row className="jadwal-home-row">
                <Row className="jadwal-home-row">
                  <Table className="text-center">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Tempat</th>
                        <th>Waktu</th>
                        <th>Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Gereja Induk</td>
                        <td>07.00 WIB</td>
                        <td>Bahasa Jawa</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Gereja Induk</td>
                        <td>09.00 WIB</td>
                        <td>Bahasa Indonesia</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Pepntahan Pandanan</td>
                        <td>08.00 WIB</td>
                        <td>Bahasa Indonesia</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Pepntahan Warak</td>
                        <td>08.00 WIB</td>
                        <td>Bahasa Indonesia</td>
                      </tr>
                    </tbody>
                  </Table>
                  <Row className="text-center" data-aos="fade-down">
                    <div className="btn-tata-home">
                      <NavLink to="/tataibadah">
                        <button className="button-home-tata-ibadah">
                          Lihat Jadwal Ibadah Lainnya
                        </button>
                      </NavLink>
                    </div>
                  </Row>
                </Row>
              </Row>
            </Tab>
            <Tab
              eventKey="pandanan"
              title="Pepanthan Pandanan"
              className="mt-3 mb-4"
            >
              <Row>
                <Table className="text-center">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Tempat</th>
                      <th>Waktu</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gereja Induk</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gereja Induk</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pepntahan Pandanan</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pepntahan Warak</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pepntahan Tetep</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Wilayah Kalibeji</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td colSpan={1}>Unit PW</td>
                      <td>09.00</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="text-center" data-aos="fade-down">
                  <div className="btn-tata-home">
                    <NavLink to="/tataibadah">
                      <button className="button-home-tata-ibadah">
                        Lihat Jadwal Ibadah Lainnya
                      </button>
                    </NavLink>
                  </div>
                </Row>
              </Row>
            </Tab>
            <Tab eventKey="warak" title="Pepanthan Warak" className="mt-4 mb-4">
              <Row>
                <Table className="text-center">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Tempat</th>
                      <th>Waktu</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gereja Induk</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gereja Induk</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pepntahan Pandanan</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pepntahan Warak</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pepntahan Tetep</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Wilayah Kalibeji</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td colSpan={1}>Unit PW</td>
                      <td>09.00</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="text-center" data-aos="fade-down">
                  <div className="btn-tata-home">
                    <NavLink to="/tataibadah">
                      <button className="button-home-tata-ibadah">
                        Lihat Jadwal Ibadah Lainnya
                      </button>
                    </NavLink>
                  </div>
                </Row>
              </Row>
            </Tab>
            <Tab eventKey="tetep" title="Pepanthan Tetep" className="mt-4 mb-4">
              <Row>
                <Table className="text-center">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Tempat</th>
                      <th>Waktu</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gereja Induk</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gereja Induk</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pepntahan Pandanan</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pepntahan Warak</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pepntahan Tetep</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Wilayah Kalibeji</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td colSpan={1}>Unit PW</td>
                      <td>09.00</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="text-center" data-aos="fade-down">
                  <div className="btn-tata-home">
                    <NavLink to="/tataibadah">
                      <button className="button-home-tata-ibadah">
                        Lihat Jadwal Ibadah Lainnya
                      </button>
                    </NavLink>
                  </div>
                </Row>
              </Row>
            </Tab>
            <Tab
              eventKey="kalibeji"
              title="Wilayah Kalibeji"
              className="mt-4 mb-4"
            >
              <Row>
                <Table className="text-center">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Tempat</th>
                      <th>Waktu</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gereja Induk</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gereja Induk</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pepntahan Pandanan</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pepntahan Warak</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pepntahan Tetep</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Wilayah Kalibeji</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td colSpan={1}>Unit PW</td>
                      <td>09.00</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="text-center" data-aos="fade-down">
                  <div className="btn-tata-home">
                    <NavLink to="/tataibadah">
                      <button className="button-home-tata-ibadah">
                        Lihat Jadwal Ibadah Lainnya
                      </button>
                    </NavLink>
                  </div>
                </Row>
              </Row>
            </Tab>
            <Tab eventKey="pw" title="Unit PW" className="mt-4 mb-4">
              <Row>
                <Table className="text-center">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Tempat</th>
                      <th>Waktu</th>
                      <th>Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Gereja Induk</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Gereja Induk</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pepntahan Pandanan</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Pepntahan Warak</td>
                      <td>08.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Pepntahan Tetep</td>
                      <td>07.00 WIB</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Wilayah Kalibeji</td>
                      <td>09.00 WIB</td>
                      <td>Bahasa Indonesia</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td colSpan={1}>Unit PW</td>
                      <td>09.00</td>
                      <td>Bahasa Jawa</td>
                    </tr>
                  </tbody>
                </Table>
                <Row className="text-center" data-aos="fade-down">
                  <div className="btn-tata-home">
                    <NavLink to="/tataibadah">
                      <button className="button-home-tata-ibadah">
                        Lihat Jadwal Ibadah Lainnya
                      </button>
                    </NavLink>
                  </div>
                </Row>
              </Row>
            </Tab>
          </Tabs>
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
      </Container>

      <hr className="border-line" style={{ color: "black" }} />

      <Footer />
    </div>
  );
};

export default Home;
