import { TELEGRAM_USERNAME } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900/70 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-zinc-200 font-semibold">BotKilat</div>
            <div className="mt-1 text-xs">
              Jasa pembuatan bot Telegram profesional • Promo 2026 • Start 50RB-an
            </div>
          </div>
          <div className="text-xs">
            by <span className="text-zinc-200 font-semibold">@{TELEGRAM_USERNAME}</span> on Telegram
          </div>
        </div>

        <div className="mt-6 text-xs text-zinc-500">
          Keywords: jasa bot telegram, pembuatan bot telegram, bot telegram murah, bot telegram custom,
          bot telegram bisnis, bot telegram personal, promo bot telegram 2026.
        </div>
      </div>
    </footer>
  );
}
