import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import Logo from "./logogkj.png";

const Header = () => {
  return (
    <Navbar className="main-navbar" expand="lg" fixed="top">
      <Container className="navbar-navbar">
        <div>
          <Navbar.Brand href="/" className="navbar-brand">
            <img src={Logo} alt="" style={{ width: "70px" }} />
            <h4>GKJ Salib Putih</h4>
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            // className="all-nav-link"
          />
          <Navbar.Collapse id="basic-navbar-nav all-nav-link">
            <Nav className="mx-auto">
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/wartajemaat">Warta Jemaat</Nav.Link>
              <Nav.Link href="/jadwalibadah">Jadwal Ibadah</Nav.Link>
              <Nav.Link href="/renungan">Renungan</Nav.Link> */}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/wartajemaat" className="nav-link">
                Warta Jemaat
              </NavLink>
              <NavLink to="/jadwalibadah" className="nav-link">
                Jadwal Ibadah
              </NavLink>
              <NavLink to="/tataibadah" className="nav-link">
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
                <NavDropdown.Item href="/pengumuman" className="nav-link">
                  Pengumuman
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Login</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
