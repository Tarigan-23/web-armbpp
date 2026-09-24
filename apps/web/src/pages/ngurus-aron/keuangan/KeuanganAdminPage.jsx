import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Wallet, ArrowDownRight, ArrowUpRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function KeuanganAdminPage() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ type: 'masuk', title: '', amount: '', date: '', category: 'Iuran Kas' });
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('financial_reports').select('*').order('created_at', { ascending: false });
        if (!error && data) setTransactions(data);
        setLoading(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        // Jika tipe 'info', pastikan amount bernilai 0 agar tidak error numeric
        const payload = {
            ...form,
            amount: form.type === 'info' ? 0 : Number(form.amount) || 0
        };

        const { error } = await supabase.from('financial_reports').insert([payload]);
        if (!error) {
            setMsg({ type: 'success', text: 'Catatan keuangan berhasil ditambahkan!' });
            setForm({ type: 'masuk', title: '', amount: '', date: '', category: 'Iuran Kas' });
            fetchData();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Hapus catatan keuangan ini?')) {
            const { error } = await supabase.from('financial_reports').delete().eq('id', id);
            if (!error) {
                setMsg({ type: 'success', text: 'Catatan keuangan berhasil dihapus!' });
                fetchData();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-amber-600" /> Manajemen Laporan Keuangan & Kas
                </h3>
                <p className="text-sm text-gray-500 mt-1">Tambah atau hapus data uang masuk dan uang keluar yang tampil transparan di halaman publik.</p>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            {/* Form Tambah Transaksi */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Tambah Catatan Keuangan Baru</h4>
                <form onSubmit={handleAdd} className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Jenis Transaksi</label>
                        <select name="type" value={form.type} onChange={handleChange} className="w-full rounded-xl border px-4 py-2.5 text-sm bg-white">
                            <option value="masuk">Uang Masuk (Pemasukan / Iuran)</option>
                            <option value="keluar">Uang Keluar (Pengeluaran)</option>
                            <option value="info">Catatan / Pengumuman Rapat</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Tanggal (Cth: 15 Juli 2026)</label>
                        <input type="text" name="date" value={form.date} onChange={handleChange} required placeholder="15 Juli 2026" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Keterangan / Judul Transaksi</label>
                        <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="Contoh: Pembayaran Iuran Kas Bulan Juli" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    {form.type !== 'info' && (
                        <>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Nominal (Rupiah)</label>
                                <input type="number" name="amount" value={form.amount} onChange={handleChange} required placeholder="500000" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Kategori</label>
                                <input type="text" name="category" value={form.category} onChange={handleChange} placeholder="Iuran Kas / Donasi / Operasional" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                            </div>
                        </>
                    )}
                    <div className="sm:col-span-2">
                        <button type="submit" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md">
                            Simpan Catatan
                        </button>
                    </div>
                </form>
            </div>

            {/* List Riwayat */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Riwayat Keuangan Tercatat ({transactions.length})</h4>
                {loading ? (
                    <p className="text-sm text-gray-400 py-6 text-center animate-pulse">Memuat riwayat...</p>
                ) : (
                    <div className="space-y-3">
                        {transactions.map(item => (
                            <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50/60">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${item.type === 'masuk' ? 'bg-green-100 text-green-800' : item.type === 'keluar' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'
                                            }`}>
                                            {item.type.toUpperCase()} {item.category ? `• ${item.category}` : ''}
                                        </span>
                                        <span className="text-xs text-gray-400">{item.date}</span>
                                    </div>
                                    <h5 className="font-semibold text-sm text-gray-900 mt-1">{item.title}</h5>
                                    {item.amount > 0 && (
                                        <p className={`text-xs font-bold mt-0.5 ${item.type === 'masuk' ? 'text-green-600' : 'text-red-600'}`}>
                                            Rp {Number(item.amount).toLocaleString('id-ID')}
                                        </p>
                                    )}
                                </div>
                                <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}