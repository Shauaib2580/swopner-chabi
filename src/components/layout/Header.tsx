import logoAsset from "@/assets/logo.jpeg";

export function Header() {
  return (
    <header className="bg-[#0B0C12] border-b border-[rgba(231,169,63,0.25)]">
      <div className="mx-auto max-w-[640px] px-5 py-3 flex items-center gap-3">
        <img
          src={logoAsset}
          alt="স্বপ্নের চাবি লোগো"
          loading="eager"
          decoding="async"
          className="w-11 h-11 rounded-full shrink-0"
        />
        <div className="min-w-0">
          <div className="font-display text-[19px] text-[#E7A93F] leading-tight truncate">
            স্বপ্নের চাবি
          </div>
          <div className="text-[11.5px] text-[#9EA0B5] truncate">
            আপনার প্রিমিয়াম পছন্দ, আমাদের প্রতিশ্রুতি
          </div>
        </div>
      </div>
    </header>
  );
}
