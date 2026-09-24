import React from 'react';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const LOGO = 'https://images.hostinger.com/0e41aec9-079a-4688-babb-0ef16efdf2ce.png';

export default function Footer() {
    return (
        <footer className="bg-karo-black text-karo-ivory border-t border-karo-gold/20 pt-16 pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Kolom 1: Logo, Deskripsi & Sosial Media */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src={LOGO} alt="Logo" className="h-12 w-12 rounded-full border border-karo-gold bg-white object-cover" />
                            <h4 className="font-display text-lg font-bold text-karo-gold">Aron Rudang Mayang</h4>
                        </div>
                        <p className="text-xs text-karo-ivory/70 leading-relaxed">
                            Wadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan.
                        </p>

                        {/* Tombol Ikon Sosial Media */}
                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://www.facebook.com/share/1DzmdFwvCo/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-karo-gold/20 bg-karo-ivory/[0.06] text-karo-ivory hover:border-karo-gold hover:bg-karo-gold hover:text-karo-black transition-all shadow-sm"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5 fill-current" />
                            </a>

                            <a
                                href="https://www.instagram.com/aronrudangmayang/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-karo-gold/20 bg-karo-ivory/[0.06] text-karo-ivory hover:border-karo-gold hover:bg-karo-gold hover:text-karo-black transition-all shadow-sm"
                                aria-label="Instagram"
                            >
                                <Instagram className="h-5 w-5" />
                            </a>

                            <a
                                href="https://www.youtube.com/@RUDANGMAYANGBALIKPAPAN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-karo-gold/20 bg-karo-ivory/[0.06] text-karo-ivory hover:border-karo-gold hover:bg-karo-gold hover:text-karo-black transition-all shadow-sm"
                                aria-label="YouTube"
                            >
                                <Youtube className="h-5 w-5" />
                            </a>

                        </div>
                    </div>

                    {/* Kolom 2: Navigasi Utama */}
                    <div>
                        <h5 className="font-display text-sm font-bold uppercase tracking-widest text-karo-gold mb-4">Navigasi Utama</h5>
                        <ul className="space-y-2 text-xs text-karo-ivory/80">
                            <li><a href="/" className="hover:text-karo-gold transition-colors">Beranda</a></li>
                            <li><a href="/tentang-kami" className="hover:text-karo-gold transition-colors">Tentang Kami & Sejarah</a></li>
                            <li><a href="/pengurus" className="hover:text-karo-gold transition-colors">Struktur Pengurus</a></li>
                            <li><a href="/program" className="hover:text-karo-gold transition-colors">Program Kerja</a></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Informasi & Publik */}
                    <div>
                        <h5 className="font-display text-sm font-bold uppercase tracking-widest text-karo-gold mb-4">Informasi & Publik</h5>
                        <ul className="space-y-2 text-xs text-karo-ivory/80">
                            <li><a href="/berita" className="hover:text-karo-gold transition-colors">Berita & Agenda</a></li>
                            <li><a href="/galeri" className="hover:text-karo-gold transition-colors">Galeri Dokumentasi</a></li>
                            <li><a href="/keuangan" className="hover:text-karo-gold transition-colors">Laporan Keuangan & Kas</a></li>
                            <li><a href="/donasi" className="hover:text-karo-gold transition-colors">Donasi Komunitas</a></li>
                        </ul>
                    </div>

                    {/* Kolom 4: Sekretariat */}
                    <div>
                        <h5 className="font-display text-sm font-bold uppercase tracking-widest text-karo-gold mb-4">Sekretariat</h5>
                        <p className="text-xs text-karo-ivory/80 leading-relaxed">
                            Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111
                        </p>

                        {/* Email dengan Ikon Amplop & Teks Putih */}
                        <div className="flex items-center gap-2 text-xs text-white mt-3 font-semibold break-all">
                            <Mail className="h-4 w-4 shrink-0 text-karo-gold" />
                            <span>aronrudangmayangbalikpapan@gmail.com</span>
                        </div>

                        {/* Telepon dengan Ikon Telepon & Teks Putih */}
                        <div className="flex items-center gap-2 text-xs text-white mt-3 font-semibold">
                            <Phone className="h-4 w-4 shrink-0 text-karo-gold" />
                            <span>+62 813-6508-465</span>
                        </div>
                    </div>

                </div>

                {/* Hak Cipta */}
                <div className="mt-16 border-t border-karo-gold/20 pt-8 text-center text-xs text-karo-ivory/60">
                    <p>© {new Date().getFullYear()} Aron Rudang Mayang Balikpapan. Mejuah-juah man banta kerina!</p>
                </div>
            </div>
        </footer>
    );
}