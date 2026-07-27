import { useState } from "react";

import { Header } from "@/components/layout/Header";
import { TopBar } from "@/components/layout/TopBar";
import { StickyBar } from "@/components/layout/StickyBar";
import { Footer } from "@/components/layout/Footer";

import { CountdownTimer } from "@/components/sections/CountdownTimer";
import { Poster } from "@/components/sections/Poster";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { OrderForm } from "@/components/sections/OrderForm";

import { useFbPageView, useFbViewContent } from "@/hooks/useFbPixel";
import { DELIVERY, PRICE_PER_PACK } from "@/lib/constants";

export default function Index() {
  const [qty, setQty] = useState(1);
  const total = qty * PRICE_PER_PACK + DELIVERY;

  useFbPageView();
  useFbViewContent();

  return (
    <div className="min-h-screen bg-[#101018] text-[#F3F1EA] font-body pb-[86px]">
      <Header />
      <TopBar />
      <CountdownTimer />
      <Poster />
      <HeroSection qty={qty} />
      <FeaturesSection />
      <TrustSection />
      <HowToOrder />
      <ReviewsSection />

      <section id="order" className="mx-auto max-w-[640px] px-5 py-8 scroll-mt-4">
        <div className="text-[12px] text-[#9EA0B5] tracking-widest uppercase mb-1">
          অর্ডার ফর্ম
        </div>
        <h2 className="font-display text-[22px] mb-5">ডেলিভারি তথ্য দিন</h2>
        <OrderForm qty={qty} setQty={setQty} />
      </section>

      <Footer />
      <StickyBar total={total} />

      <style>{`
        body { font-family: 'Hind Siliguri', sans-serif; }
        .font-display, h1, h2, h3 { font-family: 'Baloo Da 2', 'Hind Siliguri', sans-serif; }
        .font-body { font-family: 'Hind Siliguri', sans-serif; }
      `}</style>
    </div>
  );
}
