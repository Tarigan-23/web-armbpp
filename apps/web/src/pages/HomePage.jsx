import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import CountUp from '@/components/CountUp';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { KaroStripe, SectionHeading } from '@/components/KaroPattern';
import Secretariat from '@/components/Secretariat';

import heroImage from '@/images/images.jpg';

import Sambutan from '@/components/Sambutan';
import SponsorSection from '@/components/Sponsor';
import YoutubeSection from '@/components/Youtube';
import Footer from '@/components/Footer';

// Impor Gambar Lokal dari folder public/
const LOGO = 'https://images.hostinger.com/0e41aec9-079a-4688-babb-0ef16efdf2ce.png';
const ULOS = 'https://horizons-cdn.hostinger.com/55b41510-490b-4ac6-bab9-9066fe7c3b3b/53da38407c88aeb0bcab741046de2708.png';
const IMG = {
    hero: heroImage,
};

function Hero() {
    const [stats, setStats] = useState({ membersCount: 250, programsCount: 15 });

    useEffect(() => {
        async function fetchCounts() {
            try {
                // Menghitung jumlah total data dari tabel members & programs di Supabase
                const { count: memberCount } = await supabase.from('members').select('*', { count: 'exact', head: true });
                const { count: programCount } = await supabase.from('programs').select('*', { count: 'exact', head: true });

                setStats({
                    membersCount: memberCount !== null && memberCount > 0 ? memberCount : 250,
                    programsCount: programCount !== null && programCount > 0 ? programCount : 15,
                });
            } catch (err) {
                console.error("Gagal memuat statistik:", err);
            }
        }
        fetchCounts();
    }, []);

    return (
        <section id="beranda" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-karo-black">
            <div className="absolute inset-0">
                <img src={IMG.hero} alt="Rumah adat Karo" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-karo-black/85 via-karo-maroon/45 to-karo-black" />
                <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay" style={{ backgroundImage: `url(${ULOS})`, backgroundSize: '420px auto' }} aria-hidden="true" />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-28 pt-36 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
                    <div className="mb-8 flex items-center gap-4">
                        <img src={LOGO} alt="Logo" className="h-20 w-20 rounded-full border-[3px] border-karo-gold bg-white object-cover shadow-xl sm:h-24 sm:w-24" />
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-karo-gold sm:text-sm">Mejuah-juah!</p>
                            <p className="mt-1 font-display text-sm font-semibold text-karo-ivory/90 sm:text-base">Aron Rudang Mayang · Balikpapan</p>
                        </div>
                    </div>
                    <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-karo-ivory sm:text-6xl lg:text-7xl">
                        Warisan Karo, <span className="text-karo-gold">Semangat Modern,</span> Satu Keluarga.
                    </h1>
                    <p className="mt-7 max-w-xl text-base leading-relaxed text-karo-ivory/80 sm:text-lg">
                        Aron Rudang Mayang Kota Balikpapan adalah wadah perhimpunan masyarakat Karo yang merawat budaya leluhur dan mempererat persaudaraan.
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                        {/* Tombol diarahkan ke halaman /gabung */}
                        <a href="/gabung" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-karo-gold px-8 py-3.5 text-sm font-semibold text-karo-black shadow-lg shadow-karo-gold/25 hover:bg-karo-goldwarm transition-all">
                            Bergabung Bersama Kami <ArrowRight className="h-4 w-4" />
                        </a>
                        <a href="/tentang-kami" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-karo-ivory/30 px-8 py-3.5 text-sm font-semibold text-karo-ivory hover:border-karo-gold hover:text-karo-gold transition-all">
                            Kenali Kami Lebih Dekat
                        </a>
                    </div>
                </motion.div>

                {/* Statistik Dinamis dari Supabase */}
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="mt-16 grid max-w-2xl grid-cols-3 gap-3 sm:gap-5">
                    {[
                        { value: stats.membersCount, suffix: '+', label: 'Anggota Aktif' },
                        { value: stats.programsCount, suffix: '+', label: 'Program Berjalan' },
                        { value: 14, suffix: '', label: 'Tahun Berkarya' },
                    ].map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-karo-ivory/15 bg-karo-ivory/[0.06] px-4 py-5 backdrop-blur-md sm:px-6">
                            <p className="font-display text-2xl font-bold text-karo-gold sm:text-4xl"><CountUp value={stat.value} suffix={stat.suffix} /></p>
                            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-karo-ivory/70 sm:text-xs">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10"><div className="h-2 w-full karo-ulos-band" /><KaroStripe height={22} /></div>
        </section>
    );
}

function Marquee() {
    const words = ['Mejuah-juah', 'Warisan Karo', 'Satu Keluarga', 'Budaya Leluhur', 'Solidaritas', 'Gotong Royong'];
    const row = [...words, ...words];
    return (
        <div className="relative overflow-hidden border-y border-karo-purple/40 bg-gradient-to-r from-karo-gold via-karo-goldwarm to-karo-gold py-3.5">
            <div className="animate-karo-marquee flex w-max items-center">
                {[0, 1].map((half) => (
                    <div key={half} className="flex items-center" aria-hidden={half === 1}>
                        {row.map((word, i) => (
                            <span key={`${half}-${i}`} className="flex items-center">
                                <span className="whitespace-nowrap px-6 font-display text-sm font-bold uppercase tracking-[0.28em] text-karo-black">{word}</span>
                                <span className="inline-block h-2 w-2 rotate-45 bg-karo-purple" />
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function HomePage() {
    const [news, setNews] = useState([]);
    const [agendas, setAgendas] = useState([]);

    useEffect(() => {
        fetchHomeData();
    }, []);

    const fetchHomeData = async () => {
        const { data: newsData } = await supabase.from('news').select('*').order('created_at', { ascending: false }).limit(3);
        const { data: agendaData } = await supabase.from('agendas').select('*').order('created_at', { ascending: false }).limit(3);

        if (newsData) setNews(newsData);
        if (agendaData) setAgendas(agendaData);
    };

    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased">
            <Helmet>
                <title>Aron Rudang Mayang Kota Balikpapan — Warisan Karo, Semangat Modern, Satu Keluarga</title>
            </Helmet>
            <Navbar />
            <main>
                <Hero />
                <Marquee />
                <Sambutan />

                {/* 3 Berita Terbaru */}
                <section className="py-24 bg-white">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <div className="flex justify-between items-end mb-12">
                                <SectionHeading align="left" eyebrow="Kabar Terbaru" title="Berita & Kegiatan Terkini" />
                                <a href="/berita" className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-karo-maroon hover:text-karo-red">
                                    Lihat Semua Berita <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </Reveal>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {news.map((item, i) => (
                                <Reveal key={item.id} delay={i * 0.08}>
                                    <article className="group overflow-hidden rounded-3xl border bg-white shadow-md hover:shadow-xl transition-all flex flex-col h-full">
                                        <img src={item.image_url} alt={item.title} className="aspect-[16/10] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="p-6 flex flex-col flex-1 justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-karo-red mb-2">
                                                    <span>{item.category}</span> • <span>{item.date}</span>
                                                </div>
                                                <h3 className="font-display text-lg font-bold text-karo-charcoal group-hover:text-karo-red transition-colors">{item.title}</h3>
                                                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{item.excerpt}</p>
                                            </div>
                                            <a href="/berita" className="mt-6 inline-flex items-center gap-1 text-xs font-semibold text-karo-goldwarm uppercase tracking-wider">
                                                Baca Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
                                            </a>
                                        </div>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Agenda Mendatang */}
                <section className="py-24 bg-karo-black text-karo-ivory karo-lattice-light">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <SectionHeading dark eyebrow="Agenda Komunitas" title="Jadwal & Kegiatan Mendatang" description="Catat tanggalnya dan mari ambil bagian dalam setiap kebersamaan keluarga besar." />
                        </Reveal>
                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {agendas.map((agenda, i) => (
                                <Reveal key={agenda.id} delay={i * 0.05}>
                                    <div className="rounded-3xl border border-karo-gold/30 bg-karo-ivory/[0.04] p-7 backdrop-blur-sm flex flex-col justify-between space-y-6">
                                        <div>
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-karo-gold/20 px-3 py-1 text-xs font-bold text-karo-gold">
                                                <Calendar className="h-3.5 w-3.5" /> {agenda.date}
                                            </span>
                                            <h4 className="mt-4 font-display text-lg font-bold text-karo-ivory">{agenda.title}</h4>
                                            <p className="mt-2 text-xs text-karo-ivory/70">{agenda.description}</p>
                                        </div>
                                        <div className="space-y-2 border-t border-karo-ivory/10 pt-4 text-xs text-karo-ivory/80">
                                            <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-karo-gold" /> {agenda.time}</p>
                                            <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-karo-gold" /> {agenda.location}</p>
                                            {agenda.location_url && (
                                                <a href={agenda.location_url} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-karo-gold/10 border border-karo-gold/30 py-2 text-xs font-semibold text-karo-gold hover:bg-karo-gold/20">
                                                    <ExternalLink className="h-3.5 w-3.5" /> Buka ShareLoc Google Maps
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Komponen Sponsor / UMKM */}
                <SponsorSection />

                {/* Komponen Sekretariat */}
                <Secretariat />

                {/* Komponen Video YouTube */}
                <YoutubeSection />
            </main>
        </div>
    );
}