import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ElzevirCode — Jasa Bot Telegram",
    short_name: "ElzevirCode",
    description: "Promo 2026 jasa pembuatan bot Telegram profesional start 50RB-an aja!",
    start_url: SITE_URL,
    display: "standalone",
    background_color: "#050507",
    theme_color: "#050507",
    icons: [
      { src: "/app/icons/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/app/icons/apple-icon.png", sizes: "180x180", type: "image/png" }
    ]
  };
}
