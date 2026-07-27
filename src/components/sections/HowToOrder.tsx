const STEPS = [
  "ফর্মটি পূরণ করুন — নাম, মোবাইল নম্বর ও ঠিকানা দিন।",
  '"অর্ডার করুন" বাটনে ক্লিক করুন — অর্ডার আমাদের কাছে চলে যাবে।',
  "কনফার্মেশন কলের অপেক্ষা করুন — এরপর প্রোডাক্ট পাঠানো হবে।",
];

export function HowToOrder() {
  return (
    <section className="mx-auto max-w-[640px] px-5 py-8">
      <div className="text-[12px] text-[#9EA0B5] tracking-widest uppercase mb-1">
        সহজ প্রক্রিয়া
      </div>
      <h2 className="font-display text-[22px] mb-5">কীভাবে অর্ডার করবেন</h2>
      {STEPS.map((t, i) => (
        <div key={i} className="flex gap-3 items-start mb-4">
          <div
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display text-[14px] text-white"
            style={{ background: "linear-gradient(135deg, #2262B5, #C22C4E)" }}
          >
            {i + 1}
          </div>
          <p className="text-[14.5px] text-[#9EA0B5] pt-1">{t}</p>
        </div>
      ))}
    </section>
  );
}
