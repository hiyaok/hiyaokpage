import Section from "./Section";

const steps = [
  { t: "1) Konsultasi", d: "Kamu jelasin kebutuhan + flow & Kita rapihin requirement biar jelas." },
  { t: "2) Estimasi", d: "Harga & timeline transparan & Mulai 50RB-an untuk kebutuhan simple." },
  { t: "3) Develop", d: "Kita build rapi + update progress & Revisi minor sesuai kesepakatan." },
  { t: "4) Deploy", d: "Bot live & Bisa bantu setup hosting / jalanin di server kamu." }
];

export default function Process() {
  return (
    <Section
      id="alur"
      eyebrow="Alur Kerja"
      title="Ga pake ribet — dari ide sampai bot live"
      desc="Kita bikin prosesnya gampang: jelas, cepat, dan enak komunikasinya."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {steps.map((s) => (
          <div key={s.t} className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6">
            <div className="text-base font-semibold text-zinc-100">{s.t}</div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
