import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Copy, Facebook, MessageCircle, Check, Share2 } from 'lucide-react';

export default function ShareDropdown({ isOpen, onClose, title, url, copied, setCopied }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!isOpen || !mounted) return null;

    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    const shareText = `${title} - ${fullUrl}`;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(fullUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShareWA = () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, '_blank');
        onClose();
    };

    const handleShareFB = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`, '_blank');
        onClose();
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, text: title, url: fullUrl });
                onClose();
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            handleCopy();
        }
    };

    // Hitung posisi dropdown
    const button = document.activeElement;
    const rect = button?.getBoundingClientRect();
    const dropdownStyle = rect ? {
        top: `${rect.bottom + window.scrollY + 8}px`,
        right: `${window.innerWidth - rect.right + window.scrollX}px`,
    } : {
        top: 'auto',
        right: '1rem',
    };

    return createPortal(
        <>
            <div
                className="fixed inset-0 z-[99998]"
                onClick={onClose}
            />
            <div
                className="fixed z-[99999] w-56 rounded-xl border border-border bg-white p-2 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
                style={dropdownStyle}
            >
                <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Bagikan ke
                </p>

                <button
                    type="button"
                    onClick={handleShareWA}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                >
                    <MessageCircle className="h-4 w-4 text-green-600" /> WhatsApp
                </button>

                <button
                    type="button"
                    onClick={handleShareFB}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                    <Facebook className="h-4 w-4 text-blue-600" /> Facebook
                </button>

                <button
                    type="button"
                    onClick={handleNativeShare}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                >
                    <Share2 className="h-4 w-4 text-purple-600" /> Share Native (Mobile)
                </button>

                <div className="my-1 border-t border-gray-100" />

                <button
                    type="button"
                    onClick={handleCopy}
                    className="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
                >
                    <span className="flex items-center gap-3">
                        <Copy className="h-4 w-4 text-amber-600" />
                        {copied ? 'Tersalin!' : 'Salin Link (Untuk IG)'}
                    </span>
                    {copied && <Check className="h-3.5 w-3.5 text-green-600" />}
                </button>
            </div>
        </>,
        document.body
    );
}