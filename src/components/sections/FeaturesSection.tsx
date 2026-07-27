import { FeatCard } from "@/components/ui/FeatCard";

const FEATURES = [
  {
    title: "☂️ BMW Style Premium Folding Umbrella",
    titleColor: "#8FB4EE",
    bg: "linear-gradient(180deg, #16192A, #1A1C28)",
    items: [
      "শক্তিশালী Windproof ডিজাইন",
      "ওয়ান-ক্লিক Auto Open / Close",
      "হালকা ও সহজে বহনযোগ্য",
      "পানি প্রতিরোধী Premium Fabric",
      "স্টাইলিশ BMW Motorsport লুক",
    ],
  },
  {
    title: "🩴 Premium Comfort Slipper",
    titleColor: "#E7A93F",
    bg: "linear-gradient(180deg, #241C10, #1A1C28)",
    items: [
      "নরম ও আরামদায়ক সোল",
      "Anti-Slip গ্রিপ",
      "টেকসই ও দীর্ঘস্থায়ী",
      "ঘর ও বাইরে — দুই জায়গাতেই ব্যবহারযোগ্য",
      "স্টাইলিশ স্পোর্টি ডিজাইন",
    ],
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-[640px] px-5 py-8">
      <div className="text-[12px] text-[#9EA0B5] tracking-widest uppercase mb-1">
        প্রোডাক্ট ফিচার
      </div>
      <h2 className="font-display text-[22px] mb-5">কেন এই কম্বো নিবেন</h2>
      {FEATURES.map((f) => (
        <FeatCard key={f.title} {...f} />
      ))}
    </section>
  );
}
