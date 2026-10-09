import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, Trash2, CheckCircle, Mail, Phone, MapPin, Gift, MessageCircle, ShieldCheck, Briefcase, GraduationCap } from 'lucide-react';

export default function AnggotaBaruPage() {
    const [pendaftarList, setPendaftarList] = useState([]);
    const [loading, setLoading] = useState(true);

    const WHATSAPP_GROUP_LINK = 'https://chat.whatsapp.com/LCb9AF73mLSBdnvL7UWB0o';

    useEffect(() => {
        fetchPendaftar();
    }, []);

    const fetchPendaftar = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('new_members')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setPendaftarList(data);
        }
        setLoading(false);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Yakin ingin menghapus data pendaftar ini?')) return;
        const { error } = await supabase.from('new_members').delete().eq('id', id);
        if (!error) fetchPendaftar();
        else alert('Gagal menghapus data.');
    };

    const handleApprove = async (member) => {
        if (!window.confirm(`Terima ${member.nama} sebagai anggota resmi Aron Rudang Mayang?`)) return;

        try {
            // PERBAIKAN: Menambahkan status_aktivitas ke dalam data yang disimpan
            const { error: insertError } = await supabase.from('members').insert([{
                name: member.nama,
                phone: member.no_hp,
                address: `${member.domisili} (Asal: ${member.asal_kota})`,
                status_aktif: true,
                status_aktivitas: member.status_aktivitas || 'Lainnya', // <--- DITAMBAHKAN DI SINI
                bebere: member.bebere,
                asal_kota: member.asal_kota,
                email: member.email,
                tanggal_lahir: member.tanggal_lahir,
                'gol-dar': member.golongan_darah,
                sosmed: member.sosmed || '',
                kontak_darurat_nama: member.kontak_darurat_nama || '',
                kontak_darurat_hubungan: member.kontak_darurat_hubungan || '',
                kontak_darurat_no_hp: member.kontak_darurat_no_hp || ''
            }]);

            if (insertError) throw insertError;

            // Hapus dari daftar pendaftar setelah berhasil dipindah ke members
            await supabase.from('new_members').delete().eq('id', member.id);

            const openWa = window.confirm(
                `Berhasil! ${member.nama} telah diterima.\n\nKlik OK untuk membuka tautan Grup WhatsApp atau menyapa anggota via WhatsApp.`
            );

            if (openWa) {
                const cleanPhone = member.no_hp.startsWith('0') ? '62' + member.no_hp.slice(1) : member.no_hp;
                const welcomeMessage = encodeURIComponent(`Mejuah-juah ${member.nama}, selamat bergabung di keluarga besar Aron Rudang Mayang Balikpapan! Silakan bergabung ke grup WhatsApp ARON melalui tautan berikut: ${WHATSAPP_GROUP_LINK}`);
                window.open(`https://wa.me/${cleanPhone}?text=${welcomeMessage}`, '_blank');
            }

            fetchPendaftar();
        } catch (err) {
            alert('Gagal menyetujui anggota: ' + err.message);
        }
    };

    // Helper untuk memberi warna badge berdasarkan status aktivitas
    const getStatusBadge = (status) => {
        if (!status) return { bg: 'bg-gray-100', text: 'text-gray-600', icon: null };
        const s = status.toLowerCase();
        if (s.includes('kerja') || s.includes('wirausaha') || s.includes(' PNS')) {
            return { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200', icon: <Briefcase className="h-3 w-3 mr-1" /> };
        }
        if (s.includes('kuliah') || s.includes('pelajar') || s.includes('siswa') || s.includes('mahasiswa')) {
            return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200', icon: <GraduationCap className="h-3 w-3 mr-1" /> };
        }
        return { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200', icon: <Users className="h-3 w-3 mr-1" /> };
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Pendaftar Anggota Baru</h3>
                    <p className="text-sm text-gray-500 mt-1">Daftar calon anggota yang mengisi formulir "Bergabung Bersama Kami".</p>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                    {pendaftarList.length} Pendaftar
                </span>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                {loading ? (
                    <p className="text-sm text-gray-400 py-6 text-center animate-pulse">Memuat data pendaftar...</p>
                ) : pendaftarList.length === 0 ? (
                    <div className="text-center py-12">
                        <Users className="mx-auto h-12 w-12 text-gray-300" />
                        <p className="mt-2 text-sm font-semibold text-gray-600">Belum ada pendaftar baru.</p>
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {pendaftarList.map((item) => {
                            const badge = getStatusBadge(item.status_aktivitas);

                            return (
                                <div key={item.id} className="rounded-2xl border border-gray-200 bg-gray-50/60 p-5 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                {/* Badge Status Aktivitas Dinamis */}
                                                <span className={`inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${badge.bg} ${badge.text} ${badge.border}`}>
                                                    {badge.icon}
                                                    {item.status_aktivitas || 'Belum Diisi'}
                                                </span>
                                                <h4 className="mt-2 text-base font-bold text-gray-900">{item.nama}</h4>
                                                <p className="text-xs text-gray-500 mt-0.5">
                                                    {item.jenis_kelamin} {item.bebere ? `• Bebere: ${item.bebere}` : ''} • Gol. Darah: {item.golongan_darah}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 space-y-1.5 text-xs text-gray-600 border-t border-gray-200/60 pt-3">
                                            {item.tanggal_lahir && (
                                                <p className="flex items-center gap-2 font-medium text-amber-700">
                                                    <Gift className="h-3.5 w-3.5 text-amber-500" /> {item.tanggal_lahir}
                                                </p>
                                            )}
                                            <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" /> {item.asal_kota} → {item.domisili}</p>
                                            <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gray-400 shrink-0" /> {item.no_hp}</p>
                                            <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gray-400 shrink-0" /> {item.email}</p>

                                            {item.sosmed && (
                                                <p className="flex items-center gap-2"><MessageCircle className="h-3.5 w-3.5 text-gray-400 shrink-0" /> {item.sosmed}</p>
                                            )}

                                            {item.kontak_darurat_nama && (
                                                <div className="mt-3 pt-3 border-t border-dashed border-gray-200">
                                                    <p className="font-semibold text-gray-700 text-[10px] uppercase tracking-wider mb-1.5 flex items-center gap-1">
                                                        <ShieldCheck className="h-3 w-3 text-red-500" /> Kontak Darurat
                                                    </p>
                                                    <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-gray-400 shrink-0" /> {item.kontak_darurat_nama} <span className="text-gray-400">({item.kontak_darurat_hubungan})</span></p>
                                                    <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gray-400 shrink-0" /> {item.kontak_darurat_no_hp}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-200/60">
                                        <button onClick={() => handleDelete(item.id)} className="flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 border border-red-100 transition-colors">
                                            <Trash2 className="h-3.5 w-3.5" /> Tolak
                                        </button>
                                        <button onClick={() => handleApprove(item)} className="flex items-center gap-1 rounded-xl px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm">
                                            <CheckCircle className="h-3.5 w-3.5" /> Terima & Sambut
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}