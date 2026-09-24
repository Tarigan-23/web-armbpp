import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Play } from 'lucide-react';

export default function YoutubeSection() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const { data, error } = await supabase
                    .from('youtube_videos')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                if (data) setVideos(data);
            } catch (err) {
                console.error("Gagal memuat video:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchVideos();
    }, []);

    // Fungsi cerdas untuk mengekstrak ID unik YouTube dari berbagai format link (pendek, watch, dll)
    const extractYouTubeId = (urlOrId) => {
        if (!urlOrId) return "dQw4w9WgXcQ";
        let videoId = urlOrId.trim();

        if (videoId.includes("youtu.be/")) {
            videoId = videoId.split("youtu.be/")[1]?.split("?")[0]?.split("&")[0];
        } else if (videoId.includes("watch?v=")) {
            videoId = videoId.split("watch?v=")[1]?.split("&")[0];
        } else if (videoId.includes("embed/")) {
            videoId = videoId.split("embed/")[1]?.split("?")[0]?.split("&")[0];
        }

        return videoId || "dQw4w9WgXcQ";
    };

    if (loading || videos.length === 0) {
        return null;
    }

    return (
        <section className="bg-karo-ivory py-16 md:py-24 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-karo-goldwarm bg-karo-gold/10 px-3 py-1 rounded-full">
                        Dokumentasi Video
                    </span>
                    <h2 className="mt-3 font-display text-2xl md:text-4xl font-bold text-karo-charcoal tracking-tight">
                        Video Terbaru Aron Rudang Mayang
                    </h2>
                    <div className="w-16 md:w-24 h-1.5 bg-karo-gold rounded-full mx-auto mt-3"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
                    {videos.slice(0, 3).map((video) => {
                        const ytId = extractYouTubeId(video.video_id);
                        // Mengambil thumbnail resmi beresolusi tinggi langsung dari server YouTube
                        const thumbnailUrl = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
                        const watchUrl = video.video_id.includes('http') ? video.video_id : `https://www.youtube.com/watch?v=${video.video_id}`;

                        return (
                            <div key={video.id} className="flex flex-col items-center group bg-white p-4 rounded-3xl shadow-lg border border-border h-full transition-all duration-300 hover:shadow-xl">

                                {/* Kotak Thumbnail dengan Tombol Play Melayang */}
                                <a
                                    href={watchUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner block"
                                >
                                    <img
                                        src={thumbnailUrl}
                                        alt={video.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <div className="flex h-12 w-16 items-center justify-center rounded-2xl bg-red-600 text-white shadow-xl group-hover:scale-110 transition-transform">
                                            <Play className="h-6 w-6 fill-white ml-0.5" />
                                        </div>
                                    </div>
                                </a>

                                {/* Judul & Tombol Tonton */}
                                <div className="w-full mt-4 flex flex-col justify-between flex-grow">
                                    <h3 className="text-sm md:text-base font-bold text-karo-charcoal line-clamp-2 leading-snug">
                                        {video.title}
                                    </h3>

                                    <a
                                        href={watchUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center justify-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors pt-3 border-t border-gray-100"
                                    >
                                        ▶ Tonton di <span className="font-extrabold underline">YouTube</span>
                                    </a>
                                </div>

                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}