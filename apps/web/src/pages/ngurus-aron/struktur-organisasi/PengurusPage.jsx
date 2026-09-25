import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Edit3, CheckCircle2, AlertCircle, Upload, Image as ImageIcon } from 'lucide-react';

export default function PengurusAdminPage() {
    const [pengurusList, setPengurusList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [form, setForm] = useState({
        nama: '',
        jabatan: 'Ketua Umum',
        kategori: 'inti',
        foto_url: '',
        urutan: 1
    });
    const [editId, setEditId] = useState(null);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchPengurus();
    }, []);

    const fetchPengurus = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('organization_structure').select('*').order('urutan', { ascending: true });
        if (!error && data) setPengurusList(data);
        setLoading(false);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileUpload = async (e) => {
        try {
            setUploading(true);
            const file = e.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `pengurus_${Date.now()}.${fileExt}`;
            const { error: uploadError } = await supabase.storage.from('community-assets').upload(fileName, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage.from('community-assets').getPublicUrl(fileName);
            setForm({ ...form, foto_url: publicUrl });
            setMsg({ type: 'success', text: 'Foto berhasil diunggah!' });
        } catch (error) {
            setMsg({ type: 'error', text: 'Gagal upload foto: ' + error.message });
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        if (editId) {
            const { error } = await supabase.from('organization_structure').update(form).eq('id', editId);
            if (!error) {
                setMsg({ type: 'success', text: 'Data pengurus berhasil diperbarui!' });
                setEditId(null);
                setForm({ nama: '', jabatan: 'Ketua Umum', kategori: 'inti', foto_url: '', urutan: 1 });
                fetchPengurus();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        } else {
            const { error } = await supabase.from('organization_structure').insert([form]);
            if (!error) {
                setMsg({ type: 'success', text: 'Pengurus baru berhasil ditambahkan!' });
                setForm({ nama: '', jabatan: 'Ketua Umum', kategori: 'inti', foto_url: '', urutan: 1 });
                fetchPengurus();
            } else {
                setMsg({ type: 'error', text: error.message });
            }
        }
    };

    const handleEdit = (item) => {
        setEditId(item.id);
        setForm({
            nama: item.nama,
            jabatan: item.jabatan,
            kategori: item.kategori,
            foto_url: item.foto_url || '',
            urutan: item.urutan || 1
        });
    };

    const handleDelete = async (id) => {
        if (confirm('Hapus data pengurus ini?')) {
            await supabase.from('organization_structure').delete().eq('id', id);
            fetchPengurus();
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800">Manajemen Struktur Kepengurusan</h3>
                <p className="text-sm text-gray-500 mt-1">Tambah, edit, dan atur foto pengurus, pembina, wakil, sekretaris, bendahara, hingga divisi.</p>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">{editId ? 'Edit Data Pengurus' : 'Tambah Pengurus Baru'}</h4>
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Lengkap & Gelar</label>
                        <input type="text" name="nama" value={form.nama} onChange={handleChange} required placeholder="Contoh: Drs. Andreas Ginting" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Jabatan</label>
                        <select name="jabatan" value={form.jabatan} onChange={handleChange} className="w-full rounded-xl border px-4 py-2.5 text-sm bg-white">
                            <option value="Ketua PRM">Ketua PRM</option>
                            <option value="Dewan Pembina">Dewan Pembina</option>
                            <option value="Ketua Umum">Ketua Umum</option>
                            <option value="Wakil Ketua I">Wakil Ketua I</option>
                            <option value="Wakil Ketua II">Wakil Ketua II</option>
                            <option value="Sekretaris Umum I">Sekretaris Umum I</option>
                            <option value="Sekretaris Umum II">Sekretaris Umum II</option>
                            <option value="Bendahara Umum">Bendahara Umum</option>
                            <option value="Koordinator Divisi Sosial">Koordinator Divisi Sosial</option>
                            <option value="Anggota Divisi Sosial">Anggota Divisi Sosial</option>
                            <option value="Koordinator Divisi Budaya">Koordinator Divisi Budaya</option>
                            <option value="Anggota Divisi Budaya">Anggota Divisi Budaya</option>
                            <option value="Koordinator Divisi Humas">Koordinator Divisi Humas</option>
                            <option value="Anggota Divisi Humas">Anggota Divisi Humas</option>
                            <option value="Koordinator Divisi Olahraga">Koordinator Divisi Olahraga</option>
                            <option value="Anggota Divisi Olahraga">Anggota Divisi Olahraga</option>
                            <option value="Koordinator Divisi Keuangan">Koordinator Divisi Keuangan</option>
                            <option value="Anggota Divisi Keuangan">Anggota Divisi Keuangan</option>
                            <option value="Koordinator Divisi Menfo">Koordinator Divisi Menfo</option>
                            <option value="Anggota Divisi Menfo">Anggota Divisi Menfo</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Kategori Bagian</label>
                        <select name="kategori" value={form.kategori} onChange={handleChange} className="w-full rounded-xl border px-4 py-2.5 text-sm bg-white">
                            <option value="prm">Ketua PRM</option>
                            <option value="pembina">Pembina</option>
                            <option value="inti">Pengurus Inti</option>
                            <option value="koordinator divisi">koordinator divisi</option>
                            <option value="anggota divisi">anggota divisi</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Nomor Urut Tampil</label>
                        <input type="number" name="urutan" value={form.urutan} onChange={handleChange} placeholder="1" className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1">Foto Pengurus</label>
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 cursor-pointer hover:bg-gray-100">
                                <Upload className="h-4 w-4 text-amber-600" />
                                {uploading ? 'Mengunggah...' : 'Pilih Foto'}
                                <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" disabled={uploading} />
                            </label>
                            {form.foto_url && <span className="text-xs text-green-600 font-medium flex items-center gap-1"><ImageIcon className="h-4 w-4" /> Foto Siap</span>}
                        </div>
                        {form.foto_url && <img src={form.foto_url} alt="Pratinjau" className="mt-3 h-20 w-20 rounded-xl object-cover border" />}
                    </div>

                    <div className="sm:col-span-2 flex gap-3">
                        <button type="submit" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white">
                            {editId ? 'Perbarui Pengurus' : 'Simpan Pengurus'}
                        </button>
                        {editId && <button type="button" onClick={() => { setEditId(null); setForm({ nama: '', jabatan: 'Ketua Umum', kategori: 'inti', foto_url: '', urutan: 1 }); }} className="rounded-full border px-6 py-3 text-sm font-semibold">Batal</button>}
                    </div>
                </form>
            </div>

            {/* List Pengurus */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h4 className="text-md font-bold text-gray-800 mb-4">Daftar Pengurus Tersimpan</h4>
                {loading ? <p className="text-sm text-gray-400">Memuat...</p> : (
                    <div className="space-y-3">
                        {pengurusList.map(item => (
                            <div key={item.id} className="flex justify-between items-center p-3 rounded-xl border bg-gray-50">
                                <div className="flex items-center gap-3">
                                    <img src={item.foto_url || 'https://via.placeholder.com/150'} alt={item.nama} className="h-10 w-10 rounded-full object-cover" />
                                    <div>
                                        <h5 className="font-semibold text-sm">{item.nama}</h5>
                                        <p className="text-xs text-amber-600 font-medium">{item.jabatan} • <span className="uppercase text-[10px] text-gray-500">{item.kategori}</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
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