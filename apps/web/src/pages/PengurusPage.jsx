import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading } from '@/components/KaroPattern';

export default function PengurusPage() {
    const [pembinaList, setPembinaList] = useState([]);
    const [ketuaList, setKetuaList] = useState([]);
    const [wakilList, setWakilList] = useState([]);
    const [sekretarisList, setSekretarisList] = useState([]);
    const [bendaharaList, setBendaharaList] = useState([]);
    const [divisiList, setDivisiList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('organization_structure').select('*').order('urutan', { ascending: true });
        if (!error && data) {
            setPembinaList(data.filter(i => i.kategori === 'pembina'));
            setKetuaList(data.filter(i => i.jabatan.includes('Ketua Umum')));
            setWakilList(data.filter(i => i.jabatan.includes('Wakil Ketua')));
            setSekretarisList(data.filter(i => i.jabatan.includes('Sekretaris')));
            setBendaharaList(data.filter(i => i.jabatan.includes('Bendahara')));
            setDivisiList(data.filter(i => i.kategori === 'divisi'));
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased">
            <Helmet>
                <title>Struktur Pengurus — Aron Rudang Mayang Balikpapan</title>
            </Helmet>
            <Navbar />
            <main className="py-24 sm:py-32 pt-36">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Struktur Organisasi"
                            title="Para Pengabdi Komunitas"
                            description="Dipilih melalui musyawarah keluarga besar, pengurus menjalankan amanah dengan semangat kekeluargaan dan keteladanan."
                        />
                    </Reveal>

                    {loading ? (
                        <p className="text-center py-20 text-gray-500 animate-pulse">Memuat struktur organisasi...</p>
                    ) : (
                        <div className="mt-16 space-y-16">

                            {/* 1. DEWAN PEMBINA (3 Orang) */}
                            {pembinaList.length > 0 && (
                                <div className="text-center">
                                    <h3 className="font-display text-xl font-bold text-karo-maroon mb-6">Dewan Pembina</h3>
                                    <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
                                        {pembinaList.map((item, i) => (
                                            <Reveal key={item.id} delay={i * 0.05}>
                                                <article className="overflow-hidden rounded-2xl bg-karo-black shadow-lg">
                                                    <img src={item.foto_url || 'https://via.placeholder.com/300'} alt={item.nama} className="aspect-[3/4] w-full object-cover" />
                                                    <div className="p-4 border-t-2 border-karo-gold">
                                                        <p className="text-[10px] uppercase font-semibold text-karo-gold">{item.jabatan}</p>
                                                        <h4 className="font-display text-sm font-bold text-karo-ivory mt-1">{item.nama}</h4>
                                                    </div>
                                                </article>
                                            </Reveal>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* GARIS PENGHUBUNG STRUKTUR */}
                            <div className="flex justify-center"><div className="w-0.5 h-12 bg-karo-gold/60" /></div>

                            {/* 2. KETUA UMUM (1 Orang) */}
                            {ketuaList.length > 0 && (
                                <div className="flex justify-center">
                                    {ketuaList.map(item => (
                                        <Reveal key={item.id} className="w-full max-w-xs">
                                            <article className="overflow-hidden rounded-3xl bg-karo-black shadow-xl text-center">
                                                <img src={item.foto_url || 'https://via.placeholder.com/300'} alt={item.nama} className="aspect-[3/4] w-full object-cover" />
                                                <div className="p-5 border-t-2 border-karo-gold">
                                                    <p className="text-xs font-bold uppercase tracking-widest text-karo-gold">{item.jabatan}</p>
                                                    <h3 className="font-display text-lg font-bold text-karo-ivory mt-1">{item.nama}</h3>
                                                </div>
                                            </article>
                                        </Reveal>
                                    ))}
                                </div>
                            )}

                            {/* GARIS PENGHUBUNG KE SEKRETARIS & BENDAHARA */}
                            <div className="flex justify-center"><div className="w-0.5 h-12 bg-karo-gold/60" /></div>

                            {/* 3. SEKRETARIS & BENDAHARA (2 Sekretaris, 1 Bendahara) */}
                            <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
                                <div className="space-y-4">
                                    <h4 className="text-center font-bold text-sm text-karo-maroon">Sekretariat Umum</h4>
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {sekretarisList.map(item => (
                                            <div key={item.id} className="rounded-2xl bg-karo-black p-3 text-center shadow-md">
                                                <img src={item.foto_url || 'https://via.placeholder.com/200'} alt={item.nama} className="aspect-square w-full object-cover rounded-xl" />
                                                <p className="text-[10px] text-karo-gold mt-2 font-semibold">{item.jabatan}</p>
                                                <h5 className="font-bold text-xs text-karo-ivory">{item.nama}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-center font-bold text-sm text-karo-maroon">Bendahara Umum</h4>
                                    <div className="grid gap-4 sm:grid-cols-1 max-w-[200px] mx-auto">
                                        {bendaharaList.map(item => (
                                            <div key={item.id} className="rounded-2xl bg-karo-black p-3 text-center shadow-md">
                                                <img src={item.foto_url || 'https://via.placeholder.com/200'} alt={item.nama} className="aspect-square w-full object-cover rounded-xl" />
                                                <p className="text-[10px] text-karo-gold mt-2 font-semibold">{item.jabatan}</p>
                                                <h5 className="font-bold text-xs text-karo-ivory">{item.nama}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* GARIS PENGHUBUNG KE WAKIL KETUA */}
                            <div className="flex justify-center"><div className="w-0.5 h-12 bg-karo-gold/60" /></div>

                            {/* 4. WAKIL KETUA & 6 DIVISI (2 Wakil Ketua menaungi 3 divisi masing-masing) */}
                            <div className="grid gap-12 lg:grid-cols-2">
                                {wakilList.map((wakil, idx) => (
                                    <div key={wakil.id} className="rounded-3xl border-2 border-karo-gold/40 bg-white p-6 shadow-xl relative">
                                        {/* Kartu Wakil Ketua */}
                                        <div className="flex items-center gap-4 bg-karo-black p-4 rounded-2xl text-karo-ivory mb-8">
                                            <img src={wakil.foto_url || 'https://via.placeholder.com/150'} alt={wakil.nama} className="h-16 w-16 rounded-xl object-cover border border-karo-gold" />
                                            <div>
                                                <p className="text-xs font-bold text-karo-gold uppercase tracking-wider">{wakil.jabatan}</p>
                                                <h4 className="font-display text-base font-bold mt-0.5">{wakil.nama}</h4>
                                            </div>
                                        </div>

                                        {/* Garis pohon ke Divisi */}
                                        <div className="absolute left-1/2 -bottom-6 w-0.5 h-6 bg-karo-gold/60 hidden lg:block" />

                                        {/* 3 Divisi di bawah Wakil Ketua ini */}
                                        <div className="space-y-4">
                                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-4">Menaungi 3 Divisi Kerja</p>
                                            <div className="grid gap-4 sm:grid-cols-3">
                                                {divisiList.slice(idx * 3, (idx + 1) * 3).map(div => (
                                                    <div key={div.id} className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-center shadow-sm">
                                                        <img src={div.foto_url || 'https://via.placeholder.com/150'} alt={div.nama} className="aspect-square w-full object-cover rounded-lg mb-2" />
                                                        <p className="text-[9px] font-bold text-karo-maroon leading-tight">{div.jabatan}</p>
                                                        <h5 className="font-semibold text-xs text-gray-900 mt-1">{div.nama}</h5>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}