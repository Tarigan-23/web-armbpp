import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Upload, Image as ImageIcon, Calendar, Newspaper } from 'lucide-react';

export default function BeritaPage() {
    const [activeTab, setActiveTab] = useState('berita'); // 'berita' atau 'agenda'

    // State Berita
    const [newsList, setNewsList] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Budaya');
    const [date, setDate] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [uploading, setUploading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState({ type: '', text: '' });

    // State Agenda (TERMASUK YANG SEBELUMNYA KURANG: agendaLocationUrl & targetDatetime)
    const [agendaList, setAgendaList] = useState([]);
    const [agendaTitle, setAgendaTitle] = useState('');
    const [agendaDate, setAgendaDate] = useState('');
    const [agendaTime, setAgendaTime] = useState('');
    const [agendaLocation, setAgendaLocation] = useState('');
    const [agendaLocationUrl, setAgendaLocationUrl] = useState('');
    const [targetDatetime, setTargetDatetime] = useState('');
    const [agendaDesc, setAgendaDesc] = useState('');

    useEffect(() => {
        fetchNews();
        fetchAgendas();
    }, []);

    const fetchNews = async () => {
        const { data } = await supabase.from('news').select('*').order('created_at', { ascending: false });
        if (data) setNewsList(data);
    };

    const fetchAgendas = async () => {
        const { data } = await supabase.from('agendas').select('*').order('created_at', { ascending: false });
        if (data) setAgendaList(data);
    };

    // Fungsi Upload Foto Berita ke Supabase Storage
    const handleFileUpload = async (e) => {
        try {
            setUploading(true);
            const file = e.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `berita_${Date.now()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage.from('community-assets').upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage.from('community-assets').getPublicUrl(fileName);
            setImageUrl(publicUrl);
            setMsg({ type: 'success', text: 'Foto berhasil diunggah!' });
        } catch (error) {
            setMsg({ type: 'error', text: 'Gagal upload foto: ' + error.message });
        } finally {
            setUploading(false);
        }
    };

    const handleAddNews = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.from('news').insert([{
            title,
            category,
            date,
            excerpt,
            image_url: imageUrl || 'https://images.hostinger.com/b2265cde-df04-424b-b5ec-41b17dd3070b.png'
        }]);
        setLoading(false);
        if (!error) {
            setMsg({ type: 'success', text: 'Berita berhasil ditambah!' });
            setTitle(''); setDate(''); setExcerpt(''); setImageUrl('');
            fetchNews();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    const handleDeleteNews = async (id) => {
        if (confirm('Hapus berita ini?')) {
            await supabase.from('news').delete().eq('id', id);
            fetchNews();
        }
    };

    const handleAddAgenda = async (e) => {
        e.preventDefault();
        setLoading(true);
        const { error } = await supabase.from('agendas').insert([{
            title: agendaTitle,
            date: agendaDate,
            time: agendaTime,
            location: agendaLocation,
            location_url: agendaLocationUrl,
            target_datetime: targetDatetime,
            description: agendaDesc
        }]);
        setLoading(false);
        if (!error) {
            setMsg({ type: 'success', text: 'Agenda berhasil ditambahkan!' });
            setAgendaTitle(''); setAgendaDate(''); setAgendaTime(''); setAgendaLocation(''); setAgendaLocationUrl(''); setTargetDatetime(''); setAgendaDesc('');
            fetchAgendas();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    const handleDeleteAgenda = async (id) => {
        if (confirm('Hapus agenda ini?')) {
            await supabase.from('agendas').delete().eq('id', id);
            fetchAgendas();
        }
    };

    return (
        <div className="space-y-6">
            {/* Tab Navigasi Admin */}
            <div className="flex gap-2 border-b border-gray-200 pb-4">
                <button
                    onClick={() => setActiveTab('berita')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'berita' ? 'bg-black text-white shadow-md' : 'bg-white text-gray-600 border hover:bg-gray-50'
                        }`}
                >
                    <Newspaper className="h-4 w-4" /> Manajemen Berita
                </button>
                <button
                    onClick={() => setActiveTab('agenda')}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${activeTab === 'agenda' ? 'bg-black text-white shadow-md' : 'bg-white text-gray-600 border hover:bg-gray-50'
                        }`}
                >
                    <Calendar className="h-4 w-4" /> Manajemen Agenda
                </button>
            </div>

            {msg.text && <div className="p-3 text-xs rounded-xl bg-gray-100 font-medium">{msg.text}</div>}

            {/* TAB BERITA */}
            {activeTab === 'berita' && (
                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                        <h3 className="text-md font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Plus className="h-5 w-5 text-amber-500" /> Tambah Berita Baru
                        </h3>
                        <form onSubmit={handleAddNews} className="grid gap-4 sm:grid-cols-2">
                            <input type="text" placeholder="Judul Berita" value={title} onChange={e => setTitle(e.target.value)} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <select value={category} onChange={e => setCategory(e.target.value)} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                                <option value="Budaya">Budaya</option>
                                <option value="Sosial">Sosial</option>
                                <option value="Pendidikan">Pendidikan</option>
                            </select>
                            <input type="text" placeholder="Tanggal (Contoh: 12 Juli 2026)" value={date} onChange={e => setDate(e.target.value)} required className="rounded-xl border px-4 py-2.5 text-sm" />

                            {/* Upload Foto Berita */}
                            <div className="sm:col-span-2">
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Upload Foto Berita</label>
                                <div className="flex items-center gap-4">
                                    <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-100">
                                        <Upload className="h-4 w-4 text-amber-600" />
                                        {uploading ? 'Mengunggah...' : 'Pilih File Foto'}
                                        <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" disabled={uploading} />
                                    </label>
                                    {imageUrl && <span className="text-xs text-green-600 font-medium flex items-center gap-1"><ImageIcon className="h-4 w-4" /> Foto Siap</span>}
                                </div>
                                {imageUrl && <img src={imageUrl} alt="Pratinjau" className="mt-3 h-20 w-auto rounded-xl border object-cover" />}
                            </div>

                            <textarea placeholder="Ringkasan berita..." value={excerpt} onChange={e => setExcerpt(e.target.value)} required className="sm:col-span-2 rounded-xl border px-4 py-2.5 text-sm resize-none" rows={3} />

                            <button type="submit" disabled={loading} className="sm:col-span-2 rounded-full bg-black py-3 text-sm font-semibold text-white">
                                {loading ? 'Menyimpan...' : 'Simpan Berita'}
                            </button>
                        </form>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                        <h3 className="text-md font-bold text-gray-800 mb-4">Daftar Berita ({newsList.length})</h3>
                        <div className="space-y-3">
                            {newsList.map(item => (
                                <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50">
                                    <div className="flex items-center gap-3">
                                        <img src={item.image_url} alt={item.title} className="h-12 w-12 rounded-lg object-cover" />
                                        <div>
                                            <span className="text-xs font-bold text-amber-600">{item.category}</span>
                                            <h4 className="font-semibold text-sm">{item.title}</h4>
                                            <p className="text-xs text-gray-500">{item.date}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDeleteNews(item.id)} className="text-red-500 p-2"><Trash2 className="h-4 w-4" /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* TAB AGENDA */}
            {activeTab === 'agenda' && (
                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                        <h3 className="text-md font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <Plus className="h-5 w-5 text-amber-500" /> Tambah Agenda Kegiatan Baru
                        </h3>
                        <form onSubmit={handleAddAgenda} className="grid gap-4 sm:grid-cols-2">
                            <input type="text" placeholder="Nama / Judul Agenda" value={agendaTitle} onChange={e => setAgendaTitle(e.target.value)} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="text" placeholder="Tanggal Teks (Cth: 20 Agustus 2026)" value={agendaDate} onChange={e => setAgendaDate(e.target.value)} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="text" placeholder="Waktu Teks (Cth: 19:00 WITA - Selesai)" value={agendaTime} onChange={e => setAgendaTime(e.target.value)} required className="rounded-xl border px-4 py-2.5 text-sm" />

                            {/* Input Tanggal & Jam Target untuk Hitung Mundur Real-Time */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Target Waktu Hitung Mundur (Tanggal & Jam)</label>
                                <input type="datetime-local" value={targetDatetime} onChange={e => setTargetDatetime(e.target.value)} required className="w-full rounded-xl border px-4 py-2 text-sm bg-white" />
                            </div>

                            <input type="text" placeholder="Lokasi / Tempat" value={agendaLocation} onChange={e => setAgendaLocation(e.target.value)} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="url" placeholder="Link ShareLoc Google Maps (Cth: https://maps.app.goo.gl/...)" value={agendaLocationUrl} onChange={e => setAgendaLocationUrl(e.target.value)} required className="sm:col-span-2 rounded-xl border px-4 py-2.5 text-sm" />
                            <textarea placeholder="Keterangan / Deskripsi Agenda..." value={agendaDesc} onChange={e => setAgendaDesc(e.target.value)} required className="sm:col-span-2 rounded-xl border px-4 py-2.5 text-sm resize-none" rows={2} />

                            <button type="submit" disabled={loading} className="sm:col-span-2 rounded-full bg-black py-3 text-sm font-semibold text-white">
                                {loading ? 'Menyimpan...' : 'Simpan Agenda'}
                            </button>
                        </form>
                    </div>

                    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                        <h3 className="text-md font-bold text-gray-800 mb-4">Daftar Agenda Kegiatan ({agendaList.length})</h3>
                        <div className="space-y-3">
                            {agendaList.map(item => (
                                <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50">
                                    <div>
                                        <span className="text-xs font-bold text-amber-600">📅 {item.date} • ⏰ {item.time}</span>
                                        <h4 className="font-semibold text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-500">📍 Lokasi: {item.location}</p>
                                    </div>
                                    <button onClick={() => handleDeleteAgenda(item.id)} className="text-red-500 p-2"><Trash2 className="h-4 w-4" /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}