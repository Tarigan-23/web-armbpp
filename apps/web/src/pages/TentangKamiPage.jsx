import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Drum, HeartHandshake, GraduationCap } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading } from '@/components/KaroPattern';

export default function TentangKamiPage() {
    const [profileData, setProfileData] = useState(null);
    const [historyList, setHistoryList] = useState([]);
    const [loading, setLoading] = useState(true);

    const pillars = [
        {
            icon: Drum,
            title: 'Budaya',
            text: 'Merawat seni tari, musik gendang, tenun ulos, dan bahasa Karo agar tetap hidup di perantauan.',
        },
        {
            icon: HeartHandshake,
            title: 'Sosial',
            text: 'Hadir untuk anggota dalam suka dan duka melalui semangat aron — gotong royong khas Karo.',
        },
        {
            icon: GraduationCap,
            title: 'Pendidikan',
            text: 'Beasiswa dan pendampingan bagi generasi muda Karo di Balikpapan untuk meraih masa depan.',
        },
    ];

    useEffect(() => {
        fetchAboutData();
    }, []);

    const fetchAboutData = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('about_page').select('*');
        if (!error && data) {
            const profile = data.find(item => item.section_type === 'profile');
            const history = data.filter(item => item.section_type === 'history');
            if (profile) setProfileData(profile);
            if (history) setHistoryList(history);
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased">
            <Helmet>
                <title>Tentang Kami & Sejarah — Aron Rudang Mayang Balikpapan</title>
            </Helmet>
            <Navbar />
            <main>
                {/* Bagian 1: Tentang Kami (Profil & Pilar) */}
                <section className="karo-lattice relative overflow-hidden bg-karo-ivory py-24 sm:py-32 pt-36">
                    <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
                        <Reveal className="relative">
                            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-karo-gold/60" aria-hidden="true" />
                            <img
                                src={profileData?.image_url}
                                alt="Anggota Aron Rudang Mayang"
                                className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-karo-maroon/20"
                            />
                            <div className="absolute -bottom-7 -right-3 rounded-2xl border border-karo-gold/40 bg-karo-black/85 px-6 py-4 backdrop-blur-md sm:-right-7">
                                <p className="font-display text-2xl font-bold text-karo-gold">Sejak {profileData?.year || '2012'}</p>
                                <p className="text-xs uppercase tracking-[0.2em] text-karo-ivory/70">Melayani Komunitas</p>
                            </div>
                        </Reveal>

                        <div>
                            <Reveal>
                                <SectionHeading
                                    align="left"
                                    eyebrow="Tentang Kami"
                                    title={profileData?.title || "Merawat Tradisi, Membangun Masa Depan"}
                                />
                            </Reveal>
                            <Reveal delay={0.1}>
                                <p className="mt-7 leading-relaxed text-muted-foreground">
                                    {profileData?.description || "Aron adalah tradisi gotong royong masyarakat Karo — semangat saling menopang yang kami bawa ke Balikpapan."}
                                </p>
                            </Reveal>
                            <div className="mt-10 space-y-6">
                                {pillars.map((p, i) => (
                                    <Reveal key={p.title} delay={0.12 + i * 0.08}>
                                        <div className="group flex gap-5 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-karo-gold/40 hover:bg-white/70">
                                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-karo-maroon text-karo-gold transition-colors duration-300 group-hover:bg-karo-red">
                                                <p.icon className="h-5 w-5" strokeWidth={1.8} />
                                            </span>
                                            <div>
                                                <h3 className="font-display text-lg font-bold text-karo-charcoal">{p.title}</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Bagian 2: Sejarah Organisasi (Timeline) */}
                <section className="karo-lattice-light relative overflow-hidden bg-karo-black py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <Reveal>
                            <SectionHeading
                                dark
                                eyebrow="Sejarah Perjalanan"
                                title="Perjalanan Satu Keluarga Besar"
                                description="Dari pertemuan sederhana antar keluarga perantau, tumbuh menjadi organisasi yang menghimpun ratusan anggota di Kota Balikpapan."
                            />
                        </Reveal>

                        <div className="relative mx-auto mt-16 max-w-4xl">
                            <div
                                className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-karo-gold/70 via-karo-gold/30 to-transparent md:left-1/2"
                                aria-hidden="true"
                            />
                            <div className="space-y-12">
                                {historyList.map((e, i) => (
                                    <Reveal key={e.id} delay={i * 0.05}>
                                        <div
                                            className={`relative flex flex-col gap-4 pl-14 md:w-1/2 md:pl-0 ${i % 2 === 0
                                                ? 'md:pr-14 md:text-right'
                                                : 'md:ml-auto md:pl-14'
                                                }`}
                                        >
                                            <span
                                                className={`absolute left-5 top-1.5 flex h-4 w-4 -translate-x-1/2 items-center justify-center md:top-1.5 ${i % 2 === 0
                                                    ? 'md:left-auto md:right-0 md:translate-x-1/2'
                                                    : 'md:left-0 md:-translate-x-1/2'
                                                    }`}
                                                aria-hidden="true"
                                            >
                                                <span className="h-3.5 w-3.5 rotate-45 border-2 border-karo-gold bg-karo-black" />
                                            </span>
                                            <div className="rounded-2xl border border-karo-ivory/10 bg-karo-ivory/[0.04] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-karo-gold/40 text-left">
                                                <p className="font-display text-2xl font-bold text-karo-gold">{e.year}</p>
                                                <h3 className="mt-2 font-display text-lg font-bold text-karo-ivory">{e.title}</h3>
                                                <p className="mt-2 text-sm leading-relaxed text-karo-ivory/65">{e.description}</p>
                                            </div>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}