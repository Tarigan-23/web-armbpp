import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Edit3, CheckCircle2, AlertCircle, Landmark } from 'lucide-react';

export default function DonasiAdminPage() {
    const [info, setInfo] = useState({
        bank_name: '',
        account_number: '',
        account_holder: '',
        wa_number: '',
        contact_name: '',
        description: ''
    });
    const [id, setId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [msg, setMsg] = useState({ type: '', text: '' });

    useEffect(() => {
        fetchDonationInfo();
    }, []);

    const fetchDonationInfo = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('donations_info').select('*').limit(1).single();
        if (!error && data) {
            setInfo(data);
            setId(data.id);
        }
        setLoading(false);
    };

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMsg({ type: '', text: '' });

        let error;
        if (id) {
            const res = await supabase.from('donations_info').update(info).eq('id', id);
            error = res.error;
        } else {
            const res = await supabase.from('donations_info').insert([info]);
            error = res.error;
        }

        setSaving(false);
        if (!error) {
            setMsg({ type: 'success', text: 'Informasi donasi berhasil diperbarui!' });
            fetchDonationInfo();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    return (
        <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Landmark className="h-5 w-5 text-amber-600" /> Manajemen Informasi Rekening & Donasi
                </h3>
                <p className="text-sm text-gray-500 mt-1">Perbarui nomor rekening bank dan kontak bendahara untuk konfirmasi donasi publik.</p>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-4 text-xs font-medium ${msg.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                </div>
            )}

            <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
                {loading ? (
                    <p className="text-sm text-gray-400 py-6 text-center animate-pulse">Memuat data rekening...</p>
                ) : (
                    <form onSubmit={handleSave} className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Bank (Cth: BRI / BCA)</label>
                            <input type="text" name="bank_name" value={info.bank_name} onChange={handleChange} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Nomor Rekening</label>
                            <input type="text" name="account_number" value={info.account_number} onChange={handleChange} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Atas Nama Rekening</label>
                            <input type="text" name="account_holder" value={info.account_holder} onChange={handleChange} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">No WhatsApp Konfirmasi (Format: 628...)</label>
                            <input type="text" name="wa_number" value={info.wa_number} onChange={handleChange} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Kontak / Bendahara</label>
                            <input type="text" name="contact_name" value={info.contact_name} onChange={handleChange} required className="w-full rounded-xl border px-4 py-2.5 text-sm" />
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-xs font-semibold text-gray-700 mb-1">Deskripsi / Pengantar Donasi</label>
                            <textarea name="description" rows={3} value={info.description} onChange={handleChange} required className="w-full rounded-xl border px-4 py-2.5 text-sm resize-none" />
                        </div>
                        <div className="sm:col-span-2">
                            <button type="submit" disabled={saving} className="rounded-full bg-black px-8 py-3 text-sm font-semibold text-white shadow-md">
                                {saving ? 'Menyimpan Perubahan...' : 'Simpan Informasi Donasi'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}