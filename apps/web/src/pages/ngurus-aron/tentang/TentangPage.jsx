import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit3, CheckCircle2, AlertCircle, Upload, Image as ImageIcon } from 'lucide-react';

export default function TentangAdminPage() {
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [form, setForm] = useState({ section_type: 'history', title: '', description: '', year: '', image_url: '' });
    const [editId, setEditId] = useState(null);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('about_page').select('*').order('created_at', { ascending: true });
        if (!error && data) setSections(data);
        setLoading(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Fungsi Upload Foto ke Supabase Storage (Bucket: community-assets)
    const handleFileUpload = async (e) => {
        try {
            setUploading(true);
            setMsg({ type: '', text: '' });
            const file = e.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `tentang_${Date.now()}.${fileExt}`;
            const filePath = `${fileName}`;

            // Mengunggah ke bucket Supabase 'community-assets'
            const { error: uploadError } = await supabase.storage
                .from('community-assets')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            // Mendapatkan Public URL dari file yang diunggah
            const { data: { publicUrl } } = supabase.storage
                .from('community-assets')
                .getPublicUrl(filePath);

            setForm({ ...form, image_url: publicUrl });
            setMsg({ type: 'success', text: 'Foto berhasil diunggah ke server!' });
        } catch (error) {
            setMsg({ type: 'error', text: 'Gagal mengunggah foto: ' + error.message });
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        if (editId) {
            // Update data
            const { error } = await supabase.from('about_page').update(form).eq('id', editId);
            if (!error) {
                setMsg({ type: 'success', text: 'Konten berhasil diperbarui!' });
                setEditId(null);
                setForm({ section_type: 'history', title: '', description: '', year: '', image_url: '' });
                fetchData();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        } else {
            // Insert data baru
            const { error } = await supabase.from('about_page').insert([form]);
            if (!error) {
                setMsg({ type: 'success', text: 'Konten baru berhasil ditambahkan!' });
                setForm({ section_type: 'history', title: '', description: '', year: '', image_url: '' });
                fetchData();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        }
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setForm({
            section_type: item.section_type,
            title: item.title,
            description: item.description || '',
            year: item.year || '',
            image_url: item.image_url || ''
        });
    };

    const handleDelete = async (id) => {
        if (confirm('Hapus konten ini?')) {
            await supabase.from('about_page').delete().eq('id', id);
            fetchData();
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800">Manajemen Halaman Tentang Kami & Sejarah</h3>
                <p className="text-sm text-gray-500 mt-1">Kelola narasi profil organisasi dan linimasa sejarah yang tampil di halaman publik.</p>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            {/* Form Tambah/Edit */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">{editId ? 'Edit Konten' : 'Tambah Konten Baru'}</h4>
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Tipe Bagian</label>
                        <select name="section_type" value={form.section_type} onChange={handleChange} className="w-full rounded-xl border px-4 py-2.5 text-sm bg-white">
                            <option value="profile">Profil / Tentang Kami</option>
                            <option value="history">Sejarah (Timeline)</option>
                        </select>
                    </div>
                    {form.section_type === 'history' && (
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Tahun (Cth: 2012)</label>
                            <input type="text" name="year" value={form.year} onChange={handleChange} placeholder="2012" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                    )}
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Judul</label>
                        <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="Judul kegiatan / subjek" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Deskripsi / Narasi</label>
                        <textarea name="description" rows={3} value={form.description} onChange={handleChange} required placeholder="Tulis narasi lengkap di sini..." className="w-full rounded-xl border px-4 py-2.5 text-sm resize-none" />
                    </div>

                    {/* Fitur Upload Foto */}
                    {form.section_type === 'profile' && (
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Upload Foto Profil / Dokumentasi</label>
                            <div className="flex items-center gap-4">
                                <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors">
                                    <Upload className="h-4 w-4 text-amber-600" />
                                    {uploading ? 'Mengunggah...' : 'Pilih File Foto'}
                                    <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" disabled={uploading} />
                                </label>
                                {form.image_url && (
                                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                        <ImageIcon className="h-4 w-4" /> Foto Terunggah
                                    </span>
                                )}
                            </div>
                            {form.image_url && (
                                <div className="mt-3">
                                    <img src={form.image_url} alt="Pratinjau" className="h-24 w-auto rounded-xl border object-cover shadow-sm" />
                                </div>
                            )}
                        </div>
                    )}

                    <div className="sm:col-span-2 flex gap-3">
                        <button type="submit" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                            {editId ? 'Perbarui Konten' : 'Simpan Konten'}
                        </button>
                        {editId && (
                            <button type="button" onClick={() => { setEditId(null); setForm({ section_type: 'history', title: '', description: '', year: '', image_url: '' }); }} className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700">
                                Batal
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* List Data */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Daftar Konten Tersimpan</h4>
                {loading ? (
                    <p className="text-sm text-gray-400 py-4 text-center animate-pulse">Memuat data...</p>
                ) : sections.length === 0 ? (
                    <p className="text-sm text-gray-400 py-4 text-center">Belum ada konten.</p>
                ) : (
                    <div className="space-y-3">
                        {sections.map((item) => (
                            <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50/60">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full">
                                        {item.section_type.toUpperCase()} {item.year ? `• ${item.year}` : ''}
                                    </span>
                                    <h5 className="font-semibold text-sm text-gray-900 mt-1">{item.title}</h5>
                                    <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{item.description}</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <button onClick={() => handleEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                                        <Edit3 className="h-4 w-4" />
                                    </button>
                                    <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hapus">
                                        <Trash2 className="h-4 w-4" />
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