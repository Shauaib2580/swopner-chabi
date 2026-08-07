import { PRICE_PER_PACK, DELIVERY } from "@/lib/constants";
import { scrollToOrder } from "@/lib/utils";
import quality1 from "@/assets/1.jpeg";
import quality2 from "@/assets/2.jpeg";
import quality3 from "@/assets/3.jpeg";

interface HeroSectionProps {
  qty: number;
}

export function HeroSection({ qty }: HeroSectionProps) {
  const productTotal = qty * PRICE_PER_PACK;
  const total = productTotal + DELIVERY;

  return (
    <section className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 15% 0%, rgba(34,98,181,0.35), transparent 45%), radial-gradient(circle at 90% 10%, rgba(194,44,78,0.28), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-[640px] px-5 pt-8 pb-6">
        <span className="inline-block text-[12.5px] font-semibold text-[#E7A93F] bg-[rgba(231,169,63,0.12)] border border-[rgba(231,169,63,0.35)] px-3 py-1 rounded-full mb-3">
          ⚡ অফার — সীমিত সময়ের জন্য
        </span>
        <h1 className="font-display text-[28px] sm:text-[32px] leading-tight mb-2">
          <span className="text-[#7EAEF2]">BMW স্টাইল ছাতা</span>
        </h1>
        <p className="text-[#9EA0B5] text-[15px] mb-5">
          বৃষ্টি-রোদ দুই জায়গাতেই স্টাইল আর আরাম, একসাথে।
        </p>

        <div className="mb-5">
          <div
            className="rounded-2xl p-4 text-center border border-[#2E3040]"
            style={{ background: "linear-gradient(160deg, #172038, #0F1422)" }}
          >
            <div className="text-4xl mb-2">☂️</div>
            <h3 className="font-display text-[16px] text-[#8FB4EE] mb-1">প্রিমিয়াম ছাতা</h3>
            <p className="text-[12.5px] text-[#9EA0B5]">Windproof, Auto Open</p>
          </div>
        </div>

        <div className="bg-[#1A1C28] border border-[#2E3040] rounded-2xl p-4 flex items-center justify-between mb-4 gap-3">
          <div>
            <div className="text-[#9EA0B5] line-through text-[14px]">১৪৯৯ টাকা</div>
            <div className="font-display text-[28px] leading-none mt-1">
              ৳৬৯৯{" "}
              <small className="text-[13px] text-[#9EA0B5] font-normal">/ প্যাক</small>
            </div>
          </div>
          <div className="text-right text-[12.5px] text-[#9EA0B5]">
            ডেলিভারি চার্জ
            <b className="block text-[#7EC996] text-[14px] font-semibold">৳১০০</b>
          </div>
        </div>

        <button
          onClick={scrollToOrder}
          className="block w-full text-center text-white font-display text-[18px] py-4 rounded-full"
          style={{ background: "linear-gradient(90deg, #2262B5, #6A3FA8 55%, #C22C4E)" }}
        >
          🚀 এখনই অর্ডার করুন →
        </button>

        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          {["✔ Cash on Delivery", "✔ দ্রুত ডেলিভারি", "✔ কনফার্মেশন কল"].map((t) => (
            <div
              key={t}
              className="text-[11.5px] text-[#9EA0B5] bg-[#1A1C28] border border-[#2E3040] rounded-lg py-2 px-1.5"
            >
              {t}
            </div>
          ))}
        </div>

        <div className="mt-5 bg-[#21212f] border border-dashed border-[#E7A93F] rounded-2xl p-4 flex gap-3">
          <div className="text-3xl">🎁</div>
          <div>
            <h4 className="font-display text-[#E7A93F] text-[15px] mb-1">
              আজকের অফার চলছে — সারপ্রাইজ গিফট!
            </h4>
            <p className="text-[13px] text-[#9EA0B5]">
              আজকের অফারে অর্ডার করলে পাচ্ছেন একটি বিশেষ সারপ্রাইজ গিফট — একদম ফ্রি, অর্ডারের
              সাথেই।
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="font-display text-[16px] text-[#8FB4EE] mb-3">
            ☂️ আমাদের ছাতার কোয়ালিটি
          </h4>
          <div className="grid grid-cols-3 gap-2.5">
            {[quality1, quality2, quality3].map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-[#2E3040] bg-[#101018]"
              >
                <img
                  src={img}
                  alt={`ছাতার কোয়ালিটি ${i + 1}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
