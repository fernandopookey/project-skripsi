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
import Artikel from "./pages/Atikel";
import Pengumuman from "./pages/Pengumuman";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wartajemaat" element={<WartaJemaat />} />
        <Route path="/jadwalibadah" element={<JadwalIbadah />} />
        <Route path="/tataibadah" element={<TataIbadah />} />
        <Route path="/renungan" element={<Renungan />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/pengumuman" element={<Pengumuman />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
