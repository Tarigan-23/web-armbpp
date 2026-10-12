import { useState } from 'react';
import { Share2, Copy, Facebook, MessageCircle, Check } from 'lucide-react';

export default function ShareButtons({ title, url }) {
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

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
    };

    const handleShareFB = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`, '_blank');
    };

    const handleNativeShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({ title, text: title, url: fullUrl });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            handleCopy();
        }
    };

    return (
        <div className="relative">
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsOpen(!isOpen);
                }}
                className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-karo-gold transition-colors"
                aria-label="Bagikan"
            >
                <Share2 className="h-3.5 w-3.5" />
                <span>Bagikan</span>
            </button>

            {isOpen && (
                <>
                    {/* Overlay dengan z-index tinggi */}
                    <div className="fixed inset-0 z-50" onClick={() => setIsOpen(false)} />
                    {/* Dropdown dengan z-index sangat tinggi */}
                    <div className="absolute right-0 z-[60] mt-2 w-48 rounded-xl border border-border bg-white p-2 shadow-2xl">
                        <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                            Bagikan ke
                        </p>

                        <button onClick={handleShareWA} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors">
                            <MessageCircle className="h-4 w-4 text-green-600" /> WhatsApp
                        </button>

                        <button onClick={handleShareFB} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                            <Facebook className="h-4 w-4 text-blue-600" /> Facebook
                        </button>

                        <button onClick={handleNativeShare} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors">
                            <Share2 className="h-4 w-4 text-purple-600" /> Share Native (Mobile)
                        </button>

                        <div className="my-1 border-t border-gray-100" />

                        <button
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
                </>
            )}
        </div>
    );
}