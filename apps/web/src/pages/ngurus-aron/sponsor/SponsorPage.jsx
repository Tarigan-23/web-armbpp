import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit3, Upload, Image as ImageIcon, Store, CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function SponsorAdminPage() {
    const [sponsors, setSponsors] = useState([]);
    const [form, setForm] = useState({ name: '', category: 'Kuliner & Kopi', location: '', map_url: '', description: '', image_url: '', whatsapp: '' });
    const [editId, setEditId] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchSponsors();
    }, []);

    const fetchSponsors = async () => {
        setLoading(true);
        const { data } = await supabase.from('sponsors').select('*').order('created_at', { ascending: false });
        if (data) setSponsors(data);
        setLoading(false);
    };

    const handleFileUpload = async (e) => {
        try {
            setUploading(true);
            const file = e.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `sponsor_${Date.now()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage.from('community-assets').upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage.from('community-assets').getPublicUrl(fileName);
            setForm({ ...form, image_url: publicUrl });
            setMsg({ type: 'success', text: 'Foto sponsor berhasil diunggah!' });
        } catch (error) {
            setMsg({ type: 'error', text: 'Gagal upload: ' + error.message });
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        if (editId) {
            // Proses Update
            const { error } = await supabase.from('sponsors').update(form).eq('id', editId);
            if (!error) {
                setMsg({ type: 'success', text: 'Katalog sponsor berhasil diperbarui!' });
                resetForm();
                fetchSponsors();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        } else {
            // Proses Tambah Baru
            const { error } = await supabase.from('sponsors').insert([form]);
            if (!error) {
                setMsg({ type: 'success', text: 'Sponsor/Toko berhasil ditambahkan!' });
                resetForm();
                fetchSponsors();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        }
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setForm({
            name: item.name || '',
            category: item.category || '',
            location: item.location || '',
            map_url: item.map_url || '',
            description: item.description || '',
            image_url: item.image_url || '',
            whatsapp: item.whatsapp || ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetForm = () => {
        setEditId(null);
        setForm({ name: '', category: 'Kuliner & Kopi', location: '', map_url: '', description: '', image_url: '', whatsapp: '' });
    };

    const handleDelete = async (id) => {
        if (confirm('Hapus sponsor ini?')) {
            await supabase.from('sponsors').delete().eq('id', id);
            fetchSponsors();
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Store className="h-5 w-5 text-amber-600" /> Manajemen Sponsor & UMKM Pendukung
                </h3>
                <p className="text-sm text-gray-500 mt-1">Kelola daftar kafe, toko, atau usaha milik anggota yang mensupport komunitas.</p>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            {/* Form Tambah / Edit */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-md font-bold text-gray-800">
                        {editId ? 'Edit Katalog Usaha / Sponsor' : 'Tambah Usaha / Sponsor Baru'}
                    </h4>
                    {editId && (
                        <button onClick={resetForm} className="flex items-center gap-1 text-xs text-red-600 font-semibold hover:underline">
                            <X className="h-3.5 w-3.5" /> Batal Edit
                        </button>
                    )}
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Usaha</label>
                        <input type="text" placeholder="Cth: Uis Nande Nino" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Kategori Usaha</label>
                        <input type="text" placeholder="Cth: Jual & Sewa Pakaian Adat" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Alamat / Lokasi Teks</label>
                        <input type="text" placeholder="Cth: Jl. MT Haryono, Balikpapan" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Link Google Maps (URL Map)</label>
                        <input type="url" placeholder="Cth: https://maps.app.goo.gl/..." value={form.map_url} onChange={e => setForm({ ...form, map_url: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">No WhatsApp (Format: 628...)</label>
                        <input type="text" placeholder="Cth: 6282134567890" value={form.whatsapp} onChange={e => setForm({ ...form, whatsapp: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Foto Usaha / Kedai</label>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-100">
                                <Upload className="h-4 w-4 text-amber-600" />
                                {uploading ? 'Mengunggah...' : 'Pilih Foto'}
                                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" disabled={uploading} />
                            </label>
                            {form.image_url && <span className="text-xs text-green-600 font-medium flex items-center gap-1"><ImageIcon className="h-4 w-4" /> Foto Siap</span>}
                        </div>
                        {form.image_url && <img src={form.image_url} alt="Pratinjau" className="mt-3 h-20 w-20 rounded-xl object-cover border" />}
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Deskripsi Singkat Usaha</label>
                        <textarea placeholder="Deskripsi layanan atau produk..." rows={3} value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm resize-none" />
                    </div>

                    <button type="submit" className="sm:col-span-2 rounded-full bg-black py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 transition-colors">
                        {editId ? 'Perbarui Katalog Sponsor' : 'Simpan Sponsor / Usaha'}
                    </button>
                </form>
            </div>

            {/* List Sponsor dengan Tombol Edit & Hapus */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Daftar Sponsor & UMKM ({sponsors.length})</h4>
                {loading ? <p className="text-sm text-gray-400">Memuat...</p> : (
                    <div className="space-y-3">
                        {sponsors.map(item => (
                            <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50">
                                <div className="flex items-center gap-4">
                                    <img src={item.image_url} alt={item.name} className="h-14 w-14 rounded-xl object-cover" />
                                    <div>
                                        <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">{item.category}</span>
                                        <h5 className="font-bold text-sm mt-1">{item.name}</h5>
                                        <p className="text-xs text-gray-500">📍 {item.location}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => handleEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit"><Edit3 className="h-4 w-4" /></button>
                                    <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus"><Trash2 className="h-4 w-4" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}