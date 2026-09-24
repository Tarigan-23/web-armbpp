import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { error: authError } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (authError) throw authError;
            navigate('/ngurus-aron/beranda');
        } catch (err) {
            setError(err.message || 'Gagal masuk. Periksa kembali email dan password.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 text-white">
            <div className="w-full max-w-md rounded-3xl border border-amber-500/30 bg-black/80 p-8 shadow-2xl backdrop-blur-md">
                <div className="text-center">
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-400">
                        Aron Rudang Mayang
                    </span>
                    <h1 className="mt-4 text-2xl font-bold">Portal Login Pengurus</h1>
                    <p className="mt-2 text-xs text-gray-400">Masuk untuk mengelola sistem organisasi</p>
                </div>

                {error && (
                    <div className="mt-6 rounded-xl bg-red-500/10 border border-red-500/30 p-3 text-center text-xs text-red-400">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="mt-6 space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-amber-400">Email</label>
                        <div className="relative mt-1">
                            <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="email@domain.com"
                                className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 pl-10 text-sm text-white outline-none focus:border-amber-400"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-amber-400">Password</label>
                        <div className="relative mt-1">
                            <Lock className="absolute left-3 top-3.5 h-4 w-4 text-gray-500" />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-xl border border-gray-700 bg-gray-800 px-4 py-3 pl-10 text-sm text-white outline-none focus:border-amber-400"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-amber-400 py-3.5 text-sm font-semibold text-black transition-transform active:scale-[0.98]"
                    >
                        {loading ? 'Memproses...' : 'Masuk ke Dashboard'}
                        <ArrowRight className="h-4 w-4" />
                    </button>
                </form>
            </div>
        </div>
    );
}