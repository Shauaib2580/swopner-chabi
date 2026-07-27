import type { UtmParams } from "@/types";

export const bnDigits = (n: number | string): string =>
  String(n).replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[Number(d)]);

export function msUntilMidnight(): number {
  const now = new Date();
  const end = new Date(now);
  end.setHours(24, 0, 0, 0);
  return Math.max(0, end.getTime() - now.getTime());
}

export function splitDuration(ms: number) {
  const s = Math.floor(ms / 1000);
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return { hh, mm, ss };
}

export function readUtm(): UtmParams {
  if (typeof window === "undefined") {
    return { utm_source: "", utm_medium: "", utm_campaign: "", utm_content: "", utm_term: "", referrer: "" };
  }
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") || "",
    utm_medium: p.get("utm_medium") || "",
    utm_campaign: p.get("utm_campaign") || "",
    utm_content: p.get("utm_content") || "",
    utm_term: p.get("utm_term") || "",
    referrer: document.referrer || "",
  };
}

export function scrollToOrder() {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
}
