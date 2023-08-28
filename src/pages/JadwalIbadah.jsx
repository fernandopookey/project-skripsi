import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const JadwalIbadah = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row data-aos="fade-down" data-aos-delay="100">
              <Col className="page-heading">
                <p>
                  Jadwal Ibadah <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
          </div>
          <div className="jadwal-content">
            <Container>
              <Row>
                <Col>
                  <Table>
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
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default JadwalIbadah;
