import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import WartaJemaat from "./pages/WartaJemaat";
import JadwalIbadah from "./pages/JadwalIbadah";
import Renungan from "./pages/Renungan";
import Profile from "./pages/Profile";
import Kegiatan from "./pages/Kegiatan";
import TataIbadah from "./pages/TataIbadah";
import Gallery from "./pages/Gallery";
import Pengumuman from "./pages/Pengumuman";
import DetailRenungan from "./pages/DetailRenungan";
import WartaJemaatDownload from "./pages/WartaJemaatDownload";
import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warta-jemaat" element={<WartaJemaat />} />
        {/* <Route path="/warta-jemaat/:id" element={<WartaJemaatDownload />} /> */}
        <Route
          path="/warta-jemaat/warta-jemaat-pdf/:id"
          element={<WartaJemaatDownload />}
        />
        <Route path="/jadwal-ibadah" element={<JadwalIbadah />} />
        <Route path="/tata-ibadah" element={<TataIbadah />} />
        <Route path="/renungan" element={<Renungan />} />
        <Route
          path="/renungan/detail-renungan/:id"
          element={<DetailRenungan />}
        />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/detail-artikel/:id" element={<DetailArtikel />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
