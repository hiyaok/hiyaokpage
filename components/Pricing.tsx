import Section from "./Section";

export default function Pricing() {
  return (
    <Section
      id="harga"
      eyebrow="Harga Friendly"
      title="Mulai start 50RB-an — Promo 2026 masih gas"
      desc="Yang simple mulai 50RB-an. Kalau butuh advanced, kita hitung fair sesuai kompleksitas."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-7">
          <div className="text-sm font-semibold text-zinc-100">Starter</div>
          <div className="mt-2 text-3xl font-semibold text-zinc-50">50RB-an</div>
          <p className="mt-2 text-sm text-zinc-300">
            Buat yang pengen cepat jadi: auto reply, menu, basic flow.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            <li>• Command dasar + auto reply</li>
            <li>• Menu button sederhana</li>
            <li>• Setup cepat</li>
          </ul>
          <div className="mt-6 rounded-2xl border border-zinc-900 bg-black/30 p-4 text-xs text-zinc-400">
            *Harga bisa menyesuaikan kebutuhan fitur.
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-b from-white/10 to-black p-7 shadow-[0_0_120px_rgba(255,255,255,0.08)]">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-black">
            Best Deal 2026
          </div>
          <div className="mt-4 text-sm font-semibold text-zinc-100">Business</div>
          <div className="mt-2 text-3xl font-semibold text-zinc-50">Custom</div>
          <p className="mt-2 text-sm text-zinc-300">
            Cocok buat order/CS/data/notifikasi + integrasi ringan.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            <li>• Form order / input data</li>
            <li>• Integrasi Sheet/API (opsional)</li>
            <li>• Flow lebih rapi & scalable</li>
          </ul>
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-black/30 p-4 text-xs text-zinc-300">
            Konsultasi dulu biar fiturnya tepat sasaran ✅
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-7">
          <div className="text-sm font-semibold text-zinc-100">Advanced</div>
          <div className="mt-2 text-3xl font-semibold text-zinc-50">By Request</div>
          <p className="mt-2 text-sm text-zinc-300">
            Payment, role admin, database, webhook, anti-spam advanced.
          </p>
          <ul className="mt-5 space-y-2 text-sm text-zinc-300">
            <li>• Multi-step state</li>
            <li>• Moderation + logs</li>
            <li>• Integrasi custom</li>
          </ul>
          <div className="mt-6 rounded-2xl border border-zinc-900 bg-black/30 p-4 text-xs text-zinc-400">
            Cocok buat yang serius otomasi.
          </div>
        </div>
      </div>
    </Section>
  );
}
