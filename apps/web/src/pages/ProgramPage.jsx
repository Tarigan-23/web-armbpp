import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Music, BookOpen, GraduationCap, HeartHandshake, CalendarDays, Store, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading } from '@/components/KaroPattern';

// Mapping string icon database ke komponen Lucide React
const iconMap = {
    Music: Music,
    BookOpen: BookOpen,
    GraduationCap: GraduationCap,
    HeartHandshake: HeartHandshake,
    CalendarDays: CalendarDays,
    Store: Store
};

export default function ProgramPage() {
    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('programs').select('*').order('urutan', { ascending: true });
        if (!error && data) setPrograms(data);
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white font-sans text-foreground antialiased">
            <Helmet>
                <title>Program Kerja — Aron Rudang Mayang Balikpapan</title>
            </Helmet>
            <Navbar />
            <main>
                <section className="relative overflow-hidden bg-white py-24 sm:py-32 pt-36">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
                            <div className="lg:sticky lg:top-32 lg:self-start">
                                <Reveal>
                                    <SectionHeading
                                        align="left"
                                        eyebrow="Program Kami"
                                        title="Karya Nyata untuk Budaya dan Sesama"
                                        description="Program utama yang kami jalankan sepanjang tahun — dari sanggar seni hingga koperasi keluarga — semuanya digerakkan oleh dan untuk anggota."
                                    />
                                </Reveal>
                                <Reveal delay={0.15}>
                                    <a
                                        href="/donasi"
                                        className="mt-9 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-karo-maroon px-7 py-3.5 text-sm font-semibold text-karo-ivory transition-all duration-200 hover:bg-karo-red active:scale-[0.98]"
                                    >
                                        Dukung Program Kami
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                </Reveal>
                            </div>

                            <div className="divide-y divide-border border-y border-border">
                                {loading ? (
                                    <p className="py-12 text-center text-sm text-gray-400 animate-pulse">Memuat program kerja...</p>
                                ) : programs.map((p, i) => {
                                    const IconComponent = iconMap[p.icon_name] || Music;
                                    return (
                                        <Reveal key={p.id || p.title} delay={i * 0.05}>
                                            <div className="group flex gap-6 py-7 transition-colors duration-300 first:pt-0 last:pb-0 sm:gap-8">
                                                <span className="font-display text-sm font-bold tracking-widest text-karo-goldwarm">
                                                    {String(i + 1).padStart(2, '0')}
                                                </span>
                                                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-karo-gold/40 bg-karo-ivory text-karo-maroon transition-all duration-300 group-hover:border-karo-gold group-hover:bg-karo-maroon group-hover:text-karo-gold">
                                                    <IconComponent className="h-5 w-5" strokeWidth={1.8} />
                                                </span>
                                                <div>
                                                    <h3 className="font-display text-xl font-bold text-karo-charcoal transition-colors duration-300 group-hover:text-karo-red">
                                                        {p.title}
                                                    </h3>
                                                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}