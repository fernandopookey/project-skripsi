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
    <div className="main-footer">
      <Container className="main-content-footer">
        <Row>
          <Col className="content-map-footer" xs={12} md={6} lg={3}>
            <NavLink
              to="https://www.google.com/maps/place/Gereja+Kristen+Jawa+Salib+Putih/@-7.360398,110.4760591,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7a799f5d74cf7d:0xbbd68af219e61b35!8m2!3d-7.360398!4d110.478634!16s%2Fg%2F11fn79hm38?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Map}
                alt=""
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-image"
              />
            </NavLink>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Alamat</h5>
            <p>
              Jl. Hasanudin KM. 04 Kumpulrejo, Kec. Argomulyo Kota Salatiga,
              Jawa Tengah
            </p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Rekening</h5>
            <p>a.n GKJ Salib Putih 76845675487 BRI</p>
            <p>a.n GKJ Salib Putih 76576876876 BNI</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <h5>Sosial Media</h5>
            <div className="footer-sosmed-icon">
              <NavLink
                to="https://www.youtube.com/@gkjsalibputih"
                className="btn-primary"
                target="_blank"
              >
                <AiOutlineYoutube size={35} />
              </NavLink>
              <NavLink
                to="https://www.instagram.com/gkjsalibputih/"
                className="btn-primary"
                target="_blank"
              >
                <AiOutlineInstagram size={33} />
              </NavLink>
              <NavLink
                to="https://www.facebook.com/SalipPutih?locale=id_ID"
                className="btn-primary"
                target="_blank"
              >
                <AiOutlineFacebook size={32} />
              </NavLink>
              <NavLink
                to="https://twitter.com/"
                className="btn-primary"
                target="_blank"
              >
                <AiFillTwitterCircle size={33} />
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="last-footer">
        <p>Copyright © 2022 GKJ Salib Putih</p>
      </div>
    </div>
  );
};

export default Footer;
