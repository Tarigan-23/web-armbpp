import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import {
    Home, Newspaper, Images, MapPin, Landmark, Users,
    Phone, DollarSign, Calendar, Shield, UserPlus, LogOut,
    Info, Play, MessageSquare, Store, Menu, X, ChevronRight
} from 'lucide-react';

export default function DashboardLayout() {
    const [loading, setLoading] = useState(true);
    const [userEmail, setUserEmail] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState(false);
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

    // Tutup sidebar saat navigasi berubah (mobile)
    useEffect(() => {
        setSidebarOpen(false);
    }, [location.pathname]);

    // Kunci scroll body saat sidebar terbuka di mobile
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [sidebarOpen]);

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate('/ngurus-aron/login');
    };

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-karo-black text-karo-gold">
                <p className="animate-pulse text-sm font-semibold tracking-widest uppercase">
                    Memeriksa Keamanan Sesi...
                </p>
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
            {/* ===== OVERLAY (Mobile Only) ===== */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* ===== SIDEBAR ===== */}
            <aside
                className={`
          fixed inset-y-0 left-0 z-50 w-72 bg-karo-black text-karo-ivory
          flex flex-col shadow-2xl transition-transform duration-300 ease-in-out
          lg:static lg:translate-x-0 lg:shadow-xl
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-5 pb-4 border-b border-karo-ivory/10">
                    <div className="flex-1 min-w-0">
                        <span className="inline-block rounded-full bg-karo-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-karo-gold">
                            Panel Pengurus Aron
                        </span>
                        <h1 className="mt-2 font-display text-base font-bold text-karo-ivory leading-tight">
                            Aron Rudang Mayang<br />Balikpapan
                        </h1>
                        <p className="mt-1 text-[10px] text-karo-ivory/40 truncate" title={userEmail}>
                            {userEmail}
                        </p>
                    </div>
                    {/* Tombol Close (Mobile) */}
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="lg:hidden ml-3 rounded-lg p-2 text-karo-ivory/60 hover:bg-karo-ivory/10 hover:text-karo-ivory transition-colors"
                        aria-label="Tutup menu"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 scrollbar-thin">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                  flex items-center gap-3 rounded-xl px-3.5 py-2.5
                  text-sm font-medium transition-all duration-200
                  ${isActive
                                        ? 'bg-karo-gold text-karo-black font-semibold shadow-lg shadow-karo-gold/20'
                                        : 'text-karo-ivory/70 hover:bg-karo-ivory/10 hover:text-karo-ivory'
                                    }
                `}
                            >
                                {Icon && <Icon className="h-4.5 w-4.5 shrink-0" />}
                                <span className="truncate">{item.name}</span>
                                {isActive && (
                                    <ChevronRight className="h-4 w-4 ml-auto shrink-0" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout Button */}
                <div className="p-4 border-t border-karo-ivory/10">
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-400 transition-colors hover:bg-red-500/10"
                    >
                        <LogOut className="h-4.5 w-4.5 shrink-0" />
                        <span>Ndarat</span>
                    </button>
                </div>
            </aside>

            {/* ===== MAIN CONTENT ===== */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header Bar */}
                <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
                    <div className="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4">
                        {/* Hamburger + Title */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                                aria-label="Buka menu"
                            >
                                <Menu className="h-5 w-5" />
                            </button>
                            <div>
                                <h2 className="text-base lg:text-lg font-bold text-gray-800 leading-tight">
                                    Dashboard Manajemen Pengurus
                                </h2>
                                <p className="text-[11px] text-gray-400 hidden sm:block">
                                    Aron Rudang Mayang Balikpapan
                                </p>
                            </div>
                        </div>

                        {/* Badge */}
                        <span className="text-[10px] lg:text-xs bg-karo-gold/20 text-karo-maroon font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                            Sistem Terproteksi
                        </span>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto">
                    <div className="p-4 sm:p-6 lg:p-8">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}