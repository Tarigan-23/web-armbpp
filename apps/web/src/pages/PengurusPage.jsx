import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading } from '@/components/KaroPattern';
import { Users } from 'lucide-react';

export default function PengurusPage() {
    const [prmList, setPrmList] = useState([]);
    const [pembinaList, setPembinaList] = useState([]);
    const [ketuaList, setKetuaList] = useState([]);
    const [wakilList, setWakilList] = useState([]);
    const [seksiList, setSeksiList] = useState([]);
    const [bendaharaList, setBendaharaList] = useState([]);
    const [semuaPengurus, setSemuaPengurus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('organization_structure').select('*').order('urutan', { ascending: true });
        if (!error && data) {
            setSemuaPengurus(data);
            // Filter ketat agar tidak saling tumpang tindih
            setPrmList(data.filter(i => i.kategori === 'prm' || i.jabatan.toLowerCase().includes('ketua prm')));
            setPembinaList(data.filter(i => i.kategori === 'pembina' || i.jabatan.toLowerCase().includes('pembina') || i.jabatan.toLowerCase().includes('pengawas')));
            setKetuaList(data.filter(i => i.jabatan.includes('Ketua Umum') || i.jabatan === 'Ketua'));
            setWakilList(data.filter(i => i.jabatan.includes('Wakil Ketua')));
            setSeksiList(data.filter(i => i.jabatan.includes('Seksi') || i.jabatan.includes('Sekretaris')));
            setBendaharaList(data.filter(i => i.jabatan.includes('Bendahara')));
        }
        setLoading(false);
    };

    // Daftar 6 Divisi sesuai urutan dan nama yang kamu minta
    const daftarDivisi = [
        { id: 1, namaDivisi: 'SOSIAL', keyword: 'Sosial', warna: 'border-emerald-600 bg-emerald-50 text-emerald-900', headerBg: 'bg-emerald-700 text-white' },
        { id: 2, namaDivisi: 'BUDAYA', keyword: 'Budaya', warna: 'border-teal-600 bg-teal-50 text-teal-900', headerBg: 'bg-teal-700 text-white' },
        { id: 3, namaDivisi: 'HUMAS', keyword: 'Humas', warna: 'border-blue-600 bg-blue-50 text-blue-900', headerBg: 'bg-blue-700 text-white' },
        { id: 4, namaDivisi: 'KEUANGAN', keyword: 'Keuangan', warna: 'border-purple-600 bg-purple-50 text-purple-900', headerBg: 'bg-purple-700 text-white' },
        { id: 5, namaDivisi: 'MENFO', keyword: 'Menfo', warna: 'border-rose-600 bg-rose-50 text-rose-900', headerBg: 'bg-rose-700 text-white' },
        { id: 6, namaDivisi: 'OLAHRAGA', keyword: 'Olahraga', warna: 'border-cyan-600 bg-cyan-50 text-cyan-900', headerBg: 'bg-cyan-700 text-white' },
    ];

    const getAnggotaDivisi = (keyword) => {
        return semuaPengurus.filter(i => i.jabatan.toLowerCase().includes(keyword.toLowerCase()));
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
                        <div className="mt-16 space-y-10">

                            {/* 1. LEVEL ATAS: KETUA PRM (Kiri) & PEMBINA / PENGAWAS BERJEJER KE BAWAH (Kanan) */}
                            <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
                                {/* Ketua PRM */}
                                <div className="text-center">
                                    <h3 className="font-display text-sm font-bold text-karo-maroon mb-3 uppercase tracking-wider">Ketua PRM (Organisasi Penaung)</h3>
                                    {prmList.length > 0 ? (
                                        prmList.map(item => (
                                            <article key={item.id} className="overflow-hidden rounded-2xl bg-karo-black shadow-lg max-w-xs mx-auto border-2 border-karo-gold">
                                                <img src={item.foto_url || 'https://via.placeholder.com/300'} alt={item.nama} className="aspect-[3/4] w-full object-cover" />
                                                <div className="p-4 border-t-2 border-karo-gold">
                                                    <p className="text-[10px] uppercase font-semibold text-karo-gold">{item.jabatan}</p>
                                                    <h4 className="font-display text-sm font-bold text-karo-ivory mt-1">{item.nama}</h4>
                                                </div>
                                            </article>
                                        ))
                                    ) : (
                                        <div className="rounded-2xl bg-karo-black p-6 text-karo-ivory max-w-xs mx-auto border-2 border-karo-gold">
                                            <p className="text-xs text-karo-gold font-bold">KETUA Perpulungen Rudang Mayang</p>
                                            <p className="text-sm font-semibold mt-2">Belum diatur di Database</p>
                                        </div>
                                    )}
                                </div>

                                {/* Dewan Pembina & Pengawas (Berjejer 1 baris ke bawah dengan ukuran diperkecil) */}
                                <div className="text-center">
                                    <h3 className="font-display text-sm font-bold text-karo-maroon mb-3 uppercase tracking-wider">Pembina Aron Rudang Mayang</h3>
                                    <div className="space-y-3 max-w-xs mx-auto">
                                        {pembinaList.map((item, i) => (
                                            <Reveal key={item.id} delay={i * 0.05}>
                                                <div className="flex items-center gap-3 bg-karo-black p-3 rounded-xl border border-karo-gold/40 shadow-md text-left">
                                                    <img src={item.foto_url || 'https://via.placeholder.com/150'} alt={item.nama} className="h-12 w-12 shrink-0 rounded-lg object-cover border border-karo-gold" />
                                                    <div className="min-w-0 flex-1">
                                                        <p className="text-[9px] uppercase font-bold text-karo-gold leading-tight">{item.jabatan}</p>
                                                        <h4 className="font-display text-xs font-bold text-karo-ivory mt-0.5 truncate">{item.nama}</h4>
                                                    </div>
                                                </div>
                                            </Reveal>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* GARIS PENGHUBUNG TEGAS */}
                            <div className="flex justify-center"><div className="w-1 h-12 bg-karo-gold" /></div>

                            {/* 2. KETUA UMUM ARON */}
                            {ketuaList.length > 0 && (
                                <div className="flex justify-center">
                                    {ketuaList.map(item => (
                                        <Reveal key={item.id} className="w-full max-w-xs">
                                            <article className="overflow-hidden rounded-3xl bg-karo-black shadow-xl text-center border-2 border-karo-gold">
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

                            {/* GARIS PENGHUBUNG TEGAS */}
                            <div className="flex justify-center"><div className="w-1 h-12 bg-karo-gold" /></div>

                            {/* 3. WAKIL KETUA (Ukuran disamakan dengan Ketua) */}
                            <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
                                {wakilList.map(wakil => (
                                    <div key={wakil.id} className="overflow-hidden rounded-3xl bg-karo-black shadow-xl text-center border-2 border-blue-500/50">
                                        <img src={wakil.foto_url || 'https://via.placeholder.com/300'} alt={wakil.nama} className="aspect-[3/4] w-full object-cover" />
                                        <div className="p-5 border-t-2 border-blue-400">
                                            <p className="text-xs font-bold uppercase tracking-widest text-blue-400">{wakil.jabatan}</p>
                                            <h3 className="font-display text-lg font-bold text-karo-ivory mt-1">{wakil.nama}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* GARIS PENGHUBUNG TEGAS */}
                            <div className="flex justify-center"><div className="w-1 h-12 bg-karo-gold" /></div>

                            {/* 4. SEKRETARIS I, SEKRETARIS II & BENDAHARA */}
                            <div className="grid gap-8 sm:grid-cols-3 max-w-4xl mx-auto">
                                <div className="space-y-4">
                                    <h4 className="text-center font-bold text-sm text-karo-maroon uppercase">Sekretaris I</h4>
                                    {seksiList.slice(0, 1).map(item => (
                                        <div key={item.id} className="rounded-2xl bg-amber-500/10 border-2 border-amber-500 p-3 text-center shadow-md">
                                            <img src={item.foto_url || 'https://via.placeholder.com/200'} alt={item.nama} className="aspect-square w-full object-cover rounded-xl" />
                                            <p className="text-[10px] text-amber-700 mt-2 font-semibold">{item.jabatan}</p>
                                            <h5 className="font-bold text-xs text-gray-900">{item.nama}</h5>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-center font-bold text-sm text-karo-maroon uppercase">Sekretaris II</h4>
                                    {seksiList.slice(1, 2).map(item => (
                                        <div key={item.id} className="rounded-2xl bg-amber-500/10 border-2 border-amber-500 p-3 text-center shadow-md">
                                            <img src={item.foto_url || 'https://via.placeholder.com/200'} alt={item.nama} className="aspect-square w-full object-cover rounded-xl" />
                                            <p className="text-[10px] text-amber-700 mt-2 font-semibold">{item.jabatan}</p>
                                            <h5 className="font-bold text-xs text-gray-900">{item.nama}</h5>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-center font-bold text-sm text-karo-maroon uppercase">Bendahara Umum</h4>
                                    {bendaharaList.map(item => (
                                        <div key={item.id} className="rounded-2xl bg-purple-500/10 border-2 border-purple-500 p-3 text-center shadow-md">
                                            <img src={item.foto_url || 'https://via.placeholder.com/200'} alt={item.nama} className="aspect-square w-full object-cover rounded-xl" />
                                            <p className="text-[10px] text-purple-700 mt-2 font-semibold">{item.jabatan}</p>
                                            <h5 className="font-bold text-xs text-gray-900">{item.nama}</h5>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* GARIS PENGHUBUNG TEGAS KE DIVISI */}
                            <div className="flex justify-center"><div className="w-1 h-12 bg-karo-gold" /></div>

                            {/* 5. 6 KOTAK DIVISI (Terbagi 2 Kolom Kiri & Kanan Sesuai Urutan Permintaan) */}
                            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
                                {daftarDivisi.map((div) => {
                                    const anggotaDivisi = getAnggotaDivisi(div.keyword);
                                    return (
                                        <div key={div.id} className={`rounded-2xl border-2 ${div.warna} p-5 shadow-lg flex flex-col justify-between`}>
                                            <div>
                                                <div className={`flex items-center gap-2 p-3 rounded-xl ${div.headerBg} mb-4 shadow`}>
                                                    <Users className="h-5 w-5 shrink-0" />
                                                    <h4 className="font-display text-sm font-bold tracking-wider uppercase">{div.namaDivisi}</h4>
                                                </div>

                                                <div className="space-y-2.5">
                                                    {anggotaDivisi.length > 0 ? (
                                                        anggotaDivisi.map(member => (
                                                            <div key={member.id} className="flex items-center gap-3 bg-white/90 p-2.5 rounded-xl border border-black/10 shadow-sm">
                                                                <img src={member.foto_url || 'https://via.placeholder.com/100'} alt={member.nama} className="h-10 w-10 rounded-lg object-cover border" />
                                                                <div className="min-w-0 flex-1">
                                                                    <p className="text-[10px] font-bold text-karo-maroon uppercase leading-none">{member.jabatan}</p>
                                                                    <p className="font-semibold text-xs text-gray-900 mt-0.5 truncate">{member.nama}</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p className="text-xs text-gray-500 text-center py-4 italic">Belum ada data ketua/anggota untuk divisi ini.</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}