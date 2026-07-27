import { useEffect, useRef } from "react";
import { FB_PIXEL_ID } from "@/lib/constants";

function fbqSafe(...args: unknown[]) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { fbq?: (...a: unknown[]) => void };
  if (typeof w.fbq === "function") w.fbq(...args);
}

export function useFbPageView() {
  useEffect(() => {
    if (FB_PIXEL_ID && typeof window !== "undefined") {
      const w = window as unknown as { fbq?: unknown };
      if (!w.fbq) {
        (function (f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = "2.0";
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
        fbqSafe("init", FB_PIXEL_ID);
      }
    }
    fbqSafe("track", "PageView");
  }, []);
}

export function useFbViewContent() {
  const firedRef = useRef(false);

  useEffect(() => {
    const el = document.getElementById("order");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !firedRef.current) {
            firedRef.current = true;
            fbqSafe("track", "ViewContent");
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
}

export function fbqTrack(...args: unknown[]) {
  fbqSafe(...args);
}
