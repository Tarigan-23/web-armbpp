import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Wallet, ArrowDownRight, ArrowUpRight, Landmark, FileText, CheckCircle2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading, KaroDivider } from '@/components/KaroPattern';

export default function KeuanganPage() {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchKeuangan();
    }, []);

    const fetchKeuangan = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('financial_reports').select('*').order('created_at', { ascending: false });
        if (!error && data) setTransactions(data);
        setLoading(false);
    };

    // Hitung Total Uang Masuk & Uang Keluar
    const totalMasuk = transactions
        .filter(t => t.type === 'masuk')
        .reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

    const totalKeluar = transactions
        .filter(t => t.type === 'keluar')
        .reduce((acc, curr) => acc + Number(curr.amount || 0), 0);

    const totalSaldo = totalMasuk - totalKeluar;

    const infoRapat = transactions.find(t => t.type === 'info')?.title || 'Berdasarkan hasil rapat pengurus dan anggota, iuran kas rutin wajib dibayarkan setiap bulannya untuk mempererat solidaritas aron.';

    const listTransaksi = transactions.filter(t => t.type !== 'info');

    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased">
            <Helmet>
                <title>Laporan Keuangan & Kas — Aron Rudang Mayang Balikpapan</title>
            </Helmet>
            <Navbar />
            <main className="py-24 sm:py-32 pt-36">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <SectionHeading
                            eyebrow="Transparansi Kas"
                            title="Laporan Keuangan & Pembayaran Kas"
                            description="Komitmen kami untuk mengelola iuran kas, donasi, dan dana sosial secara transparan dan akuntabel bagi seluruh keluarga besar."
                        />
                    </Reveal>

                    {/* Ringkasan Saldo (Total, Masuk, Keluar) */}
                    <div className="mt-12 grid gap-6 sm:grid-cols-3">
                        <Reveal delay={0.05}>
                            <div className="rounded-3xl border border-karo-gold/40 bg-karo-black p-6 text-karo-ivory shadow-xl">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-widest text-karo-gold font-bold">Total Saldo Kas</span>
                                    <Wallet className="h-5 w-5 text-karo-gold" />
                                </div>
                                <p className="mt-4 font-display text-2xl sm:text-3xl font-bold text-karo-gold">
                                    Rp {totalSaldo.toLocaleString('id-ID')}
                                </p>
                                <p className="mt-1 text-xs text-karo-ivory/60">Dana aktif di kas komunitas</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <div className="rounded-3xl border border-border bg-white p-6 shadow-md">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-widest text-green-600 font-bold">Total Uang Masuk</span>
                                    <ArrowDownRight className="h-5 w-5 text-green-600" />
                                </div>
                                <p className="mt-4 font-display text-2xl sm:text-3xl font-bold text-gray-900">
                                    Rp {totalMasuk.toLocaleString('id-ID')}
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">Akumulasi iuran & donasi</p>
                            </div>
                        </Reveal>

                        <Reveal delay={0.15}>
                            <div className="rounded-3xl border border-border bg-white p-6 shadow-md">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs uppercase tracking-widest text-red-600 font-bold">Total Uang Keluar</span>
                                    <ArrowUpRight className="h-5 w-5 text-red-600" />
                                </div>
                                <p className="mt-4 font-display text-2xl sm:text-3xl font-bold text-gray-900">
                                    Rp {totalKeluar.toLocaleString('id-ID')}
                                </p>
                                <p className="mt-1 text-xs text-muted-foreground">Pengeluaran sosial & operasional</p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Informasi Rapat & Pembayaran Kas */}
                    <div className="mt-12 grid gap-8 lg:grid-cols-2">
                        <Reveal delay={0.2}>
                            <div className="rounded-3xl border border-karo-gold/30 bg-white p-8 shadow-lg h-full flex flex-col justify-between">
                                <div>
                                    <span className="inline-flex items-center gap-1.5 rounded-full bg-karo-maroon/10 px-3 py-1 text-xs font-bold text-karo-maroon">
                                        <FileText className="h-3.5 w-3.5" /> Hasil Keputusan Rapat
                                    </span>
                                    <h3 className="mt-4 font-display text-xl font-bold text-karo-charcoal">Ketentuan & Kebijakan Kas</h3>
                                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                        {infoRapat}
                                    </p>
                                </div>
                                <div className="mt-8 rounded-2xl bg-karo-ivory p-4 border border-border text-xs text-muted-foreground">
                                    <p className="font-bold text-karo-charcoal mb-1">💡 Catatan Penting:</p>
                                    Pembayaran iuran kas dapat disetorkan langsung kepada bendahara atau melalui rekening resmi komunitas di bawah ini.
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.25}>
                            <div className="rounded-3xl border border-karo-gold/40 bg-karo-maroon p-8 text-karo-ivory shadow-xl">
                                <span className="inline-flex items-center gap-1.5 rounded-full bg-karo-gold/20 px-3 py-1 text-xs font-bold text-karo-gold">
                                    <Landmark className="h-3.5 w-3.5" /> Rekening Pembayaran Iuran Kas
                                </span>
                                <h3 className="mt-4 font-display text-xl font-bold text-karo-ivory">Transfer Bank Resmi</h3>
                                <div className="mt-6 space-y-4">
                                    <div className="rounded-2xl bg-karo-black/40 p-5 border border-karo-gold/20">
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-karo-gold">Bank BRI</p>
                                        <p className="font-display text-xl font-bold tracking-wide mt-1">1234 5678 9012</p>
                                        <p className="text-xs text-karo-ivory/70 mt-0.5">a.n. Aron Rudang Mayang Balikpapan</p>
                                    </div>
                                    <p className="text-xs text-karo-ivory/80 leading-relaxed">
                                        Setelah melakukan pembayaran iuran kas, mohon konfirmasikan bukti transfer melalui WhatsApp kepada Bendahara Umum (Meilin Sembiring).
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Tabel Riwayat Transaksi */}
                    <div className="mt-16">
                        <Reveal>
                            <SectionHeading
                                align="left"
                                eyebrow="Arus Kas"
                                title="Riwayat Uang Masuk & Keluar"
                            />
                        </Reveal>

                        {loading ? (
                            <p className="mt-8 text-center text-sm text-gray-500 animate-pulse">Memuat data keuangan...</p>
                        ) : listTransaksi.length === 0 ? (
                            <p className="mt-8 text-center text-sm text-gray-500">Belum ada riwayat transaksi tercatat.</p>
                        ) : (
                            <div className="mt-8 overflow-hidden rounded-3xl border border-border bg-white shadow-md">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-gray-50 text-xs uppercase text-gray-500 border-b border-border">
                                            <tr>
                                                <th className="px-6 py-4 font-semibold">Tanggal</th>
                                                <th className="px-6 py-4 font-semibold">Keterangan</th>
                                                <th className="px-6 py-4 font-semibold">Kategori</th>
                                                <th className="px-6 py-4 font-semibold text-right">Jumlah (Rp)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border">
                                            {listTransaksi.map((item) => (
                                                <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                                                    <td className="px-6 py-4 whitespace-nowrap text-xs font-medium text-gray-600">{item.date}</td>
                                                    <td className="px-6 py-4 font-medium text-karo-charcoal">{item.title}</td>
                                                    <td className="px-6 py-4">
                                                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full">
                                                            {item.category || 'Kas'}
                                                        </span>
                                                    </td>
                                                    <td className={`px-6 py-4 text-right font-bold whitespace-nowrap ${item.type === 'masuk' ? 'text-green-600' : 'text-red-600'
                                                        }`}>
                                                        {item.type === 'masuk' ? '+ ' : '- '}
                                                        Rp {Number(item.amount).toLocaleString('id-ID')}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}