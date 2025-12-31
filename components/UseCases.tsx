import Section from "./Section";

const items = [
  { t: "Bisnis", d: "Order otomatis, CS, follow-up, broadcast yang rapi & aman." },
  { t: "Personal", d: "Reminder, catatan, asisten pribadi, auto tracking aktivitas." },
  { t: "Komunitas/Group", d: "Moderasi anti-spam, rules, verifikasi member, auto-kick." },
  { t: "Operasional", d: "Form, approval, notifikasi, integrasi Google Sheet / API." },
  { t: "Penjualan", d: "Katalog, checkout sederhana, status pembayaran, laporan." },
  { t: "Custom Request", d: "Request fitur apa pun—dibahas sampai klik & kepake." }
];

export default function UseCases() {
  return (
    <Section
      id="usecases"
      eyebrow="Cocok Buat Kamu"
      title="Bot Telegram buat bisnis, personal, atau komunitas — fleksibel parah"
      desc="Yang penting flow jelas, botnya kepake, dan user experience enak."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((x) => (
          <div key={x.t} className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6">
            <div className="text-base font-semibold text-zinc-100">{x.t}</div>
            <p className="mt-2 text-sm leading-relaxed text-zinc-300">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
