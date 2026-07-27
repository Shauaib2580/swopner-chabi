import { PHONE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="text-center py-6 px-5 text-[12.5px] text-[#9EA0B5]">
      © ২০২৬ স্বপ্নের চাবি — সব অধিকার সংরক্ষিত।
      <div className="mt-1">
        প্রশ্ন থাকলে কল করুন:{" "}
        <a href={`tel:${PHONE}`} className="text-[#E7A93F]">
          {PHONE}
        </a>
      </div>
    </footer>
  );
}
