import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Play, Trash2, CheckCircle2, AlertCircle, Link as LinkIcon } from 'lucide-react';

export default function YoutubeAdminPage() {
    const [videos, setVideos] = useState([]);
    const [form, setForm] = useState({ title: '', video_id: '' });
    const [loading, setLoading] = useState(true);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('youtube_videos')
            .select('*')
            .order('created_at', { ascending: false });

        if (data) setVideos(data);
        setLoading(false);
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        const { error } = await supabase.from('youtube_videos').insert([form]);

        if (!error) {
            setMsg({ type: 'success', text: 'Video berhasil diterbitkan ke beranda!' });
            setForm({ title: '', video_id: '' });
            fetchVideos();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Hapus video ini dari daftar?')) {
            await supabase.from('youtube_videos').delete().eq('id', id);
            fetchVideos();
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Play className="h-5 w-5 text-red-600" /> Manajemen Video YouTube Beranda
                </h3>
                <p className="text-sm text-gray-500 mt-1">Tambah atau hapus video YouTube yang tampil di halaman depan website.</p>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            {/* Form Tambah Video */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Terbitkan Video Baru</h4>
                <form onSubmit={handleAdd} className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Judul Video</label>
                        <input
                            type="text"
                            placeholder="Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024"
                            value={form.title}
                            onChange={e => setForm({ ...form, title: e.target.value })}
                            required
                            className="w-full rounded-xl border px-4 py-2.5 text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Link URL YouTube</label>
                        <input
                            type="text"
                            placeholder="Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx"
                            value={form.video_id}
                            onChange={e => setForm({ ...form, video_id: e.target.value })}
                            required
                            className="w-full rounded-xl border px-4 py-2.5 text-sm"
                        />
                        <p className="text-[11px] text-gray-400 mt-1">Sistem akan otomatis mengonversi link YouTube menjadi format pemutar video.</p>
                    </div>

                    <button type="submit" className="w-full rounded-full bg-black py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 transition-colors">
                        Terbitkan Video ke Beranda
                    </button>
                </form>
            </div>

            {/* Daftar Video Tersimpan */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Daftar Video Tersimpan (Terbaru di Urutan Pertama)</h4>
                {loading ? <p className="text-sm text-gray-400">Memuat data video...</p> : (
                    <div className="space-y-3">
                        {videos.map(item => (
                            <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50">
                                <div>
                                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">ID: {item.id}</span>
                                    <h5 className="font-bold text-sm text-gray-800 mt-1">{item.title}</h5>
                                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5 truncate max-w-md">
                                        <LinkIcon className="h-3 w-3 shrink-0" /> {item.video_id}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl text-xs font-semibold transition-colors shrink-0"
                                >
                                    Hapus
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}