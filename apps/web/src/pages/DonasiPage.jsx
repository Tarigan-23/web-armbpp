import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Landmark, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { KaroDivider } from '@/components/KaroPattern';

export default function DonasiPage() {
    const [donationInfo, setDonationInfo] = useState({
        bank_name: 'BRI',
        account_number: '1234 5678 9012',
        account_holder: 'Aron Rudang Mayang Balikpapan',
        wa_number: '6285825345148',
        contact_name: 'Bendahara',
        description: 'Donasi Anda disalurkan untuk beasiswa pendidikan, kegiatan sanggar seni, festival budaya, dan bakti sosial. Setiap dukungan berarti bagi kelestarian warisan leluhur.'
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDonationInfo();
    }, []);

    const fetchDonationInfo = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('donations_info').select('*').limit(1).single();
        if (!error && data) {
            setDonationInfo(data);
        }
        setLoading(false);
    };

    const waText = encodeURIComponent(
        'Mejuah-juah! Saya ingin berdonasi untuk program Aron Rudang Mayang Kota Balikpapan. Mohon informasi lebih lanjut.'
    );

    const waNumberFormatted = `+${donationInfo.wa_number.replace(/^0/, '62')}`;

    return (
        <div className="min-h-screen bg-karo-maroon font-sans text-foreground antialiased">
            <Helmet>
                <title>Donasi — Aron Rudang Mayang Balikpapan</title>
            </Helmet>
            <Navbar />
            <main>
                <section className="relative overflow-hidden bg-gradient-to-br from-karo-maroon via-karo-red to-karo-maroon py-24 sm:py-32 pt-36 min-h-screen flex items-center">
                    <div className="karo-lattice-light absolute inset-0" aria-hidden="true" />
                    <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
                        <Reveal>
                            <div className="rounded-[2rem] border border-karo-gold/30 bg-karo-black/40 p-8 shadow-2xl shadow-karo-black/40 backdrop-blur-md sm:p-12 lg:p-16">
                                <div className="text-center">
                                    <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-karo-gold text-karo-black">
                                        <Landmark className="h-6 w-6" strokeWidth={1.8} />
                                    </span>
                                    <h2 className="mt-6 font-display text-3xl font-bold text-karo-ivory sm:text-4xl">
                                        Dukung Pelestarian Budaya Karo
                                    </h2>
                                    <KaroDivider className="mt-6" />
                                    <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-karo-ivory/75">
                                        {donationInfo.description}
                                    </p>
                                </div>

                                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                                    <div className="rounded-2xl border border-karo-ivory/15 bg-karo-ivory/[0.06] p-6">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-karo-gold">
                                            Rekening Donasi
                                        </p>
                                        <p className="mt-3 font-display text-xl font-bold tracking-wide text-karo-ivory">
                                            {donationInfo.bank_name} {donationInfo.account_number}
                                        </p>
                                        <p className="mt-1 text-sm text-karo-ivory/65">a.n. {donationInfo.account_holder}</p>
                                    </div>
                                    <div className="rounded-2xl border border-karo-ivory/15 bg-karo-ivory/[0.06] p-6">
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-karo-gold">
                                            Konfirmasi Donasi
                                        </p>
                                        <p className="mt-3 font-display text-xl font-bold tracking-wide text-karo-ivory">
                                            {waNumberFormatted}
                                        </p>
                                        <p className="mt-1 text-sm text-karo-ivory/65">Bendahara — {donationInfo.contact_name}</p>
                                    </div>
                                </div>

                                <div className="mt-10 text-center">
                                    <a
                                        href={`https://wa.me/${donationInfo.wa_number}?text=${waText}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-karo-gold px-9 py-3.5 text-sm font-semibold tracking-wide text-karo-black shadow-lg shadow-karo-black/30 transition-all duration-200 hover:bg-karo-goldwarm active:scale-[0.98]"
                                    >
                                        Donasi Sekarang
                                        <ArrowRight className="h-4 w-4" />
                                    </a>
                                    <p className="mt-4 text-xs text-karo-ivory/55">
                                        Laporan penggunaan dana disampaikan terbuka dalam rapat anggota tahunan.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>
            </main>
        </div>
    );
}