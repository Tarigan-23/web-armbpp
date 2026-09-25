import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Users, Trash2, CheckCircle, Mail, Phone, MapPin, Gift, MessageCircle } from 'lucide-react';

export default function AnggotaBaruPage() {
    const [pendaftarList, setPendaftarList] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ganti tautan di bawah ini dengan Link Grup WhatsApp resmi Aron Rudang Mayang Anda
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
        if (!error) {
            fetchPendaftar();
        } else {
            alert('Gagal menghapus data.');
        }
    };

    const handleApprove = async (member) => {
        if (!window.confirm(`Terima ${member.nama} sebagai anggota resmi Aron Rudang Mayang?`)) return;

        try {
            // 1. Pindahkan data ke tabel members utama
            const { error: insertError } = await supabase.from('members').insert([{
                name: member.nama,
                phone: member.no_hp,
                address: `${member.domisili} (Asal: ${member.asal_kota})`,
                status_aktif: true
            }]);

            if (insertError) throw insertError;

            // 2. Hapus dari tabel new_members
            await supabase.from('new_members').delete().eq('id', member.id);

            // 3. Berikan opsi untuk langsung membuka WhatsApp Group atau chat ke nomor pendaftar
            const openWa = window.confirm(
                `Berhasil! ${member.nama} telah diterima dan masuk ke Daftar Anggota.\n\nKlik OK untuk membuka tautan Grup WhatsApp atau menyapa anggota via WhatsApp.`
            );

            if (openWa) {
                // Format pesan otomatis ke nomor HP pendaftar atau arahkan ke grup
                const cleanPhone = member.no_hp.startsWith('0') ? '62' + member.no_hp.slice(1) : member.no_hp;
                const welcomeMessage = encodeURIComponent(`Mejuah-juah ${member.nama}, selamat bergabung di keluarga besar Aron Rudang Mayang Balikpapan! Silakan bergabung ke grup WhatsApp ARON melalui tautan berikut: ${WHATSAPP_GROUP_LINK}`);

                // Membuka chat WhatsApp langsung ke nomor pendaftar
                window.open(`https://wa.me/${cleanPhone}?text=${welcomeMessage}`, '_blank');
            }

            fetchPendaftar();
        } catch (err) {
            alert('Gagal menyetujui anggota: ' + err.message);
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold text-gray-800">Pendaftar Anggota Baru (New Member)</h3>
                    <p className="text-sm text-gray-500 mt-1">Daftar calon anggota yang mengisi formulir "Bergabung Bersama Kami" dari halaman publik.</p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
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
                        <p className="text-xs text-gray-400">Calon anggota yang mendaftar di web publik akan muncul di sini.</p>
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
                        {pendaftarList.map((item) => (
                            <div key={item.id} className="rounded-2xl border border-gray-200 bg-gray-50/60 p-5 flex flex-col justify-between space-y-4">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-[10px] font-bold uppercase tracking-wider bg-karo-maroon/10 text-karo-maroon px-2.5 py-0.5 rounded-full">
                                                {item.status_aktivitas} • Darah {item.golongan_darah}
                                            </span>
                                            <h4 className="mt-2 font-display text-base font-bold text-gray-900">{item.nama}</h4>
                                            <p className="text-xs text-gray-500">Kelamin: {item.jenis_kelamin} {item.bebere ? `• Bebere: ${item.bebere}` : ''}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-1.5 text-xs text-gray-600 border-t border-gray-200/60 pt-3">
                                        {/* Menampilkan Ulang Tahun */}
                                        {item.tanggal_lahir && (
                                            <p className="flex items-center gap-2 font-semibold text-amber-700">
                                                <Gift className="h-3.5 w-3.5 text-amber-500" /> Ulang Tahun: {item.tanggal_lahir}
                                            </p>
                                        )}
                                        <p className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-gray-400" /> Asal: {item.asal_kota} | Domisili: {item.domisili}</p>
                                        <p className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gray-400" /> {item.no_hp}</p>
                                        <p className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gray-400" /> {item.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center justify-end gap-2 pt-2 border-t border-gray-200/60">
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="flex items-center gap-1 rounded-xl px-3 py-2 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                                    >
                                        <Trash2 className="h-3.5 w-3.5" /> Tolak
                                    </button>
                                    <button
                                        onClick={() => handleApprove(item)}
                                        className="flex items-center gap-1 rounded-xl px-4 py-2 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-sm"
                                    >
                                        <CheckCircle className="h-3.5 w-3.5" /> Terima & Sambut WA
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}