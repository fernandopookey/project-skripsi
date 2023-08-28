import React from "react";
import Photos1 from "./slider1.jpg";
import Photos2 from "./slider2.jpg";
import Photos3 from "./slider3.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Container>
        <Row className="slider-content">
          <Carousel>
            <Carousel.Item>
              <div className="image-content">
                <img
                  className="d-block w-100"
                  src={Photos2}
                  height="400"
                  alt="First slide"
                />
                <Carousel.Caption className="slider-caption">
                  <div className="slider-title">
                    <h3>Visi</h3>
                    <p>
                      Pada tahun 2023, GKJ menjadi jemaat Kristus yang
                      mewartakan keselamatan secara visioner-antisipatif,
                      berintegritas pelayanan, mampu mengembangkan diri, sadar
                      gender, berwawasan kebangsaan dan ekologis, didasarkan
                      pada kecakapan berteologisecara kontekstual.
                    </p>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="image-content">
                <img
                  className="d-block w-100"
                  src={Photos2}
                  height="400"
                  alt="First slide"
                />
                <Carousel.Caption className="slider-caption">
                  <div className="slider-title">
                    <h3>Visi</h3>
                    <p>Merupakan operasionalisasi dari visi GKJ :</p>
                    <li>
                      Menjadi Gereja yang terus menerus diperbarui berdasar
                      firman Tuhan. Pembaruan itu antara lain terwujud dalam
                      upaya memupuk spiritualitas, memelihara penghayatan akan
                      kehadiran Allah dalam seantero kehidupan, serta memelihara
                      relasinya dengan Allah secara sungguh-sungguh.
                    </li>
                    <li>
                      Menjadi Gereja yang meneladan Yesus Kristus dalam seluruh
                      kehidupannya dengan cara hadir di tengah dunia sebagai
                      teladan kebenaran dan kekudusan.
                    </li>
                    <li>
                      Menjadi Gereja yang mewujudnyatakan keselamatan dalam
                      kehidupannya dan dalam keutuhan ciptaan, dengan memupuk
                      semangat ekumenis, peduli lingkungan, memperjuangkan
                      terwujudnya keadilan dan damai sejahtera bagi semua umat
                      manusia
                    </li>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
            {/* <Carousel.Item>
              <div className="image-content">
                <img
                  className="d-block w-100"
                  src={Photos2}
                  height="400"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </div>
            </Carousel.Item> */}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
