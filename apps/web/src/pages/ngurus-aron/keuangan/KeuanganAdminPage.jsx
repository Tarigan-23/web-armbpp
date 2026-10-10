import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
    Plus, Trash2, Wallet, ArrowDownRight, ArrowUpRight, CheckCircle2,
    AlertCircle, Users, MessageCircle, Calendar, DollarSign, FileText,
    Search, FileSpreadsheet, Download, Edit2, X, History
} from 'lucide-react';
import * as XLSX from 'xlsx';

export default function KeuanganAdminPage() {
    // State Laporan Umum
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState({ type: 'masuk', title: '', amount: '', date: '', category: 'Iuran Kas' });
    const [msg, setMsg] = useState({ type: '', text: '' });

    // State Kas Anggota
    const [activeTab, setActiveTab] = useState('kas-anggota');
    const [members, setMembers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    // State untuk Modal Histori Pembayaran (Edit/Tambah Manual)
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [memberDuesHistory, setMemberDuesHistory] = useState([]);
    const [customDueForm, setCustomDueForm] = useState({ month_year: '', amount: '', notes: '', status: 'paid' });
    const [processing, setProcessing] = useState(false);

    useEffect(() => {
        if (activeTab === 'laporan') fetchDataLaporan();
        else fetchDataKasAnggota();
    }, [activeTab]);

    // --- FUNGSI LAPORAN UMUM ---
    const fetchDataLaporan = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('financial_reports').select('*').order('created_at', { ascending: false });
        if (!error && data) setTransactions(data);
        setLoading(false);
    };

    const handleAddLaporan = async (e) => {
        e.preventDefault();
        const payload = { ...form, amount: form.type === 'info' ? 0 : Number(form.amount) || 0 };
        const { error } = await supabase.from('financial_reports').insert([payload]);
        if (!error) {
            setMsg({ type: 'success', text: 'Catatan keuangan berhasil ditambahkan!' });
            setForm({ type: 'masuk', title: '', amount: '', date: '', category: 'Iuran Kas' });
            fetchDataLaporan();
        } else {
            setMsg({ type: 'error', text: error.message });
        }
    };

    const handleDeleteLaporan = async (id) => {
        if (confirm('Hapus catatan keuangan ini?')) {
            await supabase.from('financial_reports').delete().eq('id', id);
            setMsg({ type: 'success', text: 'Catatan berhasil dihapus!' });
            fetchDataLaporan();
        }
    };

    const exportLaporanToExcel = () => {
        const data = transactions.map(t => ({
            Tanggal: t.date,
            Jenis: t.type.toUpperCase(),
            Kategori: t.category || '-',
            Keterangan: t.title,
            Nominal: t.amount,
            Status: t.type === 'masuk' ? 'Pemasukan' : 'Pengeluaran'
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Laporan Keuangan");
        XLSX.writeFile(wb, "Laporan_Keuangan_Aron.xlsx");
    };

    // --- FUNGSI KAS ANGGOTA ---
    const fetchDataKasAnggota = async () => {
        setLoading(true);
        const { data: settings } = await supabase.from('app_settings').select('value').eq('key', 'monthly_dues_amount').single();
        const defaultAmount = Number(settings?.value || 10000);

        // HANYA ambil anggota yang AKTIF
        const { data: membersData } = await supabase.from('members')
            .select('*')
            .eq('status_aktif', true)
            .order('join_date', { ascending: true });

        if (membersData) {
            const { data: duesData } = await supabase.from('member_dues').select('*').eq('status', 'paid');

            const processedMembers = membersData.map(member => {
                const memberPayments = duesData?.filter(d => d.member_id === member.id) || [];
                const totalPaid = memberPayments.reduce((sum, p) => sum + Number(p.amount), 0);

                const joinDate = new Date(member.join_date);
                const now = new Date();
                const monthsDiff = (now.getFullYear() - joinDate.getFullYear()) * 12 + (now.getMonth() - joinDate.getMonth());
                const totalMonthsExpected = Math.max(0, monthsDiff) + 1;

                // Nominal dinamis berdasarkan status aktivitas
                const status = member.status_aktivitas?.toLowerCase() || '';
                const monthlyRate = (status.includes('kerja') || status.includes('wirausaha') || status.includes('pns')) ? 20000 : 10000;

                const expectedTotal = totalMonthsExpected * monthlyRate;
                const unpaidTotal = Math.max(0, expectedTotal - totalPaid);

                return { ...member, monthlyRate, totalMonthsExpected, expectedTotal, totalPaid, unpaidTotal };
            });
            setMembers(processedMembers);
        }
        setLoading(false);
    };

    const sendWAMessage = (member) => {
        const phone = member.phone.startsWith('0') ? '62' + member.phone.slice(1) : member.phone;
        const message = `Mejuah-juah Aron *${member.name}* 👋\n\nKami dari admin keuangan Aron Rudang Mayang menginformasikan status iuran kas:\n📅 Periode: Sejak ${new Date(member.join_date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}\n💰 Nominal Kas/Bulan: Rp ${member.monthlyRate.toLocaleString('id-ID')} (${member.status_aktivitas})\n✅ Total Sudah Dibayar: Rp ${member.totalPaid.toLocaleString('id-ID')}\n⚠️ *Total Belum Dibayar: Rp ${member.unpaidTotal.toLocaleString('id-ID')}*\n\nTranfer ke Bank BRI: 211201010329508 \n an.Meilin Br Sembiring \nAtau Tunai ke pengurus ARM\nMohon konfirmasi pembayarannya. Bujur! 🙏\n\nKunjungi website kita untuk melihat info terbaru Aron Rudang Mayang. https://aron.rudangmayang.web.id/`;
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const exportKasToExcel = () => {
        const data = filteredMembers.map(m => ({
            Nama: m.name,
            'Status Aktivitas': m.status_aktivitas,
            'Tgl Gabung': m.join_date,
            'Nominal/Bulan': m.monthlyRate,
            'Total Bulan': m.totalMonthsExpected,
            'Total Harus Bayar': m.expectedTotal,
            'Total Sudah Bayar': m.totalPaid,
            'Sisa Tunggakan': m.unpaidTotal
        }));
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Kas Anggota");
        XLSX.writeFile(wb, "Laporan_Kas_Anggota_Aron.xlsx");
    };

    // --- FUNGSI MODAL HISTORI (EDIT/TAMBAH MANUAL) ---
    const openHistoryModal = async (member) => {
        setSelectedMember(member);
        setIsHistoryModalOpen(true);
        setCustomDueForm({ month_year: new Date().toISOString().slice(0, 7), amount: member.monthlyRate, notes: '', status: 'paid' });

        const { data } = await supabase.from('member_dues')
            .select('*')
            .eq('member_id', member.id)
            .order('month_year', { ascending: false });
        setMemberDuesHistory(data || []);
    };

    const handleAddCustomDue = async (e) => {
        e.preventDefault();
        setProcessing(true);
        const { error } = await supabase.from('member_dues').insert([{
            member_id: selectedMember.id,
            month_year: customDueForm.month_year,
            amount: Number(customDueForm.amount),
            notes: customDueForm.notes,
            status: customDueForm.status,
            paid_at: customDueForm.status === 'paid' ? new Date().toISOString().split('T')[0] : null
        }]);

        if (!error) {
            setMsg({ type: 'success', text: 'Riwayat pembayaran berhasil ditambahkan!' });
            openHistoryModal(selectedMember); // Refresh modal
            fetchDataKasAnggota(); // Refresh main list
        } else {
            setMsg({ type: 'error', text: error.message });
        }
        setProcessing(false);
    };

    const handleDeleteDue = async (dueId) => {
        if (!confirm('Hapus catatan pembayaran ini?')) return;
        await supabase.from('member_dues').delete().eq('id', dueId);
        setMsg({ type: 'success', text: 'Catatan dihapus!' });
        openHistoryModal(selectedMember);
        fetchDataKasAnggota();
    };

    // Filter pencarian
    const filteredMembers = members.filter(m =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.phone.includes(searchQuery) ||
        (m.status_aktivitas && m.status_aktivitas.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const formatRupiah = (num) => `Rp ${Number(num).toLocaleString('id-ID')}`;

    // --- RENDER ---
    return (
        <div className="space-y-6 max-w-6xl mx-auto p-4 sm:p-6">
            {/* Header & Tabs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-emerald-100">
                <div>
                    <h2 className="text-xl font-bold text-emerald-900 flex items-center gap-2">
                        <Wallet className="h-6 w-6 text-emerald-600" /> Manajemen Keuangan
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">Kelola laporan umum dan iuran kas anggota terpusat.</p>
                </div>
                <div className="flex bg-gray-100 p-1 rounded-xl self-start sm:self-auto">
                    <button onClick={() => setActiveTab('kas-anggota')} className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${activeTab === 'kas-anggota' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}`}>
                        <Users className="h-3.5 w-3.5" /> Kas Anggota
                    </button>
                    <button onClick={() => setActiveTab('laporan')} className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${activeTab === 'laporan' ? 'bg-white text-emerald-700 shadow-sm' : 'text-gray-500'}`}>
                        <FileText className="h-3.5 w-3.5" /> Laporan Umum
                    </button>
                </div>
            </div>

            {msg.text && (
                <div className={`flex items-center gap-2 rounded-xl p-3 text-xs font-medium border ${msg.type === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                    {msg.type === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
                    <span>{msg.text}</span>
                    <button onClick={() => setMsg({ type: '', text: '' })} className="ml-auto hover:opacity-70">✕</button>
                </div>
            )}

            {/* ================= TAB: KAS ANGGOTA ================= */}
            {activeTab === 'kas-anggota' && (
                <div className="space-y-6">
                    {/* Ringkasan & Aksi */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-2 text-emerald-100 text-xs font-medium mb-1"><Users className="h-3.5 w-3.5" /> Anggota Aktif</div>
                            <div className="text-2xl font-bold">{members.length} <span className="text-xs font-normal text-emerald-200">Orang</span></div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex items-center gap-2 text-emerald-600 text-xs font-medium mb-1"><CheckCircle2 className="h-3.5 w-3.5" /> Total Terkumpul</div>
                            <div className="text-xl font-bold text-gray-800">{formatRupiah(members.reduce((acc, m) => acc + m.totalPaid, 0))}</div>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-sm border border-red-100 flex flex-col justify-between">
                            <div className="flex items-center gap-2 text-red-500 text-xs font-medium mb-1"><AlertCircle className="h-3.5 w-3.5" /> Total Tunggakan</div>
                            <div className="text-xl font-bold text-red-600 mb-2">{formatRupiah(members.reduce((acc, m) => acc + m.unpaidTotal, 0))}</div>
                            <button onClick={exportKasToExcel} className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold py-2 rounded-xl hover:bg-emerald-100 transition-colors border border-emerald-200">
                                <FileSpreadsheet className="h-3.5 w-3.5" /> Export Excel
                            </button>
                        </div>
                    </div>

                    {/* Pencarian */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Cari nama, nomor HP, atau status (kerja/kuliah)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 transition-all"
                        />
                    </div>

                    {/* Daftar Anggota */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {loading ? (
                            <div className="p-8 text-center text-sm text-gray-400 animate-pulse">Memuat data anggota...</div>
                        ) : (
                            <div className="divide-y divide-gray-100">
                                {filteredMembers.map(member => (
                                    <div key={member.id} className="p-4 hover:bg-gray-50/80 transition-colors">
                                        {/* Mobile Layout */}
                                        <div className="flex flex-col gap-3 sm:hidden">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h5 className="font-bold text-gray-900 text-sm">{member.name}</h5>
                                                    <p className="text-[10px] text-gray-500 mt-0.5">{member.status_aktivitas} • Gabung: {new Date(member.join_date).toLocaleDateString('id-ID', { month: 'short', year: 'numeric' })}</p>
                                                </div>
                                                <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${member.unpaidTotal > 0 ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-emerald-50 text-emerald-700 border border-emerald-100'}`}>
                                                    {member.unpaidTotal > 0 ? 'Menunggak' : 'Lunas'}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2 text-xs">
                                                <div className="bg-gray-50 p-2 rounded-lg"><div className="text-gray-500 text-[10px]">Nominal/Bln</div><div className="font-semibold">{formatRupiah(member.monthlyRate)}</div></div>
                                                <div className="bg-red-50 p-2 rounded-lg border border-red-100"><div className="text-red-500 text-[10px]">Tunggakan</div><div className="font-bold text-red-700">{formatRupiah(member.unpaidTotal)}</div></div>
                                            </div>
                                            <div className="flex gap-2">
                                                <button onClick={() => openHistoryModal(member)} className="flex-1 bg-white border border-gray-200 text-gray-700 text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5">
                                                    <History className="h-3.5 w-3.5" /> Histori
                                                </button>
                                                <button onClick={() => sendWAMessage(member)} className="flex-1 bg-emerald-600 text-white text-xs font-semibold py-2.5 rounded-xl flex items-center justify-center gap-1.5">
                                                    <MessageCircle className="h-3.5 w-3.5" /> WA
                                                </button>
                                            </div>
                                        </div>

                                        {/* Desktop Layout */}
                                        <div className="hidden sm:flex sm:items-center sm:justify-between gap-4">
                                            <div className="flex-1 min-w-0">
                                                <h5 className="font-bold text-gray-900 text-sm truncate">{member.name}</h5>
                                                <p className="text-xs text-gray-500 flex items-center gap-1.5 mt-0.5">
                                                    {member.status_aktivitas} <span className="text-gray-300">•</span> {member.phone} <span className="text-gray-300">•</span> Gabung {new Date(member.join_date).toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-6 text-sm">
                                                <div className="text-right w-24"><div className="text-[10px] text-gray-500 uppercase font-semibold">Per Bulan</div><div className="font-bold text-gray-800">{formatRupiah(member.monthlyRate)}</div></div>
                                                <div className="text-right w-28"><div className="text-[10px] text-emerald-600 uppercase font-semibold">Sudah Bayar</div><div className="font-bold text-emerald-700">{formatRupiah(member.totalPaid)}</div></div>
                                                <div className="text-right w-28"><div className="text-[10px] text-red-500 uppercase font-semibold">Tunggakan</div><div className={`font-bold ${member.unpaidTotal > 0 ? 'text-red-600' : 'text-gray-400'}`}>{formatRupiah(member.unpaidTotal)}</div></div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <button onClick={() => openHistoryModal(member)} className="p-2.5 bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors border border-gray-200" title="Kelola Histori / Tambah Manual">
                                                    <History className="h-4 w-4" />
                                                </button>
                                                <button onClick={() => sendWAMessage(member)} className="p-2.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-200" title="Kirim WhatsApp">
                                                    <MessageCircle className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {filteredMembers.length === 0 && <div className="p-8 text-center text-sm text-gray-400">Tidak ada anggota aktif yang cocok dengan pencarian.</div>}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ================= TAB: LAPORAN UMUM ================= */}
            {activeTab === 'laporan' && (
                <div className="space-y-6">
                    <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-bold text-gray-800 flex items-center gap-2"><Plus className="h-4 w-4 text-emerald-600" /> Tambah Catatan Keuangan</h4>
                            <button onClick={exportLaporanToExcel} className="flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-2 rounded-xl hover:bg-emerald-100 border border-emerald-200">
                                <Download className="h-3.5 w-3.5" /> Export Excel
                            </button>
                        </div>
                        <form onSubmit={handleAddLaporan} className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Jenis</label>
                                <select name="type" value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm bg-white focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 outline-none">
                                    <option value="masuk">Uang Masuk</option>
                                    <option value="keluar">Uang Keluar</option>
                                    <option value="info">Catatan / Info</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Tanggal</label>
                                <input type="text" name="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required placeholder="15 Juli 2024" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 outline-none" />
                            </div>
                            <div className="sm:col-span-2">
                                <label className="block text-xs font-semibold text-gray-700 mb-1">Keterangan</label>
                                <input type="text" name="title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required placeholder="Contoh: Pembayaran Iuran Kas Bulan Juli" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 outline-none" />
                            </div>
                            {form.type !== 'info' && (
                                <>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">Nominal (Rp)</label>
                                        <input type="number" name="amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required placeholder="50000" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">Kategori</label>
                                        <input type="text" name="category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Iuran Kas / Operasional" className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-100 focus:border-emerald-500 outline-none" />
                                    </div>
                                </>
                            )}
                            <div className="sm:col-span-2">
                                <button type="submit" className="w-full sm:w-auto rounded-xl bg-emerald-600 hover:bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors flex items-center justify-center gap-2">
                                    <CheckCircle2 className="h-4 w-4" /> Simpan Catatan
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="rounded-2xl bg-white p-5 sm:p-6 shadow-sm border border-gray-200">
                        <h4 className="text-sm font-bold text-gray-800 mb-4">Riwayat Keuangan ({transactions.length})</h4>
                        {loading ? <p className="text-sm text-gray-400 py-6 text-center animate-pulse">Memuat...</p> : (
                            <div className="space-y-3">
                                {transactions.map(item => (
                                    <div key={item.id} className="flex justify-between items-start sm:items-center p-4 rounded-xl border border-gray-100 bg-gray-50/40 hover:bg-gray-50 transition-colors">
                                        <div className="flex-1 min-w-0 mr-4">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${item.type === 'masuk' ? 'bg-emerald-100 text-emerald-800' : item.type === 'keluar' ? 'bg-red-100 text-red-800' : 'bg-amber-100 text-amber-800'}`}>{item.type.toUpperCase()}</span>
                                                {item.category && <span className="text-[10px] text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{item.category}</span>}
                                                <span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="h-3 w-3" /> {item.date}</span>
                                            </div>
                                            <h5 className="font-semibold text-sm text-gray-900 mt-1.5 truncate">{item.title}</h5>
                                            {item.amount > 0 && <p className={`text-xs font-bold mt-1 flex items-center gap-1 ${item.type === 'masuk' ? 'text-emerald-600' : 'text-red-600'}`}>{item.type === 'masuk' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />} Rp {Number(item.amount).toLocaleString('id-ID')}</p>}
                                        </div>
                                        <button onClick={() => handleDeleteLaporan(item.id)} className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"><Trash2 className="h-4 w-4" /></button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ================= MODAL HISTORI PEMBAYARAN ================= */}
            {isHistoryModalOpen && selectedMember && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl">
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                    <History className="h-5 w-5 text-emerald-600" /> Histori Kas: {selectedMember.name}
                                </h3>
                                <p className="text-xs text-gray-500 mt-1">Tambah atau edit pembayaran masa lalu (manual).</p>
                            </div>
                            <button onClick={() => setIsHistoryModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg"><X className="h-5 w-5 text-gray-500" /></button>
                        </div>

                        {/* Form Tambah Manual */}
                        <form onSubmit={handleAddCustomDue} className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 mb-4 space-y-3">
                            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Catat Pembayaran Manual / Masa Lalu</p>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-700 mb-1">Bulan & Tahun</label>
                                    <input type="month" name="month_year" value={customDueForm.month_year} onChange={(e) => setCustomDueForm({ ...customDueForm, month_year: e.target.value })} required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" />
                                </div>
                                <div>
                                    <label className="block text-[10px] font-semibold text-gray-700 mb-1">Nominal (Rp)</label>
                                    <input type="number" name="amount" value={customDueForm.amount} onChange={(e) => setCustomDueForm({ ...customDueForm, amount: e.target.value })} required className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[10px] font-semibold text-gray-700 mb-1">Deskripsi / Catatan (Opsional)</label>
                                <input type="text" name="notes" value={customDueForm.notes} onChange={(e) => setCustomDueForm({ ...customDueForm, notes: e.target.value })} placeholder="Cth: Bayar tunai tahun 2023, dll" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm" />
                            </div>
                            <button type="submit" disabled={processing} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                                {processing ? 'Menyimpan...' : <><Plus className="h-3.5 w-3.5" /> Simpan Catatan Manual</>}
                            </button>
                        </form>

                        {/* List Histori */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Riwayat Tersimpan</p>
                            {memberDuesHistory.length === 0 ? (
                                <p className="text-xs text-gray-400 text-center py-4">Belum ada riwayat pembayaran.</p>
                            ) : (
                                memberDuesHistory.map(due => (
                                    <div key={due.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs font-bold text-gray-800">{due.month_year}</span>
                                                <span className={`text-[10px] px-1.5 py-0.5 rounded ${due.status === 'paid' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                                                    {due.status === 'paid' ? 'Lunas' : 'Belum'}
                                                </span>
                                            </div>
                                            <p className="text-xs font-semibold text-emerald-700 mt-0.5">Rp {Number(due.amount).toLocaleString('id-ID')}</p>
                                            {due.notes && <p className="text-[10px] text-gray-500 mt-0.5 italic">"{due.notes}"</p>}
                                        </div>
                                        <button onClick={() => handleDeleteDue(due.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"><Trash2 className="h-3.5 w-3.5" /></button>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}