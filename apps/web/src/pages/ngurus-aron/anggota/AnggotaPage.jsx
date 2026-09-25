import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Plus, Trash2, Users, FileSpreadsheet, Download, AlertCircle, CheckCircle2, Calendar } from 'lucide-react';
import * as XLSX from 'xlsx';

export default function AnggotaPage() {
    const [anggotaList, setAnggotaList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [importing, setImporting] = useState(false);
    const [msg, setMsg] = useState({ type: '', text: '' });

    // State form disesuaikan persis dengan kolom asli database Supabase kamu
    const [form, setForm] = useState({
        name: '',
        phone: '',
        address: '',
        status_aktif: true,
        join_date: new Date().toISOString().split('T')[0],
        'gol-dar': 'O'
    });

    useEffect(() => {
        fetchAnggota();
    }, []);

    const fetchAnggota = async () => {
        const { data, error } = await supabase
            .from('members')
            .select('*');

        if (!error && data) {
            setAnggotaList(data);
        } else if (error) {
            console.error('Error fetching members:', error.message);
        }
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setForm({ ...form, [e.target.name]: value });
    };

    // Tambah Anggota Manual
    const handleAddManual = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg({ type: '', text: '' });

        const payload = {
            name: form.name,
            phone: form.phone,
            address: form.address,
            status_aktif: form.status_aktif,
            join_date: form.join_date,
            'gol-dar': form['gol-dar']
        };

        const { error } = await supabase.from('members').insert([payload]);
        setLoading(false);

        if (!error) {
            setMsg({ type: 'success', text: 'Anggota baru berhasil ditambahkan!' });
            setForm({
                name: '',
                phone: '',
                address: '',
                status_aktif: true,
                join_date: new Date().toISOString().split('T')[0],
                'gol-dar': 'O'
            });
            fetchAnggota();
        } else {
            setMsg({ type: 'error', text: 'Gagal menyimpan: ' + error.message });
        }
    };

    // Hapus Anggota
    const handleDelete = async (id) => {
        if (confirm('Yakin ingin menghapus data anggota ini?')) {
            await supabase.from('members').delete().eq('id', id);
            fetchAnggota();
        }
    };

    // Download Template Excel
    const downloadTemplate = () => {
        const templateData = [
            {
                name: 'Yegar Tarigan',
                phone: '081234567890',
                address: 'Balikpapan Selatan',
                status_aktif: true,
                join_date: '2026-01-01',
                'gol-dar': 'O'
            }
        ];

        const worksheet = XLSX.utils.json_to_sheet(templateData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Template Anggota");
        XLSX.writeFile(workbook, "Template_Import_Anggota_Aron.xlsx");
    };

    // Import Excel
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

                if (data.length === 0) {
                    throw new Error('File Excel kosong atau format tidak sesuai.');
                }

                const formattedData = data.map((row) => ({
                    name: row.name || row.nama || '',
                    phone: String(row.phone || row.no_hp || row.nowa || ''),
                    address: row.address || row.domisili || row.alamat || '',
                    status_aktif: row.status_aktif !== undefined ? row.status_aktif : true,
                    join_date: row.join_date || new Date().toISOString().split('T')[0],
                    'gol-dar': row['gol-dar'] || row.gol_dar || row.goldar || 'O'
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

    return (
        <div className="space-y-6">
            {/* Box Import Excel & Download Template */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                    <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                        <FileSpreadsheet className="h-5 w-5 text-green-600" /> Import Data Anggota dari Excel
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                        Unggah file Excel (.xlsx / .csv) sesuai struktur database Supabase.
                    </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                        onClick={downloadTemplate}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                        <Download className="h-4 w-4" /> Unduh Template
                    </button>
                    <label className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-xs font-semibold text-white cursor-pointer hover:bg-green-700 transition-colors shadow-sm">
                        <FileSpreadsheet className="h-4 w-4" />
                        {importing ? 'Mengimpor...' : 'Pilih & Import Excel'}
                        <input type="file" accept=".xlsx, .xls, .csv" onChange={handleFileUpload} className="hidden" disabled={importing} />
                    </label>
                </div>
            </div>

            {/* Pesan Status */}
            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            {/* Form Tambah Manual */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-md font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Plus className="h-5 w-5 text-amber-500" /> Tambah Anggota Manual
                </h3>
                <form onSubmit={handleAddManual} className="grid gap-4 sm:grid-cols-3">
                    <input type="text" name="name" placeholder="Nama Lengkap" value={form.name} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="tel" name="phone" placeholder="No WhatsApp / Telepon" value={form.phone} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <input type="text" name="address" placeholder="Alamat / Domisili" value={form.address} onChange={handleChange} required className="rounded-xl border px-4 py-2.5 text-sm" />
                    <div>
                        <label className="block text-[10px] font-semibold text-gray-500 mb-1">Tanggal Bergabung</label>
                        <input type="date" name="join_date" value={form.join_date} onChange={handleChange} required className="w-full rounded-xl border px-4 py-2 text-sm bg-white" />
                    </div>
                    <select name="gol-dar" value={form['gol-dar']} onChange={handleChange} className="rounded-xl border px-4 py-2.5 text-sm bg-white">
                        <option value="O">Gol. Darah: O</option>
                        <option value="A">Gol. Darah: A</option>
                        <option value="B">Gol. Darah: B</option>
                        <option value="AB">Gol. Darah: AB</option>
                        <option value="Tidak Tahu">Tidak Tahu</option>
                    </select>
                    <div className="flex items-center gap-2 px-2">
                        <input type="checkbox" name="status_aktif" id="status_aktif" checked={form.status_aktif} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-amber-600" />
                        <label htmlFor="status_aktif" className="text-xs font-semibold text-gray-700">Status Aktif</label>
                    </div>
                    <button type="submit" disabled={loading} className="sm:col-span-3 rounded-full bg-black py-3 text-sm font-semibold text-white">
                        {loading ? 'Menyimpan...' : 'Simpan Anggota Baru'}
                    </button>
                </form>
            </div>

            {/* Daftar Direktori Anggota */}
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-md font-bold text-gray-800 flex items-center gap-2">
                        <Users className="h-4 w-4 text-amber-600" /> Daftar Direktori Anggota ({anggotaList.length})
                    </h3>
                </div>
                {anggotaList.length === 0 ? (
                    <p className="text-sm text-gray-400 py-6 text-center">Belum ada data anggota tersimpan.</p>
                ) : (
                    <div className="space-y-3">
                        {anggotaList.map((item, idx) => (
                            <div key={item.id} className="flex justify-between items-center p-4 rounded-xl border bg-gray-50/60">
                                <div className="flex items-center gap-4">
                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                                            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${item.status_aktif ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {item.status_aktif ? 'Aktif' : 'Tidak Aktif'}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Alamat: {item.address || '-'} | Gol. Darah: <strong className="text-amber-700">{item['gol-dar'] || '-'}</strong> | Gabung: {item.join_date || '-'}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-0.5">
                                            📞 {item.phone || '-'}
                                        </p>
                                    </div>
                                </div>
                                <button onClick={() => handleDelete(item.id)} className="text-red-500 p-2 hover:bg-red-50 rounded-lg transition-colors" title="Hapus Anggota">
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