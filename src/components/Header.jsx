import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logogkj.png";

function NavScrollExample() {
  return (
    <Navbar className="main-navbar fixed-top" expand="lg">
      <Container className="navbar-navbar">
        <Navbar.Brand href="/" className="navbar-brand">
          <img src={Logo} alt="" style={{ width: "70px" }} />
          <h4 className="navbar-brand-text mt-3">GKJ Salib Putih</h4>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="navbar-toggle-mobile"
        />
        <Navbar.Collapse id="basic-navbar-nav all-nav-link">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/warta-jemaat" className="nav-link">
              Warta Jemaat
            </NavLink>
            <NavLink to="/jadwal-ibadah" className="nav-link">
              Jadwal Ibadah
            </NavLink>
            <NavLink to="/tata-ibadah" className="nav-link">
              Tata Ibadah
            </NavLink>
            <NavLink to="/renungan" className="nav-link">
              Renungan
            </NavLink>
            <NavDropdown title="Lainnya">
              <NavDropdown.Item href="/kegiatan" className="nav-link">
                Kegiatan
              </NavDropdown.Item>
              <NavDropdown.Item href="/profil" className="nav-link">
                Profil
              </NavDropdown.Item>
              <NavDropdown.Item href="/gallery" className="nav-link">
                Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="/artikel" className="nav-link">
                Artikel
              </NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
