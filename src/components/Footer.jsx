import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../style/main.scss";
import Map from "./map1.png";
import {
  AiFillTwitterCircle,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-3 pb-4 main-footer-content">
      <Container className="pt-3 align-item-center">
        <Row>
          <Col className="columns">
            <div className="img-content">
              <img src={Map} alt="" width="200px" height="100px" />
              <div className="contact-content">
                <h5>Kontak</h5>
                <p>085254143531 Fernando</p>
              </div>
            </div>
          </Col>
          <Col className="columns alamat-home">
            <h5>Alamat</h5>
            <p>
              Jl. Hasanudin KM. 04 Kumpulrejo, Kec. Argomulyo Kota Salatiga,
              Jawa Tengah
            </p>
            <h5>Email</h5>
            <p>nandopookey@gmail.com</p>
          </Col>
          <Col className="columns rekening-home">
            <h5>No Rekening</h5>
            <p>a.n GKJ Salib Putih Salatiga 5438690836 BNI</p>
            <p>a.n GKJ Salib Putih Salatiga 5237478857 BRI</p>
          </Col>
          <Col className="columns sosmed-home">
            <h5>Sosial Media</h5>
            <div className="sosmed-home-content">
              <NavLink
                to="https://www.facebook.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook className="footer-icon-home" size={25} />
              </NavLink>
              <NavLink
                to="https://www.facebook.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram className="footer-icon-home" size={25} />
              </NavLink>
              <NavLink
                to="https://www.facebook.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle className="footer-icon-home" size={25} />
              </NavLink>
              <NavLink
                to="https://www.facebook.com/"
                target="blank"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube className="footer-icon-home" size={25} />
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="end-footer">
        <Container>
          <Row>
            <div className="end-footer-content">
              <p>Copyright © 2022 GKJ Salib Putih</p>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
