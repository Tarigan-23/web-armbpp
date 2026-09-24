import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import { SectionHeading } from '@/components/KaroPattern';
import { MapPin, Clock, Info, ExternalLink, Navigation } from 'lucide-react';

export default function Secretariat() {
    const [data, setData] = useState({
        title: 'Lokasi Kantor & Titik Kumpul',
        description: 'Kunjungi sekretariat kami untuk koordinasi kegiatan, konsultasi, atau silaturahmi.',
        address: 'Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111',
        operational_hours: 'Senin – Sabtu, 09.00 – 17.00 WITA',
        additional_info: 'Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.',
        map_iframe: 'https://maps.app.goo.gl/2b1e7814c1444dec' // Bisa link share/map biasa
    });

    useEffect(() => {
        fetchSecretariat();
    }, []);

    const fetchSecretariat = async () => {
        const { data: res } = await supabase.from('secretariat').select('*').limit(1).single();
        if (res) setData(res);
    };

    // Ekstrak URL map atau iframe secara aman untuk tombol arah
    const getMapLink = (input) => {
        if (!input) return "https://maps.google.com";
        if (input.includes("<iframe")) {
            const match = input.match(/src="([^"]+)"/);
            if (match && match[1]) return match[1];
        }
        return input;
    };

    const directMapUrl = getMapLink(data.map_iframe);

    return (
        <section className="py-24 bg-white border-t border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <SectionHeading
                        eyebrow="Sekretariat"
                        title={data.title}
                        description={data.description}
                    />
                </Reveal>

                <div className="mt-12 grid gap-8 lg:grid-cols-3 items-center">
                    <div className="rounded-3xl border bg-karo-ivory p-8 space-y-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-karo-maroon text-karo-gold">
                                <MapPin className="h-5 w-5" />
                            </span>
                            <div>
                                <h5 className="font-bold text-sm text-karo-charcoal">Alamat Sekretariat</h5>
                                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{data.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-karo-maroon text-karo-gold">
                                <Clock className="h-5 w-5" />
                            </span>
                            <div>
                                <h5 className="font-bold text-sm text-karo-charcoal">Jam Operasional</h5>
                                <p className="text-xs text-muted-foreground mt-1">{data.operational_hours}</p>
                            </div>
                        </div>

                        {data.additional_info && (
                            <div className="flex items-start gap-4 pt-4 border-t border-border">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-karo-gold/20 text-karo-maroon">
                                    <Info className="h-5 w-5" />
                                </span>
                                <div>
                                    <h5 className="font-bold text-sm text-karo-charcoal">Informasi Tambahan</h5>
                                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{data.additional_info}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Kartu Pratinjau Lokasi Interaktif (Anti Gagal / Anti Refused) */}
                    <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-karo-gold/30 shadow-xl h-[380px] bg-gradient-to-br from-karo-black via-zinc-900 to-karo-maroon text-white p-8 flex flex-col justify-between">
                        {/* Aksen ornamen latar belakang */}
                        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-karo-gold/10 blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-karo-gold/20 text-karo-gold text-xs font-bold uppercase tracking-wider">
                                <MapPin className="h-3.5 w-3.5" /> Titik Koordinat Resmi
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl font-bold mt-4 text-karo-ivory">
                                Sekretariat Aron Rudang Mayang
                            </h3>
                            <p className="text-sm text-karo-ivory/80 mt-2 max-w-lg leading-relaxed">
                                {data.address}
                            </p>
                        </div>

                        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="text-xs text-karo-ivory/70">
                                Klik tombol di samping untuk membuka peta langsung via aplikasi Google Maps.
                            </div>
                            <a
                                href={directMapUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-karo-gold px-6 py-3 text-xs font-bold text-karo-black shadow-lg hover:bg-karo-goldwarm transition-all shrink-0"
                            >
                                <Navigation className="h-4 w-4" /> Buka Google Maps <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}