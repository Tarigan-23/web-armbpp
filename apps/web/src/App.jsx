import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Impor Halaman Publik
import HomePage from './pages/HomePage';
import TentangKamiPage from './pages/TentangKamiPage';
import PublicPengurusPage from './pages/PengurusPage';
import PublicProgramPage from './pages/ProgramPage';
import PublicBeritaPage from './pages/BeritaPage';
import PublicGaleriPage from './pages/GaleriPage';
import DonasiPage from './pages/DonasiPage';
import KeuanganPage from './pages/KeuanganPage';
import GabungPage from './pages/GabungPage';

// Impor Layout & Komponen Global
import Footer from './components/Footer';

// Impor Layout & Halaman Admin (ngurus-aron)
import DashboardLayout from './pages/ngurus-aron/DashboardLayout';
import LoginPage from './pages/ngurus-aron/login/LoginPage';
import BerandaPage from './pages/ngurus-aron/beranda/BerandaPage';
import AdminBeritaPage from './pages/ngurus-aron/berita/BeritaPage';
import AdminGaleriPage from './pages/ngurus-aron/galeri/GaleriPage';
import KeuanganAdminPage from './pages/ngurus-aron/keuangan/KeuanganAdminPage';
import AnggotaPage from './pages/ngurus-aron/anggota/AnggotaPage';
import AdminDonasiPage from './pages/ngurus-aron/donasi/DonasiPage';
import AdminProgramPage from './pages/ngurus-aron/program/ProgramPage';
import AdminPengurusPage from './pages/ngurus-aron/struktur-organisasi/PengurusPage';
import AnggotaBaruPage from './pages/ngurus-aron/new-member/AnggotaBaruPage';
import TentangPage from './pages/ngurus-aron/tentang/TentangPage';
import YoutubeAdminPage from './pages/ngurus-aron/youtube/YoutubePage';
import SambutanPage from './pages/ngurus-aron/sambutan/SambutanPage';
import SponsorPage from './pages/ngurus-aron/sponsor/SponsorPage';
import SecretariatAdminPage from './pages/ngurus-aron/secretariat/SecretariatPage';

// Layout Publik khusus yang membungkus Navbar/Footer secara otomatis
function PublicLayout() {
    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased flex flex-col justify-between">
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <Router>
            <Routes>
                {/* Rute Website Publik dengan Footer Otomatis di Setiap Halaman */}
                <Route element={<PublicLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tentang-kami" element={<TentangKamiPage />} />
                    <Route path="/pengurus" element={<PublicPengurusPage />} />
                    <Route path="/program" element={<PublicProgramPage />} />
                    <Route path="/berita" element={<PublicBeritaPage />} />
                    <Route path="/galeri" element={<PublicGaleriPage />} />
                    <Route path="/donasi" element={<DonasiPage />} />
                    <Route path="/keuangan" element={<KeuanganPage />} />
                    <Route path="/gabung" element={<GabungPage />} />
                </Route>

                {/* Halaman Login Admin */}
                <Route path="/ngurus-aron/login" element={<LoginPage />} />

                {/* Panel Admin dengan Layout Terpusat (Tanpa Footer Publik) */}
                <Route path="/ngurus-aron" element={<DashboardLayout />}>
                    <Route path="beranda" element={<BerandaPage />} />
                    <Route path="berita" element={<AdminBeritaPage />} />
                    <Route path="galeri" element={<AdminGaleriPage />} />
                    <Route path="keuangan" element={<KeuanganAdminPage />} />
                    <Route path="anggota" element={<AnggotaPage />} />
                    <Route path="donasi" element={<AdminDonasiPage />} />
                    <Route path="program" element={<AdminProgramPage />} />
                    <Route path="struktur-organisasi" element={<AdminPengurusPage />} />
                    <Route path="new-member" element={<AnggotaBaruPage />} />
                    <Route path="tentang" element={<TentangPage />} />
                    <Route path="youtube" element={<YoutubeAdminPage />} />
                    <Route path="sambutan" element={<SambutanPage />} />
                    <Route path="sponsor" element={<SponsorPage />} />
                    <Route path="secretariat" element={<SecretariatAdminPage />} />
                </Route>

                {/* Fallback jika rute tidak ditemukan */}
                <Route path="*" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;