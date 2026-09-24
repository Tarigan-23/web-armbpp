import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';
import { UserPlus, CheckCircle2, AlertCircle, ShieldCheck, Calendar, Heart, Users } from 'lucide-react';

export default function GabungPage() {
    const [formData, setFormData] = useState({
        nama: '',
        jenis_kelamin: 'Laki-laki',
        bebere: '',
        asal_kota: '',
        domisili: 'Balikpapan',
        no_hp: '',
        email: '',
        status_aktivitas: 'Bekerja',
        golongan_darah: 'O',
        tanggal_lahir: ''
    });
    const [loading, setLoading] = useState(false);
    const [statusMsg, setStatusMsg] = useState({ type: '', text: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMsg({ type: '', text: '' });

        try {
            // Simpan data pendaftar baru ke tabel Supabase (pastikan kolom tanggal_lahir ada di tabel new_members)
            const { error: dbError } = await supabase
                .from('new_members')
                .insert([formData]);

            if (dbError) throw dbError;

            setStatusMsg({
                type: 'success',
                text: 'Pendaftaran berhasil dikirim! Data Anda telah masuk ke sistem panitia Aron Rudang Mayang.'
            });

            // Reset Form
            setFormData({
                nama: '', jenis_kelamin: 'Laki-laki', bebere: '',
                asal_kota: '', domisili: 'Balikpapan', no_hp: '',
                email: '', status_aktivitas: 'Bekerja', golongan_darah: 'O',
                tanggal_lahir: ''
            });

        } catch (err) {
            setStatusMsg({
                type: 'error',
                text: err.message || 'Terjadi kesalahan saat mengirim pendaftaran. Silakan coba lagi.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-karo-black font-sans text-karo-ivory antialiased">
            <Helmet>
                <title>Bergabung Bersama Kami — Aron Rudang Mayang</title>
            </Helmet>
            <Navbar />

            <main className="py-28 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <Reveal>
                        <div className="text-center">
                            <span className="rounded-full bg-karo-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-karo-gold">
                                Keluarga Besar Perantauan
                            </span>
                            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-karo-ivory sm:text-4xl">
                                Bergabung Bersama Aron Rudang Mayang
                            </h1>
                            <p className="mt-2 text-sm text-karo-ivory/70">
                                Mari pererat tali persaudaraan, lestarikan budaya, dan saling menopang di tanah rantau Kota Balikpapan.
                            </p>
                        </div>
                    </Reveal>

                    {/* Kotak Syarat dan Ketentuan */}
                    <Reveal delay={0.1}>
                        <div className="mt-10 rounded-3xl border border-karo-gold/30 bg-karo-ivory/[0.03] p-6 sm:p-8 backdrop-blur-md">
                            <div className="flex items-center gap-3 text-karo-gold">
                                <ShieldCheck className="h-6 w-6 shrink-0" />
                                <h2 className="font-display text-lg font-bold">Syarat & Ketentuan Bergabung</h2>
                            </div>
                            <ul className="mt-4 space-y-3 text-xs sm:text-sm text-karo-ivory/80">
                                <li className="flex items-start gap-2">
                                    <span className="text-karo-gold font-bold">1.</span>
                                    <span>Merupakan perantau atau warga keturunan suku Karo yang berdomisili di Kota Balikpapan dan sekitarnya.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-karo-gold font-bold">2.</span>
                                    <span>Memiliki komitmen untuk menjunjung tinggi nilai kekeluargaan, saling menghormati, dan berpartisipasi dalam semangat gotong royong (<span className="text-karo-gold font-semibold">aron</span>).</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-karo-gold font-bold">3.</span>
                                    <span>Bersedia mematuhi Anggaran Dasar / Anggaran Rumah Tangga (AD/ART) serta keputusan musyawarah komunitas.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-karo-gold font-bold">4.</span>
                                    <span>Menjaga nama baik organisasi Aron Rudang Mayang baik di dalam maupun di luar kegiatan komunitas.</span>
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* Formulir Pendaftaran */}
                    <Reveal delay={0.2}>
                        <div className="mt-8 rounded-3xl border border-karo-gold/30 bg-karo-black/60 p-8 shadow-2xl backdrop-blur-md">
                            <h2 className="font-display text-xl font-bold text-karo-gold mb-6 border-b border-karo-gold/20 pb-4">
                                Formulir Pendaftaran Anggota Baru
                            </h2>

                            {statusMsg.text && (
                                <div className={`mb-6 flex items-center gap-3 rounded-2xl p-4 text-xs font-medium ${statusMsg.type === 'success'
                                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                                        : 'bg-red-500/10 border border-red-500/30 text-red-450 text-red-400'
                                    }`}>
                                    {statusMsg.type === 'success' ? <CheckCircle2 className="h-5 w-5 shrink-0" /> : <AlertCircle className="h-5 w-5 shrink-0" />}
                                    <span>{statusMsg.text}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="sm:col-span-2">
                                    <label className="block text-xs font-semibold text-karo-gold">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        name="nama"
                                        required
                                        value={formData.nama}
                                        onChange={handleChange}
                                        placeholder="Contoh: Brando Ginting"
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-ivory/5 px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Jenis Kelamin</label>
                                    <select
                                        name="jenis_kelamin"
                                        value={formData.jenis_kelamin}
                                        onChange={handleChange}
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-black px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    >
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Ulang Tahun (Tanggal & Bulan)</label>
                                    <input
                                        type="text"
                                        name="tanggal_lahir"
                                        required
                                        value={formData.tanggal_lahir}
                                        onChange={handleChange}
                                        placeholder="Contoh: 13 November"
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-ivory/5 px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Bebere / Marga Ibu (Opsional)</label>
                                    <input
                                        type="text"
                                        name="bebere"
                                        value={formData.bebere}
                                        onChange={handleChange}
                                        placeholder="Contoh: Sembiring"
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-ivory/5 px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Asal Kota / Kampung</label>
                                    <input
                                        type="text"
                                        name="asal_kota"
                                        required
                                        value={formData.asal_kota}
                                        onChange={handleChange}
                                        placeholder="Contoh: Kabanjahe / Berastagi"
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-ivory/5 px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Domisili di Balikpapan</label>
                                    <input
                                        type="text"
                                        name="domisili"
                                        required
                                        value={formData.domisili}
                                        onChange={handleChange}
                                        placeholder="Contoh: Balikpapan Selatan"
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-ivory/5 px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Nomor HP / WhatsApp Aktif</label>
                                    <input
                                        type="tel"
                                        name="no_hp"
                                        required
                                        value={formData.no_hp}
                                        onChange={handleChange}
                                        placeholder="081234567890"
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-ivory/5 px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Email Aktif</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="email@domain.com"
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-ivory/5 px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Status Aktivitas</label>
                                    <select
                                        name="status_aktivitas"
                                        value={formData.status_aktivitas}
                                        onChange={handleChange}
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-black px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    >
                                        <option value="Bekerja">Bekerja</option>
                                        <option value="Kuliah">Kuliah</option>
                                        <option value="Wiraswasta">Wiraswasta</option>
                                        <option value="Lainnya">Lainnya</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-karo-gold">Golongan Darah</label>
                                    <select
                                        name="golongan_darah"
                                        value={formData.golongan_darah}
                                        onChange={handleChange}
                                        className="mt-1 w-full rounded-xl border border-karo-ivory/20 bg-karo-black px-4 py-3 text-sm text-karo-ivory outline-none focus:border-karo-gold"
                                    >
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>
                                        <option value="O">O</option>
                                        <option value="Tidak Tahu">Tidak Tahu</option>
                                    </select>
                                </div>

                                <div className="sm:col-span-2 mt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="flex w-full items-center justify-center gap-2 rounded-full bg-karo-gold py-4 text-sm font-semibold text-karo-black transition-transform active:scale-[0.98]"
                                    >
                                        <UserPlus className="h-4 w-4" />
                                        {loading ? 'Mengirim Pendaftaran...' : 'Kirim Pendaftaran Anggota'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </main>
        </div>
    );
}