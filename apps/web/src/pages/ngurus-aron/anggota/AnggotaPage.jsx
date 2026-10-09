import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Users, FileSpreadsheet, Download, AlertCircle, CheckCircle2, Calendar, Phone, MessageCircle, ShieldCheck, Search, Edit2, X, Briefcase, GraduationCap } from 'lucide-react';
import * as XLSX from 'xlsx';

export default function AnggotaPage() {
    const [anggotaList, setAnggotaList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [importing, setImporting] = useState(false);
    const [msg, setMsg] = useState({ type: '', text: '' });
    const [searchQuery, setSearchQuery] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        name: '',
        bebere: '',
        asal_kota: '',
        address: '',
        phone: '',
        email: '',
        tanggal_lahir: '',
        status_aktif: true,
        status_aktivitas: 'Lainnya', // <--- DITAMBAHKAN
        'gol-dar': 'O',
        sosmed: '',
        kontak_darurat_nama: '',
        kontak_darurat_hubungan: 'Keluarga',
        kontak_darurat_no_hp: ''
    });

    const [editForm, setEditForm] = useState({
        name: '',
        bebere: '',
        asal_kota: '',
        address: '',
        phone: '',
        email: '',
        tanggal_lahir: '',
        status_aktif: true,
        status_aktivitas: 'Lainnya', // <--- DITAMBAHKAN
        'gol-dar': 'O',
        sosmed: '',
        kontak_darurat_nama: '',
        kontak_darurat_hubungan: 'Keluarga',
        kontak_darurat_no_hp: ''
    });

    useEffect(() => {
        fetchAnggota();
    }, []);

    const fetchAnggota = async () => {
        const { data, error } = await supabase.from('members').select('*');
        if (!error && data) setAnggotaList(data);
        else if (error) console.error('Error fetching members:', error.message);
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({ ...form, [e.target.name]: value });
    };

    const handleEditChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setEditForm({ ...editForm, [e.target.name]: value });
    };

    const handleAddManual = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg({ type: '', text: '' });

        const { error } = await supabase.from('members').insert([form]); // Form sudah mencakup status_aktivitas

        setLoading(false);

        if (!error) {
            setMsg({ type: 'success', text: 'Anggota baru berhasil ditambahkan!' });
            setForm({
                name: '', bebere: '', asal_kota: '', address: '', phone: '',
                email: '', tanggal_lahir: '', status_aktif: true, status_aktivitas: 'Lainnya', 'gol-dar': 'O',
                sosmed: '', kontak_darurat_nama: '', kontak_darurat_hubungan: 'Keluarga', kontak_darurat_no_hp: ''
            });
            fetchAnggota();
        } else {
            setMsg({ type: 'error', text: 'Gagal menyimpan: ' + error.message });
        }
    };

    const handleEdit = (member) => {
        setEditingId(member.id);
        setEditForm({
            name: member.name || '',
            bebere: member.bebere || '',
            asal_kota: member.asal_kota || '',
            address: member.address || '',
            phone: member.phone || '',
            email: member.email || '',
            tanggal_lahir: member.tanggal_lahir || '',
            status_aktif: member.status_aktif !== undefined ? member.status_aktif : true,
            status_aktivitas: member.status_aktivitas || 'Lainnya', // <--- DITAMBAHKAN
            'gol-dar': member['gol-dar'] || 'O',
            sosmed: member.sosmed || '',
            kontak_darurat_nama: member.kontak_darurat_nama || '',
            kontak_darurat_hubungan: member.kontak_darurat_hubungan || 'Keluarga',
            kontak_darurat_no_hp: member.kontak_darurat_no_hp || ''
        });
        setIsEditing(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg({ type: '', text: '' });

        const { error } = await supabase
            .from('members')
            .update(editForm) // editForm sudah mencakup status_aktivitas
            .eq('id', editingId);

        setLoading(false);

        if (!error) {
            setMsg({ type: 'success', text: 'Data anggota berhasil diperbarui!' });
            setIsEditing(false);
            setEditingId(null);
            fetchAnggota();
        } else {
            setMsg({ type: 'error', text: 'Gagal memperbarui: ' + error.message });
        }
    };

    const handleDelete = async (id) => {
        if (confirm('Yakin ingin menghapus data anggota ini?')) {
            await supabase.from('members').delete().eq('id', id);
            fetchAnggota();
        }
    };

    const downloadTemplate = () => {
        const templateData = [
            {
                name: 'Yegar Tarigan',
                bebere: 'Sembiring',
                asal_kota: 'Kabanjahe',
                address: 'Balikpapan Selatan',
                jenis_kelamin: 'Laki-laki',
                phone: '081234567890',
                email: 'yegar@email.com',
                tanggal_lahir: '13 November 2004',
                status_aktif: true,
                status_aktivitas: 'Bekerja', // <--- DITAMBAHKAN
                'gol-dar': 'O',
                sosmed: 'IG: @yegar',
                kontak_darurat_nama: 'Budi Ginting',
                kontak_darurat_hubungan: 'Ayah',
                kontak_darurat_no_hp: '081234567890'
            }
        ];
        const worksheet = XLSX.utils.json_to_sheet(templateData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Template Anggota");
        XLSX.writeFile(workbook, "Template_Import_Anggota_Aron.xlsx");
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setImporting(true);
        setMsg({ type: '', text: '' });

        const reader = new FileReader();
        reader.onload = async (evt) => {
            try {
                const bstr = evt.target.result;
                const workbook = XLSX.read(bstr, { type: 'binary' });
                const wsname = workbook.SheetNames[0];
                const ws = workbook.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json(ws);

                if (data.length === 0) throw new Error('File Excel kosong atau format tidak sesuai.');

                const formattedData = data.map((row) => ({
                    name: row.name || row.nama || '',
                    bebere: row.bebere || '',
                    asal_kota: row.asal_kota || row.asalkuta || '',
                    address: row.address || row.domisili || row.alamat || '',
                    jenis_kelamin: row.jenis_kelamin || row.jenisklm || row.jkl || '',
                    phone: String(row.phone || row.no_hp || row.nowa || ''),
                    email: row.email || '',
                    tanggal_lahir: row.tanggal_lahir || row.ulangtahun || '',
                    status_aktif: row.status_aktif !== undefined ? row.status_aktif : true,
                    status_aktivitas: row.status_aktivitas || row.stts_aktivitas || 'Lainnya', // <--- DITAMBAHKAN
                    'gol-dar': row['gol-dar'] || row.gol_dar || row.goldar || 'O',
                    sosmed: row.sosmed || '',
                    kontak_darurat_nama: row.kontak_darurat_nama || '',
                    kontak_darurat_hubungan: row.kontak_darurat_hubungan || 'Keluarga',
                    kontak_darurat_no_hp: row.kontak_darurat_no_hp || ''
                }));

                const { error } = await supabase.from('members').insert(formattedData);
                if (error) throw error;

                setMsg({ type: 'success', text: `Berhasil mengimpor ${formattedData.length} data anggota!` });
                fetchAnggota();
            } catch (err) {
                setMsg({ type: 'error', text: 'Gagal mengimpor file: ' + err.message });
            } finally {
                setImporting(false);
                e.target.value = null;
            }
        };
        reader.readAsBinaryString(file);
    };

    // Helper untuk warna badge status aktivitas
    const getStatusBadge = (status) => {
        if (!status) return { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-200' };
        const s = status.toLowerCase();
        if (s.includes('kerja') || s.includes('wirausaha') || s.includes('pns')) {
            return { bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-200' };
        }
        if (s.includes('kuliah') || s.includes('pelajar') || s.includes('siswa') || s.includes('mahasiswa')) {
            return { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' };
        }
        return { bg: 'bg-amber-100', text: 'text-amber-700', border: 'border-amber-200' };
    };

    const filteredAnggota = anggotaList.filter((member) => {
        const query = searchQuery.toLowerCase();
        return (
            (member.name && member.name.toLowerCase().includes(query)) ||
            (member.phone && member.phone.toLowerCase().includes(query)) ||
            (member.email && member.email.toLowerCase().includes(query)) ||
            (member.bebere && member.bebere.toLowerCase().includes(query)) ||
            (member.asal_kota && member.asal_kota.toLowerCase().includes(query)) ||
            (member.status_aktivitas && member.status_aktivitas.toLowerCase().includes(query))
        );
    });

    return (
        <div className="space-y-6">
            {/* Modal Edit */}
            {isEditing && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                <Edit2 className="h-5 w-5 text-emerald-600" /> Edit Data Anggota
                            </h3>
                            <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                                <X className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>

                        <form onSubmit={handleUpdate} className="grid gap-4 sm:grid-cols-3">
                            <input type="text" name="name" placeholder="Nama Lengkap" value={editForm.name} onChange={handleEditChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="text" name="bebere" placeholder="Bebere (Marga Ibu)" value={editForm.bebere} onChange={handleEditChange} className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="text" name="asal_kota" placeholder="Asal Kota / Kampung" value={editForm.asal_kota} onChange={handleEditChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="text" name="address" placeholder="Domisili di Balikpapan" value={editForm.address} onChange={handleEditChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="tel" name="phone" placeholder="No WhatsApp / Telepon" value={editForm.phone} onChange={handleEditChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="email" name="email" placeholder="Email Aktif" value={editForm.email} onChange={handleEditChange} className="rounded-xl border px-4 py-2.5 text-sm" />
                            <input type="text" name="tanggal_lahir" placeholder="Ulang Tahun (Cth: 13 November)" value={editForm.tanggal_lahir} onChange={handleEditChange} required className="rounded-xl border px-4 py-2.5 text-sm" />

                            {/* Dropdown Status Aktivitas di Edit Form */}
                            <select name="status_aktivitas" value={editForm.status_aktivitas} onChange={handleEditChange} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                                <option value="Bekerja">💼 Bekerja (Kas: Rp 20.000)</option>
                                <option value="Kuliah/Pelajar">🎓 Kuliah / Pelajar (Kas: Rp 10.000)</option>
                                <option value="Lainnya">📌 Lainnya (Kas: Rp 10.000)</option>
                            </select>

                            <select name="gol-dar" value={editForm['gol-dar']} onChange={handleEditChange} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                                <option value="O">Gol. Darah: O</option>
                                <option value="A">Gol. Darah: A</option>
                                <option value="B">Gol. Darah: B</option>
                                <option value="AB">Gol. Darah: AB</option>
                                <option value="Tidak Tahu">Tidak Tahu</option>
                            </select>
                            <div className="flex items-center gap-2 px-2">
                                <input type="checkbox" name="status_aktif" id="edit_status_aktif" checked={editForm.status_aktif} onChange={handleEditChange} className="h-4 w-4 rounded border-gray-300 text-emerald-600" />
                                <label htmlFor="edit_status_aktif" className="text-xs font-semibold text-gray-700">Status Aktif</label>
                            </div>

                            <div className="sm:col-span-3 mt-2 border-t border-gray-200 pt-4">
                                <p className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                    <ShieldCheck className="h-4 w-4 text-red-500" /> Informasi Tambahan & Kontak Darurat
                                </p>
                            </div>
                            <input type="text" name="sosmed" placeholder="Akun Sosmed (Opsional)" value={editForm.sosmed} onChange={handleEditChange} className="rounded-xl border px-4 py-2.5 text-sm sm:col-span-3" />
                            <input type="text" name="kontak_darurat_nama" placeholder="Nama Kontak Darurat" value={editForm.kontak_darurat_nama} onChange={handleEditChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                            <select name="kontak_darurat_hubungan" value={editForm.kontak_darurat_hubungan} onChange={handleEditChange} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                                <option value="Keluarga">Keluarga (Ortu/Saudara)</option>
                                <option value="Teman Dekat">Teman Dekat</option>
                                <option value="Pasangan">Pasangan</option>
                                <option value="Lainnya">Lainnya</option>
                            </select>
                            <input type="tel" name="kontak_darurat_no_hp" placeholder="No HP Kontak Darurat" value={editForm.kontak_darurat_no_hp} onChange={handleEditChange} required className="rounded-xl border px-4 py-2.5 text-sm" />

                            <div className="sm:col-span-3 flex gap-3 mt-4">
                                <button type="button" onClick={() => setIsEditing(false)} className="flex-1 rounded-xl border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                                    Batal
                                </button>
                                <button type="submit" disabled={loading} className="flex-1 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                                    {loading ? 'Menyimpan...' : 'Perbarui Data'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Import Excel Section */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                        <FileSpreadsheet className="h-5 w-5 text-emerald-600" /> Import Data Anggota dari Excel
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">Unggah file Excel (.xlsx / .csv) untuk memasukkan data anggota secara massal.</p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button onClick={downloadTemplate} className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
                        <Download className="h-4 w-4" /> Unduh Template
                    </button>
                    <label className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white cursor-pointer hover:bg-emerald-700 transition-colors shadow-sm">
                        <FileSpreadsheet className="h-4 w-4" />
                        {importing ? 'Mengimpor...' : 'Pilih & Import Excel'}
                        <input type="file" accept=".xlsx, .xls, .csv" onChange={handleFileUpload} className="hidden" disabled={importing} />
                    </label>
                </div>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            {/* Form Tambah Manual */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-md font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Plus className="h-5 w-5 text-emerald-600" /> Tambah Anggota Manual
                </h3>
                <form onSubmit={handleAddManual} className="grid gap-4 sm:grid-cols-3">
                    <input type="text" name="name" placeholder="Nama Lengkap" value={form.name} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="text" name="bebere" placeholder="Bebere (Marga Ibu)" value={form.bebere} onChange={handleChange} className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="text" name="asal_kota" placeholder="Asal Kota / Kampung" value={form.asal_kota} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="text" name="address" placeholder="Domisili di Balikpapan" value={form.address} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="tel" name="phone" placeholder="No WhatsApp / Telepon" value={form.phone} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="email" name="email" placeholder="Email Aktif" value={form.email} onChange={handleChange} className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="text" name="tanggal_lahir" placeholder="Ulang Tahun (Cth: 13 November)" value={form.tanggal_lahir} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />

                    {/* Dropdown Status Aktivitas di Form Tambah */}
                    <select name="status_aktivitas" value={form.status_aktivitas} onChange={handleChange} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                        <option value="Bekerja">💼 Bekerja (Kas: Rp 20.000)</option>
                        <option value="Kuliah/Pelajar">🎓 Kuliah / Pelajar (Kas: Rp 10.000)</option>
                        <option value="Lainnya">📌 Lainnya (Kas: Rp 10.000)</option>
                    </select>

                    <select name="gol-dar" value={form['gol-dar']} onChange={handleChange} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                        <option value="O">Gol. Darah: O</option>
                        <option value="A">Gol. Darah: A</option>
                        <option value="B">Gol. Darah: B</option>
                        <option value="AB">Gol. Darah: AB</option>
                        <option value="Tidak Tahu">Tidak Tahu</option>
                    </select>
                    <div className="flex items-center gap-2 px-2">
                        <input type="checkbox" name="status_aktif" id="status_aktif" checked={form.status_aktif} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-emerald-600" />
                        <label htmlFor="status_aktif" className="text-xs font-semibold text-gray-700">Status Aktif</label>
                    </div>

                    <div className="sm:col-span-3 mt-2 border-t border-gray-200 pt-4">
                        <p className="text-xs font-semibold text-gray-700 mb-3 flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-red-500" /> Informasi Tambahan & Kontak Darurat
                        </p>
                    </div>
                    <input type="text" name="sosmed" placeholder="Akun Sosmed (Opsional)" value={form.sosmed} onChange={handleChange} className="rounded-xl border px-4 py-2.5 text-sm sm:col-span-3" />
                    <input type="text" name="kontak_darurat_nama" placeholder="Nama Kontak Darurat" value={form.kontak_darurat_nama} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <select name="kontak_darurat_hubungan" value={form.kontak_darurat_hubungan} onChange={handleChange} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                        <option value="Keluarga">Keluarga (Ortu/Saudara)</option>
                        <option value="Teman Dekat">Teman Dekat</option>
                        <option value="Pasangan">Pasangan</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>
                    <input type="tel" name="kontak_darurat_no_hp" placeholder="No HP Kontak Darurat" value={form.kontak_darurat_no_hp} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />

                    <button type="submit" disabled={loading} className="sm:col-span-3 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
                        {loading ? 'Menyimpan...' : 'Simpan Anggota Baru'}
                    </button>
                </form>
            </div>

            {/* Daftar Anggota */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                    <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                        <Users className="h-4 w-4 text-emerald-600" /> Daftar Direktori Anggota ({filteredAnggota.length})
                    </h3>

                    <div className="relative w-full sm:w-72">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari nama, telepon, status..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500"
                        />
                    </div>
                </div>

                {filteredAnggota.length === 0 ? (
                    <p className="text-sm text-gray-400 py-6 text-center">
                        {searchQuery ? 'Tidak ada anggota yang cocok dengan pencarian.' : 'Belum ada data anggota tersimpan.'}
                    </p>
                ) : (
                    <div className="space-y-3">
                        {filteredAnggota.map((item, idx) => {
                            const badge = getStatusBadge(item.status_aktivitas);
                            return (
                                <div key={item.id} className="flex justify-between items-start sm:items-center p-4 rounded-xl border bg-gray-50/60 flex-col sm:flex-row gap-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-start sm:items-center gap-4 w-full">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">
                                            {idx + 1}
                                        </span>
                                        <div className="w-full">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                                                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.status_aktif ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                                                    {item.status_aktif ? 'Aktif' : 'Tidak Aktif'}
                                                </span>
                                                {/* Badge Status Aktivitas Baru */}
                                                {item.status_aktivitas && (
                                                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border flex items-center ${badge.bg} ${badge.text} ${badge.border}`}>
                                                        {item.status_aktivitas.toLowerCase().includes('kerja') ? <Briefcase className="h-3 w-3 mr-1" /> :
                                                            item.status_aktivitas.toLowerCase().includes('kuliah') ? <GraduationCap className="h-3 w-3 mr-1" /> : null}
                                                        {item.status_aktivitas}
                                                    </span>
                                                )}
                                                {item.bebere && (
                                                    <span className="text-[10px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                                                        Bebere {item.bebere}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Asal: {item.asal_kota || '-'} | Domisili: {item.address || '-'} | Ulang Tahun: <strong className="text-amber-700">{item.tanggal_lahir || '-'}</strong>
                                            </p>
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                📞 {item.phone || '-'} {item.email ? `• ✉️ ${item.email}` : ''} | Gol. Darah: <strong className="text-amber-700">{item['gol-dar'] || '-'}</strong>
                                            </p>

                                            {item.sosmed && (
                                                <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                                                    <MessageCircle className="h-3 w-3" /> Sosmed: {item.sosmed}
                                                </p>
                                            )}
                                            {item.kontak_darurat_nama && (
                                                <p className="text-xs text-red-600 mt-0.5 font-medium flex items-center gap-1">
                                                    <ShieldCheck className="h-3 w-3" /> Kontak Darurat: {item.kontak_darurat_nama} ({item.kontak_darurat_hubungan}) - {item.kontak_darurat_no_hp}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 self-end sm:self-center">
                                        <button onClick={() => handleEdit(item)} className="text-emerald-600 p-2 hover:bg-emerald-50 rounded-lg transition-colors" title="Edit Anggota">
                                            <Edit2 className="h-4 w-4" />
                                        </button>
                                        <button onClick={() => handleDelete(item.id)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors" title="Hapus Anggota">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}