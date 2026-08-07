import { useEffect, useRef, useState } from "react";
import { REVIEWS } from "@/lib/constants";

export function ReviewsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const visibleRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.3 },
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!visibleRef.current) return;
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (i: number) => setActive(i);

  return (
    <section ref={sectionRef} className="mx-auto max-w-[640px] px-5 py-4 overflow-hidden">
      <div className="text-[12px] text-[#9EA0B5] tracking-widest uppercase mb-1">
        কাস্টমার রিভিউ
      </div>
      <h2 className="font-display text-[22px] mb-5">কী বলছেন আমাদের কাস্টমাররা</h2>

      <div className="relative overflow-hidden rounded-2xl">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 88}%)` }}
        >
          {REVIEWS.map((r, i) => (
            <div
              key={`${r.name}-${i}`}
              className="shrink-0 w-[85%] mr-[3%] bg-[#1A1C28] border border-[#2E3040] rounded-2xl p-4 select-none"
            >
              <div className="text-[#E7A93F] text-[13px] mb-1">⭐⭐⭐⭐⭐</div>
              <p className="text-[14px] text-[#F3F1EA] leading-relaxed">"{r.text}"</p>
              <div className="mt-2 text-[12.5px] text-[#9EA0B5]">
                — {r.name}, {r.city}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-1.5 mt-3">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "bg-[#E7A93F] w-5" : "bg-[#2E3040] w-2"
            }`}
            aria-label={`রিভিউ ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
