import Section from "./Section";

const quotes = [
  { n: "Owner Online Shop", q: "Order saya jadi rapi, botnya enak dipakai dan hemat waktu banget." },
  { n: "Admin Komunitas", q: "Anti-spam & welcome message jalan mulus sama juga group jadi tertib." },
  { n: "Freelancer", q: "Request fitur dilayanin, komunikasinya cepat serta hasilnya bagus." }
];

export default function Testimonials() {
  return (
    <Section
      id="testimoni"
      eyebrow="Testimoni"
      title="Kesan yang dicari: rapi, cepat, dan bisa diandalkan"
      desc="Targetnya simpel: bot kamu harus bantu kerjaan jadi lebih gampang."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {quotes.map((x) => (
          <div key={x.n} className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-7">
            <div className="text-sm text-zinc-300">“{x.q}”</div>
            <div className="mt-4 text-sm font-semibold text-zinc-100">{x.n}</div>
            <div className="mt-1 text-xs text-zinc-500">Promo 2026 • Bot Telegram</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
