import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit3, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ProgramAdminPage() {
    const [programList, setProgramList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ title: '', description: '', icon_name: 'Music', urutan: 1 });
    const [editId, setEditId] = useState(null);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchPrograms();
    }, []);

    const fetchPrograms = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('programs').select('*').order('urutan', { ascending: true });
        if (!error && data) setProgramList(data);
        setLoading(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        if (editId) {
            const { error } = await supabase.from('programs').update(form).eq('id', editId);
            if (!error) {
                setMsg({ type: 'success', text: 'Program berhasil diperbarui!' });
                setEditId(null);
                setForm({ title: '', description: '', icon_name: 'Music', urutan: 1 });
                fetchPrograms();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        } else {
            const { error } = await supabase.from('programs').insert([form]);
            if (!error) {
                setMsg({ type: 'success', text: 'Program baru berhasil ditambahkan!' });
                setForm({ title: '', description: '', icon_name: 'Music', urutan: 1 });
                fetchPrograms();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        }
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setForm({
            title: item.title,
            description: item.description,
            icon_name: item.icon_name || 'Music',
            urutan: item.urutan || 1
        });
    };

    const handleDelete = async (id) => {
        if (confirm('Hapus program kerja ini?')) {
            await supabase.from('programs').delete().eq('id', id);
            fetchPrograms();
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800">Manajemen Program Kerja</h3>
                <p className="text-sm text-gray-500 mt-1">Tambah, edit, atau hapus program kerja komunitas yang tampil di halaman publik.</p>
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
                <h4 className="text-md font-bold text-gray-800 mb-4">{editId ? 'Edit Program Kerja' : 'Tambah Program Kerja Baru'}</h4>
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Judul Program</label>
                        <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="Contoh: Sanggar Seni & Tari" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Pilihan Icon</label>
                        <select name="icon_name" value={form.icon_name} onChange={handleChange} className="w-full rounded-xl border px-4 py-2.5 text-sm bg-white">
                            <option value="Music">Music (Seni & Tari)</option>
                            <option value="BookOpen">BookOpen (Pendidikan/Kelas)</option>
                            <option value="GraduationCap">GraduationCap (Beasiswa)</option>
                            <option value="HeartHandshake">HeartHandshake (Sosial)</option>
                            <option value="CalendarDays">CalendarDays (Festival)</option>
                            <option value="Store">Store (Koperasi/UMKM)</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Nomor Urut</label>
                        <input type="number" name="urutan" value={form.urutan} onChange={handleChange} className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Deskripsi Program</label>
                        <textarea name="description" rows={3} value={form.description} onChange={handleChange} required placeholder="Tulis penjelasan singkat program..." className="w-full rounded-xl border px-4 py-2.5 text-sm resize-none" />
                    </div>
                    <div className="sm:col-span-2 flex gap-3">
                        <button type="submit" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                            {editId ? 'Perbarui Program' : 'Simpan Program'}
                        </button>
                        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ title: '', description: '', icon_name: 'Music', urutan: 1 }); }} className="rounded-full border px-6 py-3 text-sm font-semibold">Batal</button>}
                    </div>
                </form>
            </div>

            {/* List Program */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Daftar Program Tersimpan</h4>
                {loading ? <p className="text-sm text-gray-400">Memuat...</p> : (
                    <div className="space-y-3">
                        {programList.map(item => (
                            <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50">
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                                        Urutan: {item.urutan} • Icon: {item.icon_name}
                                    </span>
                                    <h5 className="font-semibold text-sm mt-1">{item.title}</h5>
                                    <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                </div>
                                <div className="flex gap-1">
                                    <button onClick={() => handleEdit(item)} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"><Edit3 className="h-4 w-4" /></button>
                                    <button onClick={() => handleDelete(item.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="h-4 w-4" /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}