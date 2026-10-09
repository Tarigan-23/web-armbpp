# SESSION_JOURNAL.md (rotated - earlier entries trimmed)

ull\">{sponsor.category}</span>                                     <h4 className=\"font-display text-xl font-bold text-karo-charcoal mt-3\">{sponsor.name}</h4>                                                                          {/* Alamat Teks Biasa yang Rapih */}             ...","valueLength":3987,"text":""}

## 2026-09-24 13:59:18.159Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://share.google/LtO5eGTfgzUnJqXoZ","valueLength":38,"text":""}

## 2026-09-24 13:59:18.159Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://share.google/LtO5eGTfgzUnJqXoZ","valueLength":38,"text":""}

## 2026-09-24 13:59:18.160Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"import React, { useState, useEffect } from 'react'; import { supabase } from '@/lib/supabase'; import Reveal from '@/components/Reveal'; import { SectionHeading } from '@/components/KaroPattern'; import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';  export default function SponsorSection() {     const [sponsors, setSponsors] = useState([]);      useEffect(() => {         fetchSponsors();     }, []);      const fetchSponsors = async () => {         const { data } = await supabase.from('sponsors').select('*').order('created_at', { ascending: false });         if (data) setSponsors(data);     };      if (sponsors.length === 0) return null;      return (         <section className=\"py-24 bg-karo-ivory\">             <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">                 <Reveal>                     <SectionHeading eyebrow=\"Mitra & UMKM\" title=\"Didukung Oleh Usaha Keluarga Besar\" description=\"Mari dukung dan kunjungi kafe serta usaha milik anggota yang mensupport komunitas Aron Rudang Mayang.\" />                 </Reveal>                 <div className=\"mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3\">                     {sponsors.map((sponsor, i) => (                         <Reveal key={sponsor.id} delay={i * 0.05}>                             <div className=\"rounded-3xl border border-border bg-white p-6 shadow-lg flex flex-col justify-between\">                                 <div>                                     <img src={sponsor.image_url} alt={sponsor.name} className=\"aspect-[16/10] w-full rounded-2xl object-cover mb-4\" />                                     <span className=\"text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full\">{sponsor.category}</span>                                     <h4 className=\"font-display text-xl font-bold text-karo-charcoal mt-3\">{sponsor.name}</h4>                                                                          {/* Alamat Teks Biasa yang Rapih */}             ...","valueLength":3987,"text":""}

## 2026-09-24 13:59:18.222Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"import React, { useState, useEffect } from 'react'; import { supabase } from '@/lib/supabase'; import Reveal from '@/components/Reveal'; import { SectionHeading } from '@/components/KaroPattern'; import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';  export default function SponsorSection() {     const [sponsors, setSponsors] = useState([]);      useEffect(() => {         fetchSponsors();     }, []);      const fetchSponsors = async () => {         const { data } = await supabase.from('sponsors').select('*').order('created_at', { ascending: false });         if (data) setSponsors(data);     };      if (sponsors.length === 0) return null;      return (         <section className=\"py-24 bg-karo-ivory\">             <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">                 <Reveal>                     <SectionHeading eyebrow=\"Mitra & UMKM\" title=\"Didukung Oleh Usaha Keluarga Besar\" description=\"Mari dukung dan kunjungi kafe serta usaha milik anggota yang mensupport komunitas Aron Rudang Mayang.\" />                 </Reveal>                 <div className=\"mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3\">                     {sponsors.map((sponsor, i) => (                         <Reveal key={sponsor.id} delay={i * 0.05}>                             <div className=\"rounded-3xl border border-border bg-white p-6 shadow-lg flex flex-col justify-between\">                                 <div>                                     <img src={sponsor.image_url} alt={sponsor.name} className=\"aspect-[16/10] w-full rounded-2xl object-cover mb-4\" />                                     <span className=\"text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full\">{sponsor.category}</span>                                     <h4 className=\"font-display text-xl font-bold text-karo-charcoal mt-3\">{sponsor.name}</h4>                                                                          {/* Alamat Teks Biasa yang Rapih */}             ...","valueLength":3987,"text":""}

## 2026-09-24 13:59:19.070Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"import React, { useState, useEffect } from 'react'; import { supabase } from '@/lib/supabase'; import Reveal from '@/components/Reveal'; import { SectionHeading } from '@/components/KaroPattern'; import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';  export default function SponsorSection() {     const [sponsors, setSponsors] = useState([]);      useEffect(() => {         fetchSponsors();     }, []);      const fetchSponsors = async () => {         const { data } = await supabase.from('sponsors').select('*').order('created_at', { ascending: false });         if (data) setSponsors(data);     };      if (sponsors.length === 0) return null;      return (         <section className=\"py-24 bg-karo-ivory\">             <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">                 <Reveal>                     <SectionHeading eyebrow=\"Mitra & UMKM\" title=\"Didukung Oleh Usaha Keluarga Besar\" description=\"Mari dukung dan kunjungi kafe serta usaha milik anggota yang mensupport komunitas Aron Rudang Mayang.\" />                 </Reveal>                 <div className=\"mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3\">                     {sponsors.map((sponsor, i) => (                         <Reveal key={sponsor.id} delay={i * 0.05}>                             <div className=\"rounded-3xl border border-border bg-white p-6 shadow-lg flex flex-col justify-between\">                                 <div>                                     <img src={sponsor.image_url} alt={sponsor.name} className=\"aspect-[16/10] w-full rounded-2xl object-cover mb-4\" />                                     <span className=\"text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full\">{sponsor.category}</span>                                     <h4 className=\"font-display text-xl font-bold text-karo-charcoal mt-3\">{sponsor.name}</h4>                                                                          {/* Alamat Teks Biasa yang Rapih */}             ...","valueLength":3987,"text":""}

## 2026-09-24 14:00:23.215Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"import React, { useState, useEffect } from 'react'; import { supabase } from '@/lib/supabase'; import Reveal from '@/components/Reveal'; import { SectionHeading } from '@/components/KaroPattern'; import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';  export default function SponsorSection() {     const [sponsors, setSponsors] = useState([]);      useEffect(() => {         fetchSponsors();     }, []);      const fetchSponsors = async () => {         const { data } = await supabase.from('sponsors').select('*').order('created_at', { ascending: false });         if (data) setSponsors(data);     };      if (sponsors.length === 0) return null;      return (         <section className=\"py-24 bg-karo-ivory\">             <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">                 <Reveal>                     <SectionHeading eyebrow=\"Mitra & UMKM\" title=\"Didukung Oleh Usaha Keluarga Besar\" description=\"Mari dukung dan kunjungi kafe serta usaha milik anggota yang mensupport komunitas Aron Rudang Mayang.\" />                 </Reveal>                 <div className=\"mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3\">                     {sponsors.map((sponsor, i) => (                         <Reveal key={sponsor.id} delay={i * 0.05}>                             <div className=\"rounded-3xl border border-border bg-white p-6 shadow-lg flex flex-col justify-between\">                                 <div>                                     <img src={sponsor.image_url} alt={sponsor.name} className=\"aspect-[16/10] w-full rounded-2xl object-cover mb-4\" />                                     <span className=\"text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full\">{sponsor.category}</span>                                     <h4 className=\"font-display text-xl font-bold text-karo-charcoal mt-3\">{sponsor.name}</h4>                                                                          {/* Alamat Teks Biasa yang Rapih */}             ...","valueLength":3987,"text":""}

## 2026-09-24 14:00:24.982Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"import React, { useState, useEffect } from 'react'; import { supabase } from '@/lib/supabase'; import Reveal from '@/components/Reveal'; import { SectionHeading } from '@/components/KaroPattern'; import { MapPin, MessageCircle, ExternalLink } from 'lucide-react';  export default function SponsorSection() {     const [sponsors, setSponsors] = useState([]);      useEffect(() => {         fetchSponsors();     }, []);      const fetchSponsors = async () => {         const { data } = await supabase.from('sponsors').select('*').order('created_at', { ascending: false });         if (data) setSponsors(data);     };      if (sponsors.length === 0) return null;      return (         <section className=\"py-24 bg-karo-ivory\">             <div className=\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\">                 <Reveal>                     <SectionHeading eyebrow=\"Mitra & UMKM\" title=\"Didukung Oleh Usaha Keluarga Besar\" description=\"Mari dukung dan kunjungi kafe serta usaha milik anggota yang mensupport komunitas Aron Rudang Mayang.\" />                 </Reveal>                 <div className=\"mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3\">                     {sponsors.map((sponsor, i) => (                         <Reveal key={sponsor.id} delay={i * 0.05}>                             <div className=\"rounded-3xl border border-border bg-white p-6 shadow-lg flex flex-col justify-between\">                                 <div>                                     <img src={sponsor.image_url} alt={sponsor.name} className=\"aspect-[16/10] w-full rounded-2xl object-cover mb-4\" />                                     <span className=\"text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full\">{sponsor.category}</span>                                     <h4 className=\"font-display text-xl font-bold text-karo-charcoal mt-3\">{sponsor.name}</h4>                                                                          {/* Alamat Teks Biasa yang Rapih */}             ...","valueLength":3987,"text":""}

## 2026-09-24 14:00:29.330Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","valueLength":95,"text":""}

## 2026-09-24 14:00:29.330Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","valueLength":95,"text":""}

## 2026-09-24 14:00:30.332Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","valueLength":95,"text":""}

## 2026-09-24 14:00:30.846Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","valueLength":95,"text":""}

## 2026-09-24 14:00:37.871Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","valueLength":95,"text":""}

## 2026-09-24 14:00:38.767Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","valueLength":95,"text":""}

## 2026-09-24 14:00:38.768Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://share.google/LtO5eGTfgzUnJqXoZ","valueLength":38,"text":""}

## 2026-09-24 14:00:38.846Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://share.google/LtO5eGTfgzUnJqXoZ","valueLength":38,"text":""}

## 2026-09-24 14:00:47.383Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/Lvs8qtS6g96UStx66","valueLength":41,"text":""}

## 2026-09-24 14:00:47.384Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/Lvs8qtS6g96UStx66","valueLength":41,"text":""}

## 2026-09-24 14:00:54.920Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/Lvs8qtS6g96UStx66","valueLength":41,"text":""}

## 2026-09-24 14:00:55.887Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/Lvs8qtS6g96UStx66","valueLength":41,"text":""}

## 2026-09-24 14:00:55.990Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"No WhatsApp (Format: 628...)"}

## 2026-09-24 14:00:56.223Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6281347166903","valueLength":13,"text":""}

## 2026-09-24 14:00:56.326Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6281347166903","valueLength":13,"text":""}

## 2026-09-24 14:01:00.414Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:01:00.414Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:01:05.526Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:01:09.254Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:01:16.745Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:01:17.830Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:01:17.934Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Katalog Sponsor"}

## 2026-09-24 14:01:17.935Z submit
- action: http://localhost:3000/ngurus-aron/sponsor
- fields: [{"label":"Cth: Uis Nande Nino","type":"text","value":"UIS NANDE NINO","length":14,"redacted":false},{"label":"Cth: Jual & Sewa Pakaian Adat","type":"text","value":"Jual dan Sewa Pakaian Adat","length":26,"redacted":false},{"label":"Cth: Jl. MT Haryono, Balikpapan","type":"text","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","length":95,"redacted":false},{"label":"Cth: https://maps.app.goo.gl/...","type":"url","value":"https://maps.app.goo.gl/Lvs8qtS6g96UStx66","length":41,"redacted":false},{"label":"Cth: 6282134567890","type":"text","value":"081347995518","length":12,"redacted":false},{"label":"Pilih Foto","type":"file","value":"","length":0,"redacted":false},{"label":"Deskripsi layanan atau produk...","type":"textarea","value":"Jual &sewa PAKAIAN ADAT, BAJU KARAKTER & PROFESI, GAUN PENGANTIN, JAS, KIMONO, HANBOK, DLL\n🗓️ Buka Senin-Sabtu 09.00-17.00","length":123,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:01:23.718Z load
- url: http://localhost:3000/

## 2026-09-24 14:01:31.310Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Kunjungi Lokasi Google Maps "}

## 2026-09-24 14:01:45.830Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hubungi via WhatsApp"}

## 2026-09-24 14:02:10.902Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hubungi via WhatsApp"}

## 2026-09-24 14:02:21.207Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:02:24.294Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:02:24.390Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"081347995518","valueLength":12,"text":""}

## 2026-09-24 14:02:28.127Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6281347995518","valueLength":13,"text":""}

## 2026-09-24 14:02:28.127Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6281347995518","valueLength":13,"text":""}

## 2026-09-24 14:02:28.239Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Katalog Sponsor"}

## 2026-09-24 14:02:28.239Z submit
- action: http://localhost:3000/ngurus-aron/sponsor
- fields: [{"label":"Cth: Uis Nande Nino","type":"text","value":"UIS NANDE NINO","length":14,"redacted":false},{"label":"Cth: Jual & Sewa Pakaian Adat","type":"text","value":"Jual dan Sewa Pakaian Adat","length":26,"redacted":false},{"label":"Cth: Jl. MT Haryono, Balikpapan","type":"text","value":"Jl. Manuntung No.38 Rt.41, Batu Ampar, Balikpapan Utara, Balikpapan City, East Kalimantan 76126","length":95,"redacted":false},{"label":"Cth: https://maps.app.goo.gl/...","type":"url","value":"https://maps.app.goo.gl/Lvs8qtS6g96UStx66","length":41,"redacted":false},{"label":"Cth: 6282134567890","type":"text","value":"6281347995518","length":13,"redacted":false},{"label":"Pilih Foto","type":"file","value":"","length":0,"redacted":false},{"label":"Deskripsi layanan atau produk...","type":"textarea","value":"Jual &sewa PAKAIAN ADAT, BAJU KARAKTER & PROFESI, GAUN PENGANTIN, JAS, KIMONO, HANBOK, DLL\n🗓️ Buka Senin-Sabtu 09.00-17.00","length":123,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:02:31.460Z load
- url: http://localhost:3000/

## 2026-09-24 14:02:33.934Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hubungi via WhatsApp"}

## 2026-09-24 14:02:48.646Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:03:44.926Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"","valueLength":0,"text":""}

## 2026-09-24 14:03:45.005Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"","valueLength":0,"text":""}

## 2026-09-24 14:03:46.847Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/bBEQnDwaaViNU7aa7","valueLength":41,"text":""}

## 2026-09-24 14:03:46.847Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/bBEQnDwaaViNU7aa7","valueLength":41,"text":""}

## 2026-09-24 14:03:56.521Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/bBEQnDwaaViNU7aa7","valueLength":41,"text":""}

## 2026-09-24 14:03:58.022Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Cth: https://maps.app.goo.gl/...","label":"Cth: https://maps.app.goo.gl/...","value":"https://maps.app.goo.gl/bBEQnDwaaViNU7aa7","valueLength":41,"text":""}

## 2026-09-24 14:03:58.023Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. MT Haryono, Balikpapan Selatan","valueLength":34,"text":""}

## 2026-09-24 14:03:58.094Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Jl. MT Haryono, Balikpapan Selatan","valueLength":34,"text":""}

## 2026-09-24 14:04:11.184Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127","valueLength":76,"text":""}

## 2026-09-24 14:04:11.184Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127","valueLength":76,"text":""}

## 2026-09-24 14:04:29.633Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127","valueLength":76,"text":""}

## 2026-09-24 14:04:31.158Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: Jl. MT Haryono, Balikpapan","label":"Cth: Jl. MT Haryono, Balikpapan","value":"Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127","valueLength":76,"text":""}

## 2026-09-24 14:04:31.253Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"No WhatsApp (Format: 628...)"}

## 2026-09-24 14:04:31.391Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6282154321098","valueLength":13,"text":""}

## 2026-09-24 14:04:31.470Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6282154321098","valueLength":13,"text":""}

## 2026-09-24 14:04:31.677Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6282154321098","valueLength":13,"text":""}

## 2026-09-24 14:05:07.552Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"","valueLength":0,"text":""}

## 2026-09-24 14:05:51.089Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"","valueLength":0,"text":""}

## 2026-09-24 14:05:52.853Z click
- element: {"tag":"label","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pilih Foto"}

## 2026-09-24 14:05:52.854Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"file","id":null,"placeholder":null,"label":"Pilih Foto","value":"","valueLength":0,"text":""}

## 2026-09-24 14:06:12.550Z click
- element: {"tag":"label","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pilih Foto"}

## 2026-09-24 14:06:12.550Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"file","id":null,"placeholder":null,"label":"Pilih Foto","value":"","valueLength":0,"text":""}

## 2026-09-24 14:07:15.718Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Katalog Sponsor"}

## 2026-09-24 14:07:15.718Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"","valueLength":0,"text":""}

## 2026-09-24 14:07:34.206Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6283877734668","valueLength":13,"text":""}

## 2026-09-24 14:07:34.207Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cth: 6282134567890","label":"Cth: 6282134567890","value":"6283877734668","valueLength":13,"text":""}

## 2026-09-24 14:07:34.303Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Katalog Sponsor"}

## 2026-09-24 14:07:34.303Z submit
- action: http://localhost:3000/ngurus-aron/sponsor
- fields: [{"label":"Cth: Uis Nande Nino","type":"text","value":"Coffee Tiganna","length":14,"redacted":false},{"label":"Cth: Jual & Sewa Pakaian Adat","type":"text","value":"Kuliner & Kopi Khas Karo","length":24,"redacted":false},{"label":"Cth: Jl. MT Haryono, Balikpapan","type":"text","value":"Karang Joang, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76127","length":76,"redacted":false},{"label":"Cth: https://maps.app.goo.gl/...","type":"url","value":"https://maps.app.goo.gl/bBEQnDwaaViNU7aa7","length":41,"redacted":false},{"label":"Cth: 6282134567890","type":"text","value":"6283877734668","length":13,"redacted":false},{"label":"Pilih Foto","type":"file","value":"C:\\fakepath\\tiganna.png","length":23,"redacted":false},{"label":"Deskripsi layanan atau produk...","type":"textarea","value":"Kedai kopi kebanggaan warga Karo di Balikpapan yang menyajikan racikan kopi pilihan nusantara serta suasana kekeluargaan yang hangat.","length":133,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:07:38.800Z load
- url: http://localhost:3000/

## 2026-09-24 14:07:42.535Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"SekretariatLokasi Kantor & Titik KumpulKunjungi sekretariat kami untuk koordinasi kegiatan, konsultasi, atau silaturahmi.Alamat SekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111Jam OperasionalSenin – Sabtu, 09.00 – 17.00 WITA"}

## 2026-09-24 14:09:55.135Z load
- url: http://localhost:3000/

## 2026-09-24 14:10:33.191Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"SekretariatLokasi Kantor & Titik KumpulKunjungi sekretariat kami untuk koordinasi kegiatan, konsultasi, atau silaturahmi.Alamat SekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111Jam OperasionalSenin – Sabtu, 09.00 – 17.00 WITA"}

## 2026-09-24 14:10:37.257Z click
- element: {"tag":"iframe","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:10:37.707Z click
- element: {"tag":"iframe","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:10:37.879Z click
- element: {"tag":"iframe","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:10:38.720Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111"}

## 2026-09-24 14:10:38.895Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111"}

## 2026-09-24 14:10:39.264Z click
- element: {"tag":"iframe","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:10:39.760Z click
- element: {"tag":"iframe","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:11:43.329Z load
- url: http://localhost:3000/

## 2026-09-24 14:13:25.231Z load
- url: http://localhost:3000/

## 2026-09-24 14:13:56.816Z load
- url: http://localhost:3000/

## 2026-09-24 14:22:18.667Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/DashboardLayout.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-24 14:22:18.623Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/DashboardLayout.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-24 14:22:27.184Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:22:27.191Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:22:27.201Z console.error
- text: 
    The above error occurred in the <DashboardLayout> component:
    
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:9:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 14:22:27.204Z unhandledrejection
- message: MapPin is not defined
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performSyncWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18932:28)

## 2026-09-24 14:22:28.181Z root.empty
- url: http://localhost:3000/ngurus-aron/sponsor

## 2026-09-24 14:23:05.200Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:23:05.200Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:23:05.201Z console.error
- text: 
    The above error occurred in the <DashboardLayout> component:
    
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:9:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 14:23:05.201Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070
- line: 19466
- col: 13
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18734:30)

## 2026-09-24 14:23:06.184Z root.empty
- url: http://localhost:3000/ngurus-aron/sponsor

## 2026-09-24 14:24:45.195Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:24:45.196Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:24:45.196Z console.error
- text: 
    The above error occurred in the <DashboardLayout> component:
    
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:9:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 14:24:45.197Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070
- line: 19466
- col: 13
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18734:30)

## 2026-09-24 14:24:46.193Z root.empty
- url: http://localhost:3000/ngurus-aron/sponsor

## 2026-09-24 14:24:48.099Z load
- url: http://localhost:3000/

## 2026-09-24 14:24:59.437Z load
- url: http://localhost:3000/ngurus-aron/sponsor

## 2026-09-24 14:24:59.522Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:24:59.524Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:24:59.524Z console.error
- text: 
    The above error occurred in the <DashboardLayout> component:
    
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:9:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 14:24:59.525Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070
- line: 19466
- col: 13
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18734:30)

## 2026-09-24 14:24:59.826Z root.empty
- url: http://localhost:3000/ngurus-aron/sponsor

## 2026-09-24 14:25:17.896Z load
- url: http://localhost:3000/ngurus-aron/sponsor

## 2026-09-24 14:25:18.035Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:25:18.037Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:25:18.037Z console.error
- text: 
    The above error occurred in the <DashboardLayout> component:
    
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:9:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 14:25:18.038Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070
- line: 19466
- col: 13
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18734:30)

## 2026-09-24 14:25:18.343Z root.empty
- url: http://localhost:3000/ngurus-aron/sponsor

## 2026-09-24 14:25:43.869Z load
- url: http://localhost:3000/ngurus-aron/seketariat

## 2026-09-24 14:25:44.017Z navigate
- url: http://localhost:3000/ngurus-aron/seketariat
- via: replaceState

## 2026-09-24 14:25:58.197Z load
- url: http://localhost:3000/ngurus-aron/seketariat

## 2026-09-24 14:26:09.195Z load
- url: http://localhost:3000/ngurus-aron

## 2026-09-24 14:26:09.342Z navigate
- url: http://localhost:3000/ngurus-aron
- via: replaceState

## 2026-09-24 14:26:09.352Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:26:09.355Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181
- line: 55
- col: 68
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 14:26:09.356Z console.error
- text: 
    The above error occurred in the <DashboardLayout> component:
    
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:9:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 14:26:09.356Z window.error
- message: Uncaught ReferenceError: MapPin is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070
- line: 19466
- col: 13
- stack: 
    ReferenceError: MapPin is not defined
        at DashboardLayout (http://localhost:3000/src/pages/ngurus-aron/DashboardLayout.jsx?t=1790259746181:55:68)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18734:30)

## 2026-09-24 14:26:09.658Z root.empty
- url: http://localhost:3000/ngurus-aron

## 2026-09-24 14:27:40.107Z load
- url: http://localhost:3000/ngurus-aron

## 2026-09-24 14:27:42.445Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sekretariat"}

## 2026-09-24 14:27:42.446Z navigate
- url: http://localhost:3000/ngurus-aron/secretariat
- via: pushState

## 2026-09-24 14:28:06.391Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Opsional: Catatan atau informasi tambahan...","label":"Opsional: Catatan atau informasi tambahan...","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","valueLength":84,"text":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional."}

## 2026-09-24 14:28:06.494Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Opsional: Catatan atau informasi tambahan...","label":"Opsional: Catatan atau informasi tambahan...","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","valueLength":84,"text":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional."}

## 2026-09-24 14:28:07.774Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Opsional: Catatan atau informasi tambahan...","label":"Opsional: Catatan atau informasi tambahan...","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","valueLength":84,"text":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional."}

## 2026-09-24 14:28:14.367Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Opsional: Catatan atau informasi tambahan...","label":"Opsional: Catatan atau informasi tambahan...","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","valueLength":84,"text":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional."}

## 2026-09-24 14:28:25.934Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"Opsional: Catatan atau informasi tambahan...","label":"Opsional: Catatan atau informasi tambahan...","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","valueLength":84,"text":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional."}

## 2026-09-24 14:28:25.934Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"Senin – Sabtu, 09.00 – 17.00 WITA","valueLength":33,"text":""}

## 2026-09-24 14:28:26.046Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"Senin – Sabtu, 09.00 – 17.00 WITA","valueLength":33,"text":""}

## 2026-09-24 14:28:27.534Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"Senin – Sabtu, 09.00 – 17.00 WITA","valueLength":33,"text":""}

## 2026-09-24 14:28:31.670Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"Senin – Sabtu, 09.00 – 17.00 WITA","valueLength":33,"text":""}

## 2026-09-24 14:28:31.783Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Simpan Perubahan Sekretariat"}

## 2026-09-24 14:28:31.785Z submit
- action: http://localhost:3000/ngurus-aron/secretariat
- fields: [{"label":"[text]","type":"text","value":"Lokasi Kantor & Titik Kumpul","length":28,"redacted":false},{"label":"[text]","type":"text","value":"Senin – Sabtu, 09.00 – 17.00 WITA","length":33,"redacted":false},{"label":"[text]","type":"text","value":"Kunjungi sekretariat kami untuk koordinasi kegiatan, konsultasi, atau silaturahmi.","length":82,"redacted":false},{"label":"[textarea]","type":"textarea","value":"Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111","length":66,"redacted":false},{"label":"Opsional: Catatan atau informasi tambahan...","type":"textarea","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","length":84,"redacted":false},{"label":"<iframe src=\"...\" ...></iframe>","type":"textarea","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534605!2d116.8493438746006!3d-1.2176116987707584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790259072441!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","length":436,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:28:41.702Z load
- url: http://localhost:3000/

## 2026-09-24 14:29:32.758Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Program"}

## 2026-09-24 14:29:32.760Z navigate
- url: http://localhost:3000/program
- via: pushState

## 2026-09-24 14:29:41.725Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Program"}

## 2026-09-24 14:29:41.725Z navigate
- url: http://localhost:3000/ngurus-aron/program
- via: pushState

## 2026-09-24 14:29:44.975Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:29:49.662Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:29:52.502Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:29:55.718Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:30:01.222Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:30:06.670Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Sanggar Seni & Tari","label":"title","value":"","valueLength":0,"text":""}

## 2026-09-24 14:30:06.789Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Sanggar Seni & Tari","label":"title","value":"","valueLength":0,"text":""}

## 2026-09-24 14:30:14.879Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Sanggar Seni & Tari","label":"title","value":"Malam Budaya","valueLength":12,"text":""}

## 2026-09-24 14:30:14.879Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Sanggar Seni & Tari","label":"title","value":"Malam Budaya","valueLength":12,"text":""}

## 2026-09-24 14:30:14.879Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"icon_name","type":null,"id":null,"placeholder":null,"label":"icon_name","value":"Music","valueLength":5,"text":"Music (Seni & Tari)BookOpen (Pendidikan/Kelas)GraduationCap (Beasiswa)HeartHandshake (Sosial)CalendarDays (Festival)Store (Koperasi/UMKM)"}

## 2026-09-24 14:30:15.014Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"icon_name","type":null,"id":null,"placeholder":null,"label":"icon_name","value":"Music","valueLength":5,"text":"Music (Seni & Tari)BookOpen (Pendidikan/Kelas)GraduationCap (Beasiswa)HeartHandshake (Sosial)CalendarDays (Festival)Store (Koperasi/UMKM)"}

## 2026-09-24 14:30:21.158Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"icon_name","type":null,"id":null,"placeholder":null,"label":"icon_name","value":"CalendarDays","valueLength":12,"text":"Music (Seni & Tari)BookOpen (Pendidikan/Kelas)GraduationCap (Beasiswa)HeartHandshake (Sosial)CalendarDays (Festival)Store (Koperasi/UMKM)"}

## 2026-09-24 14:30:21.159Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"icon_name","type":null,"id":null,"placeholder":null,"label":"icon_name","value":"CalendarDays","valueLength":12,"text":"Music (Seni & Tari)BookOpen (Pendidikan/Kelas)GraduationCap (Beasiswa)HeartHandshake (Sosial)CalendarDays (Festival)Store (Koperasi/UMKM)"}

## 2026-09-24 14:30:24.119Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"icon_name","type":null,"id":null,"placeholder":null,"label":"icon_name","value":"CalendarDays","valueLength":12,"text":"Music (Seni & Tari)BookOpen (Pendidikan/Kelas)GraduationCap (Beasiswa)HeartHandshake (Sosial)CalendarDays (Festival)Store (Koperasi/UMKM)"}

## 2026-09-24 14:30:24.119Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"","valueLength":0,"text":""}

## 2026-09-24 14:30:24.239Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"","valueLength":0,"text":""}

## 2026-09-24 14:30:28.682Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"","valueLength":0,"text":""}

## 2026-09-24 14:30:28.702Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"","valueLength":0,"text":""}

## 2026-09-24 14:33:29.104Z load
- url: http://localhost:3000/program

## 2026-09-24 14:33:38.239Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"","valueLength":0,"text":""}

## 2026-09-24 14:33:45.862Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”","valueLength":657,"text":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”"}

## 2026-09-24 14:33:45.862Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”","valueLength":657,"text":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”"}

## 2026-09-24 14:33:45.990Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Simpan Program"}

## 2026-09-24 14:33:45.990Z submit
- action: http://localhost:3000/ngurus-aron/program
- fields: [{"label":"title","type":"text","value":"Malam Budaya","length":12,"redacted":false},{"label":"icon_name","type":"select-one","value":"CalendarDays","length":12,"redacted":false},{"label":"urutan","type":"number","value":"1","length":1,"redacted":false},{"label":"description","type":"textarea","value":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”","length":657,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 14:33:50.012Z load
- url: http://localhost:3000/program

## 2026-09-24 14:34:14.190Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 14:34:14.934Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”","valueLength":657,"text":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”"}

## 2026-09-24 14:34:15.022Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”","valueLength":657,"text":"Malam Budaya merupakan salah satu kegiatan ARON RUDANG MAYANG BALIKPAPAN yang menjadi ruang untuk mengenal, menjaga, dan melestarikan budaya serta tradisi Karo di tanah perantauan.\n\nMelalui kegiatan ini, masyarakat Karo, khususnya generasi muda, diajak untuk mengenal lebih dekat sejarah, adat istiadat, seni, musik, tarian, bahasa, serta nilai-nilai luhur budaya Karo. Malam Budaya juga menjadi wadah untuk mempererat persaudaraan dan menumbuhkan rasa bangga terhadap identitas budaya Karo, sekaligus memperkenalkannya kepada masyarakat luas di Balikpapan.\n\n“Melestarikan budaya, mempererat persaudaraan, dan mewariskan nilai Karo kepada generasi penerus.”"}

## 2026-09-24 14:34:18.541Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Edit Program KerjaJudul ProgramPilihan IconMusic (Seni & Tari)BookOpen (Pendidikan/Kelas)GraduationCap (Beasiswa)HeartHandshake (Sosial)CalendarDays (Festival)Store (Koperasi/UMKM)Nomor UrutDeskripsi Program**Malam Budaya**\nRuang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\nPerbarui ProgramBatal"}

## 2026-09-24 14:34:20.533Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"\nRuang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n","valueLength":164,"text":"\nRuang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n"}

## 2026-09-24 14:34:22.093Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"Ruang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n","valueLength":163,"text":"Ruang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n"}

## 2026-09-24 14:34:22.093Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":"description","type":null,"id":null,"placeholder":"Tulis penjelasan singkat program...","label":"description","value":"Ruang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n","valueLength":163,"text":"Ruang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n"}

## 2026-09-24 14:34:22.197Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Program"}

## 2026-09-24 14:34:22.198Z submit
- action: http://localhost:3000/ngurus-aron/program
- fields: [{"label":"title","type":"text","value":"Malam Budaya","length":12,"redacted":false},{"label":"icon_name","type":"select-one","value":"CalendarDays","length":12,"redacted":false},{"label":"urutan","type":"number","value":"1","length":1,"redacted":false},{"label":"description","type":"textarea","value":"Ruang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n","length":163,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-24 14:34:22.981Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Program"}

## 2026-09-24 14:34:22.981Z submit
- action: http://localhost:3000/ngurus-aron/program
- fields: [{"label":"title","type":"text","value":"Malam Budaya","length":12,"redacted":false},{"label":"icon_name","type":"select-one","value":"CalendarDays","length":12,"redacted":false},{"label":"urutan","type":"number","value":"1","length":1,"redacted":false},{"label":"description","type":"textarea","value":"Ruang untuk mengenal, merawat, dan melestarikan budaya serta tradisi Karo di tanah perantauan. Menyatukan generasi melalui seni, adat, dan nilai-nilai luhur Karo.\n","length":163,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-24 14:34:26.079Z load
- url: http://localhost:3000/program

## 2026-09-24 14:34:39.334Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dukung Program Kami"}

## 2026-09-24 14:34:39.416Z load
- url: http://localhost:3000/donasi

## 2026-09-24 14:34:39.464Z navigate
- url: http://localhost:3000/donasi
- via: replaceState

## 2026-09-24 14:34:45.085Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Struktur Organisasi"}

## 2026-09-24 14:34:45.086Z navigate
- url: http://localhost:3000/ngurus-aron/struktur-organisasi
- via: pushState

## 2026-09-24 14:34:52.125Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-09-24 14:34:52.126Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-24 14:44:55.622Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 14:44:55.623Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 14:44:56.782Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 14:44:56.782Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 14:44:58.646Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 14:44:58.647Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 14:44:58.821Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 14:44:58.821Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 14:44:59.326Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 14:44:59.326Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 14:45:03.760Z load
- url: http://localhost:3000/

## 2026-09-24 14:45:44.200Z load
- url: http://localhost:3000/

## 2026-09-24 14:45:59.237Z load
- url: http://localhost:3000/

## 2026-09-24 14:46:40.583Z load
- url: http://localhost:3000/

## 2026-09-24 14:46:58.577Z load
- url: http://localhost:3000/

## 2026-09-24 14:47:31.443Z load
- url: http://localhost:3000/

## 2026-09-24 14:51:11.957Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-24 14:51:11.983Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-24 14:54:47.477Z console.error
- text: [vite] Failed to reload /src/App.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-24 14:54:47.506Z console.error
- text: [vite] Failed to reload /src/App.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-24 14:59:15.381Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 15:00:16.102Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Youtube"}

## 2026-09-24 15:00:16.104Z navigate
- url: http://localhost:3000/ngurus-aron/youtube
- via: pushState

## 2026-09-24 15:00:18.470Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/rpN2tJ2XBRY?si=ftG86BqGYPcBGYNR","valueLength":48,"text":""}

## 2026-09-24 15:00:18.557Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/rpN2tJ2XBRY?si=ftG86BqGYPcBGYNR","valueLength":48,"text":""}

## 2026-09-24 15:00:28.357Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:00:28.357Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:01:48.518Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:01:54.829Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:01:54.829Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"Dokumentasi Kegiatan Kerja Tahun & Seni Budaya Karo Balikpapan","valueLength":62,"text":""}

## 2026-09-24 15:01:54.916Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"Dokumentasi Kegiatan Kerja Tahun & Seni Budaya Karo Balikpapan","valueLength":62,"text":""}

## 2026-09-24 15:01:57.957Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":" Kerja Tahun 2024 |Landek Merga Peranginangin Part 2 Wari Peduaken Gendang Kerja Tahun PRM BALIKPAPAN","valueLength":101,"text":""}

## 2026-09-24 15:01:57.957Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":" Kerja Tahun 2024 |Landek Merga Peranginangin Part 2 Wari Peduaken Gendang Kerja Tahun PRM BALIKPAPAN","valueLength":101,"text":""}

## 2026-09-24 15:01:57.957Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:01:58.053Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:01:59.005Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:02:05.355Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/aKpjkYu4XV4?si=Aq6u9J3tSIJleMaq","valueLength":48,"text":""}

## 2026-09-24 15:02:09.877Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/rpN2tJ2XBRY?si=1nqkRCAQumHCpUzu","valueLength":48,"text":""}

## 2026-09-24 15:02:09.877Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/rpN2tJ2XBRY?si=1nqkRCAQumHCpUzu","valueLength":48,"text":""}

## 2026-09-24 15:02:22.187Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/rpN2tJ2XBRY?si=1nqkRCAQumHCpUzu","valueLength":48,"text":""}

## 2026-09-24 15:02:33.453Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":"https://youtu.be/rpN2tJ2XBRY?si=1nqkRCAQumHCpUzu","valueLength":48,"text":""}

## 2026-09-24 15:02:33.454Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":" Kerja Tahun 2024 |Landek Merga Peranginangin Part 2 Wari Peduaken Gendang Kerja Tahun PRM BALIKPAPAN","valueLength":101,"text":""}

## 2026-09-24 15:02:40.765Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":" Kerja Tahun 2024 |Landek Merga Peranginangin Part 2 Wari Peduaken Gendang Kerja Tahun PRM BALIKPAPAN","valueLength":101,"text":""}

## 2026-09-24 15:02:45.357Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":" Kerja Tahun 2024  Gendang Kerja Tahun PRM BALIKPAPAN","valueLength":53,"text":""}

## 2026-09-24 15:02:45.357Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":null,"label":"[text]","value":" Kerja Tahun 2024  Gendang Kerja Tahun PRM BALIKPAPAN","valueLength":53,"text":""}

## 2026-09-24 15:02:45.357Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[textarea]","value":"Saksikan keseruan pagelaran budaya dan kebersamaan keluarga besar Aron Rudang Mayang.","valueLength":85,"text":"Saksikan keseruan pagelaran budaya dan kebersamaan keluarga besar Aron Rudang Mayang."}

## 2026-09-24 15:02:45.452Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[textarea]","value":"Saksikan keseruan pagelaran budaya dan kebersamaan keluarga besar Aron Rudang Mayang.","valueLength":85,"text":"Saksikan keseruan pagelaran budaya dan kebersamaan keluarga besar Aron Rudang Mayang."}

## 2026-09-24 15:02:48.343Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[textarea]","value":"|Landek Merga Peranginangin Part 2 Wari Peduaken","valueLength":48,"text":"|Landek Merga Peranginangin Part 2 Wari Peduaken"}

## 2026-09-24 15:02:48.343Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[textarea]","value":"|Landek Merga Peranginangin Part 2 Wari Peduaken","valueLength":48,"text":"|Landek Merga Peranginangin Part 2 Wari Peduaken"}

## 2026-09-24 15:02:48.429Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Simpan Video YouTube"}

## 2026-09-24 15:02:48.429Z submit
- action: http://localhost:3000/ngurus-aron/youtube
- fields: [{"label":"[text]","type":"text","value":" Kerja Tahun 2024  Gendang Kerja Tahun PRM BALIKPAPAN","length":53,"redacted":false},{"label":"[text]","type":"text","value":"https://youtu.be/rpN2tJ2XBRY?si=1nqkRCAQumHCpUzu","length":48,"redacted":false},{"label":"[textarea]","type":"textarea","value":"|Landek Merga Peranginangin Part 2 Wari Peduaken","length":48,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 15:02:54.989Z load
- url: http://localhost:3000/

## 2026-09-24 15:06:17.105Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc
- status: 404
- response: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}
- durationMs: 921

## 2026-09-24 15:06:17.106Z console.error
- text: Fetch error from https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:06:17.109Z console.error
- text: Gagal memuat video: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:07:49.504Z load
- url: http://localhost:3000/

## 2026-09-24 15:07:49.628Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 15:07:50.145Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc
- status: 404
- response: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}
- durationMs: 418

## 2026-09-24 15:07:50.145Z console.error
- text: Fetch error from https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:07:50.146Z console.error
- text: Gagal memuat video: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:08:02.946Z load
- url: http://localhost:3000/ngurus-aron/youtube

## 2026-09-24 15:08:03.393Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc
- status: 404
- response: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}
- durationMs: 347

## 2026-09-24 15:08:03.393Z console.error
- text: Fetch error from https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:08:03.957Z load
- url: http://localhost:3000/ngurus-aron/youtube

## 2026-09-24 15:08:04.204Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc
- status: 404
- response: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}
- durationMs: 207

## 2026-09-24 15:08:04.204Z console.error
- text: Fetch error from https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?select=*&order=id.desc: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:08:15.606Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"","valueLength":0,"text":""}

## 2026-09-24 15:08:15.702Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"","valueLength":0,"text":""}

## 2026-09-24 15:08:15.981Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"","valueLength":0,"text":""}

## 2026-09-24 15:08:16.069Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"","valueLength":0,"text":""}

## 2026-09-24 15:08:17.813Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/rpN2tJ2XBRY?si=Ln4JJ5q6UjpB8pY8","valueLength":48,"text":""}

## 2026-09-24 15:08:17.813Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"url","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/rpN2tJ2XBRY?si=Ln4JJ5q6UjpB8pY8","valueLength":48,"text":""}

## 2026-09-24 15:08:17.813Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"","valueLength":0,"text":""}

## 2026-09-24 15:08:17.901Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"","valueLength":0,"text":""}

## 2026-09-24 15:08:29.299Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"","valueLength":0,"text":""}

## 2026-09-24 15:08:33.128Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Kerja Tahun 2024","valueLength":16,"text":""}

## 2026-09-24 15:08:33.128Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Kerja Tahun 2024","valueLength":16,"text":""}

## 2026-09-24 15:08:34.325Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Kerja Tahun 2024","valueLength":16,"text":""}

## 2026-09-24 15:08:41.197Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Kerja Tahun 2024 ","valueLength":17,"text":""}

## 2026-09-24 15:08:41.197Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Kerja Tahun 2024 ","valueLength":17,"text":""}

## 2026-09-24 15:08:53.859Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Kerja Tahun 2024 ","valueLength":17,"text":""}

## 2026-09-24 15:09:03.853Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Kerja Tahun 2024 Gendang Kerja Tahun PRM BALIKPAPAN","valueLength":51,"text":""}

## 2026-09-24 15:09:06.029Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Manajemen Video YouTube BerandaTambah atau hapus video YouTube yang tampil di halaman depan website.Terbitkan Video BaruJudul VideoLink URL YouTubeSistem akan otomatis mengonversi link YouTube menjadi format pemutar video.Terbitkan Video ke BerandaDaftar Video Tersimpan (Terbaru di Urutan Pertama)"}

## 2026-09-24 15:09:15.023Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Gendang Kerja Tahun PRM BALIKPAPAN 2024 ","valueLength":40,"text":""}

## 2026-09-24 15:09:15.023Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","value":"Gendang Kerja Tahun PRM BALIKPAPAN 2024 ","valueLength":40,"text":""}

## 2026-09-24 15:09:15.117Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Terbitkan Video ke Beranda"}

## 2026-09-24 15:09:15.117Z submit
- action: http://localhost:3000/ngurus-aron/youtube
- fields: [{"label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","type":"text","value":"Gendang Kerja Tahun PRM BALIKPAPAN 2024 ","length":40,"redacted":false},{"label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","type":"url","value":"https://youtu.be/rpN2tJ2XBRY?si=Ln4JJ5q6UjpB8pY8","length":48,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 15:09:15.891Z network.error
- method: POST
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?columns=%22judul%22%2C%22youtube_url%22
- status: 404
- requestBody: {"0":{"judul":"Gendang Kerja Tahun PRM BALIKPAPAN 2024 ","youtube_url":"https://youtu.be/rpN2tJ2XBRY?si=Ln4JJ5q6UjpB8pY8"}}
- response: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}
- durationMs: 772

## 2026-09-24 15:09:15.891Z console.error
- text: Fetch error from https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?columns=%22judul%22%2C%22youtube_url%22: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:09:20.933Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Terbitkan Video ke Beranda"}

## 2026-09-24 15:09:20.933Z submit
- action: http://localhost:3000/ngurus-aron/youtube
- fields: [{"label":"Contoh: Dokumentasi Perayaan Tahun Baru Karo","type":"text","value":"Gendang Kerja Tahun PRM BALIKPAPAN 2024 ","length":40,"redacted":false},{"label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","type":"url","value":"https://youtu.be/rpN2tJ2XBRY?si=Ln4JJ5q6UjpB8pY8","length":48,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 15:09:21.420Z network.error
- method: POST
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?columns=%22judul%22%2C%22youtube_url%22
- status: 404
- requestBody: {"0":{"judul":"Gendang Kerja Tahun PRM BALIKPAPAN 2024 ","youtube_url":"https://youtu.be/rpN2tJ2XBRY?si=Ln4JJ5q6UjpB8pY8"}}
- response: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}
- durationMs: 485

## 2026-09-24 15:09:21.420Z console.error
- text: Fetch error from https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/video?columns=%22judul%22%2C%22youtube_url%22: {"code":"PGRST205","details":null,"hint":"Perhaps you meant the table 'public.youtube_videos'","message":"Could not find the table 'public.video' in the schema cache"}

## 2026-09-24 15:10:52.701Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ID: 4defb861-f3bf-4a79-bc5c-ccff59a47a1b Kerja Tahun 2024  Gendang Kerja Tahun PRM BALIKPAPAN https://youtu.be/rpN2tJ2XBRY?si=1nqkRCAQumHCpUzuHapus"}

## 2026-09-24 15:10:55.353Z load
- url: http://localhost:3000/

## 2026-09-24 15:11:34.224Z click
- element: {"tag":"iframe","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 15:11:35.200Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"▶ Tonton di YouTube"}

## 2026-09-24 15:12:30.037Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":"","valueLength":0,"text":""}

## 2026-09-24 15:12:30.132Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":"","valueLength":0,"text":""}

## 2026-09-24 15:12:31.901Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":"Adu Perkolong-Kolong Datuk Muda Barus & Iche Br.Ginting Kerja Tahun PRM Balikpapan Hari 1 Part 1","valueLength":96,"text":""}

## 2026-09-24 15:12:31.901Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":"Adu Perkolong-Kolong Datuk Muda Barus & Iche Br.Ginting Kerja Tahun PRM Balikpapan Hari 1 Part 1","valueLength":96,"text":""}

## 2026-09-24 15:12:31.902Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"","valueLength":0,"text":""}

## 2026-09-24 15:12:31.989Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"","valueLength":0,"text":""}

## 2026-09-24 15:12:37.821Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"","valueLength":0,"text":""}

## 2026-09-24 15:12:43.278Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/Cbxj08jf0Lc?si=2vkK9VPAWo11RiAt","valueLength":48,"text":""}

## 2026-09-24 15:12:43.278Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/Cbxj08jf0Lc?si=2vkK9VPAWo11RiAt","valueLength":48,"text":""}

## 2026-09-24 15:12:43.381Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Terbitkan Video ke Beranda"}

## 2026-09-24 15:12:43.381Z submit
- action: http://localhost:3000/ngurus-aron/youtube
- fields: [{"label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","type":"text","value":"Adu Perkolong-Kolong Datuk Muda Barus & Iche Br.Ginting Kerja Tahun PRM Balikpapan Hari 1 Part 1","length":96,"redacted":false},{"label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","type":"text","value":"https://youtu.be/Cbxj08jf0Lc?si=2vkK9VPAWo11RiAt","length":48,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 15:12:49.630Z load
- url: http://localhost:3000/

## 2026-09-24 15:13:19.276Z load
- url: http://localhost:3000/

## 2026-09-24 15:13:25.027Z load
- url: http://localhost:3000/

## 2026-09-24 15:14:08.261Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Youtube"}

## 2026-09-24 15:14:08.262Z navigate
- url: http://localhost:3000/ngurus-aron/youtube
- via: replaceState

## 2026-09-24 15:14:09.610Z load
- url: http://localhost:3000/ngurus-aron/youtube

## 2026-09-24 15:15:41.758Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"","valueLength":0,"text":""}

## 2026-09-24 15:15:41.853Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"","valueLength":0,"text":""}

## 2026-09-24 15:15:43.557Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/A_dmS95CR-Q?si=2mVUm3xDmRiay_er","valueLength":48,"text":""}

## 2026-09-24 15:15:43.557Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/A_dmS95CR-Q?si=2mVUm3xDmRiay_er","valueLength":48,"text":""}

## 2026-09-24 15:15:52.300Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/A_dmS95CR-Q?si=2mVUm3xDmRiay_er","valueLength":48,"text":""}

## 2026-09-24 15:15:54.109Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","value":"https://youtu.be/A_dmS95CR-Q?si=2mVUm3xDmRiay_er","valueLength":48,"text":""}

## 2026-09-24 15:15:54.109Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":"","valueLength":0,"text":""}

## 2026-09-24 15:15:54.181Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":"","valueLength":0,"text":""}

## 2026-09-24 15:15:55.813Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":" Adu Perkolong-Kolong Datuk Muda Barus & Iche Br.Ginting | Kerja Tahun PRM BALIKPAPAN Th.2024 Part 2","valueLength":100,"text":""}

## 2026-09-24 15:15:55.813Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","value":" Adu Perkolong-Kolong Datuk Muda Barus & Iche Br.Ginting | Kerja Tahun PRM BALIKPAPAN Th.2024 Part 2","valueLength":100,"text":""}

## 2026-09-24 15:15:55.925Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Terbitkan Video ke Beranda"}

## 2026-09-24 15:15:55.926Z submit
- action: http://localhost:3000/ngurus-aron/youtube
- fields: [{"label":"Contoh: Gendang Kerja Tahun PRM BALIKPAPAN 2024","type":"text","value":" Adu Perkolong-Kolong Datuk Muda Barus & Iche Br.Ginting | Kerja Tahun PRM BALIKPAPAN Th.2024 Part 2","length":100,"redacted":false},{"label":"Contoh: https://www.youtube.com/watch?v=xxxx atau https://youtu.be/xxxx","type":"text","value":"https://youtu.be/A_dmS95CR-Q?si=2mVUm3xDmRiay_er","length":48,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 15:16:00.168Z load
- url: http://localhost:3000/

## 2026-09-24 15:16:52.796Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sekretariat"}

## 2026-09-24 15:16:52.798Z navigate
- url: http://localhost:3000/ngurus-aron/secretariat
- via: pushState

## 2026-09-24 15:16:55.565Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534605!2d116.8493438746006!3d-1.2176116987707584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790259072441!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","valueLength":436,"text":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534605!2d116.8493438746006!3d-1.2176116987707584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790259072441!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>"}

## 2026-09-24 15:16:55.652Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534605!2d116.8493438746006!3d-1.2176116987707584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790259072441!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","valueLength":436,"text":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534605!2d116.8493438746006!3d-1.2176116987707584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790259072441!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>"}

## 2026-09-24 15:17:02.198Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"","valueLength":0,"text":""}

## 2026-09-24 15:17:20.659Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"","valueLength":0,"text":""}

## 2026-09-24 15:17:24.229Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","valueLength":437,"text":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>"}

## 2026-09-24 15:17:24.229Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","valueLength":437,"text":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>"}

## 2026-09-24 15:17:24.324Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Simpan Perubahan Sekretariat"}

## 2026-09-24 15:17:24.325Z submit
- action: http://localhost:3000/ngurus-aron/secretariat
- fields: [{"label":"[text]","type":"text","value":"Lokasi Kantor & Titik Kumpul","length":28,"redacted":false},{"label":"[text]","type":"text","value":"Senin – Sabtu, 09.00 – 17.00 WITA","length":33,"redacted":false},{"label":"[text]","type":"text","value":"Kunjungi sekretariat kami untuk koordinasi kegiatan, konsultasi, atau silaturahmi.","length":82,"redacted":false},{"label":"[textarea]","type":"textarea","value":"Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111","length":66,"redacted":false},{"label":"Opsional: Catatan atau informasi tambahan...","type":"textarea","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","length":84,"redacted":false},{"label":"<iframe src=\"...\" ...></iframe>","type":"textarea","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","length":437,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 15:17:27.428Z load
- url: http://localhost:3000/

## 2026-09-24 15:18:04.803Z load
- url: http://localhost:3000/

## 2026-09-24 15:18:10.676Z load
- url: http://localhost:3000/

## 2026-09-24 15:18:45.020Z focus
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","valueLength":437,"text":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>"}

## 2026-09-24 15:18:45.117Z click
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>","valueLength":437,"text":"<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.058853534602!2d116.84934387460059!3d-1.2176116987707684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df149080735f76d%3A0x2b1e7814c1444dec!2sSewa%20Baju%20%22Nande%20Nino%22!5e1!3m2!1sid!2sid!4v1790263034918!5m2!1sid!2sid\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"strict-origin-when-cross-origin\"></iframe>"}

## 2026-09-24 15:18:47.949Z change
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"https://maps.app.goo.gl/eCNCvyybUQak2kGQ6","valueLength":41,"text":"https://maps.app.goo.gl/eCNCvyybUQak2kGQ6"}

## 2026-09-24 15:18:47.949Z blur
- element: {"tag":"textarea","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":"<iframe src=\"...\" ...></iframe>","label":"<iframe src=\"...\" ...></iframe>","value":"https://maps.app.goo.gl/eCNCvyybUQak2kGQ6","valueLength":41,"text":"https://maps.app.goo.gl/eCNCvyybUQak2kGQ6"}

## 2026-09-24 15:18:48.020Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Simpan Perubahan Sekretariat"}

## 2026-09-24 15:18:48.021Z submit
- action: http://localhost:3000/ngurus-aron/secretariat
- fields: [{"label":"[text]","type":"text","value":"Lokasi Kantor & Titik Kumpul","length":28,"redacted":false},{"label":"[text]","type":"text","value":"Senin – Sabtu, 09.00 – 17.00 WITA","length":33,"redacted":false},{"label":"[text]","type":"text","value":"Kunjungi sekretariat kami untuk koordinasi kegiatan, konsultasi, atau silaturahmi.","length":82,"redacted":false},{"label":"[textarea]","type":"textarea","value":"Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111","length":66,"redacted":false},{"label":"Opsional: Catatan atau informasi tambahan...","type":"textarea","value":"Silakan hubungi pengurus terlebih dahulu sebelum berkunjung di luar jam operasional.","length":84,"redacted":false},{"label":"<iframe src=\"...\" ...></iframe>","type":"textarea","value":"https://maps.app.goo.gl/eCNCvyybUQak2kGQ6","length":41,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-24 15:18:52.030Z load
- url: http://localhost:3000/

## 2026-09-24 15:18:57.957Z load
- url: http://localhost:3000/

## 2026-09-24 15:19:58.557Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Titik Koordinat ResmiSekretariat Aron Rudang MayangJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111"}

## 2026-09-24 15:19:59.229Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Titik Koordinat ResmiSekretariat Aron Rudang MayangJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111Klik tombol di samping untuk membuka peta langsung via aplikasi Google Maps. Buka Google Maps "}

## 2026-09-24 15:20:06.653Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Buka Google Maps "}

## 2026-09-24 15:20:38.604Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Berita"}

## 2026-09-24 15:20:38.605Z navigate
- url: http://localhost:3000/ngurus-aron/berita
- via: pushState

## 2026-09-24 15:20:40.972Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 15:20:45.189Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Galeri"}

## 2026-09-24 15:20:45.189Z navigate
- url: http://localhost:3000/ngurus-aron/galeri
- via: pushState

## 2026-09-24 15:20:47.428Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Keuangan"}

## 2026-09-24 15:20:47.429Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-09-24 15:20:49.788Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 15:20:56.501Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Anggota"}

## 2026-09-24 15:20:56.501Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-09-24 15:21:00.196Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Kontak"}

## 2026-09-24 15:21:00.197Z navigate
- url: http://localhost:3000/ngurus-aron/kontak
- via: pushState

## 2026-09-24 15:21:05.646Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: popstate

## 2026-09-24 15:22:07.372Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Donasi"}

## 2026-09-24 15:22:07.373Z navigate
- url: http://localhost:3000/ngurus-aron/donasi
- via: pushState

## 2026-09-24 15:22:10.685Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Program"}

## 2026-09-24 15:22:10.685Z navigate
- url: http://localhost:3000/ngurus-aron/program
- via: pushState

## 2026-09-24 15:22:14.237Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Struktur Organisasi"}

## 2026-09-24 15:22:14.238Z navigate
- url: http://localhost:3000/ngurus-aron/struktur-organisasi
- via: pushState

## 2026-09-24 15:22:26.212Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Anggota Baru"}

## 2026-09-24 15:22:26.213Z navigate
- url: http://localhost:3000/ngurus-aron/new-member
- via: pushState

## 2026-09-24 15:22:28.124Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Tentang"}

## 2026-09-24 15:22:28.125Z navigate
- url: http://localhost:3000/ngurus-aron/tentang
- via: pushState

## 2026-09-24 15:22:35.741Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Youtube"}

## 2026-09-24 15:22:35.741Z navigate
- url: http://localhost:3000/ngurus-aron/youtube
- via: pushState

## 2026-09-24 15:22:38.325Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:22:38.325Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: pushState

## 2026-09-24 15:22:48.221Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:22:48.221Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: replaceState

## 2026-09-24 15:22:49.724Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sponsor"}

## 2026-09-24 15:22:49.725Z navigate
- url: http://localhost:3000/ngurus-aron/sponsor
- via: pushState

## 2026-09-24 15:22:53.164Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:22:53.165Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: pushState

## 2026-09-24 15:22:59.196Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:22:59.197Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: replaceState

## 2026-09-24 15:22:59.668Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sponsor"}

## 2026-09-24 15:22:59.669Z navigate
- url: http://localhost:3000/ngurus-aron/sponsor
- via: pushState

## 2026-09-24 15:23:02.844Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:23:02.845Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: pushState

## 2026-09-24 15:23:04.107Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:23:08.140Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sponsor"}

## 2026-09-24 15:23:08.141Z navigate
- url: http://localhost:3000/ngurus-aron/sponsor
- via: pushState

## 2026-09-24 15:25:24.205Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:25:24.205Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: pushState

## 2026-09-24 15:25:31.604Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sponsor"}

## 2026-09-24 15:25:31.605Z navigate
- url: http://localhost:3000/ngurus-aron/sponsor
- via: pushState

## 2026-09-24 15:28:58.484Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:28:58.484Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: pushState

## 2026-09-24 15:31:58.972Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:31:58.973Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: replaceState

## 2026-09-24 15:32:00.667Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:32:52.702Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sponsor"}

## 2026-09-24 15:32:52.703Z navigate
- url: http://localhost:3000/ngurus-aron/sponsor
- via: pushState

## 2026-09-24 15:32:55.332Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sekretariat"}

## 2026-09-24 15:32:55.333Z navigate
- url: http://localhost:3000/ngurus-aron/secretariat
- via: pushState

## 2026-09-24 15:33:05.004Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Beranda"}

## 2026-09-24 15:33:05.005Z navigate
- url: http://localhost:3000/ngurus-aron/beranda
- via: pushState

## 2026-09-24 15:33:05.557Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Berita"}

## 2026-09-24 15:33:05.558Z navigate
- url: http://localhost:3000/ngurus-aron/berita
- via: pushState

## 2026-09-24 15:33:07.324Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Manajemen Agenda"}

## 2026-09-24 15:33:14.204Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Galeri"}

## 2026-09-24 15:33:14.205Z navigate
- url: http://localhost:3000/ngurus-aron/galeri
- via: pushState

## 2026-09-24 15:33:14.828Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Keuangan"}

## 2026-09-24 15:33:14.828Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-09-24 15:33:16.492Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Anggota"}

## 2026-09-24 15:33:16.493Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-09-24 15:33:19.828Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Donasi"}

## 2026-09-24 15:33:19.829Z navigate
- url: http://localhost:3000/ngurus-aron/donasi
- via: pushState

## 2026-09-24 15:33:21.892Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Program"}

## 2026-09-24 15:33:21.893Z navigate
- url: http://localhost:3000/ngurus-aron/program
- via: pushState

## 2026-09-24 15:33:23.645Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Struktur Organisasi"}

## 2026-09-24 15:33:23.645Z navigate
- url: http://localhost:3000/ngurus-aron/struktur-organisasi
- via: pushState

## 2026-09-24 15:33:25.188Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Anggota Baru"}

## 2026-09-24 15:33:25.189Z navigate
- url: http://localhost:3000/ngurus-aron/new-member
- via: pushState

## 2026-09-24 15:33:26.420Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Tentang"}

## 2026-09-24 15:33:26.421Z navigate
- url: http://localhost:3000/ngurus-aron/tentang
- via: pushState

## 2026-09-24 15:33:29.108Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Youtube"}

## 2026-09-24 15:33:29.109Z navigate
- url: http://localhost:3000/ngurus-aron/youtube
- via: pushState

## 2026-09-24 15:33:30.700Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sambutan"}

## 2026-09-24 15:33:30.700Z navigate
- url: http://localhost:3000/ngurus-aron/sambutan
- via: pushState

## 2026-09-24 15:33:35.804Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 15:33:35.805Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 15:33:36.645Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 15:33:36.645Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-24 15:33:37.313Z load
- url: http://localhost:3000/

## 2026-09-24 15:33:46.381Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami"}

## 2026-09-24 15:33:46.382Z navigate
- url: http://localhost:3000/tentang-kami
- via: pushState

## 2026-09-24 15:33:49.892Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pengurus"}

## 2026-09-24 15:33:49.893Z navigate
- url: http://localhost:3000/pengurus
- via: pushState

## 2026-09-24 15:33:53.092Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Program"}

## 2026-09-24 15:33:53.092Z navigate
- url: http://localhost:3000/program
- via: pushState

## 2026-09-24 15:34:33.397Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-09-24 15:34:33.397Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-24 15:34:40.733Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berita"}

## 2026-09-24 15:34:40.734Z navigate
- url: http://localhost:3000/berita
- via: pushState

## 2026-09-24 15:35:37.493Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aron Rudang MayangWadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan."}

## 2026-09-24 15:35:37.844Z click
- element: {"tag":"li","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-09-24 15:35:38.924Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami & Sejarah"}

## 2026-09-24 15:35:39.015Z load
- url: http://localhost:3000/tentang-kami

## 2026-09-24 15:35:39.065Z navigate
- url: http://localhost:3000/tentang-kami
- via: replaceState

## 2026-09-24 15:36:01.960Z load
- url: http://localhost:3000/tentang-kami

## 2026-09-24 15:36:09.266Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami"}

## 2026-09-24 15:36:09.266Z navigate
- url: http://localhost:3000/tentang-kami
- via: replaceState

## 2026-09-24 15:36:13.796Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami"}

## 2026-09-24 15:36:13.796Z navigate
- url: http://localhost:3000/tentang-kami
- via: replaceState

## 2026-09-24 15:36:14.764Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berita"}

## 2026-09-24 15:36:14.765Z navigate
- url: http://localhost:3000/berita
- via: pushState

## 2026-09-24 15:36:16.781Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami"}

## 2026-09-24 15:36:16.781Z navigate
- url: http://localhost:3000/tentang-kami
- via: pushState

## 2026-09-24 15:36:54.616Z load
- url: http://localhost:3000/tentang-kami

## 2026-09-24 15:36:56.228Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami"}

## 2026-09-24 15:36:56.229Z navigate
- url: http://localhost:3000/tentang-kami
- via: replaceState

## 2026-09-24 15:36:57.471Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-09-24 15:36:57.472Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-24 15:36:58.404Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami"}

## 2026-09-24 15:36:58.404Z navigate
- url: http://localhost:3000/tentang-kami
- via: pushState

## 2026-09-24 15:37:20.100Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pengurus"}

## 2026-09-24 15:37:20.101Z navigate
- url: http://localhost:3000/pengurus
- via: pushState

## 2026-09-24 15:37:24.844Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berita"}

## 2026-09-24 15:37:24.845Z navigate
- url: http://localhost:3000/berita
- via: pushState

## 2026-09-24 15:37:27.804Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Galeri"}

## 2026-09-24 15:37:27.805Z navigate
- url: http://localhost:3000/galeri
- via: pushState

## 2026-09-24 15:37:30.740Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Donasi"}

## 2026-09-24 15:37:30.741Z navigate
- url: http://localhost:3000/donasi
- via: pushState

## 2026-09-24 15:37:33.644Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-09-24 15:37:33.645Z navigate
- url: http://localhost:3000/keuangan
- via: pushState

## 2026-09-24 15:37:36.652Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Bergabung Bersama Kami"}

## 2026-09-24 15:37:36.653Z navigate
- url: http://localhost:3000/gabung
- via: pushState

## 2026-09-24 15:37:42.556Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 15:37:42.557Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-24 15:37:49.092Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Bergabung Bersama Kami "}

## 2026-09-24 15:37:49.174Z load
- url: http://localhost:3000/kontak

## 2026-09-24 15:37:49.235Z navigate
- url: http://localhost:3000/kontak
- via: replaceState

## 2026-09-24 15:37:52.452Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kenali Kami Lebih Dekat"}

## 2026-09-24 15:37:52.515Z load
- url: http://localhost:3000/tentang-kami

## 2026-09-24 15:37:52.552Z navigate
- url: http://localhost:3000/tentang-kami
- via: replaceState

## 2026-09-24 15:37:55.172Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-09-24 15:37:55.172Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-24 15:42:05.189Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521
- line: 268
- col: 30
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 15:42:05.194Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521
- line: 268
- col: 30
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 15:42:05.197Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:231:27)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Outlet (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7502:26)
        at main
        at div
        at PublicLayout
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 15:42:05.200Z unhandledrejection
- message: Sambutan is not defined
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at updateFunctionComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14630:28)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15972:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performSyncWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18932:28)

## 2026-09-24 15:42:06.186Z root.empty
- url: http://localhost:3000/

## 2026-09-24 15:42:08.381Z load
- url: http://localhost:3000/

## 2026-09-24 15:42:08.445Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521
- line: 268
- col: 30
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 15:42:08.449Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521
- line: 268
- col: 30
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 15:42:08.450Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:231:27)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Outlet (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7502:26)
        at main
        at div
        at PublicLayout
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 15:42:08.450Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070
- line: 19466
- col: 13
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18734:30)

## 2026-09-24 15:42:10.696Z load
- url: http://localhost:3000/

## 2026-09-24 15:42:10.730Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521
- line: 268
- col: 30
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 15:42:10.732Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521
- line: 268
- col: 30
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15962:22)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:3739:39)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19818:15)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)

## 2026-09-24 15:42:10.733Z console.error
- text: 
    The above error occurred in the <HomePage> component:
    
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:231:27)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Outlet (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7502:26)
        at main
        at div
        at PublicLayout
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=ec678070:10816:3)
        at App
    
    Consider adding an error boundary to your tree to customize error handling behavior.
    Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.

## 2026-09-24 15:42:10.733Z window.error
- message: Uncaught ReferenceError: Sambutan is not defined
- source: http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070
- line: 19466
- col: 13
- stack: 
    ReferenceError: Sambutan is not defined
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1790264524521:268:30)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=ec678070:18734:30)

## 2026-09-24 15:44:33.460Z load
- url: http://localhost:3000/

## 2026-09-24 15:44:37.293Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Mejuah-juah!Aron Rudang Mayang · Balikpapan"}

## 2026-09-24 15:44:44.964Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Bergabung Bersama Kami "}

## 2026-09-24 15:44:45.040Z load
- url: http://localhost:3000/gabung

## 2026-09-24 15:44:45.124Z navigate
- url: http://localhost:3000/gabung
- via: replaceState

## 2026-09-24 15:44:48.468Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-09-24 15:44:48.470Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-24 15:44:59.389Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aron Rudang MayangWadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan.Navigasi UtamaBerandaTentang Kami & SejarahStruktur PengurusProgram KerjaInformasi & PublikBerita & AgendaGaleri DokumentasiLaporan Keuangan & KasDonasi KomunitasSekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111📞 +62 813-6508-465"}

## 2026-09-24 15:45:00.172Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berita"}

## 2026-09-24 15:45:00.172Z navigate
- url: http://localhost:3000/berita
- via: pushState

## 2026-09-24 15:45:02.284Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berita"}

## 2026-09-24 15:45:02.285Z navigate
- url: http://localhost:3000/berita
- via: replaceState

## 2026-09-24 15:45:02.804Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Galeri"}

## 2026-09-24 15:45:02.804Z navigate
- url: http://localhost:3000/galeri
- via: pushState

## 2026-09-24 15:45:04.884Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Program"}

## 2026-09-24 15:45:04.884Z navigate
- url: http://localhost:3000/program
- via: pushState

## 2026-09-24 15:45:08.404Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Program"}

## 2026-09-24 15:45:08.404Z navigate
- url: http://localhost:3000/program
- via: replaceState

## 2026-09-24 15:45:08.908Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pengurus"}

## 2026-09-24 15:45:08.908Z navigate
- url: http://localhost:3000/pengurus
- via: pushState

## 2026-09-24 15:45:12.252Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-09-24 15:45:12.253Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-24 15:45:55.300Z load
- url: http://localhost:3000/

## 2026-09-24 15:46:07.209Z load
- url: http://localhost:3000/

## 2026-09-24 15:46:08.189Z load
- url: http://localhost:3000/

## 2026-09-24 15:46:08.328Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/news?select=*&order=created_at.desc&limit=3
- message: Failed to fetch
- durationMs: 82

## 2026-09-24 15:46:08.328Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/sambutan?select=*&limit=1
- message: Failed to fetch
- durationMs: 83

## 2026-09-24 15:46:08.328Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/youtube_videos?select=*&order=created_at.desc
- message: Failed to fetch
- durationMs: 82

## 2026-09-24 15:46:08.328Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/sponsors?select=*&order=created_at.desc
- message: Failed to fetch
- durationMs: 83

## 2026-09-24 15:46:08.328Z network.error
- method: HEAD
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/members?select=*
- message: Failed to fetch
- durationMs: 83

## 2026-09-24 15:46:08.328Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/secretariat?select=*&limit=1
- message: Failed to fetch
- durationMs: 82

## 2026-09-24 15:46:08.329Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:497:23)
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20310:23
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20349:12
        at async fetchWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:466:13)
        at async executeWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:668:21)
        at async fetchHomeData (http://localhost:3000/src/pages/HomePage.jsx?t=1790264763833:241:32)

## 2026-09-24 15:46:08.329Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:497:23)
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20310:23
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20349:12
        at async fetchWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:466:13)
        at async executeWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:668:21)
        at async fetchSambutan (http://localhost:3000/src/components/Sambutan.jsx?t=1790264524609:19:34)

## 2026-09-24 15:46:08.329Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:497:23)
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20310:23
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20349:12
        at async fetchWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:466:13)
        at async executeWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:668:21)
        at async fetchVideos (http://localhost:3000/src/components/Youtube.jsx?t=1790264524609:13:33)

## 2026-09-24 15:46:08.329Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:497:23)
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20310:23
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20349:12
        at async fetchWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:466:13)
        at async executeWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:668:21)
        at async fetchSponsors (http://localhost:3000/src/components/Sponsor.jsx?t=1790264524609:15:22)

## 2026-09-24 15:46:08.329Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:497:23)
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20310:23
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20349:12
        at async fetchWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:466:13)
        at async executeWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:668:21)
        at async fetchCounts (http://localhost:3000/src/pages/HomePage.jsx?t=1790264763833:28:40)

## 2026-09-24 15:46:08.329Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:497:23)
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20310:23
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:20349:12
        at async fetchWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:466:13)
        at async executeWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=ec678070:668:21)
        at async fetchSecretariat (http://localhost:3000/src/components/Secretariat.jsx?t=1790263182032:23:27)

## 2026-09-24 15:46:08.355Z load
- url: http://localhost:3000/

## 2026-09-24 15:49:35.429Z load
- url: http://localhost:3000/

## 2026-09-24 15:51:12.749Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Jl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111"}

## 2026-09-24 15:51:13.246Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"SekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111📞 +62 813-6508-465"}

## 2026-09-24 15:51:14.149Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aron Rudang MayangWadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan.Navigasi UtamaBerandaTentang Kami & SejarahStruktur PengurusProgram KerjaInformasi & PublikBerita & AgendaGaleri DokumentasiLaporan Keuangan & KasDonasi KomunitasSekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111📞 +62 813-6508-465"}

## 2026-09-24 15:53:32.228Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aron Rudang MayangWadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan.Navigasi UtamaBerandaTentang Kami & SejarahStruktur PengurusProgram KerjaInformasi & PublikBerita & AgendaGaleri DokumentasiLaporan Keuangan & KasDonasi KomunitasSekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111📞 +62 813-6508-465email : aronrudangmayangbalikpapan@gmail.com© 2026 Aron Rudang Mayang Balikpapan. Mejuah-juah man banta kerina!"}

## 2026-09-24 15:53:32.972Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aron Rudang MayangWadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan.Navigasi UtamaBerandaTentang Kami & SejarahStruktur PengurusProgram KerjaInformasi & PublikBerita & AgendaGaleri DokumentasiLaporan Keuangan & KasDonasi KomunitasSekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111📞 +62 813-6508-465email : aronrudangmayangbalikpapan@gmail.com© 2026 Aron Rudang Mayang Balikpapan. Mejuah-juah man banta kerina!"}

## 2026-09-24 15:54:28.189Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aron Rudang MayangWadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan.Navigasi UtamaBerandaTentang Kami & SejarahStruktur PengurusProgram KerjaInformasi & PublikBerita & AgendaGaleri DokumentasiLaporan Keuangan & KasDonasi KomunitasSekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111email : aronrudangmayangbalikpapan@gmail.com📞 +62 813-6508-465© 2026 Aron Rudang Mayang Balikpapan. Mejuah-juah man banta kerina!"}

## 2026-09-24 15:56:45.189Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:57:10.245Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:57:37.777Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:58:05.328Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:58:37.648Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:59:10.523Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 15:59:22.493Z click
- element: {"tag":"a","role":null,"ariaLabel":"Facebook","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-24 15:59:37.680Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 16:00:30.602Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 16:00:37.630Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 16:01:37.690Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 16:02:37.684Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 16:03:30.776Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 16:03:31.533Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Aron Rudang MayangWadah kekeluargaan masyarakat Karo di Kota Balikpapan yang melestarikan seni budaya dan mempererat tali persaudaraan.Navigasi UtamaBerandaTentang Kami & SejarahStruktur PengurusProgram KerjaInformasi & PublikBerita & AgendaGaleri DokumentasiLaporan Keuangan & KasDonasi KomunitasSekretariatJl. Jend. Sudirman No. 88, Balikpapan Kota, Kalimantan Timur 76111aronrudangmayangbalikpapan@gmail.com+62 813-6508-465"}

## 2026-09-24 16:03:52.435Z load
- url: http://localhost:3000/ngurus-aron/sambutan

## 2026-09-24 16:03:55.093Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Sponsor"}

## 2026-09-24 16:03:55.094Z navigate
- url: http://localhost:3000/ngurus-aron/sponsor
- via: pushState

## 2026-09-24 16:04:05.740Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Beranda"}

## 2026-09-24 16:04:05.741Z navigate
- url: http://localhost:3000/ngurus-aron/beranda
- via: pushState

## 2026-09-24 16:08:12.121Z load
- url: http://localhost:3000/ngurus-aron/beranda

## 2026-09-24 16:08:12.126Z load
- url: http://localhost:3000/

## 2026-09-25 06:36:28.823Z load
- url: http://localhost:3000/

## 2026-09-25 06:36:49.003Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-25 06:37:22.295Z load
- url: http://localhost:3000/

## 2026-09-25 06:37:22.374Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-25 06:37:24.111Z load
- url: http://localhost:3000/

## 2026-09-25 06:37:24.169Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=24673159:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-25 07:45:38.440Z load
- url: http://localhost:3000/

## 2026-09-25 07:45:38.571Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-25 07:45:40.455Z load
- url: http://localhost:3000/

## 2026-09-25 07:45:40.509Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-25 07:45:41.259Z load
- url: http://localhost:3000/

## 2026-09-25 07:45:41.312Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-25 07:45:48.674Z load
- url: http://localhost:3000/ngurus-aron

## 2026-09-25 07:45:48.731Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-30 08:17:48.696Z load
- url: http://localhost:3000/

## 2026-09-30 08:17:48.984Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-30 08:17:53.441Z load
- url: http://localhost:3000/

## 2026-09-30 08:17:53.496Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-30 08:17:54.993Z load
- url: http://localhost:3000/

## 2026-09-30 08:17:55.137Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-09-30 08:18:10.880Z load
- url: http://169.254.148.127:3000/

## 2026-09-30 08:18:11.031Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://169.254.148.127:3000/src/lib/supabase.js:6:25

## 2026-09-30 08:18:13.628Z load
- url: http://169.254.148.127:3000/

## 2026-09-30 08:18:13.760Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://169.254.148.127:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://169.254.148.127:3000/src/lib/supabase.js:6:25

## 2026-09-30 08:18:38.363Z load
- url: http://localhost:3000/

## 2026-09-30 08:18:38.418Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-10-09 11:23:47.843Z load
- url: http://localhost:3000/

## 2026-10-09 11:23:49.063Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-10-09 15:14:26.461Z load
- url: http://localhost:3000/

## 2026-10-09 15:14:26.530Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-10-09 15:14:29.071Z load
- url: http://localhost:3000/

## 2026-10-09 15:14:29.120Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-10-09 15:16:16.642Z load
- url: http://localhost:3000/

## 2026-10-09 15:16:16.881Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:6:25

## 2026-10-09 15:20:35.390Z load
- url: http://localhost:3000/

## 2026-10-09 15:20:35.626Z console.error
- text: ⚠️ PERINGATAN: File .env tidak terbaca dengan benar!

## 2026-10-09 15:20:35.626Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559202341:17:25

## 2026-10-09 15:21:07.160Z load
- url: http://localhost:3000/

## 2026-10-09 15:21:07.411Z console.error
- text: ⚠️ PERINGATAN: File .env tidak terbaca dengan benar!

## 2026-10-09 15:21:07.413Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:17:25

## 2026-10-09 15:21:09.856Z load
- url: http://localhost:3000/

## 2026-10-09 15:21:10.062Z console.error
- text: ⚠️ PERINGATAN: File .env tidak terbaca dengan benar!

## 2026-10-09 15:21:10.062Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2
- line: 20422
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20422:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20654:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=c4ac70d2:20898:10)
        at http://localhost:3000/src/lib/supabase.js:17:25

## 2026-10-09 15:22:07.046Z load
- url: http://localhost:3000/

## 2026-10-09 15:22:19.810Z console.error
- text: ⚠️ PERINGATAN: File .env tidak terbaca dengan benar!

## 2026-10-09 15:22:19.812Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=850e2944
- line: 20420
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=850e2944:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=850e2944:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=850e2944:20896:10)
        at http://localhost:3000/src/lib/supabase.js:17:25

## 2026-10-09 15:23:53.488Z load
- url: http://localhost:3000/

## 2026-10-09 15:23:53.730Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-09 15:23:54.396Z network.error
- method: POST
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/auth/v1/token?grant_type=refresh_token
- status: 400
- requestBody: {"refresh_token":"[redacted:length=12]"}
- response: {"code":"refresh_token_not_found","message":"Invalid Refresh Token: Refresh Token Not Found"}
- durationMs: 678

## 2026-10-09 15:23:54.397Z console.error
- text: Fetch error from https://zlbiezqiicgtcejdbdpm.supabase.co/auth/v1/token?grant_type=refresh_token: {"code":"refresh_token_not_found","message":"Invalid Refresh Token: Refresh Token Not Found"}

## 2026-10-09 15:26:57.301Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.302Z console.error
- text: [vite] Failed to reload /src/pages/PengurusPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.303Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.304Z console.error
- text: [vite] Failed to reload /src/components/Youtube.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.306Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.307Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/sambutan/SambutanPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.308Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.308Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/login/LoginPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.310Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.311Z console.error
- text: [vite] Failed to reload /src/pages/KeuanganPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.313Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.313Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/berita/BeritaPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.316Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.317Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/keuangan/KeuanganAdminPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.318Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.319Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/donasi/DonasiPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.320Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.320Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/youtube/YoutubePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.322Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.322Z console.error
- text: [vite] Failed to reload /src/components/Secretariat.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.323Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.324Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/galeri/GaleriPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.325Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.326Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/new-member/AnggotaBaruPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.327Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.328Z console.error
- text: [vite] Failed to reload /src/pages/GaleriPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.329Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.329Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/secretariat/SecretariatPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.332Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.332Z console.error
- text: [vite] Failed to reload /src/pages/GabungPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.333Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.334Z console.error
- text: [vite] Failed to reload /src/pages/ProgramPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.335Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.336Z console.error
- text: [vite] Failed to reload /src/pages/TentangKamiPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.337Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.338Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/DashboardLayout.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.341Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.342Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/anggota/AnggotaPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.344Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.345Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/struktur-organisasi/PengurusPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.346Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.346Z console.error
- text: [vite] Failed to reload /src/pages/DonasiPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.348Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.348Z console.error
- text: [vite] Failed to reload /src/components/Sambutan.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.350Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.350Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/sponsor/SponsorPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.351Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.352Z console.error
- text: [vite] Failed to reload /src/components/Sponsor.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.353Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.354Z console.error
- text: [vite] Failed to reload /src/pages/BeritaPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.357Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.357Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/tentang/TentangPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.358Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.359Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/program/ProgramPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:26:57.361Z console.error
- text: 
    [vite] Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:26:57.361Z console.error
- text: [vite] Failed to reload /src/pages/HomePage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 15:27:36.610Z load
- url: http://localhost:3000/

## 2026-10-09 15:27:36.886Z window.error
- message: Uncaught Error: supabaseUrl is required.
- source: http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed
- line: 20420
- col: 26
- stack: 
    Error: supabaseUrl is required.
        at validateSupabaseUrl (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20420:26)
        at new SupabaseClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20652:21)
        at createClient (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20896:10)
        at http://localhost:3000/src/lib/supabase.js?t=1791559617061:6:25

## 2026-10-09 15:36:07.438Z load
- url: http://localhost:3000/

## 2026-10-09 15:36:31.300Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sambutan Ketua UmumMerawat Akar Tradisi, Menjembatani Masa Depan di Perantauan\"Mejuah-juah man banta kerina. Kehadiran Aron Rudang Mayang di Balikpapan bukan sekadar wadah berkumpul, melainkan rumah bersama tempat kita saling menopang dalam semangat kekeluargaan dan gotong royong khas Karo. Mari terus jaga kebersamaan, junjung tinggi adat istiadat, dan berikan kontribusi positif bagi kemajuan Kota Balikpapan tercinta.\"Yegar TariganKetua Umum Aron Rudang Mayang"}

## 2026-10-09 15:36:37.657Z load
- url: http://localhost:3000/aku-bisa

## 2026-10-09 15:36:37.826Z navigate
- url: http://localhost:3000/aku-bisa
- via: replaceState

## 2026-10-09 15:36:44.862Z load
- url: http://localhost:3000/ngurus-aron

## 2026-10-09 15:36:44.928Z navigate
- url: http://localhost:3000/ngurus-aron
- via: replaceState

## 2026-10-09 15:36:44.932Z navigate
- url: http://localhost:3000/ngurus-aron/login
- via: pushState

## 2026-10-09 15:36:46.557Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":null,"placeholder":"email@domain.com","label":"email@domain.com","value":"","valueLength":0,"text":""}

## 2026-10-09 15:36:46.563Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":null,"placeholder":"email@domain.com","label":"email@domain.com","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 15:36:46.564Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":null,"placeholder":"email@domain.com","label":"email@domain.com","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 15:36:46.564Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":null,"placeholder":"••••••••","label":"••••••••","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-10-09 15:36:46.565Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":null,"placeholder":"••••••••","label":"••••••••","value":"[redacted:length=7]","valueLength":7,"text":""}

## 2026-10-09 15:36:46.565Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":null,"placeholder":"••••••••","label":"••••••••","value":"[redacted:length=7]","valueLength":7,"text":""}

## 2026-10-09 15:36:46.637Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Masuk ke Dashboard"}

## 2026-10-09 15:36:46.639Z submit
- action: http://localhost:3000/ngurus-aron/login
- fields: [{"label":"email@domain.com","type":"email","value":"yegargirsang@gmail.com","length":22,"redacted":false},{"label":"••••••••","type":"password","value":"[redacted:length=7]","length":7,"redacted":true},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 15:36:47.293Z navigate
- url: http://localhost:3000/ngurus-aron/beranda
- via: pushState

## 2026-10-09 15:36:49.331Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 15:36:49.332Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 15:37:08.414Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Manajemen KeuanganKelola laporan umum dan iuran kas anggota secara terpusat. Kas Anggota Laporan Umum Nominal Kas/Bulan Total Anggota227 Orang Total TerkumpulRp 0 Total TunggakanRp 11.400.000Daftar Status Kas AnggotaDihitung otomatis sejak tanggal gabungEllois Sembiring Gabung: Sep 2026MenunggakHarus BayarRp 100.000Belum DibayarRp 100.000 Kirim WA Tandai BayarEllois Sembiring 083183585368• Gabung September 2026TagihanRp 100.000LunasRp 0TunggakanRp 100.000Yegar Tarigan Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarYegar Tarigan 083877734668• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000JULIUS BASTIANTA GINTING Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarJULIUS BASTIANTA GINTING 081346809085• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Aldiano Zio Malvintha Tarigan Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarAldiano Zio Malvintha Tarigan 081318760909• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Ditha Bunga Marsella Br Ginting Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarDitha Bunga Marsella Br Ginting 081256799609• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Rinaldi Kristian Ginting Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarRinaldi Kristian Ginting 82122988267• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000RAMA ALDI SITEPU Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarRAMA ALDI SITEPU 83848246659• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Taufan Widyatamaka Purba Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarTaufan Widyatamaka Purba 85754584140• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Teguh Prawira Kusuma Purba Gabung: Okt 2026Menunggak..."}

## 2026-10-09 15:37:11.127Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Manajemen KeuanganKelola laporan umum dan iuran kas anggota secara terpusat. Kas Anggota Laporan Umum Nominal Kas/Bulan Total Anggota227 Orang Total TerkumpulRp 0 Total TunggakanRp 11.400.000Daftar Status Kas AnggotaDihitung otomatis sejak tanggal gabungEllois Sembiring Gabung: Sep 2026MenunggakHarus BayarRp 100.000Belum DibayarRp 100.000 Kirim WA Tandai BayarEllois Sembiring 083183585368• Gabung September 2026TagihanRp 100.000LunasRp 0TunggakanRp 100.000Yegar Tarigan Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarYegar Tarigan 083877734668• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000JULIUS BASTIANTA GINTING Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarJULIUS BASTIANTA GINTING 081346809085• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Aldiano Zio Malvintha Tarigan Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarAldiano Zio Malvintha Tarigan 081318760909• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Ditha Bunga Marsella Br Ginting Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarDitha Bunga Marsella Br Ginting 081256799609• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Rinaldi Kristian Ginting Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarRinaldi Kristian Ginting 82122988267• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000RAMA ALDI SITEPU Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarRAMA ALDI SITEPU 83848246659• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Taufan Widyatamaka Purba Gabung: Okt 2026MenunggakHarus BayarRp 50.000Belum DibayarRp 50.000 Kirim WA Tandai BayarTaufan Widyatamaka Purba 85754584140• Gabung Oktober 2026TagihanRp 50.000LunasRp 0TunggakanRp 50.000Teguh Prawira Kusuma Purba Gabung: Okt 2026Menunggak..."}

## 2026-10-09 15:37:17.805Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083183585368• Gabung September 2026"}

## 2026-10-09 15:37:18.157Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083183585368• Gabung September 2026"}

## 2026-10-09 15:37:18.340Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083183585368• Gabung September 2026"}

## 2026-10-09 15:37:18.996Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083183585368• Gabung September 2026"}

## 2026-10-09 15:37:26.883Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ellois Sembiring Gabung: Sep 2026MenunggakHarus BayarRp 100.000Belum DibayarRp 100.000 Kirim WA Tandai BayarEllois Sembiring 083183585368• Gabung September 2026TagihanRp 100.000LunasRp 0TunggakanRp 100.000"}

## 2026-10-09 15:37:27.476Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Laporan Umum"}

## 2026-10-09 15:37:30.948Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Kas Anggota"}

## 2026-10-09 15:37:38.476Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"227 Orang"}

## 2026-10-09 15:37:38.919Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":null,"placeholder":null,"label":"[number]","value":"50000","valueLength":5,"text":""}

## 2026-10-09 15:37:39.032Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":null,"placeholder":null,"label":"[number]","value":"50000","valueLength":5,"text":""}

## 2026-10-09 15:38:10.969Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":null,"placeholder":null,"label":"[number]","value":"20000","valueLength":5,"text":""}

## 2026-10-09 15:38:10.969Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"number","id":null,"placeholder":null,"label":"[number]","value":"20000","valueLength":5,"text":""}

## 2026-10-09 15:38:11.083Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 15:39:04.531Z load
- url: http://localhost:3000/

## 2026-10-09 15:39:04.694Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-09 15:39:07.078Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Bergabung Bersama Kami"}

## 2026-10-09 15:39:07.079Z navigate
- url: http://localhost:3000/gabung
- via: pushState

## 2026-10-09 15:39:08.853Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:08.939Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:13.158Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"gutuu","valueLength":5,"text":""}

## 2026-10-09 15:39:13.158Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"gutuu","valueLength":5,"text":""}

## 2026-10-09 15:39:13.159Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:13.243Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:14.615Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"23 Agustus","valueLength":10,"text":""}

## 2026-10-09 15:39:19.254Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"23 Agustus 2022","valueLength":15,"text":""}

## 2026-10-09 15:39:19.254Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"23 Agustus 2022","valueLength":15,"text":""}

## 2026-10-09 15:39:19.256Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:19.347Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:20.145Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"Sembiring","valueLength":9,"text":""}

## 2026-10-09 15:39:21.318Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"Sembiring","valueLength":9,"text":""}

## 2026-10-09 15:39:21.319Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:21.437Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:23.348Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:28.268Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"manggar","valueLength":7,"text":""}

## 2026-10-09 15:39:28.269Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"manggar","valueLength":7,"text":""}

## 2026-10-09 15:39:28.270Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:28.356Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:30.172Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 15:39:30.173Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 15:39:30.173Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:30.176Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 15:39:30.176Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 15:39:30.176Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 15:39:31.727Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 15:39:31.728Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:39:31.814Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:39:32.565Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:39:32.568Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:39:33.381Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:39:33.382Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"golongan_darah","type":null,"id":null,"placeholder":null,"label":"golongan_darah","value":"O","valueLength":1,"text":"ABABOTidak Tahu"}

## 2026-10-09 15:39:33.500Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"golongan_darah","type":null,"id":null,"placeholder":null,"label":"golongan_darah","value":"O","valueLength":1,"text":"ABABOTidak Tahu"}

## 2026-10-09 15:39:33.961Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"golongan_darah","type":null,"id":null,"placeholder":null,"label":"golongan_darah","value":"O","valueLength":1,"text":"ABABOTidak Tahu"}

## 2026-10-09 15:39:34.043Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nama LengkapJenis KelaminLaki-lakiPerempuanUlang Tahun (Tanggal & Bulan)Bebere / Marga Ibu (Opsional)Asal Kota / KampungDomisili di BalikpapanNomor HP / WhatsApp AktifEmail AktifStatus AktivitasBekerjaKuliahWiraswastaLainnyaGolongan DarahABABOTidak TahuAkun Media Sosial (Opsional) Informasi Kontak DaruratNama Kontak DaruratHubunganKeluarga (Ortu/Saudara)Teman DekatPasanganLainnyaNomor HP Kontak DaruratKirim Pendaftaran Anggota"}

## 2026-10-09 15:39:35.412Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:35.501Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:37.212Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"y_gar.tarigan","valueLength":13,"text":""}

## 2026-10-09 15:39:38.173Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"y_gar.tarigan","valueLength":13,"text":""}

## 2026-10-09 15:39:38.173Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:38.242Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:40.138Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"Efraim","valueLength":6,"text":""}

## 2026-10-09 15:39:41.037Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"Efraim","valueLength":6,"text":""}

## 2026-10-09 15:39:41.038Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"kontak_darurat_hubungan","type":null,"id":null,"placeholder":null,"label":"kontak_darurat_hubungan","value":"Keluarga","valueLength":8,"text":"Keluarga (Ortu/Saudara)Teman DekatPasanganLainnya"}

## 2026-10-09 15:39:41.124Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"kontak_darurat_hubungan","type":null,"id":null,"placeholder":null,"label":"kontak_darurat_hubungan","value":"Keluarga","valueLength":8,"text":"Keluarga (Ortu/Saudara)Teman DekatPasanganLainnya"}

## 2026-10-09 15:39:43.150Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"kontak_darurat_hubungan","type":null,"id":null,"placeholder":null,"label":"kontak_darurat_hubungan","value":"Teman Dekat","valueLength":11,"text":"Keluarga (Ortu/Saudara)Teman DekatPasanganLainnya"}

## 2026-10-09 15:39:43.155Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"kontak_darurat_hubungan","type":null,"id":null,"placeholder":null,"label":"kontak_darurat_hubungan","value":"Teman Dekat","valueLength":11,"text":"Keluarga (Ortu/Saudara)Teman DekatPasanganLainnya"}

## 2026-10-09 15:39:43.453Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"kontak_darurat_hubungan","type":null,"id":null,"placeholder":null,"label":"kontak_darurat_hubungan","value":"Teman Dekat","valueLength":11,"text":"Keluarga (Ortu/Saudara)Teman DekatPasanganLainnya"}

## 2026-10-09 15:39:43.453Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:43.523Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 15:39:44.649Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 15:39:45.942Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 15:39:46.020Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kirim Pendaftaran Anggota"}

## 2026-10-09 15:39:46.022Z submit
- action: http://localhost:3000/gabung
- fields: [{"label":"nama","type":"text","value":"gutuu","length":5,"redacted":false},{"label":"jenis_kelamin","type":"select-one","value":"Laki-laki","length":9,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"23 Agustus 2022","length":15,"redacted":false},{"label":"bebere","type":"text","value":"Sembiring","length":9,"redacted":false},{"label":"asal_kota","type":"text","value":"manggar","length":7,"redacted":false},{"label":"domisili","type":"text","value":"Sepinggan","length":9,"redacted":false},{"label":"no_hp","type":"tel","value":"083877734668","length":12,"redacted":false},{"label":"email","type":"email","value":"yegargirsang@gmail.com","length":22,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Kuliah","length":6,"redacted":false},{"label":"golongan_darah","type":"select-one","value":"O","length":1,"redacted":false},{"label":"sosmed","type":"text","value":"y_gar.tarigan","length":13,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Efraim","length":6,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Teman Dekat","length":11,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"083877734668","length":12,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 15:39:53.348Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota Baru"}

## 2026-10-09 15:39:53.350Z navigate
- url: http://localhost:3000/ngurus-aron/new-member
- via: pushState

## 2026-10-09 15:39:58.548Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Terima & Sambut WA"}

## 2026-10-09 15:40:06.589Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 15:40:06.590Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 15:40:09.926Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"","valueLength":0,"text":""}

## 2026-10-09 15:40:10.011Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"","valueLength":0,"text":""}

## 2026-10-09 15:40:16.134Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"gut","valueLength":3,"text":""}

## 2026-10-09 15:40:16.134Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"gut","valueLength":3,"text":""}

## 2026-10-09 15:40:16.205Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 15:40:16.206Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 15:40:19.140Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Daftar Status Kas AnggotaDihitung otomatis sejak tanggal gabung"}

## 2026-10-09 15:40:59.254Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083877734668• Gabung Oktober 2026"}

## 2026-10-09 15:40:59.789Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083877734668• Gabung Oktober 2026"}

## 2026-10-09 15:41:02.787Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 15:43:20.221Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 15:43:45.892Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 81396340246• Gabung Oktober 2026"}

## 2026-10-09 15:43:46.963Z click
- element: {"tag":"h5","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Zeremia Bangun"}

## 2026-10-09 15:43:50.139Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 15:43:50.142Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 15:43:55.157Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"","valueLength":0,"text":""}

## 2026-10-09 15:43:55.251Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"","valueLength":0,"text":""}

## 2026-10-09 15:44:02.333Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"zi","valueLength":2,"text":""}

## 2026-10-09 15:44:02.333Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, email...","label":"Cari nama, telepon, email...","value":"zi","valueLength":2,"text":""}

## 2026-10-09 15:44:02.411Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 15:44:04.054Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"81396340246","valueLength":11,"text":""}

## 2026-10-09 15:44:04.147Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"81396340246","valueLength":11,"text":""}

## 2026-10-09 15:44:08.405Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"081396340246","valueLength":12,"text":""}

## 2026-10-09 15:44:08.405Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"081396340246","valueLength":12,"text":""}

## 2026-10-09 15:44:08.515Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 15:44:08.517Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"ZIEZEFANYA NABORA BR PERANGIN-ANGIN","length":35,"redacted":false},{"label":"bebere","type":"text","value":"Sembiring Pelawi","length":16,"redacted":false},{"label":"asal_kota","type":"text","value":"Desa Ajijahe","length":12,"redacted":false},{"label":"address","type":"text","value":"Kilo 15","length":7,"redacted":false},{"label":"phone","type":"tel","value":"081396340246","length":12,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"01 Maret 2006","length":13,"redacted":false},{"label":"gol-dar","type":"select-one","value":"B","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Ziezefanya Nabora","length":17,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Jhon Freddy","length":11,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"081362138833","length":12,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 15:44:13.708Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 15:44:14.875Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"81263203125","valueLength":11,"text":""}

## 2026-10-09 15:44:14.970Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"81263203125","valueLength":11,"text":""}

## 2026-10-09 15:44:16.197Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"081263203125","valueLength":12,"text":""}

## 2026-10-09 15:44:16.197Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"phone","type":"tel","id":null,"placeholder":"No WhatsApp / Telepon","label":"phone","value":"081263203125","valueLength":12,"text":""}

## 2026-10-09 15:44:16.331Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 15:44:16.332Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama Kontak Darurat","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 15:44:19.190Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama Kontak Darurat","label":"kontak_darurat_nama","value":"-","valueLength":1,"text":""}

## 2026-10-09 15:44:19.190Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama Kontak Darurat","label":"kontak_darurat_nama","value":"-","valueLength":1,"text":""}

## 2026-10-09 15:44:19.191Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"No HP Kontak Darurat","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 15:44:19.290Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"No HP Kontak Darurat","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 15:44:20.085Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"No HP Kontak Darurat","label":"kontak_darurat_no_hp","value":"-","valueLength":1,"text":""}

## 2026-10-09 15:44:20.085Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"No HP Kontak Darurat","label":"kontak_darurat_no_hp","value":"-","valueLength":1,"text":""}

## 2026-10-09 15:44:20.179Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 15:44:20.180Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"ANGGA ABDUL AZIS GINTING","length":24,"redacted":false},{"label":"bebere","type":"text","value":"Bukit","length":5,"redacted":false},{"label":"asal_kota","type":"text","value":"Ujung bandar","length":12,"redacted":false},{"label":"address","type":"text","value":"PERUM GRIYA PERMATA ASRI JLN KANDILO NO 109","length":43,"redacted":false},{"label":"phone","type":"tel","value":"081263203125","length":12,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"38154","length":5,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"(FB)Salsabila (IG) SKTK","length":23,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 15:44:26.043Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 15:44:26.045Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 15:44:56.547Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083183585368• Gabung September 2026"}

## 2026-10-09 15:44:57.099Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" 083183585368• Gabung September 2026"}

## 2026-10-09 15:45:17.395Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Elon nardo tarigan Gabung: Okt 2026MenunggakHarus BayarRp 20.000Belum DibayarRp 20.000 Kirim WA Tandai BayarElon nardo tarigan 82125226390• Gabung Oktober 2026TagihanRp 20.000LunasRp 0TunggakanRp 20.000"}

## 2026-10-09 15:46:06.572Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 15:46:43.435Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 15:46:43.437Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 15:49:38.067Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 15:49:38.068Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 15:49:48.999Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:49:49.090Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:50:00.881Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahWiraswastaLainnya"}

## 2026-10-09 15:50:00.979Z click
- element: {"tag":"main","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keluarga Besar PerantauanBergabung Bersama Aron Rudang MayangMari pererat tali persaudaraan, lestarikan budaya, dan saling menopang di tanah rantau Kota Balikpapan.Syarat & Ketentuan Bergabung1.Merupakan perantau atau warga keturunan suku Karo yang berdomisili di Kota Balikpapan dan sekitarnya.2.Memiliki komitmen untuk menjunjung tinggi nilai kekeluargaan, saling menghormati, dan berpartisipasi dalam semangat gotong royong (aron).3.Bersedia mematuhi Anggaran Dasar / Anggaran Rumah Tangga (AD/ART) serta keputusan musyawarah komunitas.4.Menjaga nama baik organisasi Aron Rudang Mayang baik di dalam maupun di luar kegiatan komunitas.Formulir Pendaftaran Anggota BaruPendaftaran berhasil dikirim! Data Anda telah masuk ke sistem panitia Aron Rudang Mayang.Nama LengkapJenis KelaminLaki-lakiPerempuanUlang Tahun (Tanggal & Bulan)Bebere / Marga Ibu (Opsional)Asal Kota / KampungDomisili di BalikpapanNomor HP / WhatsApp AktifEmail AktifStatus AktivitasBekerjaKuliahWiraswastaLainnyaGolongan DarahABABOTidak TahuAkun Media Sosial (Opsional) Informasi Kontak DaruratNama Kontak DaruratHubunganKeluarga (Ortu/Saudara)Teman DekatPasanganLainnyaNomor HP Kontak DaruratKirim Pendaftaran Anggota"}

## 2026-10-09 15:51:31.592Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 15:51:31.691Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 15:51:37.682Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 15:51:38.482Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 15:52:06.209Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 15:52:08.483Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 15:52:10.042Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 15:52:10.045Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 16:00:06.141Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:00:08.548Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:00:08.549Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:08.617Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:09.960Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar girsang","valueLength":13,"text":""}

## 2026-10-09 16:00:09.960Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar girsang","valueLength":13,"text":""}

## 2026-10-09 16:00:09.960Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:09.963Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"Kota Balikpapan","valueLength":15,"text":""}

## 2026-10-09 16:00:09.963Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"Kota Balikpapan","valueLength":15,"text":""}

## 2026-10-09 16:00:09.963Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:09.965Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:00:09.965Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:00:09.965Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:09.969Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 16:00:09.969Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 16:00:09.969Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar girsang","valueLength":13,"text":""}

## 2026-10-09 16:00:13.474Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar girsang","valueLength":13,"text":""}

## 2026-10-09 16:00:13.474Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:00:13.561Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:00:14.293Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:00:14.297Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:00:15.641Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:00:15.641Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:15.736Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:18.122Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"sfdv","valueLength":4,"text":""}

## 2026-10-09 16:00:18.122Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"sfdv","valueLength":4,"text":""}

## 2026-10-09 16:00:18.123Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:18.202Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:20.673Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:21.342Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"Jhon Freddy","valueLength":11,"text":""}

## 2026-10-09 16:00:22.571Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"Jhon Freddy","valueLength":11,"text":""}

## 2026-10-09 16:00:22.571Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:22.664Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:23.519Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:00:26.500Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:00:26.593Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kirim Pendaftaran Anggota"}

## 2026-10-09 16:00:26.594Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:30.937Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota Baru"}

## 2026-10-09 16:00:30.940Z navigate
- url: http://localhost:3000/ngurus-aron/new-member
- via: pushState

## 2026-10-09 16:00:35.223Z load
- url: http://localhost:3000/ngurus-aron/new-member

## 2026-10-09 16:00:36.893Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:40.960Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kirim Pendaftaran Anggota"}

## 2026-10-09 16:00:40.962Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 16:00:46.957Z load
- url: http://localhost:3000/ngurus-aron/new-member

## 2026-10-09 16:00:52.292Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:01.336Z load
- url: http://localhost:3000/gabung

## 2026-10-09 16:01:03.316Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:03.401Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:04.329Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar girsang","valueLength":13,"text":""}

## 2026-10-09 16:01:04.329Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar girsang","valueLength":13,"text":""}

## 2026-10-09 16:01:04.329Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:04.332Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"Kota Balikpapan","valueLength":15,"text":""}

## 2026-10-09 16:01:04.332Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"asal_kota","type":"text","id":null,"placeholder":"Contoh: Kabanjahe / Berastagi","label":"asal_kota","value":"Kota Balikpapan","valueLength":15,"text":""}

## 2026-10-09 16:01:04.332Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:04.336Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:01:04.336Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:01:04.336Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:04.338Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 16:01:04.338Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"email","type":"email","id":null,"placeholder":"email@domain.com","label":"email","value":"yegargirsang@gmail.com","valueLength":22,"text":""}

## 2026-10-09 16:01:04.338Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar girsang","valueLength":13,"text":""}

## 2026-10-09 16:01:11.410Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar gutul","valueLength":11,"text":""}

## 2026-10-09 16:01:11.410Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"nama","type":"text","id":null,"placeholder":"Contoh: Yegar Tarigan","label":"nama","value":"yegar gutul","valueLength":11,"text":""}

## 2026-10-09 16:01:11.411Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:01:11.473Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:01:11.978Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:01:11.982Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:01:13.506Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah","valueLength":6,"text":"BekerjaKuliahLainnya"}

## 2026-10-09 16:01:13.507Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:13.617Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:15.072Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"dswf","valueLength":4,"text":""}

## 2026-10-09 16:01:15.072Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"sosmed","type":"text","id":null,"placeholder":"Contoh: IG: @brando, FB: Brando Ginting","label":"sosmed","value":"dswf","valueLength":4,"text":""}

## 2026-10-09 16:01:15.073Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:15.201Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:16.215Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"Efraim","valueLength":6,"text":""}

## 2026-10-09 16:01:17.088Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"Efraim","valueLength":6,"text":""}

## 2026-10-09 16:01:17.705Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"Efraim","valueLength":6,"text":""}

## 2026-10-09 16:01:23.033Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"mmmmaaaa","valueLength":8,"text":""}

## 2026-10-09 16:01:23.034Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_nama","type":"text","id":null,"placeholder":"Nama lengkap","label":"kontak_darurat_nama","value":"mmmmaaaa","valueLength":8,"text":""}

## 2026-10-09 16:01:23.034Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:23.138Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:24.025Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nama LengkapJenis KelaminLaki-lakiPerempuanUlang Tahun (Tanggal & Bulan)Bebere / Marga Ibu (Opsional)Asal Kota / KampungDomisili di BalikpapanNomor HP / WhatsApp AktifEmail AktifStatus AktivitasBekerjaKuliahLainnyaGolongan DarahABABOTidak TahuAkun Media Sosial (Opsional) Informasi Kontak DaruratNama Kontak DaruratHubunganKeluarga (Ortu/Saudara)Teman DekatPasanganLainnyaNomor HP Kontak DaruratKirim Pendaftaran Anggota"}

## 2026-10-09 16:01:24.969Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Nomor HP Kontak Darurat"}

## 2026-10-09 16:01:25.210Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:25.313Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:25.918Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:01:26.788Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"kontak_darurat_no_hp","type":"tel","id":null,"placeholder":"081234567890","label":"kontak_darurat_no_hp","value":"083877734668","valueLength":12,"text":""}

## 2026-10-09 16:01:26.898Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kirim Pendaftaran Anggota"}

## 2026-10-09 16:01:26.900Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:29.832Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:31.557Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"13 November 2004","valueLength":16,"text":""}

## 2026-10-09 16:01:34.354Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"tanggal_lahir","type":"text","id":null,"placeholder":"Contoh: 13 November 2003","label":"tanggal_lahir","value":"13 November 2004","valueLength":16,"text":""}

## 2026-10-09 16:01:34.354Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:34.441Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"","valueLength":0,"text":""}

## 2026-10-09 16:01:35.157Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"Sembiring","valueLength":9,"text":""}

## 2026-10-09 16:01:37.212Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"bebere","type":"text","id":null,"placeholder":"Contoh: Sembiring","label":"bebere","value":"Sembiring","valueLength":9,"text":""}

## 2026-10-09 16:01:37.322Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kirim Pendaftaran Anggota"}

## 2026-10-09 16:01:37.324Z submit
- action: http://localhost:3000/gabung
- fields: [{"label":"nama","type":"text","value":"yegar gutul","length":11,"redacted":false},{"label":"jenis_kelamin","type":"select-one","value":"Laki-laki","length":9,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"13 November 2004","length":16,"redacted":false},{"label":"bebere","type":"text","value":"Sembiring","length":9,"redacted":false},{"label":"asal_kota","type":"text","value":"Kota Balikpapan","length":15,"redacted":false},{"label":"domisili","type":"text","value":"Sepinggan","length":9,"redacted":false},{"label":"no_hp","type":"tel","value":"083877734668","length":12,"redacted":false},{"label":"email","type":"email","value":"yegargirsang@gmail.com","length":22,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Kuliah","length":6,"redacted":false},{"label":"golongan_darah","type":"select-one","value":"O","length":1,"redacted":false},{"label":"sosmed","type":"text","value":"dswf","length":4,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"mmmmaaaa","length":8,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"083877734668","length":12,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:01:43.923Z load
- url: http://localhost:3000/ngurus-aron/new-member

## 2026-10-09 16:02:48.178Z click
- element: {"tag":"span","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kuliah"}

## 2026-10-09 16:02:48.665Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kuliahyegar gutulLaki-laki • Bebere: Sembiring • Gol. Darah: O"}

## 2026-10-09 16:02:49.009Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kuliahyegar gutulLaki-laki • Bebere: Sembiring • Gol. Darah: O"}

## 2026-10-09 16:02:51.561Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 16:02:51.563Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 16:06:29.744Z load
- url: http://localhost:3000/gabung

## 2026-10-09 16:06:30.336Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ARON RUDANG MAYANGKota Balikpapan"}

## 2026-10-09 16:06:30.338Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-10-09 16:06:35.576Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 16:06:35.578Z navigate
- url: http://localhost:3000/keuangan
- via: pushState

## 2026-10-09 16:06:58.897Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 16:06:58.900Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 16:06:59.953Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Laporan Umum"}

## 2026-10-09 16:07:24.265Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hasil Keputusan RapatKetentuan & Kebijakan KasBerdasarkan hasil rapat pengurus dan anggota tanggal 10 Januari 2026, iuran kas wajib anggota ditetapkan sebesar Rp 10.000 per bulan guna mendukung kegiatan sosial dan budaya.💡 Catatan Penting:Pembayaran iuran kas dapat disetorkan langsung kepada bendahara atau melalui rekening resmi komunitas di bawah ini."}

## 2026-10-09 16:07:31.473Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:07:47.688Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:07:47.787Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:07:50.581Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:07:50.583Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:07:50.666Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:08:00.650Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:08:02.986Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berdasarkan hasil rapat pengurus dan anggota, iuran kas rutin wajib dibayarkan setiap bulannya untuk mempererat solidaritas aron."}

## 2026-10-09 16:08:03.735Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berdasarkan hasil rapat pengurus dan anggota, iuran kas rutin wajib dibayarkan setiap bulannya untuk mempererat solidaritas aron."}

## 2026-10-09 16:08:04.168Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berdasarkan hasil rapat pengurus dan anggota, iuran kas rutin wajib dibayarkan setiap bulannya untuk mempererat solidaritas aron."}

## 2026-10-09 16:08:14.224Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hasil Keputusan RapatKetentuan & Kebijakan KasBerdasarkan hasil rapat pengurus dan anggota, iuran kas rutin wajib dibayarkan setiap bulannya untuk mempererat solidaritas aron.💡 Catatan Penting:Pembayaran iuran kas dapat disetorkan langsung kepada bendahara atau melalui rekening resmi komunitas di bawah ini."}

## 2026-10-09 16:08:14.816Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berdasarkan hasil rapat pengurus dan anggota, iuran kas rutin wajib dibayarkan setiap bulannya untuk mempererat solidaritas aron."}

## 2026-10-09 16:08:16.216Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hasil Keputusan RapatKetentuan & Kebijakan KasBerdasarkan hasil rapat pengurus dan anggota, iuran kas rutin wajib dibayarkan setiap bulannya untuk mempererat solidaritas aron.💡 Catatan Penting:Pembayaran iuran kas dapat disetorkan langsung kepada bendahara atau melalui rekening resmi komunitas di bawah ini."}

## 2026-10-09 16:08:23.455Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:08:26.767Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Kas Anggota"}

## 2026-10-09 16:08:31.514Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Catatan berhasil dihapus!✕"}

## 2026-10-09 16:08:32.577Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"✕"}

## 2026-10-09 16:08:35.338Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Laporan Umum"}

## 2026-10-09 16:08:38.394Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Belum ada catatan keuangan."}

## 2026-10-09 16:08:39.524Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Riwayat Keuangan Tercatat (0)Belum ada catatan keuangan."}

## 2026-10-09 16:08:40.293Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Riwayat Keuangan Tercatat (0)Belum ada catatan keuangan."}

## 2026-10-09 16:08:40.457Z click
- element: {"tag":"h4","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Riwayat Keuangan Tercatat (0)"}

## 2026-10-09 16:08:41.201Z click
- element: {"tag":"h4","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Riwayat Keuangan Tercatat (0)"}

## 2026-10-09 16:08:48.353Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Simpan Catatan"}

## 2026-10-09 16:08:51.183Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:08:51.296Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:08:54.603Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:08:54.607Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:08:56.787Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:08:56.791Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:08:56.890Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:11:09.577Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan, yang kuliah ditetapkan sebesar Rp 12.000 guna mendukung kegiatan sosial dan budaya.","valueLength":218,"text":""}

## 2026-10-09 16:11:50.843Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan, yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","valueLength":225,"text":""}

## 2026-10-09 16:11:50.843Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan, yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","valueLength":225,"text":""}

## 2026-10-09 16:11:50.845Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"","valueLength":0,"text":""}

## 2026-10-09 16:11:50.919Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"","valueLength":0,"text":""}

## 2026-10-09 16:12:05.188Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"05 Oktober 2026","valueLength":15,"text":""}

## 2026-10-09 16:12:05.188Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"05 Oktober 2026","valueLength":15,"text":""}

## 2026-10-09 16:12:05.276Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Simpan Catatan"}

## 2026-10-09 16:12:05.277Z submit
- action: http://localhost:3000/ngurus-aron/keuangan
- fields: [{"label":"type","type":"select-one","value":"info","length":4,"redacted":false},{"label":"date","type":"text","value":"05 Oktober 2026","length":15,"redacted":false},{"label":"title","type":"text","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan, yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","length":225,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:12:06.617Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Simpan Catatan"}

## 2026-10-09 16:12:06.619Z submit
- action: http://localhost:3000/ngurus-aron/keuangan
- fields: [{"label":"type","type":"select-one","value":"info","length":4,"redacted":false},{"label":"date","type":"text","value":"05 Oktober 2026","length":15,"redacted":false},{"label":"title","type":"text","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan, yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","length":225,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:12:13.176Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:12:15.825Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Tambah Catatan Keuangan BaruJenis TransaksiUang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman RapatTanggalKeterangan / JudulNominal (Rupiah)Kategori Simpan Catatan"}

## 2026-10-09 16:12:18.961Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:12:44.224Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hasil Keputusan RapatKetentuan & Kebijakan KasBerdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan, yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.💡 Catatan Penting:Pembayaran iuran kas dapat disetorkan langsung kepada bendahara atau melalui rekening resmi komunitas di bawah ini."}

## 2026-10-09 16:12:49.681Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:12:52.747Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:12:52.825Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:12:53.489Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:12:53.492Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:12:54.531Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:12:54.532Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:12:54.642Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:12:59.185Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan, yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","valueLength":225,"text":""}

## 2026-10-09 16:13:04.873Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan dan yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","valueLength":228,"text":""}

## 2026-10-09 16:13:04.874Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan dan yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","valueLength":228,"text":""}

## 2026-10-09 16:13:04.875Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"","valueLength":0,"text":""}

## 2026-10-09 16:13:04.951Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"","valueLength":0,"text":""}

## 2026-10-09 16:13:06.828Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"05 Oktober 2026","valueLength":15,"text":""}

## 2026-10-09 16:13:07.545Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"date","type":"text","id":null,"placeholder":"15 Juli 2026","label":"date","value":"05 Oktober 2026","valueLength":15,"text":""}

## 2026-10-09 16:13:07.616Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Simpan Catatan"}

## 2026-10-09 16:13:07.617Z submit
- action: http://localhost:3000/ngurus-aron/keuangan
- fields: [{"label":"type","type":"select-one","value":"info","length":4,"redacted":false},{"label":"date","type":"text","value":"05 Oktober 2026","length":15,"redacted":false},{"label":"title","type":"text","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan dan yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.","length":228,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:13:11.812Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:13:18.887Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hasil Keputusan RapatKetentuan & Kebijakan KasBerdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan dan yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya."}

## 2026-10-09 16:13:38.297Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/anggota/AnggotaPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 16:13:38.405Z console.error
- text: [vite] Failed to reload /src/pages/ngurus-aron/anggota/AnggotaPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-10-09 16:14:56.983Z load
- url: http://localhost:3000/ngurus-aron/keuangan

## 2026-10-09 16:15:04.056Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 16:15:04.058Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 16:15:14.017Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ellois SembiringAktifBebere KaroAsal: Tanjung Anom | Domisili: kilo 10 (Asal: Tanjung Anom) | Ulang Tahun: 03 Agustus📞 083183585368 • ✉️ ellouisgusmawan@gmail.com | Gol. Darah: O Sosmed: @Llouis Milala Kontak Darurat: Yegar Tarigan (Teman Dekat) - 083877734668"}

## 2026-10-09 16:15:14.367Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ellois SembiringAktifBebere Karo"}

## 2026-10-09 16:15:19.810Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:15:25.026Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:15:25.136Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:15:30.944Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:15:31.041Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)Gol. Darah: OGol. Darah: AGol. Darah: BGol. Darah: ABTidak TahuStatus Aktif Informasi Tambahan & Kontak DaruratKeluarga (Ortu/Saudara)Teman DekatPasanganLainnyaBatalPerbarui Data"}

## 2026-10-09 16:15:32.015Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:15:43.416Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:15:44.368Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:15:44.465Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:15:45.346Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:15:46.369Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:15:46.479Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:15:46.482Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Ellois Sembiring","length":16,"redacted":false},{"label":"bebere","type":"text","value":"Karo","length":4,"redacted":false},{"label":"asal_kota","type":"text","value":"Tanjung Anom","length":12,"redacted":false},{"label":"address","type":"text","value":"kilo 10 (Asal: Tanjung Anom)","length":28,"redacted":false},{"label":"phone","type":"tel","value":"083183585368","length":12,"redacted":false},{"label":"email","type":"email","value":"ellouisgusmawan@gmail.com","length":25,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"03 Agustus","length":10,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Lainnya","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"@Llouis Milala","length":14,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Yegar Tarigan","length":13,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Teman Dekat","length":11,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"083877734668","length":12,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:15:54.409Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:15:54.505Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:16:04.904Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:16:06.626Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:06.735Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:07.257Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:07.303Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:09.473Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:09.576Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:16:09.578Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Yegar Tarigan","length":13,"redacted":false},{"label":"bebere","type":"text","value":"Sembiring","length":9,"redacted":false},{"label":"asal_kota","type":"text","value":"Regaji","length":6,"redacted":false},{"label":"address","type":"text","value":"Sepinggan (Asal: Regaji)","length":24,"redacted":false},{"label":"phone","type":"tel","value":"083877734668","length":12,"redacted":false},{"label":"email","type":"email","value":"yegargirsang@gmail.com","length":22,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"13 November 2004","length":16,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"B","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"y_gar.tarigan","length":13,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Efraim","length":6,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Lainnya","length":7,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"082210733872","length":12,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:16:12.295Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:16:12.375Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:16:17.489Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"yeg","valueLength":3,"text":""}

## 2026-10-09 16:16:17.489Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"yeg","valueLength":3,"text":""}

## 2026-10-09 16:16:17.551Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Yegar TariganAktifBekerjaBebere Sembiring"}

## 2026-10-09 16:16:18.265Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"yeg","valueLength":3,"text":""}

## 2026-10-09 16:16:18.466Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Daftar Direktori Anggota (1)"}

## 2026-10-09 16:16:23.898Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:16:23.985Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:16:25.123Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:25.199Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:27.417Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:27.466Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:28.888Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:29.849Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:30.569Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:30.696Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:16:30.698Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"JULIUS BASTIANTA GINTING","length":24,"redacted":false},{"label":"bebere","type":"text","value":"Bangun","length":6,"redacted":false},{"label":"asal_kota","type":"text","value":"Balikpapan ","length":11,"redacted":false},{"label":"address","type":"text","value":"Bds 2 (Asal: Balikpapan )","length":25,"redacted":false},{"label":"phone","type":"tel","value":"081346809085","length":12,"redacted":false},{"label":"email","type":"email","value":"juliusginting76@gmail.com","length":25,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"08 juli 2007","length":12,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Kuliah/Pelajar","length":14,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Ig; juliusbastianta","length":19,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Yegar","length":5,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Lainnya","length":7,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"083877734668","length":12,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:16:34.785Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:16:35.596Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:35.680Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:36.312Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:36.372Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:37.113Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:37.224Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:16:37.225Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Aldiano Zio Malvintha Tarigan","length":29,"redacted":false},{"label":"bebere","type":"text","value":"Sebayang","length":8,"redacted":false},{"label":"asal_kota","type":"text","value":"Jakarta","length":7,"redacted":false},{"label":"address","type":"text","value":"Kilometer 4 (Asal: Jakarta)","length":27,"redacted":false},{"label":"phone","type":"tel","value":"081318760909","length":12,"redacted":false},{"label":"email","type":"email","value":"zio.tarigan1233@gmail.com","length":25,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"16 Desember","length":11,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"AB","length":2,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"@alditrgn_","length":10,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Bp Nino Simanjorang","length":19,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"081347493606","length":12,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:16:40.257Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:16:41.457Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:41.535Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:44.129Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:44.175Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:44.825Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:44.936Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:16:44.937Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Ditha Bunga Marsella Br Ginting","length":31,"redacted":false},{"label":"bebere","type":"text","value":"Br Tarigan","length":10,"redacted":false},{"label":"asal_kota","type":"text","value":"Jkt","length":3,"redacted":false},{"label":"address","type":"text","value":"Sepinggan (Asal: Jkt)","length":21,"redacted":false},{"label":"phone","type":"tel","value":"081256799609","length":12,"redacted":false},{"label":"email","type":"email","value":"dithamarsella03@gmail.com","length":25,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"27 Maret 2003","length":13,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"B","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"dithamarsellaa","length":14,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Bunga Marsella","length":14,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Teman Dekat","length":11,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"087898220623","length":12,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:16:47.416Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:16:48.543Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)Gol. Darah: OGol. Darah: AGol. Darah: BGol. Darah: ABTidak TahuStatus Aktif Informasi Tambahan & Kontak DaruratKeluarga (Ortu/Saudara)Teman DekatPasanganLainnyaBatalPerbarui Data"}

## 2026-10-09 16:16:48.825Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:48.911Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:54.756Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:16:54.840Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:17:04.713Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:17:07.981Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:08.080Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:10.010Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:10.061Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:10.729Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:10.832Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:17:10.834Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"ZIEZEFANYA NABORA BR PERANGIN-ANGIN","length":35,"redacted":false},{"label":"bebere","type":"text","value":"Sembiring Pelawi","length":16,"redacted":false},{"label":"asal_kota","type":"text","value":"Desa Ajijahe","length":12,"redacted":false},{"label":"address","type":"text","value":"Kilo 15","length":7,"redacted":false},{"label":"phone","type":"tel","value":"081396340246","length":12,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"01 Maret 2006","length":13,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Kuliah/Pelajar","length":14,"redacted":false},{"label":"gol-dar","type":"select-one","value":"B","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Ziezefanya Nabora","length":17,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"Jhon Freddy","length":11,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"081362138833","length":12,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:17:19.098Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:17:20.355Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:20.435Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:21.246Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:21.297Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:22.048Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:22.649Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:22.700Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:23.296Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:23.432Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:17:23.434Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Yogi Pranata Kemit","length":18,"redacted":false},{"label":"bebere","type":"text","value":"Tarigan","length":7,"redacted":false},{"label":"asal_kota","type":"text","value":"Naman Teran","length":11,"redacted":false},{"label":"address","type":"text","value":"Jalan Markoni","length":13,"redacted":false},{"label":"phone","type":"tel","value":"85890224942","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"15 Januari 2001","length":15,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"yogikemittt","length":11,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:17:30.928Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:17:31.962Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:32.047Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:33.176Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:33.219Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:34.009Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:34.120Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:17:34.121Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Zeremia Bangun","length":14,"redacted":false},{"label":"bebere","type":"text","value":"Barus","length":5,"redacted":false},{"label":"asal_kota","type":"text","value":"Barusjahe","length":9,"redacted":false},{"label":"address","type":"text","value":"Perumahan pondok mentari(RT 94 BLOKE)","length":37,"redacted":false},{"label":"phone","type":"tel","value":"895391520474","length":12,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"01 Januari 2005","length":15,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"ON IG zeremia_420","length":17,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:17:37.624Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:17:38.561Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:38.631Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:39.744Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:39.787Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:40.665Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:40.816Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:17:40.818Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Putra Pinem","length":11,"redacted":false},{"label":"bebere","type":"text","value":"Tarigan","length":7,"redacted":false},{"label":"asal_kota","type":"text","value":"Kuta kendit","length":11,"redacted":false},{"label":"address","type":"text","value":"jl.suekarno hatta km.13 balikpapan utara","length":40,"redacted":false},{"label":"phone","type":"tel","value":"895379876313","length":12,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"10 Januari 2000","length":15,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Pinem Photowotks","length":16,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:17:50.443Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:17:51.266Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:51.359Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:52.209Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:52.258Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:53.017Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:17:53.120Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:17:53.121Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Adinda Exsodina Br Ginting","length":26,"redacted":false},{"label":"bebere","type":"text","value":"Karo","length":4,"redacted":false},{"label":"asal_kota","type":"text","value":"Dusun 1 Desa Penungkiren","length":24,"redacted":false},{"label":"address","type":"text","value":"D'carjoe Cluster B1","length":19,"redacted":false},{"label":"phone","type":"tel","value":"81360306196","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"01 July 2005","length":12,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Kuliah/Pelajar","length":14,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"adinda_exsodiina","length":16,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:18:03.904Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:18:04.730Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:04.824Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:05.345Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:05.395Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:06.120Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:06.215Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:18:06.216Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Rocki P Sembiring","length":17,"redacted":false},{"label":"bebere","type":"text","value":"Karo","length":4,"redacted":false},{"label":"asal_kota","type":"text","value":"Barus jahe","length":10,"redacted":false},{"label":"address","type":"text","value":"Prum PGRI blok F1 no 03","length":23,"redacted":false},{"label":"phone","type":"tel","value":"81545705318","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"18 Januari 1998","length":15,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Facebook","length":8,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:18:14.786Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:18:15.986Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:16.082Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:17.185Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:17.229Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:18.122Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:18.239Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:18:18.241Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Perwira tarigan","length":15,"redacted":false},{"label":"bebere","type":"text","value":"Ginting","length":7,"redacted":false},{"label":"asal_kota","type":"text","value":"Lingga","length":6,"redacted":false},{"label":"address","type":"text","value":"Karang jawa rt 10","length":17,"redacted":false},{"label":"phone","type":"tel","value":"85345481955","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"28 Januari 1994","length":15,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"B","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Perwira tarigan","length":15,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:18:23.249Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:18:24.058Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:24.135Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:24.753Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:24.797Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:25.442Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:25.528Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:18:25.530Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Suci yosephin tarigan","length":21,"redacted":false},{"label":"bebere","type":"text","value":"","length":0,"redacted":false},{"label":"asal_kota","type":"text","value":"Tiga lingga","length":11,"redacted":false},{"label":"address","type":"text","value":"KM 15","length":5,"redacted":false},{"label":"phone","type":"tel","value":"0813 9633 0320","length":14,"redacted":false},{"label":"email","type":"email","value":"sucitarigan473@gmail.com","length":24,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"22 Januari 2005","length":15,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Kuliah/Pelajar","length":14,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"","length":0,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:18:28.296Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:18:29.146Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:29.256Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:30.105Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:30.153Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:30.905Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:31.016Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:18:31.018Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Vinny Yana Laurenta Br Purba","length":28,"redacted":false},{"label":"bebere","type":"text","value":"Bangun","length":6,"redacted":false},{"label":"asal_kota","type":"text","value":"Medan","length":5,"redacted":false},{"label":"address","type":"text","value":"Jl. Jenderal Sudirman, RT.21/RW.NO. 48, Damai, Kec. Balikpapan Kota, Kota Balikpapan, Kalimantan Timur 76114","length":108,"redacted":false},{"label":"phone","type":"tel","value":"82267306706","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"06 February 1999","length":16,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"B","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Vinny Yana Laurenta Br Purba","length":28,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:18:34.216Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:18:35.113Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:35.207Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:36.343Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:36.402Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:37.433Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:37.543Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:18:37.545Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Boni Stefen Surbakti","length":20,"redacted":false},{"label":"bebere","type":"text","value":"Perangin-Angin","length":14,"redacted":false},{"label":"asal_kota","type":"text","value":"Desa Surbakti, kec. Simpang Empat, Kab. Karo","length":44,"redacted":false},{"label":"address","type":"text","value":"Jl. Timor no. 74, Gn. Dubbs, Perum Pertamina","length":44,"redacted":false},{"label":"phone","type":"tel","value":"82166070897","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"12 February 1997","length":16,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"A","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"boni_stefen (IG)","length":16,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:18:45.656Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:18:46.369Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:46.463Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:48.080Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:48.123Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:48.777Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:48.872Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:18:48.873Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Sahrina Sembiring","length":17,"redacted":false},{"label":"bebere","type":"text","value":"Tarigan","length":7,"redacted":false},{"label":"asal_kota","type":"text","value":"Salabulan","length":9,"redacted":false},{"label":"address","type":"text","value":"Perumahan bds 2 blok f6 no 56","length":29,"redacted":false},{"label":"phone","type":"tel","value":"81360696416","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"19 February 2002","length":16,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Ig: Sahrina02","length":13,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:18:57.016Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:18:57.873Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:57.975Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:58.801Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:58.846Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:59.450Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Kuliah/Pelajar","valueLength":14,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:18:59.543Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:18:59.545Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Tesalonika Br Perangin-angin","length":28,"redacted":false},{"label":"bebere","type":"text","value":"","length":0,"redacted":false},{"label":"asal_kota","type":"text","value":"Barus jahe","length":10,"redacted":false},{"label":"address","type":"text","value":"Jl. Giri Rejo KM. 15","length":20,"redacted":false},{"label":"phone","type":"tel","value":"85765768095","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"23 February 2004","length":16,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Kuliah/Pelajar","length":14,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"tesalonikaperanginnangin0099@gmail.com","length":38,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:19:07.552Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:19:08.418Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:08.511Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:09.824Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:09.861Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:10.649Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:10.743Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:19:10.745Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Suryadi Tarigan","length":15,"redacted":false},{"label":"bebere","type":"text","value":"","length":0,"redacted":false},{"label":"asal_kota","type":"text","value":"Medan","length":5,"redacted":false},{"label":"address","type":"text","value":"Jln. Tepo KM.10","length":15,"redacted":false},{"label":"phone","type":"tel","value":"0822-5133-1884","length":14,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"03 March 2001","length":13,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"suryadima3n46@gmail.com","length":23,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:19:17.105Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:19:17.962Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:18.040Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:21.755Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:25.293Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:19:26.369Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:22:14.359Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:22:16.959Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Lainnya","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:22:17.905Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:22:17.960Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:22:20.706Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"status_aktivitas","type":null,"id":null,"placeholder":null,"label":"status_aktivitas","value":"Bekerja","valueLength":7,"text":"💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)"}

## 2026-10-09 16:22:20.800Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Perbarui Data"}

## 2026-10-09 16:22:20.802Z submit
- action: http://localhost:3000/ngurus-aron/anggota
- fields: [{"label":"name","type":"text","value":"Raju ekail sitepu","length":17,"redacted":false},{"label":"bebere","type":"text","value":"Bre Ginting","length":11,"redacted":false},{"label":"asal_kota","type":"text","value":"Ajinembah","length":9,"redacted":false},{"label":"address","type":"text","value":"Perusda berlian 6","length":17,"redacted":false},{"label":"phone","type":"tel","value":"81396539303","length":11,"redacted":false},{"label":"email","type":"email","value":"","length":0,"redacted":false},{"label":"tanggal_lahir","type":"text","value":"04 March 1999","length":13,"redacted":false},{"label":"status_aktivitas","type":"select-one","value":"Bekerja","length":7,"redacted":false},{"label":"gol-dar","type":"select-one","value":"O","length":1,"redacted":false},{"label":"status_aktif","type":"checkbox","value":"on","length":2,"redacted":false},{"label":"sosmed","type":"text","value":"Raju ekail","length":10,"redacted":false},{"label":"kontak_darurat_nama","type":"text","value":"-","length":1,"redacted":false},{"label":"kontak_darurat_hubungan","type":"select-one","value":"Keluarga","length":8,"redacted":false},{"label":"kontak_darurat_no_hp","type":"tel","value":"-","length":1,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:22:28.153Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 16:22:28.155Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 16:27:57.878Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Laporan Umum"}

## 2026-10-09 16:27:58.142Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Laporan Umum"}

## 2026-10-09 16:28:02.623Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"INFOIuran Kas 05 Oktober 2026Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan dan yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya."}

## 2026-10-09 16:28:11.264Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Hasil Keputusan RapatKetentuan & Kebijakan KasBerdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan dan yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya.💡 Catatan Penting:Pembayaran iuran kas dapat disetorkan langsung kepada bendahara atau melalui rekening resmi komunitas di bawah ini."}

## 2026-10-09 16:28:14.310Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Riwayat Keuangan Tercatat (1)INFOIuran Kas 05 Oktober 2026Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, iuran kas wajib anggota yang bekerja ditetapkan sebesar Rp 20.000/bulan dan yang kuliah ditetapkan sebesar Rp 10.000/bulan. Guna mendukung kegiatan sosial dan budaya."}

## 2026-10-09 16:28:15.209Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:28:15.302Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"masuk","valueLength":5,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:28:15.978Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:28:15.982Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:28:16.552Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":"type","type":null,"id":null,"placeholder":null,"label":"type","value":"info","valueLength":4,"text":"Uang Masuk (Pemasukan / Iuran)Uang Keluar (Pengeluaran)Catatan / Pengumuman Rapat"}

## 2026-10-09 16:28:16.553Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:28:16.646Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"","valueLength":0,"text":""}

## 2026-10-09 16:29:40.223Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, bagi anggota yang belum melunasi uang kas dari tahun 2025 ","valueLength":120,"text":""}

## 2026-10-09 16:29:40.223Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, bagi anggota yang belum melunasi uang kas dari tahun 2025 ","valueLength":120,"text":""}

## 2026-10-09 16:30:28.612Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, bagi anggota yang belum melunasi uang kas dari tahun 2025 ","valueLength":120,"text":""}

## 2026-10-09 16:30:29.156Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, bagi anggota yang belum melunasi uang kas dari tahun 2025 ","valueLength":120,"text":""}

## 2026-10-09 16:30:31.027Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, bagi anggota yang belum melunasi uang kas dari tahun 2025 ","valueLength":120,"text":""}

## 2026-10-09 16:30:31.606Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"title","type":"text","id":null,"placeholder":"Contoh: Pembayaran Iuran Kas Bulan Juli","label":"title","value":"Berdasarkan hasil rapat pengurus ARM tanggal 04 Oktober 2026, bagi anggota yang belum melunasi uang kas dari tahun 2025 ","valueLength":120,"text":""}

## 2026-10-09 16:32:21.831Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Export Excel"}

## 2026-10-09 16:32:21.862Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:33:17.855Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Anggota Aktif198 Orang Total TerkumpulRp 20.000 Total TunggakanRp 2.100.000 Export ExcelEllois SembiringLainnya • Gabung: Sep 2026MenunggakNominal/BlnRp 10.000TunggakanRp 20.000 Histori WAEllois SembiringLainnya • 083183585368 • Gabung September 2026Per BulanRp 10.000Sudah BayarRp 0TunggakanRp 20.000Yegar TariganBekerja • Gabung: Okt 2026LunasNominal/BlnRp 20.000TunggakanRp 0 Histori WAYegar TariganBekerja • 083877734668 • Gabung Oktober 2026Per BulanRp 20.000Sudah BayarRp 20.000TunggakanRp 0JULIUS BASTIANTA GINTINGKuliah/Pelajar • Gabung: Okt 2026MenunggakNominal/BlnRp 10.000TunggakanRp 10.000 Histori WAJULIUS BASTIANTA GINTINGKuliah/Pelajar • 081346809085 • Gabung Oktober 2026Per BulanRp 10.000Sudah BayarRp 0TunggakanRp 10.000Aldiano Zio Malvintha TariganBekerja • Gabung: Okt 2026MenunggakNominal/BlnRp 20.000TunggakanRp 20.000 Histori WAAldiano Zio Malvintha TariganBekerja • 081318760909 • Gabung Oktober 2026Per BulanRp 20.000Sudah BayarRp 0TunggakanRp 20.000Ditha Bunga Marsella Br GintingBekerja • Gabung: Okt 2026MenunggakNominal/BlnRp 20.000TunggakanRp 20.000 Histori WADitha Bunga Marsella Br GintingBekerja • 081256799609 • Gabung Oktober 2026Per BulanRp 20.000Sudah BayarRp 0TunggakanRp 20.000Feby Glory Nasaretta br Ginting • Gabung: Okt 2026MenunggakNominal/BlnRp 10.000TunggakanRp 10.000 Histori WAFeby Glory Nasaretta br Ginting • 82214229162 • Gabung Oktober 2026Per BulanRp 10.000Sudah BayarRp 0TunggakanRp 10.000Yogi Pranata KemitBekerja • Gabung: Okt 2026MenunggakNominal/BlnRp 20.000TunggakanRp 20.000 Histori WAYogi Pranata KemitBekerja • 85890224942 • Gabung Oktober 2026Per BulanRp 20.000Sudah BayarRp 0TunggakanRp 20.000Putra PinemBekerja • Gabung: Okt 2026MenunggakNominal/BlnRp 20.000TunggakanRp 20.000 Histori WAPutra PinemBekerja • 895379876313 • Gabung Oktober 2026Per BulanRp 20.000Sudah BayarRp 0TunggakanRp 20.000joel resmana sembiring • Gabung: Okt 2026MenunggakNominal/BlnRp 10.000TunggakanRp 10.000 Histori WAjoel resmana sembiring • 0821 4465 6234 • G..."}

## 2026-10-09 16:33:18.056Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:33:18.150Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:33:25.921Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"hedi","valueLength":4,"text":""}

## 2026-10-09 16:33:25.921Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"hedi","valueLength":4,"text":""}

## 2026-10-09 16:33:26.133Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"198 Orang"}

## 2026-10-09 16:33:26.590Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Anggota Aktif198 Orang"}

## 2026-10-09 16:33:27.511Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 16:33:27.513Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 16:33:32.928Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:33:32.998Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, telepon, status...","label":"Cari nama, telepon, status...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:33:46.150Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 16:33:46.152Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 16:33:54.007Z click
- element: {"tag":"h5","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ellois Sembiring"}

## 2026-10-09 16:33:54.613Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ellois SembiringLainnya • 083183585368 • Gabung September 2026"}

## 2026-10-09 16:33:58.574Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Kuliah/Pelajar • 081346809085 • Gabung Oktober 2026"}

## 2026-10-09 16:34:02.406Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:34:04.531Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:34:04.640Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:34:06.646Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:34:06.758Z click
- element: {"tag":"label","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Deskripsi / Catatan (Opsional)"}

## 2026-10-09 16:34:09.352Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"","valueLength":0,"text":""}

## 2026-10-09 16:34:09.469Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"","valueLength":0,"text":""}

## 2026-10-09 16:34:25.086Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:35:56.369Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:36:26.550Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:36:26.574Z load
- url: http://localhost:3000/ngurus-aron/keuangan

## 2026-10-09 16:36:26.756Z network.error
- method: GET
- url: https://zlbiezqiicgtcejdbdpm.supabase.co/rest/v1/financial_reports?select=*&order=created_at.desc
- message: Failed to fetch
- durationMs: 17

## 2026-10-09 16:36:26.759Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/keuangan:497:23)
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20313:23
        at http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:20352:12
        at async fetchWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:466:13)
        at async executeWithRetry (http://localhost:3000/node_modules/.vite/deps/@supabase_supabase-js.js?v=aac522ed:669:21)
        at async fetchKeuangan (http://localhost:3000/src/pages/KeuanganPage.jsx:19:29)

## 2026-10-09 16:36:34.670Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:36:36.664Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:36:36.752Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:36:44.044Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2025-01","valueLength":7,"text":""}

## 2026-10-09 16:36:45.837Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2025-01","valueLength":7,"text":""}

## 2026-10-09 16:36:46.681Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2025-01","valueLength":7,"text":""}

## 2026-10-09 16:36:47.844Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2025-01","valueLength":7,"text":""}

## 2026-10-09 16:36:49.717Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2025-01","valueLength":7,"text":""}

## 2026-10-09 16:36:53.677Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2025-01","valueLength":7,"text":""}

## 2026-10-09 16:36:56.369Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:37:01.536Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-03","valueLength":7,"text":""}

## 2026-10-09 16:37:03.408Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-03","valueLength":7,"text":""}

## 2026-10-09 16:37:03.409Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"20000","valueLength":5,"text":""}

## 2026-10-09 16:37:03.733Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"20000","valueLength":5,"text":""}

## 2026-10-09 16:37:06.779Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:37:10.950Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"300000","valueLength":6,"text":""}

## 2026-10-09 16:37:10.950Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"300000","valueLength":6,"text":""}

## 2026-10-09 16:37:10.951Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"","valueLength":0,"text":""}

## 2026-10-09 16:37:11.029Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"","valueLength":0,"text":""}

## 2026-10-09 16:37:16.619Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:37:25.063Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"uang kas 2025","valueLength":13,"text":""}

## 2026-10-09 16:37:25.064Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"uang kas 2025","valueLength":13,"text":""}

## 2026-10-09 16:37:25.150Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Simpan Catatan Manual"}

## 2026-10-09 16:37:25.152Z submit
- action: http://localhost:3000/ngurus-aron/keuangan
- fields: [{"label":"month_year","type":"month","value":"2026-03","length":7,"redacted":false},{"label":"amount","type":"number","value":"300000","length":6,"redacted":false},{"label":"notes","type":"text","value":"uang kas 2025","length":13,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-09 16:37:26.721Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:37:32.606Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:37:36.639Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:37:39.627Z load
- url: http://localhost:3000/keuangan

## 2026-10-09 16:39:33.901Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Anggota"}

## 2026-10-09 16:39:33.904Z navigate
- url: http://localhost:3000/ngurus-aron/anggota
- via: pushState

## 2026-10-09 16:39:41.286Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":" Tambah Anggota Manual💼 Bekerja (Kas: Rp 20.000)🎓 Kuliah / Pelajar (Kas: Rp 10.000)📌 Lainnya (Kas: Rp 10.000)Gol. Darah: OGol. Darah: AGol. Darah: BGol. Darah: ABTidak TahuStatus Aktif Informasi Tambahan & Kontak DaruratKeluarga (Ortu/Saudara)Teman DekatPasanganLainnyaSimpan Anggota Baru"}

## 2026-10-09 16:41:27.926Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 16:41:27.928Z navigate
- url: http://localhost:3000/keuangan
- via: replaceState

## 2026-10-09 16:41:29.276Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 16:41:29.277Z navigate
- url: http://localhost:3000/keuangan
- via: replaceState

## 2026-10-09 16:41:29.613Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Donasi"}

## 2026-10-09 16:41:29.614Z navigate
- url: http://localhost:3000/donasi
- via: pushState

## 2026-10-09 16:41:30.381Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Galeri"}

## 2026-10-09 16:41:30.382Z navigate
- url: http://localhost:3000/galeri
- via: pushState

## 2026-10-09 16:41:30.981Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Berita"}

## 2026-10-09 16:41:30.981Z navigate
- url: http://localhost:3000/berita
- via: pushState

## 2026-10-09 16:41:31.636Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Galeri"}

## 2026-10-09 16:41:31.636Z navigate
- url: http://localhost:3000/galeri
- via: pushState

## 2026-10-09 16:41:51.556Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-10-09 16:41:51.557Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-10-09 16:42:04.285Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tentang Kami"}

## 2026-10-09 16:42:04.286Z navigate
- url: http://localhost:3000/tentang-kami
- via: pushState

## 2026-10-09 16:42:20.158Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Beranda"}

## 2026-10-09 16:42:20.159Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-10-09 16:43:40.207Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Keuangan"}

## 2026-10-09 16:43:40.209Z navigate
- url: http://localhost:3000/ngurus-aron/keuangan
- via: pushState

## 2026-10-09 16:43:53.871Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:43:53.963Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"","valueLength":0,"text":""}

## 2026-10-09 16:43:58.623Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"zi","valueLength":2,"text":""}

## 2026-10-09 16:43:58.623Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Cari nama, nomor HP, atau status (kerja/kuliah)...","label":"Cari nama, nomor HP, atau status (kerja/kuliah)...","value":"zi","valueLength":2,"text":""}

## 2026-10-09 16:43:58.717Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:44:01.406Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"","valueLength":0,"text":""}

## 2026-10-09 16:44:01.525Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"","valueLength":0,"text":""}

## 2026-10-09 16:44:03.925Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"uang kas 2025","valueLength":13,"text":""}

## 2026-10-09 16:44:07.496Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"notes","type":"text","id":null,"placeholder":"Cth: Bayar tunai tahun 2023, dll","label":"notes","value":"uang kas 2025","valueLength":13,"text":""}

## 2026-10-09 16:44:07.498Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"10000","valueLength":5,"text":""}

## 2026-10-09 16:44:09.941Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"10000","valueLength":5,"text":""}

## 2026-10-09 16:44:10.654Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"10000","valueLength":5,"text":""}

## 2026-10-09 16:44:13.366Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"100000","valueLength":6,"text":""}

## 2026-10-09 16:44:13.366Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"100000","valueLength":6,"text":""}

## 2026-10-09 16:44:13.368Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:44:13.453Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:44:14.709Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:44:28.510Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"month_year","type":"month","id":null,"placeholder":null,"label":"month_year","value":"2026-10","valueLength":7,"text":""}

## 2026-10-09 16:44:28.511Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"100000","valueLength":6,"text":""}

## 2026-10-09 16:44:28.613Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"100000","valueLength":6,"text":""}

## 2026-10-09 16:44:30.367Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":"amount","type":"number","id":null,"placeholder":null,"label":"amount","value":"100000","valueLength":6,"text":""}

## 2026-10-09 16:44:30.437Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:44:36.133Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-10-09 16:47:15.605Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

