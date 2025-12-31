export function telegramOrderLink(params: {
  username: string;
  siteUrl: string;
  brand: string;
}) {
  const text =
    `Halo kak, saya mau order bot Telegram.\n` +
    `Saya dapat info dari website: ${params.siteUrl}\n\n` +
    `Kebutuhan bot saya: (jelaskan singkat)\n` +
    `Fitur yang diinginkan: (list)\n` +
    `Budget & deadline: (opsional)\n\n` +
    `Terima kasih 🙏`;

  return `https://t.me/${params.username}?text=${encodeURIComponent(text)}`;
}
