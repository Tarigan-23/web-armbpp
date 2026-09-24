import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { MessageSquare, Upload, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SambutanAdminPage() {
    const [form, setForm] = useState({ title: '', content: '', name: '', position: '', image_url: '' });
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchSambutan();
    }, []);

    const fetchSambutan = async () => {
        setLoading(true);
        const { data } = await supabase.from('sambutan').select('*').limit(1).single();
        if (data) {
            setForm(data);
            setId(data.id);
        }
        setLoading(false);
    };

    const handleFileUpload = async (e) => {
        try {
            setUploading(true);
            const file = e.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `sambutan_${Date.now()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage.from('community-assets').upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage.from('community-assets').getPublicUrl(fileName);
            setForm({ ...form, image_url: publicUrl });
            setMsg({ type: 'success', text: 'Foto ketua berhasil diunggah!' });
        } catch (error) {
            setMsg({ type: 'error', text: 'Gagal upload foto: ' + error.message });
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        let error;
        if (id) {
            const res = await supabase.from('sambutan').update(form).eq('id', id);
            error = res.error;
        } else {
            const res = await supabase.from('sambutan').insert([form]);
            error = res.error;
        }

        if (!error) {
            setMsg({ type: 'success', text: 'Sambutan ketua berhasil diperbarui!' });
            fetchSambutan();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-amber-600" /> Manajemen Sambutan Ketua Umum
                </h3>
                <p className="text-sm text-gray-500 mt-1">Ubah teks sambutan, nama ketua, jabatan, dan foto ketua umum.</p>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                {loading ? <p className="text-sm text-gray-400">Memuat data...</p> : (
                    <form onSubmit={handleSave} className="grid gap-4 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Judul Sambutan</label>
                            <input
                                type="text"
                                value={form.title}
                                onChange={e => setForm({ ...form, title: e.target.value })}
                                required
                                className="w-full rounded-xl border px-4 py-2.5 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Ketua</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required
                                className="w-full rounded-xl border px-4 py-2.5 text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Jabatan</label>
                            <input
                                type="text"
                                value={form.position}
                                onChange={e => setForm({ ...form, position: e.target.value })}
                                required
                                className="w-full rounded-xl border px-4 py-2.5 text-sm"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Foto Ketua Umum</label>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors">
                                    <Upload className="h-4 w-4 text-amber-600" />
                                    {uploading ? 'Mengunggah Foto...' : 'Unggah Foto Baru'}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileUpload}
                                        className="hidden"
                                        disabled={uploading}
                                    />
                                </label>
                                <span className="text-xs text-gray-500">Atau masukkan URL gambar secara manual:</span>
                            </div>

                            <input
                                type="text"
                                value={form.image_url}
                                onChange={e => setForm({ ...form, image_url: e.target.value })}
                                placeholder="https://..."
                                required
                                className="w-full rounded-xl border px-4 py-2.5 text-sm mt-2"
                            />

                            {form.image_url && (
                                <div className="mt-3">
                                    <p className="text-[11px] text-gray-400 mb-1">Pratinjau Foto:</p>
                                    <img src={form.image_url} alt="Pratinjau Ketua" className="h-24 w-20 rounded-xl object-cover border shadow-sm" />
                                </div>
                            )}
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Isi Sambutan</label>
                            <textarea
                                rows={5}
                                value={form.content}
                                onChange={e => setForm({ ...form, content: e.target.value })}
                                required
                                className="w-full rounded-xl border px-4 py-2.5 text-sm resize-none"
                            />
                        </div>

                        <div className="sm:col-span-2 pt-2">
                            <button type="submit" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 transition-all">
                                Simpan Perubahan Sambutan
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}