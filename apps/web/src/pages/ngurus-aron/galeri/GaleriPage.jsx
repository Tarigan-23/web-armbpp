import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Upload, Image as ImageIcon, Sparkles } from 'lucide-react';

export default function AdminGaleriPage() {
    const [galleries, setGalleries] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Budaya');
    const [spanClass, setSpanClass] = useState('sm:col-span-1 sm:row-span-1');
    const [imageUrl, setImageUrl] = useState('');
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchGalleries();
    }, []);

    const fetchGalleries = async () => {
        const { data } = await supabase.from('galleries').select('*').order('created_at', { ascending: false });
        if (data) setGalleries(data);
    };

    const handleFileUpload = async (e) => {
        try {
            setUploading(true);
            const file = e.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `galeri_${Date.now()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage.from('community-assets').upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage.from('community-assets').getPublicUrl(fileName);
            setImageUrl(publicUrl);
            setMsg({ type: 'success', text: 'Foto berhasil diunggah!' });
        } catch (error) {
            setMsg({ type: 'error', text: 'Gagal upload: ' + error.message });
        } finally {
            setUploading(false);
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!imageUrl) {
            alert('Silakan pilih dan unggah foto terlebih dahulu.');
            return;
        }

        setLoading(true);
        const { error } = await supabase.from('galleries').insert([{
            title,
            category,
            image_url: imageUrl,
            span_class: spanClass
        }]);
        setLoading(false);

        if (!error) {
            setMsg({ type: 'success', text: 'Foto galeri berhasil ditambahkan!' });
            setTitle(''); setImageUrl('');
            fetchGalleries();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Hapus foto ini dari galeri?')) {
            await supabase.from('galleries').delete().eq('id', id);
            fetchGalleries();
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-amber-500" /> Manajemen Galeri Foto
                </h3>
                <p className="text-sm text-gray-500 mt-1">Unggah dokumentasi kegiatan komunitas yang akan tampil di halaman galeri publik.</p>
            </div>

            {msg.text && <div className="p-3 text-xs rounded-xl bg-gray-100 font-medium">{msg.text}</div>}

            {/* Form Tambah */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Tambah Foto Baru</h4>
                <form onSubmit={handleAdd} className="grid gap-4 sm:grid-cols-2">
                    <input
                        type="text"
                        placeholder="Judul / Keterangan Foto"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                        className="rounded-xl border px-4 py-2.5 text-sm"
                    />
                    <select
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="rounded-xl border px-4 py-2.5 text-sm bg-white"
                    >
                        <option value="Budaya">Budaya</option>
                        <option value="Sosial">Sosial</option>
                        <option value="Kegiatan">Kegiatan</option>
                        <option value="Adat">Adat</option>
                    </select>

                    <select
                        value={spanClass}
                        onChange={e => setSpanClass(e.target.value)}
                        className="rounded-xl border px-4 py-2.5 text-sm bg-white sm:col-span-2"
                    >
                        <option value="sm:col-span-1 sm:row-span-1">Ukuran Standar (1 x 1)</option>
                        <option value="sm:col-span-2 sm:row-span-2">Ukuran Besar / Kotak Lebar (2 x 2)</option>
                        <option value="sm:col-span-2 sm:row-span-1">Ukuran Melebar ke Samping (2 x 1)</option>
                    </select>

                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Pilih File Foto</label>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-100">
                                <Upload className="h-4 w-4 text-amber-600" />
                                {uploading ? 'Mengunggah...' : 'Unggah Foto'}
                                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" disabled={uploading} />
                            </label>
                            {imageUrl && <span className="text-xs text-green-600 font-medium flex items-center gap-1"><ImageIcon className="h-4 w-4" /> Foto Siap</span>}
                        </div>
                        {imageUrl && <img src={imageUrl} alt="Pratinjau" className="mt-3 h-24 w-auto rounded-xl border object-cover shadow-sm" />}
                    </div>

                    <button type="submit" disabled={loading} className="sm:col-span-2 rounded-full bg-black py-3 text-sm font-semibold text-white">
                        {loading ? 'Menyimpan...' : 'Simpan ke Galeri Publik'}
                    </button>
                </form>
            </div>

            {/* List Daftar Foto */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Daftar Foto Galeri ({galleries.length})</h4>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {galleries.map(item => (
                        <div key={item.id} className="rounded-2xl border bg-gray-50 p-4 flex flex-col justify-between space-y-3">
                            <div>
                                <img src={item.image_url} alt={item.title} className="h-36 w-full rounded-xl object-cover" />
                                <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                    {item.category}
                                </span>
                                <h5 className="font-semibold text-sm text-gray-900 mt-1">{item.title}</h5>
                            </div>
                            <button
                                onClick={() => handleDelete(item.id)}
                                className="flex items-center justify-center gap-1 w-full rounded-xl bg-red-50 py-2 text-xs font-semibold text-red-600 hover:bg-red-100 transition-colors"
                            >
                                <Trash2 className="h-3.5 w-3.5" /> Hapus Foto
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}