import Section from "./Section";
import { BRAND, SITE_URL, TELEGRAM_USERNAME } from "@/lib/constants";
import { telegramOrderLink } from "@/lib/utils";

export default function CTA() {
  const orderUrl = telegramOrderLink({
    username: TELEGRAM_USERNAME,
    siteUrl: SITE_URL,
    brand: BRAND
  });

  return (
    <Section
      id="order"
      eyebrow="Gaskeun"
      title="Siap bikin bot Telegram yang bikin kerjaan kamu auto?"
      desc="Promo 2026 masih jalan, hanya Mulai 50RB-an, Klik tombol dan chat otomatis sudah disiapin"
    >
      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-white/10 to-black p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xl font-semibold text-zinc-50">
              Order Bot Telegram Sekarang
            </div>
            <p className="mt-2 max-w-2xl text-sm text-zinc-300">
              Buat bisnis/personal/komunitas, Request fitur bebas dan Kita rapihin flow biar kepake.
            </p>
          </div>
          <a
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-zinc-100 px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white"
          >
            Hubungi @hiyaok (Telegram)
          </a>
        </div>

        <div className="mt-6 text-xs text-zinc-400">
          tips: tulis kebutuhan singkat (flow + fitur + deadline) Biar estimasi makin cepat.
        </div>
      </div>
    </Section>
  );
}
