"use client";

import Section from "./Section";
import { useEffect, useState } from "react";
import { seo } from "@/lib/seo";

const faqs = [
  {
    q: "Beneran mulai 50RB-an?",
    a: "Iya, untuk kebutuhan simple (auto reply, menu dasar). Kalau kompleks, harga menyesuaikan fitur & integrasi."
  },
  {
    q: "Bisa request fitur apa pun?",
    a: "Bisa banget. Kamu jelasin flow, nanti kita bantu rapihin requirement dan bikinin solusi yang efisien."
  },
  {
    q: "Botnya bisa untuk bisnis dan personal?",
    a: "Bisa banget. Dari CS/Order sampai reminder pribadi dan automation harian."
  },
  {
    q: "Cara order gimana?",
    a: "Klik tombol order, otomatis kebuka chat Telegram dengan format pesan. Tinggal isi kebutuhan kamu."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    // JSON-LD FAQPage untuk SEO
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a }
      })),
      url: seo.siteUrl
    });
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Pertanyaan yang sering ditanya"
      desc="Kalau masih ada yang mau ditanyain, langsung chat aja ya ke telegram @hiyaok"
    >
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <button
            key={f.q}
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6 text-left"
          >
            <div className="flex items-center justify-between gap-6">
              <div className="text-sm font-semibold text-zinc-100">{f.q}</div>
              <div className="text-zinc-400">{open === i ? "—" : "+"}</div>
            </div>
            {open === i && <p className="mt-3 text-sm leading-relaxed text-zinc-300">{f.a}</p>}
          </button>
        ))}
      </div>
    </Section>
  );
}
