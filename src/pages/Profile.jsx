import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Profile = () => {
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
          <div className="jadwal-content">
            <Container>
              <Row>
                <Col>
                  <h5>Sejarah GKJ Salib Putih</h5>
                  <p className="text-start">
                    Gereja Kristen Jawa (GKJ) Salib Putih (Jawa:
                    ꦒꦿꦺꦗꦱꦭꦶꦧ꧀ꦥꦸꦠꦶꦃꦱꦭꦠꦶꦒ, translit. Gréja Salib Putih Salatiga)
                    adalah bangunan gereja di bawah naungan sinode Gereja
                    Kristen Jawa yang terletak di Jalan Hasanudin km. 4 (Kota
                    Salatiga–Kopeng), Kelurahan Kumpulrejo, Kecamatan Argomulyo,
                    Kota Salatiga, Provinsi Jawa Tengah. Gereja tersebut
                    merupakan satu-satunya gereja di Kota Salatiga yang
                    menggunakan atap mansard. Keberadaannya menjadi salah satu
                    bukti fisik penyebaran agama Kristen di kawasan Kabupaten
                    Semarang dan Kota Salatiga. Hingga tahun 2020, kondisi
                    bangunannya terawat dengan baik serta difungsikan sebagai
                    tempat ibadah rutin umat Kristen di sekitar kawasan itu.
                    Pendirian GKJ Salib Putih maupun bangunan lain di kawasan
                    Agrowisata Salib Putih bermula dari komite pelayanan sosial
                    pimpinan Adolph Theodoor Jocobus van Emmerick dan Alice
                    Cornelia Cleverly yang mulai menempati kawasan itu pada 14
                    Mei 1902.
                  </p>
                </Col>
                <Col>
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
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Profile;
