import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, Clock, MapPin, ExternalLink, Timer } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';
import ShareButtons from '@/components/ShareButtons';

function CountdownTimer({ targetDate }) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        const target = new Date(targetDate).getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = target - now;

            if (difference <= 0) {
                setIsExpired(true);
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    if (isExpired) {
        return <span className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full">Agenda Telah Dimulai / Berakhir</span>;
    }

    return (
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 bg-amber-50 px-3 py-2 rounded-xl border border-amber-200/60">
            <Timer className="h-4 w-4 text-amber-600 animate-pulse shrink-0" />
            <span>Mundur: {timeLeft.days}h {timeLeft.hours}j {timeLeft.minutes}m {timeLeft.seconds}d</span>
        </div>
    );
}

export default function AgendaDetailPage() {
    const router = useRouter();
    const { id } = router.query;
    const [agenda, setAgenda] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            supabase.from('agendas').select('*').eq('id', id).single().then(({ data }) => {
                setAgenda(data);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-karo-ivory flex items-center justify-center">
                <p className="text-gray-500 animate-pulse">Memuat agenda...</p>
            </div>
        );
    }

    if (!agenda) {
        return (
            <div className="min-h-screen bg-karo-ivory flex items-center justify-center">
                <p className="text-gray-500">Agenda tidak ditemukan.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-karo-ivory font-sans text-foreground antialiased">
            <Helmet>
                <title>{agenda.title} — Agenda Aron Rudang Mayang</title>
            </Helmet>
            <Navbar />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
                <Link href="/BeritaPage" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-karo-gold mb-8 transition-colors">
                    <ArrowLeft className="h-4 w-4" /> Kembali ke Daftar Agenda
                </Link>

                <div className="bg-white rounded-3xl shadow-xl border border-karo-gold/30 p-8 sm:p-12 space-y-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-karo-maroon/10 px-3 py-1 text-xs font-bold text-karo-maroon">
                        <Calendar className="h-3.5 w-3.5" /> {agenda.date}
                    </span>

                    <h1 className="font-display text-3xl sm:text-4xl font-bold text-karo-charcoal">{agenda.title}</h1>

                    <ShareButtons title={agenda.title} url={`/agenda/${agenda.id}`} />

                    <div className="space-y-4 text-sm text-gray-700 border-t border-b border-gray-100 py-6">
                        {agenda.time && (
                            <p className="flex items-center gap-3"><Clock className="h-5 w-5 text-amber-600" /> {agenda.time}</p>
                        )}
                        {agenda.location && (
                            <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-amber-600" /> {agenda.location}</p>
                        )}
                        {agenda.target_datetime && <CountdownTimer targetDate={agenda.target_datetime} />}
                    </div>

                    {agenda.description && (
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{agenda.description}</p>
                    )}

                    {agenda.location_url && (
                        <a
                            href={agenda.location_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/30 px-6 py-3 text-sm font-semibold text-amber-800 hover:bg-amber-500/20 transition-colors w-full sm:w-auto"
                        >
                            <ExternalLink className="h-4 w-4" /> Buka ShareLoc Google Maps
                        </a>
                    )}
                </div>
            </main>
        </div>
    );
}