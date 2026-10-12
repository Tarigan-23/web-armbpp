import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import ShareButtons from '@/components/ShareButtons';

export default function BeritaDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [berita, setBerita] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            supabase
                .from('news')
                .select('*')
                .eq('id', id)
                .single()
                .then(({ data, error }) => {
                    if (error) {
                        console.error('Error fetching berita:', error);
                    } else {
                        setBerita(data);
                    }
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-karo-ivory flex items-center justify-center">
                <p className="text-gray-500 animate-pulse">Memuat berita...</p>
            </div>
        );
    }

    if (!berita) {
        return (
            <div className="min-h-screen bg-karo-ivory flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 mb-4">Berita tidak ditemukan.</p>
                    <button
                        onClick={() => navigate('/berita')}
                        className="text-karo-gold hover:underline"
                    >
                        Kembali ke Berita
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased">
            <Helmet>
                <title>{berita.title} — Aron Rudang Mayang</title>
            </Helmet>
            <Navbar />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <button
                    onClick={() => navigate('/berita')}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-karo-gold mb-8 transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Berita
                </button>

                <article className="bg-white rounded-3xl shadow-xl border border-border">
                    {berita.image_url && (
                        <img
                            src={berita.image_url}
                            alt={berita.title}
                            className="w-full h-64 sm:h-96 object-cover"
                        />
                    )}
                    <div className="p-8 sm:p-12">
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-karo-gold mb-4">
                            {berita.category && (
                                <span className="rounded-full bg-karo-gold/20 px-3 py-1 text-karo-gold">
                                    {berita.category}
                                </span>
                            )}
                            {berita.date && (
                                <span className="flex items-center gap-1.5 text-gray-500">
                                    <Calendar className="h-3.5 w-3.5" /> {berita.date}
                                </span>
                            )}
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-karo-charcoal mb-6">
                            {berita.title}
                        </h1>

                        <div className="mb-8 pb-8 border-b border-gray-100">
                            <ShareButtons title={berita.title} url={`/berita/${berita.id}`} />
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                            {berita.content || berita.excerpt || 'Tidak ada konten.'}
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}