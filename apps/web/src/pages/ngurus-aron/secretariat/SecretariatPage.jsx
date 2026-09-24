import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SecretariatAdminPage() {
    const [form, setForm] = useState({
        title: '',
        description: '',
        address: '',
        operational_hours: '',
        additional_info: '',
        map_iframe: ''
    });
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchSecretariat();
    }, []);

    const fetchSecretariat = async () => {
        setLoading(true);
        const { data } = await supabase.from('secretariat').select('*').limit(1).single();
        if (data) {
            setForm(data);
            setId(data.id);
        }
        setLoading(false);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setMsg({ type: '', text: '' });

        let error;
        if (id) {
            const res = await supabase.from('secretariat').update(form).eq('id', id);
            error = res.error;
        } else {
            const res = await supabase.from('secretariat').insert([form]);
            error = res.error;
        }

        if (!error) {
            setMsg({ type: 'success', text: 'Informasi sekretariat & peta berhasil diperbarui!' });
            fetchSecretariat();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-amber-600" /> Manajemen Sekretariat & Peta Lokasi
                </h3>
                <p className="text-sm text-gray-500 mt-1">Ubah alamat, jam operasional, deskripsi, dan kode embed Google Maps.</p>
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
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Judul Utama</label>
                            <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Jam Operasional</label>
                            <input type="text" value={form.operational_hours} onChange={e => setForm({ ...form, operational_hours: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Deskripsi di Bawah Judul</label>
                            <input type="text" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Alamat Lengkap Sekretariat</label>
                            <textarea rows={2} value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} required className="w-full rounded-xl border px-4 py-2.5 text-sm resize-none" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Deskripsi Tambahan (Di Bawah Alamat / Jam Operasional)</label>
                            <textarea rows={2} value={form.additional_info || ''} onChange={e => setForm({ ...form, additional_info: e.target.value })} placeholder="Opsional: Catatan atau informasi tambahan..." className="w-full rounded-xl border px-4 py-2.5 text-sm resize-none" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Kode Embed Google Maps (Tag &lt;iframe&gt; lengkap)</label>
                            <textarea rows={4} value={form.map_iframe} onChange={e => setForm({ ...form, map_iframe: e.target.value })} required placeholder='<iframe src="..." ...></iframe>' className="w-full rounded-xl border px-4 py-2.5 text-sm font-mono text-xs" />
                            <p className="text-[11px] text-gray-400 mt-1">Tips: Salin seluruh tag <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;iframe&gt;</code> dari Google Maps (Bagikan &gt; Sematkan peta).</p>
                        </div>

                        <div className="sm:col-span-2 pt-2">
                            <button type="submit" className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-gray-800 transition-all">
                                Simpan Perubahan Sekretariat
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}