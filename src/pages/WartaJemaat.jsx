import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import PDF from "./tes.pdf";

const WartaJemaat = () => {
  const [wartaJemaat, setWartaJemaat] = useState([]);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");

  useEffect(() => {
    getWartaJemaat();
  }, []);

  const getWartaJemaat = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/wartajemaat`
    );
    setWartaJemaat(response.data);
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
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th scope="col">Warta Jemaat</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {wartaJemaat.map((wartaJemaat) => (
                        <tr key={wartaJemaat.id}>
                          <td>{wartaJemaat.name}</td>
                          {/* <td>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: wartaJemaat.url,
                              }}
                            ></div>
                            <embed
                              src={PDF}
                              type="application/pdf"
                              height={800}
                              width={500}
                            />
                          </td> */}
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
                              to={`/warta-jemaat/warta-jemaat-pdf/${wartaJemaat.id}`}
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

export default WartaJemaat;
