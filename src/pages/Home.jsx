import React from "react";
import { Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import Slider from "../components/Slider";
import Header from "../components/Header";
import "../style/main.scss";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
  return (
    <>
      <div className="main">
        <Header />
        <div className="container body">
          <div className="col-12 mb-4">
            <div className="row">
              <Slider />
            </div>
          </div>
          <hr className="border-line" style={{ color: "black" }} />
          {/* Video */}
          <div className="row mt-4 text-center">
            <div className="col-12">
              <h4>Kumpulan Video</h4>
              <p>
                Sebab Aku ini mengetahui rancangan-rancangan apa yang ada
                pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan
                damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan
                kepadamu hari depan yang penuh harapan - Yeremia 29:11
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between home-video">
                <div className="">
                  <iframe
                    width="330"
                    height="200"
                    src="https://www.youtube.com/embed/kMliJTsRVm4?si=_lw_PYul9hHPd9Yi"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>Ibadah Minggu 10 September 2023</p>
                </div>
                <div>
                  <iframe
                    width="330"
                    height="200"
                    src="https://www.youtube.com/embed/kMliJTsRVm4?si=_lw_PYul9hHPd9Yi"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>Ibadah Minggu 3 September 2023</p>
                </div>
                <div>
                  <iframe
                    width="330"
                    height="200"
                    src="https://www.youtube.com/embed/kMliJTsRVm4?si=_lw_PYul9hHPd9Yi"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>Ibadah Minggu 27 Agustus 2023</p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <NavLink
                    target="_blank"
                    to="https://www.youtube.com/"
                    className="btn btn-primary btn-block"
                  >
                    Kunjungi Youtube Gkj Slib Putih
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-line" style={{ color: "black" }} />
          {/* Jadwal Ibadah */}
          <div className="row mt-4 mb-4 text-center mx-auto">
            <div className="row">
              <h4>Jadwal Ibadah</h4>
            </div>
            <div className="row text-center">
              <div className="col-lg-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Hari/Tanggal</th>
                      <th scope="col">Jam</th>
                      <th scope="col">Tempat</th>
                      <th scope="col">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-12">
                <NavLink
                  to="/jadwal-ibadah"
                  className="btn btn-primary btn-block"
                >
                  Lihat Lainnya
                </NavLink>
              </div>
            </div>
          </div>
          <hr className="border-line" style={{ color: "black" }} />
          {/* Warta Jemaat */}
          <div className="row mt-4 mb-4 text-center">
            <div className="row">
              <h4>Warta Jemaat</h4>
            </div>
            <div className="row text-center mx-auto">
              <div className="col-lg-12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Warta Jemaat</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Warta Minggu 10 September 2023</td>
                      <td>Unduh</td>
                    </tr>
                    <tr>
                      <td>Warta Minggu 10 September 2023</td>
                      <td>Unduh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-lg-12">
                <NavLink
                  to="/warta-jemaat"
                  className="btn btn-primary btn-block"
                >
                  Lihat Lainnya
                </NavLink>
              </div>
            </div>
          </div>
          <hr className="border-line" style={{ color: "black" }} />
          {/* Tata Ibadah */}
          <div className="row mt-4 text-center">
            <div className="col-12">
              <h4>Tata Ibadah</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between tata-ibadah-home">
                <div className="">
                  <div className="card mx-2">
                    <div className="card-body">
                      <b>Tata Ibadah Minggu 10 September 2023</b>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dignissimos possimus velit nesciunt corporis fugit
                        beatae quibusdam sapiente odit id.
                      </p>
                      <NavLink to="#" className="btn btn-primary">
                        Unduh
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-2">
                    <div className="card-body">
                      <b>Tata Ibadah Minggu 10 September 2023</b>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dignissimos possimus velit nesciunt corporis fugit
                        beatae quibusdam sapiente odit id.
                      </p>
                      <NavLink to="#" className="btn btn-primary">
                        Unduh
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card mx-2">
                    <div className="card-body">
                      <b>Tata Ibadah Minggu 10 September 2023</b>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias dignissimos possimus velit nesciunt corporis fugit
                        beatae quibusdam sapiente odit id.
                      </p>
                      <NavLink to="#" className="btn btn-primary">
                        Unduh
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-4">
                <div className="col-12 text-center">
                  <NavLink
                    to="/tata-ibadah"
                    className="btn btn-primary btn-block"
                  >
                    Lihat Lainnya
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
