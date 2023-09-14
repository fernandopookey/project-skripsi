import React, { useEffect, useState } from "react";
import Photos1 from "./slider1.jpg";
import Photos2 from "./slider2.jpg";
import Photos3 from "./slider4.jpg";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

const Slider = () => {
  const [slider, setSlider] = useState([]);
  const getSlider = async () => {
    const response = await axios.get(`${process.env.REACT_APP_GET_API}/slider`);
    setSlider(response.data);
  };

  useEffect(() => {
    getSlider();
  }, []);

  return (
    <div>
      <Container>
        <Row className="slider-content">
          <Carousel>
            {slider.map((slider) => (
              <Carousel.Item>
                <div className="image-content">
                  <img
                    className="d-block w-100"
                    src={slider.url}
                    height="400"
                    alt="First slide"
                  />
                  <Carousel.Caption className="slider-caption">
                    <div className="slider-title">
                      <h5>{slider.name}</h5>
                      {/* <h3>VISI</h3>
                      <p>
                        Pada tahun 2023, GKJ menjadi jemaat Kristus yang
                        mewartakan keselamatan secara visioner-antisipatif,
                        berintegritas pelayanan, mampu mengembangkan diri, sadar
                        gender, berwawasan kebangsaan dan ekologis, didasarkan
                        pada kecakapan berteologisecara kontekstual.
                      </p> */}
                    </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default Slider;
