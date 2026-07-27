import { useCountdown } from "@/hooks/useCountdown";
import { bnDigits } from "@/lib/utils";

export function CountdownTimer() {
  const { hh, mm, ss } = useCountdown();

  return (
    <div className="mx-auto max-w-[640px] px-5 pt-4">
      <div className="rounded-xl border border-[rgba(231,169,63,0.35)] bg-[rgba(231,169,63,0.08)] px-4 py-2.5 flex items-center justify-between gap-3">
        <span className="text-[13px] text-[#E7A93F]">🔥 আজকের অফার শেষ হতে</span>
        <span className="font-display text-[16px] text-[#F3F1EA] tabular-nums">
          {bnDigits(hh)}:{bnDigits(mm)}:{bnDigits(ss)}
        </span>
      </div>
    </div>
  );
}
