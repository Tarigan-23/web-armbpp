import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const LINKS = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Pengurus', href: '/pengurus' },
    { label: 'Program', href: '/program' },
    { label: 'Berita', href: '/berita' },
    { label: 'Galeri', href: '/galeri' },
    { label: 'Donasi', href: '/donasi' },
    { label: 'Keuangan', href: '/keuangan' },
];

const LOGO_URL =
    'https://images.hostinger.com/0e41aec9-079a-4688-babb-0ef16efdf2ce.png';

function Logo({ compact = false }) {
    return (
        <Link to="/" className="flex items-center gap-3">
            <img
                src={LOGO_URL}
                alt="Logo Aron Rudang Mayang Balikpapan"
                className="h-11 w-11 shrink-0 rounded-full border-2 border-karo-gold bg-white object-cover shadow-md shadow-karo-gold/20"
            />
            {!compact && (
                <span className="leading-tight">
                    <span className="block font-display text-sm font-bold tracking-[0.14em] text-karo-charcoal sm:text-base">
                        ARON RUDANG MAYANG
                    </span>
                    <span className="block text-[10px] font-medium uppercase tracking-[0.32em] text-karo-maroon">
                        Kota Balikpapan
                    </span>
                </span>
            )}
        </Link>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 transition-all duration-300',
                scrolled || open
                    ? 'border-b border-karo-gold/25 bg-karo-black/90 shadow-lg shadow-black/20 backdrop-blur-md [&_span]:text-karo-ivory [&_a]:text-karo-ivory/85'
                    : 'border-b border-karo-gold/20 bg-karo-ivory/90 shadow-sm backdrop-blur-md'
            )}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Logo />

                <nav className="hidden items-center gap-1 xl:flex" aria-label="Navigasi utama">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            className="rounded-md px-3 py-2 text-[13px] font-medium tracking-wide text-karo-charcoal/85 transition-colors duration-200 hover:text-karo-maroon"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Link
                        to="/gabung"
                        className="hidden items-center gap-2 rounded-full border border-karo-gold/70 bg-karo-gold/20 px-5 py-2.5 text-[13px] font-semibold tracking-wide text-karo-maroon transition-all duration-200 hover:bg-karo-maroon hover:text-karo-gold active:scale-[0.98] md:inline-flex"
                    >
                        Bergabung Bersama Kami
                    </Link>
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        aria-label={open ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={open}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-karo-charcoal/20 text-karo-charcoal transition-colors hover:border-karo-maroon hover:text-karo-maroon xl:hidden"
                    >
                        {open ? <X className="h-5 w-5 text-karo-ivory" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu - disesuaikan background dan warna teksnya */}
            <div
                className={cn(
                    'overflow-hidden transition-[max-height] duration-300 ease-out xl:hidden bg-karo-black/95 border-b border-karo-gold/25 backdrop-blur-md',
                    open ? 'max-h-[500px]' : 'max-h-0'
                )}
            >
                <nav className="space-y-1.5 px-4 pb-6 pt-2" aria-label="Navigasi seluler">
                    {LINKS.map((link) => (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-4 py-3 text-sm font-medium text-karo-ivory/90 transition-colors hover:bg-karo-gold/15 hover:text-karo-gold"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        to="/gabung"
                        onClick={() => setOpen(false)}
                        className="mt-3 block rounded-full bg-karo-maroon px-4 py-3.5 text-center text-sm font-semibold text-karo-gold transition-transform active:scale-[0.98]"
                    >
                        Bergabung Bersama Kami
                    </Link>
                </nav>
            </div>
        </header>
    );
}