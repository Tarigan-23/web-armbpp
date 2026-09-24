import React, { useId } from 'react';

/**
 * Repeating Karo-inspired geometric stripe (diamonds + spearhead triangles),
 * drawn as an SVG pattern so it can stretch full-width at any size.
 * Color is driven by `currentColor` — set text color on the parent.
 */
export function KaroStripe({ className = '', height = 28 }) {
    const id = useId().replace(/[^a-zA-Z0-9]/g, '');
    const patternId = `karo-stripe-${id}`;

    return (
        <svg
            className={className}
            height={height}
            width="100%"
            preserveAspectRatio="none"
            viewBox="0 0 1440 28"
            aria-hidden="true"
        >
            <defs>
                <pattern id={patternId} width="48" height="28" patternUnits="userSpaceOnUse">
                    <path d="M24 3 L35 14 L24 25 L13 14 Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M24 8.5 L29.5 14 L24 19.5 L18.5 14 Z" fill="currentColor" opacity="0.45" />
                    <path d="M0 14 L9 7 L9 21 Z" fill="currentColor" opacity="0.8" />
                    <path d="M48 14 L39 7 L39 21 Z" fill="currentColor" opacity="0.8" />
                </pattern>
            </defs>
            <rect width="1440" height="28" fill={`url(#${patternId})`} />
        </svg>
    );
}

/**
 * Small centered ornament: line — diamond — line. Used under section headings.
 */
export function KaroDivider({ className = '' }) {
    return (
        <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-karo-gold" />
            <svg width="14" height="14" viewBox="0 0 14 14" className="text-karo-gold">
                <path d="M7 0.8 L13.2 7 L7 13.2 L0.8 7 Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M7 4 L10 7 L7 10 L4 7 Z" fill="currentColor" />
            </svg>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-karo-gold" />
        </div>
    );
}

/**
 * Section eyebrow + heading block with the Karo divider, keeps rhythm consistent.
 */
export function SectionHeading({ eyebrow, title, description, dark = false, align = 'center' }) {
    const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
    return (
        <div className={`max-w-2xl ${alignCls}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-karo-goldwarm">{eyebrow}</p>
            <h2
                className={`mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem] ${
                    dark ? 'text-karo-ivory' : 'text-karo-charcoal'
                }`}
            >
                {title}
            </h2>
            {align === 'center' ? <KaroDivider className="mt-6" /> : <KaroDivider className="mt-6 justify-start" />}
            {description && (
                <p className={`mt-6 text-base leading-relaxed ${dark ? 'text-karo-ivory/70' : 'text-muted-foreground'}`}>
                    {description}
                </p>
            )}
        </div>
    );
}
