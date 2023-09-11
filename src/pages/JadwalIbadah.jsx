import React, { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const JadwalIbadah = () => {
  const [jadwalIbadah, setJadwalIbadah] = useState([]);

  useEffect(() => {
    getJadwalIbadah();
  }, []);

  const getJadwalIbadah = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/jadwalibadah`
    );
    setJadwalIbadah(response.data);
  };

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
                        <th>Hari/Tanggal</th>
                        <th>Jam</th>
                        <th>Tempat</th>
                        <th>Deskripsi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jadwalIbadah.map((jadwalIbadah, index) => (
                        <tr key={jadwalIbadah.id}>
                          <td>{index + 1}</td>
                          <td>{jadwalIbadah.date}</td>
                          <td>{jadwalIbadah.time}</td>
                          <td>{jadwalIbadah.place}</td>
                          <td
                            dangerouslySetInnerHTML={{
                              __html: jadwalIbadah.description,
                            }}
                          ></td>
                        </tr>
                      ))}
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
