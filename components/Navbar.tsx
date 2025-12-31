"use client";

import { motion } from "framer-motion";
import { SITE_URL, TELEGRAM_USERNAME, BRAND } from "@/lib/constants";
import { telegramOrderLink } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const orderUrl = telegramOrderLink({
    username: TELEGRAM_USERNAME,
    siteUrl: SITE_URL,
    brand: BRAND
  });

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-zinc-900/70 bg-black/45 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-zinc-800 bg-zinc-950/60">
            <span className="h-2 w-2 rounded-full bg-white/80" />
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-zinc-50">{BRAND}</div>
            <div className="text-[11px] text-zinc-400">Promo 2026 • Jasa Bot Telegram</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a className="hover:text-zinc-50" href="#fitur">Fitur</a>
          <a className="hover:text-zinc-50" href="#harga">Harga</a>
          <a className="hover:text-zinc-50" href="#alur">Alur</a>
          <a className="hover:text-zinc-50" href="#faq">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={orderUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-zinc-100 px-4 py-2 text-sm font-semibold text-black hover:bg-white"
          >
            Order via Telegram
          </a>
        </div>
      </div>
    </motion.header>
  );
}
