import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_GET_API}/profile`
    );
    setProfile(response.data);
  };

  return (
    <>
      <div className="main">
        <Header />
        <Container className="mt-5">
          <div className="body">
            <Row>
              <Col className="page-heading">
                <p>
                  Profil <br /> GKJ Salib Putih
                </p>
              </Col>
            </Row>
          </div>
          <div className="jadwal-content d-flex">
            <Container>
              {profile.map((profile) => (
                <Row className="text-start">
                  <Col>
                    <h2>{profile.judul}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: profile.keterangan }}
                    ></div>
                  </Col>
                  {/* <Col>
                  <h5>Visi</h5>
                  <p className="text-start">
                    Terwujudnya jemaat yang memiliki kepribadian Kristen dengan
                    mengutamakan keharmonisan dan keterbukaan untuk membangun
                    kemandirian jemaat.
                  </p>
                  <h5>Misi</h5>
                  <p className="text-start">
                    <li>
                      Mewujudkan jemaat GKJ Pakem damai sejahtera lahir dan
                      batin berdasarkan terang Alkitab
                    </li>
                    <li>Mengembangkan tata ibadah yang kreatif dan dinamis</li>
                    <li>
                      Meningkatkan persekutuan jemaat melalui kegiatan non
                      ibadah minggu
                    </li>
                    <li>
                      Meningkatkan perhatian gereja terhadap jemaat yang
                      memerlukan perhatian khusus
                    </li>
                    <li>Merealisasikan regenerasi kepemimpinan gereja</li>
                    <li>
                      Mewujudkan GKJ Pakem menjadi gereja yang maju dan modern,
                      memiliki tatakelola yang baik dan didukung IT.
                    </li>
                    <li>
                      Revitalisasi, optimalisasi, dan peningkatan aset gereja
                      untuk mendukung pelayanan
                    </li>
                    <li>
                      Mewujudkan jemaat cinta budaya dan peduli keselamatan
                      lingkungan.
                    </li>
                    <li>
                      Mewujudkan jemaat yang tangguh dan sadar bencana yang
                      berkeadilan sosial serta peduli dan menjadi saluran berkat
                      bagi sesama.
                    </li>
                  </p>
                </Col> */}
                </Row>
              ))}
            </Container>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
