import { PHONE, WHATSAPP } from "@/lib/constants";
import { scrollToOrder } from "@/lib/utils";

interface StickyBarProps {
  total: number;
}

export function StickyBar({ total }: StickyBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[rgba(16,16,24,0.92)] backdrop-blur border-t border-[#2E3040]">
      <div className="mx-auto max-w-[640px] px-4 py-2 flex items-center gap-2">
        <div className="hidden sm:flex flex-col leading-tight pr-1">
          <span className="text-[10.5px] text-[#9EA0B5]">সর্বমোট</span>
          <span className="font-display text-[16px] text-[#E7A93F]">৳{total}</span>
        </div>
        <a
          href={`tel:${PHONE}`}
          className="text-center py-3 px-3 rounded-full font-display text-[13.5px] bg-[#21212f] border border-[#2E3040] text-[#F3F1EA]"
          aria-label="কল করুন"
        >
          📞
        </a>
        <a
          href={`https://wa.me/${WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center py-3 px-3 rounded-full font-display text-[13.5px] bg-[#128C7E] text-white"
          aria-label="WhatsApp"
        >
          💬
        </a>
        <button
          onClick={scrollToOrder}
          className="flex-1 text-center py-3 rounded-full font-display text-[14px] text-white flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(90deg, #2262B5, #6A3FA8 55%, #C22C4E)" }}
        >
          <span className="sm:hidden">৳{total}</span>
          <span>🚀 অর্ডার করুন</span>
        </button>
      </div>
    </div>
  );
}
