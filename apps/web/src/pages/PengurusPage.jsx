import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading } from '@/components/KaroPattern';
import { Users, User } from 'lucide-react';

export default function PengurusPage() {
    const [prmList, setPrmList] = useState([]);
    const [pembinaList, setPembinaList] = useState([]);
    const [ketuaList, setKetuaList] = useState([]);
    const [wakilList, setWakilList] = useState([]);
    const [sekretarisList, setSekretarisList] = useState([]);
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
            setPrmList(data.filter(i => i.jabatan.toLowerCase().includes('prm') || i.jabatan.toLowerCase().includes('ketua prm')));
            setPembinaList(data.filter(i => i.kategori === 'pembina' || i.jabatan.toLowerCase().includes('pembina')));
            setKetuaList(data.filter(i => i.jabatan.includes('Ketua Umum') || i.jabatan === 'Ketua'));
            setWakilList(data.filter(i => i.jabatan.includes('Wakil Ketua')));
            setSekretarisList(data.filter(i => i.jabatan.includes('Sekretaris')));
            setBendaharaList(data.filter(i => i.jabatan.includes('Bendahara')));
        }
        setLoading(false);
    };

    // Daftar 6 Divisi sesuai struktur
    const daftarDivisi = [
        { namaDivisi: 'Divisi Sosial', keyword: 'Sosial', warna: 'border-emerald-600 bg-emerald-50 text-emerald-900', headerBg: 'bg-emerald-700 text-white' },
        { namaDivisi: 'Divisi Budaya', keyword: 'Budaya', warna: 'border-emerald-600 bg-emerald-50 text-emerald-900', headerBg: 'bg-emerald-700 text-white' },
        { namaDivisi: 'Divisi Keuangan', keyword: 'Keuangan', warna: 'border-purple-600 bg-purple-50 text-purple-900', headerBg: 'bg-purple-700 text-white' },
        { namaDivisi: 'Divisi Menfo', keyword: 'Menfo', warna: 'border-rose-600 bg-rose-50 text-rose-900', headerBg: 'bg-rose-700 text-white' },
        { namaDivisi: 'Divisi Humas', keyword: 'Humas', warna: 'border-blue-600 bg-blue-50 text-blue-900', headerBg: 'bg-blue-700 text-white' },
        { namaDivisi: 'Divisi Olahraga', keyword: 'Olahraga', warna: 'border-teal-600 bg-teal-50 text-teal-900', headerBg: 'bg-teal-700 text-white' },
    ];

    // Helper untuk mencari anggota berdasarkan divisi
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
                        <div className="mt-16 space-y-12">

                            {/* 1. LEVEL ATAS: KETUA PRM & DEWAN PEMBINA */}
                            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                                {/* Ketua PRM */}
                                <div className="text-center">
                                    <h3 className="font-display text-sm font-bold text-karo-maroon mb-4 uppercase tracking-wider">Ketua PRM (Organisasi Penaung)</h3>
                                    {prmList.length > 0 ? (
                                        prmList.map(item => (
                                            <article key={item.id} className="overflow-hidden rounded-2xl bg-karo-black shadow-lg max-w-xs mx-auto">
                                                <img src={item.foto_url || 'https://via.placeholder.com/300'} alt={item.nama} className="aspect-[3/4] w-full object-cover" />
                                                <div className="p-4 border-t-2 border-karo-gold">
                                                    <p className="text-[10px] uppercase font-semibold text-karo-gold">{item.jabatan}</p>
                                                    <h4 className="font-display text-sm font-bold text-karo-ivory mt-1">{item.nama}</h4>
                                                </div>
                                            </article>
                                        ))
                                    ) : (
                                        <div className="rounded-2xl bg-karo-black p-6 text-karo-ivory max-w-xs mx-auto border-2 border-karo-gold">
                                            <p className="text-xs text-karo-gold font-bold">KETUA PRM</p>
                                            <p className="text-sm font-semibold mt-2">Belum diatur di Database</p>
                                        </div>
                                    )}
                                </div>

                                {/* Dewan Pembina */}
                                <div className="text-center">
                                    <h3 className="font-display text-sm font-bold text-karo-maroon mb-4 uppercase tracking-wider">Dewan Pembina</h3>
                                    <div className="grid gap-4 sm:grid-cols-2 max-w-md mx-auto">
                                        {pembinaList.map((item, i) => (
                                            <Reveal key={item.id} delay={i * 0.05}>
                                                <article className="overflow-hidden rounded-2xl bg-karo-black shadow-lg">
                                                    <img src={item.foto_url || 'https://via.placeholder.com/300'} alt={item.nama} className="aspect-[3/4] w-full object-cover" />
                                                    <div className="p-3 border-t-2 border-karo-gold">
                                                        <p className="text-[9px] uppercase font-semibold text-karo-gold">{item.jabatan}</p>
                                                        <h4 className="font-display text-xs font-bold text-karo-ivory mt-1">{item.nama}</h4>
                                                    </div>
                                                </article>
                                            </Reveal>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* GARIS PENGHUBUNG */}
                            <div className="flex justify-center"><div className="w-0.5 h-10 bg-karo-gold/60" /></div>

                            {/* 2. KETUA UMUM ARON */}
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

                            {/* GARIS PENGHUBUNG */}
                            <div className="flex justify-center"><div className="w-0.5 h-10 bg-karo-gold/60" /></div>

                            {/* 3. WAKIL KETUA, SEKRETARIS & BENDAHARA */}
                            <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
                                {/* Waka 1 & Sekretaris */}
                                <div className="space-y-6">
                                    {wakilList[0] && (
                                        <div className="flex items-center gap-4 bg-karo-black p-4 rounded-2xl text-karo-ivory shadow-lg">
                                            <img src={wakilList[0].foto_url || 'https://via.placeholder.com/150'} alt={wakilList[0].nama} className="h-16 w-16 rounded-xl object-cover border border-karo-gold" />
                                            <div>
                                                <p className="text-xs font-bold text-karo-gold uppercase tracking-wider">{wakilList[0].jabatan}</p>
                                                <h4 className="font-display text-base font-bold mt-0.5">{wakilList[0].nama}</h4>
                                            </div>
                                        </div>
                                    )}
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {sekretarisList.map(item => (
                                            <div key={item.id} className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-3 text-center shadow-md">
                                                <img src={item.foto_url || 'https://via.placeholder.com/200'} alt={item.nama} className="aspect-square w-full object-cover rounded-xl" />
                                                <p className="text-[10px] text-amber-700 mt-2 font-semibold">{item.jabatan}</p>
                                                <h5 className="font-bold text-xs text-gray-900">{item.nama}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Waka 2 & Bendahara */}
                                <div className="space-y-6">
                                    {wakilList[1] && (
                                        <div className="flex items-center gap-4 bg-karo-black p-4 rounded-2xl text-karo-ivory shadow-lg">
                                            <img src={wakilList[1].foto_url || 'https://via.placeholder.com/150'} alt={wakilList[1].nama} className="h-16 w-16 rounded-xl object-cover border border-karo-gold" />
                                            <div>
                                                <p className="text-xs font-bold text-karo-gold uppercase tracking-wider">{wakilList[1].jabatan}</p>
                                                <h4 className="font-display text-base font-bold mt-0.5">{wakilList[1].nama}</h4>
                                            </div>
                                        </div>
                                    )}
                                    <div className="grid gap-4 sm:grid-cols-1 max-w-[220px] mx-auto">
                                        {bendaharaList.map(item => (
                                            <div key={item.id} className="rounded-2xl bg-purple-500/10 border border-purple-500/30 p-3 text-center shadow-md">
                                                <img src={item.foto_url || 'https://via.placeholder.com/200'} alt={item.nama} className="aspect-square w-full object-cover rounded-xl" />
                                                <p className="text-[10px] text-purple-700 mt-2 font-semibold">{item.jabatan}</p>
                                                <h5 className="font-bold text-xs text-gray-900">{item.nama}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* GARIS PENGHUBUNG KE DIVISI */}
                            <div className="flex justify-center"><div className="w-0.5 h-10 bg-karo-gold/60" /></div>

                            {/* 4. 6 KOTAK DIVISI (Sesuai Diagram) */}
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                                {daftarDivisi.map((div, idx) => {
                                    const anggotaDivisi = getAnggotaDivisi(div.keyword);
                                    return (
                                        <div key={idx} className={`rounded-2xl border-2 ${div.warna} p-4 shadow-lg flex flex-col justify-between`}>
                                            <div>
                                                <div className={`flex items-center gap-2 p-3 rounded-xl ${div.headerBg} mb-4 shadow`}>
                                                    <Users className="h-5 w-5 shrink-0" />
                                                    <h4 className="font-display text-sm font-bold tracking-wider uppercase">{div.namaDivisi}</h4>
                                                </div>

                                                <div className="space-y-2.5">
                                                    {anggotaDivisi.length > 0 ? (
                                                        anggotaDivisi.map(member => (
                                                            <div key={member.id} className="flex items-center gap-3 bg-white/80 p-2.5 rounded-xl border border-black/5 shadow-sm">
                                                                <img src={member.foto_url || 'https://via.placeholder.com/100'} alt={member.nama} className="h-10 w-10 rounded-lg object-cover border" />
                                                                <div className="min-w-0 flex-1">
                                                                    <p className="text-[10px] font-bold text-karo-maroon uppercase leading-none">{member.jabatan}</p>
                                                                    <p className="font-semibold text-xs text-gray-900 mt-0.5 truncate">{member.nama}</p>
                                                                </div>
                                                            </div>
                                                        ))
                                                    ) : (
                                                        <p className="text-xs text-gray-500 text-center py-4 italic">Belum ada data anggota untuk divisi ini.</p>
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