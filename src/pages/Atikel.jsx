import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gereja1 from "../img/gereja1.jpg";

const Atikel = () => {
  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading">
                <p>
                  Artikel <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="artikel-container">
          <Row className="artikel-content">
            <Col>
              <h4>Daftar Artikel</h4>
            </Col>
          </Row>
          <Row className="artikel-row">
            <Col>
              <div className="d-flex w-100">
                <Row gap="5">
                  <Col className="columns artikel-columns">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Gereja1} />
                      <Card.Body>
                        <Card.Title>
                          Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="columns artikel-columns">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Gereja1} />
                      <Card.Body>
                        <Card.Title>
                          Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="columns artikel-columns">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Gereja1} />
                      <Card.Body>
                        <Card.Title>
                          Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="columns artikel-columns">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Gereja1} />
                      <Card.Body>
                        <Card.Title>
                          Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="columns artikel-columns">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Gereja1} />
                      <Card.Body>
                        <Card.Title>
                          Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="columns artikel-columns">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Gereja1} />
                      <Card.Body>
                        <Card.Title>
                          Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="columns artikel-columns">
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={Gereja1} />
                      <Card.Body>
                        <Card.Title>
                          Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                        </Card.Title>
                        <Card.Text>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit.
                        </Card.Text>
                        <Button variant="primary">Selengkapnya</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md="auto" lg="2" className="artikel-lainnya">
              <Col className="columns artikel-columns">
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src={Gereja1} />
                  <Card.Body>
                    <Card.Title>
                      Usda Mingguan Berhasil Menghasilkan 10 Juta Rupiah
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                    <Button variant="primary">Selengkapnya</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
};

export default Atikel;
