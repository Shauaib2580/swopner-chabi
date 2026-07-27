const TRUST_ITEMS = [
  ["💵 COD", "হাতে পেয়ে টাকা দিন"],
  ["🚚 দ্রুত ডেলিভারি", "যত্নসহকারে পাঠানো হয়"],
  ["🔒 নিরাপদ", "প্যাকেজিং"],
  ["📞 সরাসরি যোগাযোগ", "কনফার্মেশন কল"],
];

export function TrustSection() {
  return (
    <section className="mx-auto max-w-[640px] px-5 pb-2">
      <div className="grid grid-cols-2 gap-2.5">
        {TRUST_ITEMS.map(([a, b]) => (
          <div
            key={a}
            className="bg-[#1A1C28] border border-[#2E3040] rounded-xl p-3 text-center text-[13px] text-[#9EA0B5]"
          >
            <b className="block text-[#F3F1EA] text-[14px] mb-0.5">{a}</b>
            {b}
          </div>
        ))}
      </div>
    </section>
  );
}
