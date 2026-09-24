import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';

export default function Sambutan() {
    const [data, setData] = useState({
        title: 'Merawat Akar Tradisi, Menjembatani Masa Depan di Perantauan',
        content: 'Mejuah-juah man banta kerina. Kehadiran Aron Rudang Mayang di Balikpapan bukan sekadar wadah berkumpul, melainkan rumah bersama tempat kita saling menopang dalam semangat kekeluargaan dan gotong royong khas Karo.',
        name: 'Yegar Tarigan',
        position: 'Ketua Umum Aron Rudang Mayang',
        image_url: ''
    });

    useEffect(() => {
        fetchSambutan();
    }, []);

    const fetchSambutan = async () => {
        const { data: res, error } = await supabase.from('sambutan').select('*').limit(1).single();
        if (!error && res) setData(res);
    };

    return (
        <section className="py-24 sm:py-32 bg-karo-ivory relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Bingkai Besar Kesatuan (Semi-Transparan / Glassmorphism) */}
                <div className="relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-karo-black/5 overflow-hidden">

                    {/* Aksen ornamen latar belakang */}
                    <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-karo-gold/10 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-64 w-64 rounded-full bg-karo-maroon/5 blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">

                        {/* Bagian Teks Sambutan di Kiri */}
                        <Reveal className="lg:col-span-7">
                            <div>
                                <span className="inline-block text-xs font-bold uppercase tracking-widest text-karo-goldwarm bg-karo-gold/10 px-3 py-1 rounded-full mb-3">
                                    Sambutan Ketua Umum
                                </span>
                                <h2 className="font-display text-3xl font-bold text-karo-charcoal sm:text-4xl lg:text-5xl leading-tight">
                                    {data.title}
                                </h2>
                                <p className="mt-6 text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                                    "{data.content}"
                                </p>
                            </div>
                        </Reveal>

                        {/* Bagian Foto Ketua + Nama & Jabatan di Bawahnya untuk Menutupi Batas Potong */}
                        <Reveal delay={0.2} className="lg:col-span-5 flex flex-col items-center justify-center">
                            <div className="relative w-full max-w-xs sm:max-w-sm flex flex-col items-center">
                                {/* Foto Ketua */}
                                <img
                                    src={data.image_url}
                                    alt={data.name}
                                    className="w-full h-auto object-cover object-top drop-shadow-2xl z-10"
                                />

                                {/* Label Nama & Jabatan di Bawah Foto (Menutupi Garis Potong) */}
                                <div className="w-full text-center mt-[-1.5rem] sm:mt-[-2rem] pt-6 pb-3 px-4 rounded-2xl bg-white/80 backdrop-blur-md border border-white/90 shadow-lg relative z-20">
                                    <h4 className="font-display text-lg font-bold text-karo-charcoal">{data.name}</h4>
                                    <p className="text-[11px] uppercase tracking-widest text-karo-maroon font-semibold mt-0.5">{data.position}</p>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>

            </div>
        </section>
    );
}