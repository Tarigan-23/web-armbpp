import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import ShareButtons from '@/components/ShareButtons';

export default function BeritaDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [berita, setBerita] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            supabase.from('news').select('*').eq('id', id).single().then(({ data }) => {
                setBerita(data);
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
                <p className="text-gray-500">Berita tidak ditemukan.</p>
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
                <Link href="/BeritaPage" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-karo-gold mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Berita
                </Link>

                <article className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
                    {berita.image_url && (
                        <img src={berita.image_url} alt={berita.title} className="w-full h-64 sm:h-96 object-cover" />
                    )}
                    <div className="p-8 sm:p-12">
                        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-karo-gold mb-4">
                            <Calendar className="h-4 w-4" /> {berita.date} {berita.category && `• ${berita.category}`}
                        </div>
                        <h1 className="font-display text-3xl sm:text-4xl font-bold text-karo-charcoal mb-6">{berita.title}</h1>

                        <div className="mb-8 pb-8 border-b border-gray-100">
                            <ShareButtons title={berita.title} url={`/berita/${berita.id}`} />
                        </div>

                        <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                            {berita.content || berita.excerpt}
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}