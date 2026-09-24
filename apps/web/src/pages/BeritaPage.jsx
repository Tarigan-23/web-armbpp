import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Calendar, MapPin, Clock, ExternalLink, Timer } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading } from '@/components/KaroPattern';

// Komponen Kecil untuk Hitung Mundur Real-Time per Agenda
function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        // targetDate diasumsikan string tanggal (misal: "2026-12-31T19:00:00" atau format valid)
        const target = new Date(targetDate).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                setIsExpired(true);
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (isExpired) {
        <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">Agenda Telah Dimulai / Berakhir</span>;
    }

    return (
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200/60">
            <Timer className="h-4 w-4 text-amber-600 animate-pulse shrink-0" />
            <span>Mundur: {timeLeft.days}h {timeLeft.hours}j {timeLeft.minutes}m {timeLeft.seconds}d</span>
        </div>
    );
}

export default function BeritaPage() {
    const [newsList, setNewsList] = useState([]);
    const [agendaList, setAgendaList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data: newsData } = await supabase.from('news').select('*').order('created_at', { ascending: false });
        const { data: agendaData } = await supabase.from('agendas').select('*').order('created_at', { ascending: false });

        if (newsData) setNewsList(newsData);
        if (agendaData) setAgendaList(agendaData);
        setLoading(false);
    };

    const featured = newsList.length > 0 ? newsList[0] : null;
    const items = newsList.length > 1 ? newsList.slice(1) : [];

    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased">
            <Helmet>
                <title>Berita & Agenda — Aron Rudang Mayang Balikpapan</title>
            </Helmet>
            <Navbar />
            <main>
                <section className="karo-lattice bg-karo-ivory py-24 sm:py-32 pt-36">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <SectionHeading
                                eyebrow="Berita & Kegiatan"
                                title="Kabar Terbaru dari Keluarga Besar"
                            />
                        </Reveal>

                        {/* BAGIAN BERITA */}
                        {loading ? (
                            <p className="mt-16 text-center text-sm text-gray-500 animate-pulse">Memuat informasi...</p>
                        ) : newsList.length === 0 ? (
                            <p className="mt-16 text-center text-sm text-gray-500">Belum ada berita yang dipublikasikan.</p>
                        ) : (
                            <div className="mt-16 grid gap-8 lg:grid-cols-2">
                                {featured && (
                                    <Reveal>
                                        <article className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl shadow-xl shadow-karo-black/10">
                                            <img
                                                src={featured.image_url}
                                                alt={featured.title}
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-karo-black via-karo-black/30 to-transparent" />
                                            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                                                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em]">
                                                    <span className="rounded-full bg-karo-gold px-3 py-1 text-karo-black">{featured.category || 'Berita'}</span>
                                                    <span className="text-karo-ivory/70">{featured.date}</span>
                                                </div>
                                                <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-karo-ivory sm:text-3xl">
                                                    {featured.title}
                                                </h3>
                                                <p className="mt-3 max-w-xl text-sm leading-relaxed text-karo-ivory/75">{featured.excerpt}</p>
                                            </div>
                                        </article>
                                    </Reveal>
                                )}

                                <div className="flex flex-col gap-8">
                                    {items.map((item, i) => (
                                        <Reveal key={item.id} delay={0.1 + i * 0.08} className="flex-1">
                                            <article className="group flex h-full flex-col gap-5 rounded-3xl border border-border bg-white p-5 transition-all duration-300 hover:border-karo-gold/60 hover:shadow-xl sm:flex-row">
                                                <img
                                                    src={item.image_url}
                                                    alt={item.title}
                                                    className="aspect-[3/2] w-full rounded-2xl object-cover sm:aspect-auto sm:h-auto sm:w-44 sm:shrink-0"
                                                />
                                                <div className="flex flex-col justify-center py-1">
                                                    <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em]">
                                                        <span className="text-karo-red">{item.category}</span>
                                                        <span className="text-muted-foreground">{item.date}</span>
                                                    </div>
                                                    <h3 className="mt-3 font-display text-lg font-bold leading-snug text-karo-charcoal group-hover:text-karo-red">
                                                        {item.title}
                                                    </h3>
                                                </div>
                                            </article>
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* BAGIAN AGENDA KEGIATAN MENDATANG */}
                        <div className="mt-28">
                            <Reveal>
                                <SectionHeading
                                    eyebrow="Agenda Komunitas"
                                    title="Jadwal & Kegiatan Mendatang"
                                    description="Catat tanggalnya, pantau waktu mundur acara, dan temukan lokasi tepatnya melalui tautan ShareLoc."
                                />
                            </Reveal>

                            {agendaList.length === 0 ? (
                                <p className="mt-10 text-center text-sm text-gray-500">Belum ada agenda kegiatan yang dijadwalkan.</p>
                            ) : (
                                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {agendaList.map((agenda, i) => (
                                        <Reveal key={agenda.id} delay={i * 0.05}>
                                            <div className="rounded-3xl border border-karo-gold/30 bg-white p-7 shadow-lg flex flex-col justify-between space-y-6">
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-karo-maroon/10 px-3 py-1 text-xs font-bold text-karo-maroon">
                                                            <Calendar className="h-3.5 w-3.5" /> {agenda.date}
                                                        </span>
                                                    </div>
                                                    <h4 className="font-display text-lg font-bold text-karo-charcoal">{agenda.title}</h4>
                                                    <p className="text-xs leading-relaxed text-muted-foreground">{agenda.description}</p>

                                                    {/* Hitung Mundur Real-Time */}
                                                    {agenda.target_datetime && <CountdownTimer targetDate={agenda.target_datetime} />}
                                                </div>

                                                <div className="space-y-3 border-t border-gray-100 pt-4 text-xs text-gray-600">
                                                    <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-amber-600" /> {agenda.time}</p>
                                                    <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-amber-600" /> {agenda.location}</p>

                                                    {/* Tombol ShareLoc Google Maps */}
                                                    {agenda.location_url && (
                                                        <a
                                                            href={agenda.location_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 py-2.5 text-xs font-semibold text-amber-800 hover:bg-amber-500/20 transition-colors"
                                                        >
                                                            <ExternalLink className="h-3.5 w-3.5" /> Buka ShareLoc Google Maps
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </Reveal>
                                    ))}
                                </div>
                            )}
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
}