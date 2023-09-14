import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const WartaJemaat = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-4 mb-4">
          <div className="body">
            <Row data-aos="fade-down" data-aos-delay="100">
              <Col className="page-heading">
                <p>
                  Warta Jemaat <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
            {/* Warta Jemaat */}
            <div className="row mt-4 mb-4 text-center">
              <div className="row">
                <h4>Warta Jemaat</h4>
              </div>
              <div className="row text-center mx-auto">
                <div className="col-lg-12">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Warta Jemaat</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Warta Minggu 10 September 2023</td>
                        <td>
                          <b>Unduh</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Warta Minggu 10 September 2023</td>
                        <td>
                          <b>Unduh</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Warta Minggu 10 September 2023</td>
                        <td>
                          <b>Unduh</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Warta Minggu 10 September 2023</td>
                        <td>
                          <b>Unduh</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Warta Minggu 10 September 2023</td>
                        <td>
                          <b>Unduh</b>
                        </td>
                      </tr>
                      <tr>
                        <td>Warta Minggu 10 September 2023</td>
                        <td>
                          <b>Unduh</b>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default WartaJemaat;
