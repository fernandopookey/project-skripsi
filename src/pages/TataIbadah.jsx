import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { NavLink } from "react-router-dom";

const TataIbadah = () => {
  const [tataIbadah, setTataIbadah] = useState([]);

  useEffect(() => {
    getTataIbadah();
  }, []);

  const getTataIbadah = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/tataibadah`
    );
    setTataIbadah(response.data);
  };

  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-4 mb-4">
          <div className="body">
            <Row data-aos="fade-down" data-aos-delay="100">
              <Col className="page-heading">
                <p>
                  Tata Ibadah <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
            {/* Warta Jemaat */}
            <div className="row mt-4 mb-4 text-center">
              <div className="row">
                <h4>Tata Ibadah</h4>
              </div>
              <div className="row text-center mx-auto">
                <div className="col-lg-12">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Warta Jemaat</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tataIbadah.map((tataIbadah) => (
                        <tr key={tataIbadah.id}>
                          <td>{tataIbadah.name}</td>
                          <td className="d-flex justify-content-center align-items-center">
                            {/* <Link to="/" className="btn btn-primary px-2">
                              Lihat
                            </Link> */}
                            {/* <NavLink
                              to={`/warta-jemaat/warta-jemaat-pdf/${wartaJemaat.id}`}
                              className="btn btn-primary"
                              retur
                            >
                              <b>Unduh</b>
                            </NavLink> */}
                            <NavLink
                              to={`/tata-ibadah/tata-ibadah-pdf/${tataIbadah.id}`}
                              target="_blank"
                            >
                              Unduh
                            </NavLink>
                          </td>
                        </tr>
                      ))}
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

export default TataIbadah;
