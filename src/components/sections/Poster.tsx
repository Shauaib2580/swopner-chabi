import posterAsset from "@/assets/4.png";

export function Poster() {
  return (
    <div className="mx-auto max-w-[640px] px-5 pt-5">
      <div className="rounded-2xl overflow-hidden border border-[#2E3040] shadow-2xl">
        <img
          src={posterAsset}
          alt="ছাতা + স্লিপার অফার ৬৯৯ টাকা"
          width={1200}
          height={1200}
          fetchPriority="high"
          decoding="async"
          className="w-full block h-auto"
        />
      </div>
    </div>
  );
}
