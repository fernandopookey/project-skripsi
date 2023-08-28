import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Kegiatan = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading">
                <p>
                  Kegiatan <br /> GKJ Salib Putih
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
                        <th>Kegiatan</th>
                        <th>Waktu</th>
                        <th>Keterangan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Usda I</td>
                        <td>Sabtu, 11 Maret 2023</td>
                        <td>Usaha Dana</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Usda II</td>
                        <td>Jumat, 10 Maret 2023</td>
                        <td>Usaha Dana II</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Usda III</td>
                        <td>Kamis, 11 Maret 2023</td>
                        <td>Usaha Dana III</td>
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

export default Kegiatan;
