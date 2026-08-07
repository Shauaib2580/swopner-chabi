import gift5 from "@/assets/5.jpeg";

const GIFTS = [
  "🎧 AirPods",
  "✂️ Trimmer",
  "🔊 Bluetooth Speaker",
  "🔑 Hero Xtreme Bike Key",
  "🔦 Premium Bike Accessories",
  "🎁 আরও অনেক আকর্ষণীয় সারপ্রাইজ গিফট!",
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-[640px] px-5 py-8">
      <div className="rounded-2xl border border-[#2E3040] overflow-hidden" style={{ background: "linear-gradient(180deg, #1A1426, #1A1C28)" }}>
        <img
          src={gift5}
          alt="Mystery Box গিফট"
          width={1184}
          height={1020}
          loading="lazy"
          decoding="async"
          className="w-full h-auto block"
        />
        <div className="p-5">
        <h2 className="font-display text-[20px] text-[#E7A93F] leading-snug mb-2">
          🎁 প্রতি অর্ডারের সাথে পাচ্ছেন ১টি Mystery Box
        </h2>
        <p className="text-[14px] text-[#9EA0B5] mb-5">
          যার ভেতরে থাকতে পারে দারুণ সব চমক!
        </p>

        <div className="text-[12px] text-[#9EA0B5] tracking-widest uppercase mb-2">
          ✨ সম্ভাব্য গিফটসমূহ
        </div>
        <ul className="list-none mb-4">
          {GIFTS.map((g) => (
            <li key={g} className="flex gap-2.5 py-1.5 text-[14.5px] border-b border-white/5 last:border-b-0">
              <span className="text-[#3FA66B] shrink-0">✓</span>
              <span>{g}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[#101018] border border-dashed border-[#E7A93F] rounded-xl p-3.5 mb-3">
          <p className="text-[13.5px] text-[#F3F1EA]">
            💝 কোন গিফটটি পাবেন, তা জানতে হলে এখনই অর্ডার করুন!
          </p>
        </div>

        <p className="text-[12px] text-[#9EA0B5] leading-relaxed">
          ⚠️ নোট: Mystery Box-এর উপহার সম্পূর্ণ র‍্যান্ডম। প্রতিটি অর্ডারে একটি Mystery Box থাকবে।
        </p>
        </div>
      </div>
    </section>
  );
}
