"use client";

import { motion } from "framer-motion";
import { BRAND, SITE_URL, TELEGRAM_USERNAME } from "@/lib/constants";
import { telegramOrderLink } from "@/lib/utils";

export default function Hero() {
  const orderUrl = telegramOrderLink({
    username: TELEGRAM_USERNAME,
    siteUrl: SITE_URL,
    brand: BRAND
  });

  return (
    <section id="top" className="relative mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-xs text-zinc-300"
          >
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-zinc-100">
              PROMO 2026
            </span>
            <span>Start 50RB-an • Cepat • Rapi • Bisa request fitur</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="mt-6 text-4xl font-semibold leading-tight text-zinc-50 sm:text-5xl"
          >
            Bikin <span className="text-zinc-200">Bot Telegram</span> yang
            bikin bisnis kamu auto jalan — mulainya <span className="text-zinc-100">50RB-an</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.12 }}
            className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300"
          >
            Mau bot buat <b>order</b>, <b>CS</b>, <b>admin group</b>, <b>reminder</b>, atau
            integrasi <b>Google Sheet/API</b>? Gas.
            Kita bikin yang keliatan <b>pro</b>, flow-nya jelas, dan enak dipakai.
            Request fitur apapun juga bisa! 😄
          </motion.p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={orderUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-zinc-100 px-6 py-3 text-center text-sm font-semibold text-black hover:bg-white"
            >
              Order Sekarang
            </a>

            <a
              href="#harga"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/40 px-6 py-3 text-center text-sm font-semibold text-zinc-100 hover:bg-zinc-950/70"
            >
              Cek Harga & Paket
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-zinc-400 sm:max-w-xl">
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
              <div className="text-zinc-100 font-semibold">Cepat</div>
              <div className="mt-1">Update Tercepat</div>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
              <div className="text-zinc-100 font-semibold">Profesional</div>
              <div className="mt-1">Rapi & enak dipakai</div>
            </div>
            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-4">
              <div className="text-zinc-100 font-semibold">Custom</div>
              <div className="mt-1">Request fitur bebas</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="rounded-3xl border border-zinc-900 bg-gradient-to-b from-zinc-950/80 to-black p-6 shadow-[0_0_120px_rgba(255,255,255,0.06)]">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-zinc-100">Preview Bot</div>
              <div className="text-xs text-zinc-400">Smooth • Clean • Pro</div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-zinc-900 bg-black/40 p-4">
                <div className="text-xs text-zinc-400">Mode: Auto Order</div>
                <div className="mt-2 text-sm text-zinc-100">
                  user isi data → tersimpan → admin dapat notif. Simple tapi “wah”.
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-900 bg-black/40 p-4">
                <div className="text-xs text-zinc-400">Mode: Admin Group</div>
                <div className="mt-2 text-sm text-zinc-100">
                  anti spam, rules, verifikasi member, auto kick + logs.
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-900 bg-black/40 p-4">
                <div className="text-xs text-zinc-400">Mode: Integrasi</div>
                <div className="mt-2 text-sm text-zinc-100">
                  connect API / database / payment / webhook.
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-zinc-900 bg-zinc-950/60 p-4">
              <div className="text-xs text-zinc-400">Contact</div>
              <div className="mt-1 text-sm text-zinc-100">
                Telegram: <span className="font-semibold">@{TELEGRAM_USERNAME}</span>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
