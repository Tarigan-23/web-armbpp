import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import { SectionHeading } from '@/components/KaroPattern';
import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';

export default function SponsorSection() {
    const [sponsors, setSponsors] = useState([]);

    useEffect(() => {
        fetchSponsors();
    }, []);

    const fetchSponsors = async () => {
        const { data } = await supabase.from('sponsors').select('*').order('created_at', { ascending: false });
        if (data) setSponsors(data);
    };

    if (sponsors.length === 0) return null;

    return (
        <section className="py-24 bg-karo-ivory">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <SectionHeading eyebrow="Mitra & UMKM" title="Didukung Oleh Usaha Keluarga Besar" description="Mari dukung dan kunjungi kafe serta usaha milik anggota yang mensupport komunitas Aron Rudang Mayang." />
                </Reveal>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {sponsors.map((sponsor, i) => (
                        <Reveal key={sponsor.id} delay={i * 0.05}>
                            <div className="rounded-3xl border border-border bg-white p-6 shadow-lg flex flex-col justify-between">
                                <div>
                                    <img src={sponsor.image_url} alt={sponsor.name} className="aspect-[16/10] w-full rounded-2xl object-cover mb-4" />
                                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">{sponsor.category}</span>
                                    <h4 className="font-display text-xl font-bold text-karo-charcoal mt-3">{sponsor.name}</h4>

                                    {/* Alamat Teks Biasa yang Rapih */}
                                    <p className="text-xs font-semibold text-karo-maroon mt-1 flex items-center gap-1.5">
                                        <MapPin className="h-3.5 w-3.5 shrink-0" /> {sponsor.location}
                                    </p>

                                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{sponsor.description}</p>
                                </div>

                                <div className="mt-6 flex flex-col gap-2.5">
                                    {/* Tombol Kunjungi Lokasi Google Maps di Atas */}
                                    {sponsor.map_url && (
                                        <a href={sponsor.map_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-karo-black py-2.5 text-xs font-semibold text-karo-ivory hover:bg-gray-800 transition-colors shadow-sm">
                                            <MapPin className="h-4 w-4 text-karo-gold" /> Kunjungi Lokasi Google Maps <ExternalLink className="h-3.5 w-3.5 ml-0.5" />
                                        </a>
                                    )}

                                    {/* Tombol Hubungi WhatsApp di Bawah */}
                                    {sponsor.whatsapp && (
                                        <a href={`https://wa.me/${sponsor.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-xl bg-green-600 py-2.5 text-xs font-semibold text-white hover:bg-green-700 transition-colors shadow-sm">
                                            <MessageCircle className="h-4 w-4" /> Hubungi via WhatsApp
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}