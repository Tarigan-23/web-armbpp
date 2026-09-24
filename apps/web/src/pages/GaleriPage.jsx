import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { supabase } from '@/lib/supabase';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import { SectionHeading } from '@/components/KaroPattern';
import { Image as ImageIcon, X } from 'lucide-react';

export default function GaleriPage() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [activeImage, setActiveImage] = useState(null); // Untuk modal preview

    useEffect(() => {
        fetchGalleries();
    }, []);

    const fetchGalleries = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('galleries')
            .select('*')
            .order('created_at', { ascending: false });

        if (!error && data) {
            setPhotos(data);
        }
        setLoading(false);
    };

    // Ambil daftar kategori unik untuk tombol filter
    const categories = ['Semua', ...new Set(photos.map(p => p.category || 'Kegiatan'))];

    // Filter foto berdasarkan kategori yang dipilih
    const filteredPhotos = selectedCategory === 'Semua'
        ? photos
        : photos.filter(p => (p.category || 'Kegiatan') === selectedCategory);

    return (
        <div className="min-h-screen bg-karo-black font-sans text-karo-ivory antialiased">
            <Helmet>
                <title>Galeri Dokumentasi — Aron Rudang Mayang Balikpapan</title>
            </Helmet>
            <Navbar />

            <main className="py-24 sm:py-32 pt-36">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Reveal>
                        <SectionHeading
                            dark
                            eyebrow="Galeri Komunitas"
                            title="Potret Kehidupan & Kebersamaan"
                            description="Momen-momen berharga yang kami abadikan — dari kegiatan adat, seni budaya, hingga kebersamaan keluarga besar di perantauan."
                        />
                    </Reveal>

                    {/* Tombol Filter Kategori */}
                    {!loading && photos.length > 0 && (
                        <Reveal delay={0.1}>
                            <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${selectedCategory === cat
                                                ? 'bg-karo-gold text-karo-black shadow-lg shadow-karo-gold/20'
                                                : 'border border-karo-ivory/20 bg-karo-ivory/5 text-karo-ivory hover:border-karo-gold/60'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </Reveal>
                    )}

                    {/* Grid Galeri */}
                    {loading ? (
                        <p className="mt-20 text-center text-sm text-karo-ivory/50 animate-pulse">Memuat galeri foto...</p>
                    ) : filteredPhotos.length === 0 ? (
                        <div className="mt-20 text-center py-16 rounded-3xl border border-karo-ivory/10 bg-karo-ivory/[0.02]">
                            <ImageIcon className="mx-auto h-12 w-12 text-karo-gold/40" />
                            <p className="mt-4 text-sm font-semibold text-karo-ivory">Belum ada foto dalam kategori ini.</p>
                        </div>
                    ) : (
                        <div className="mt-16 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
                            {filteredPhotos.map((photo, i) => (
                                <Reveal key={photo.id || photo.image_url} delay={i * 0.04} className={photo.span_class || 'sm:col-span-1 sm:row-span-1'}>
                                    <figure
                                        onClick={() => setActiveImage(photo)}
                                        className="group relative h-full w-full overflow-hidden rounded-3xl border border-karo-gold/20 bg-karo-ivory/5 cursor-pointer shadow-xl transition-transform duration-300 hover:scale-[1.01]"
                                    >
                                        <img
                                            src={photo.image_url}
                                            alt={photo.title}
                                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-karo-black/90 via-karo-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        <figcaption className="absolute inset-x-0 bottom-0 translate-y-4 p-6 text-sm font-medium text-karo-ivory opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                            <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-karo-gold mb-1">
                                                {photo.category || 'Dokumentasi'}
                                            </span>
                                            <p className="font-display text-base font-bold leading-snug">{photo.title}</p>
                                        </figcaption>
                                    </figure>
                                </Reveal>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            {/* Modal Lightbox Preview Foto */}
            {activeImage && (
                <div
                    onClick={() => setActiveImage(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-karo-black/90 p-4 backdrop-blur-md"
                >
                    <div className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-karo-gold/40 bg-karo-black p-4 shadow-2xl" onClick={e => e.stopPropagation()}>
                        <button
                            onClick={() => setActiveImage(null)}
                            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-karo-black/70 text-karo-ivory hover:bg-karo-gold hover:text-karo-black transition-colors"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <img src={activeImage.image_url} alt={activeImage.title} className="max-h-[70vh] w-full object-contain rounded-2xl" />
                        <div className="mt-4 text-center px-4 pb-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-karo-gold">{activeImage.category}</span>
                            <h3 className="font-display text-lg font-bold text-karo-ivory mt-1">{activeImage.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}