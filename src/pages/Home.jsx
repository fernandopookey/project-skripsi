import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Table, Tabs } from "react-bootstrap";
import Slider from "../components/Slider";
import Header from "../components/Header";
import "../style/main.scss";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import axios from "axios";
// ..
AOS.init();

const Home = () => {
  const [youtubeLink, setYoutubeLink] = useState([]);
  const [jadwalIbadah, setJadwalIbadah] = useState([]);
  const [renungan, setRenungan] = useState([]);
  const [artikel, setArtikel] = useState([]);

  const getYoutubeLink = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/youtubelink`
    );
    setYoutubeLink(response.data);
  };

  useEffect(() => {
    getYoutubeLink();
  }, []);

  const getJadwalIbadah = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/jadwalibadah`
    );
    setJadwalIbadah(response.data);
  };

  useEffect(() => {
    getJadwalIbadah();
  }, []);

  useEffect(() => {
    getRenungan();
  }, []);

  const getRenungan = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/renungan`
    );
    setRenungan(response.data);
  };

  const getArtikel = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/artikel`
    );
    setArtikel(response.data);
  };

  useEffect(() => {
    getArtikel();
  }, []);

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
                {youtubeLink.map((youtubeLink) => (
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <iframe
                      width="330"
                      height="200"
                      src={youtubeLink.link}
                      title="YouTube video player"
                      // frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <p>{youtubeLink.title}</p>
                  </div>
                ))}
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
          <hr className="border-line" style={{ color: "black" }} />
          {/* Jadwal Ibadah */}
          <div className="row mt-4 mb-4 text-center mx-auto">
            <div className="row">
              <h4>Jadwal Ibadah</h4>
            </div>
            <div className="row text-center">
              <div className="col-lg-12">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Hari/Tanggal</th>
                      <th scope="col">Jam</th>
                      <th scope="col">Tempat</th>
                      <th scope="col">Keterangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jadwalIbadah.slice(0, 3).map((jadwalIbadah) => (
                      <tr key={jadwalIbadah.id}>
                        <td>{jadwalIbadah.date}</td>
                        <td>{jadwalIbadah.time}</td>
                        <td>{jadwalIbadah.place}</td>
                        <td
                          dangerouslySetInnerHTML={{
                            __html: jadwalIbadah.description,
                          }}
                        ></td>
                      </tr>
                    ))}
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
          {/* <div className="row mt-4 mb-4 text-center">
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
          </div> */}
          {/* <hr className="border-line" style={{ color: "black" }} /> */}
          {/* Renungan */}
          <div className="row mt-4 text-center">
            <div className="col-12">
              <h4>Renungan</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between tata-ibadah-home">
                {renungan.slice(0, 3).map((renungan) => (
                  <div className="">
                    <div className="card mx-2">
                      <div className="card-body">
                        <b>{renungan.title}</b>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: renungan.description.substring(0, 100),
                          }}
                        ></p>
                        <NavLink
                          to={`/renungan/detail-renungan/${renungan.id}`}
                          className="btn btn-primary"
                        >
                          Lihat Selengkapnya
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
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

          <hr className="border-line" style={{ color: "black" }} />
          {/* Artikel */}
          <div className="row mt-4 text-center">
            <div className="col-12">
              <h4>Artikel</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="d-flex justify-content-between tata-ibadah-home">
                {artikel.slice(0, 3).map((artikel) => (
                  <div className="">
                    <div className="card mx-2">
                      <div className="card-body">
                        <b>{artikel.judul}</b>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: artikel.deskripsi.substring(0, 100),
                          }}
                        ></p>
                        <NavLink
                          to={`/artikel/detail-artikel/${artikel.id}`}
                          className="btn btn-primary"
                        >
                          Lihat Selengkapnya
                        </NavLink>
                      </div>
                    </div>
                  </div>
                ))}
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
