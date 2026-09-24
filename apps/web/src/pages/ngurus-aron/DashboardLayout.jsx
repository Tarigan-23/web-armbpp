import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Home, Newspaper, Images, MapPin, Landmark, Users, Phone, DollarSign, Calendar, Shield, UserPlus, LogOut, Info, Play, MessageSquare, Store } from 'lucide-react';

export default function DashboardLayout() {
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error || !session) {
                navigate('/ngurus-aron/login');
            } else {
                setUserEmail(session.user.email);
                setLoading(false);
            }
        };
        checkSession();
    }, [navigate]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/ngurus-aron/login');
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-karo-black text-karo-gold">
                <p className="animate-pulse text-sm font-semibold tracking-widest uppercase">Memeriksa Keamanan Sesi...</p>
            </div>
        );
    }

    const menuItems = [
        { name: 'Beranda', path: '/ngurus-aron/beranda', icon: Home },
        { name: 'Berita', path: '/ngurus-aron/berita', icon: Newspaper },
        { name: 'Galeri', path: '/ngurus-aron/galeri', icon: Images },
        { name: 'Keuangan', path: '/ngurus-aron/keuangan', icon: Landmark },
        { name: 'Anggota', path: '/ngurus-aron/anggota', icon: Users },
        { name: 'Donasi', path: '/ngurus-aron/donasi', icon: DollarSign },
        { name: 'Program', path: '/ngurus-aron/program', icon: Calendar },
        { name: 'Struktur Organisasi', path: '/ngurus-aron/struktur-organisasi', icon: Shield },
        { name: 'Anggota Baru', path: '/ngurus-aron/new-member', icon: UserPlus },
        { name: 'Tentang', path: '/ngurus-aron/tentang', icon: Info },
        { name: 'Youtube', path: '/ngurus-aron/youtube', icon: Play },
        { name: 'Sambutan', path: '/ngurus-aron/sambutan', icon: MessageSquare },
        { name: 'Sponsor', path: '/ngurus-aron/sponsor', icon: Store },
        { name: 'Sekretariat', path: '/ngurus-aron/secretariat', icon: MapPin },
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <aside className="w-72 bg-karo-black text-karo-ivory p-6 flex flex-col justify-between shadow-xl overflow-y-auto">
                <div>
                    <div className="mb-8">
                        <span className="rounded-full bg-karo-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-karo-gold">
                            Panel Pengurus Aron
                        </span>
                        <h1 className="mt-2 font-display text-lg font-bold text-karo-ivory">Aron Rudang Mayang Balikpapan</h1>
                        <p className="mt-1 text-[11px] text-karo-ivory/50 truncate">Login: {userEmail}</p>
                    </div>

                    <nav className="space-y-1.5">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-medium transition-colors ${isActive ? 'bg-karo-gold text-karo-black font-semibold' : 'hover:bg-karo-ivory/10 text-karo-ivory/80'
                                        }`}
                                >
                                    {Icon && <Icon className="h-4 w-4 shrink-0" />} {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="pt-6 mt-6 border-t border-karo-ivory/10">
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/10"
                    >
                        <LogOut className="h-4 w-4 shrink-0" /> Ndarat
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-y-auto">
                <header className="bg-white shadow-sm p-6 flex justify-between items-center border-b border-gray-200">
                    <h2 className="text-lg font-bold text-gray-800">
                        Dashboard Manajemen Pengurus
                    </h2>
                    <span className="text-xs bg-karo-gold/20 text-karo-maroon font-semibold px-3 py-1 rounded-full">
                        Sistem Terproteksi
                    </span>
                </header>

                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}