import Section from "./Section";

const features = [
  "Auto reply + menu button (inline keyboard)",
  "Form order + simpan data (Google Sheet / database)",
  "Admin commands + role/akses",
  "Anti-spam / filter kata / moderation group",
  "Reminder + scheduler + broadcast (opsional)",
  "Integrasi API, webhook, payment (opsional)",
  "Struktur rapi, siap scaling",
  "Custom fitur sesuai request (bebas)"
];

export default function Features() {
  return (
    <Section
      id="fitur"
      eyebrow="Fitur Favorit"
      title="Fitur lengkap + bisa custom — yang penting kepake"
      desc="Bukan cuma ‘jadi bot’, tapi bot yang bantu kamu kerja lebih cepat."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6">
          <div className="text-sm font-semibold text-zinc-100">Yang sering diminta</div>
          <p className="mt-2 text-sm text-zinc-300">
            Dari yang simple sampai advanced. Kita rapihin alur biar botnya nggak bikin bingung.
          </p>
          <div className="mt-5 grid gap-2">
            {features.map((f) => (
              <div key={f} className="flex gap-3 rounded-2xl border border-zinc-900 bg-black/30 p-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                <div className="text-sm text-zinc-200">{f}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-900 bg-gradient-to-b from-zinc-950/60 to-black p-6">
          <div className="text-sm font-semibold text-zinc-100">Biar kelihatan “pro”</div>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            Copywriting bot rapi, tombol jelas, flow step-by-step, error handling manusiawi,
            dan output yang “bersih”. Ini yang bikin user betah.
          </p>

          <div className="mt-6 rounded-2xl border border-zinc-900 bg-black/40 p-5">
            <div className="text-xs text-zinc-400">Plusnya</div>
            <div className="mt-1 text-base font-semibold text-zinc-100">
              Bisa bantu rancang flow (biar gak salah bikin fitur)
            </div>
            <p className="mt-2 text-sm text-zinc-300">
              Jadi hasil akhirnya bukan sekadar bot jalan—tapi bot yang dipakai beneran.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
