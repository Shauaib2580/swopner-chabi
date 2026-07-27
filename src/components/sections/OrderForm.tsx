import { useRef, useState } from "react";
import type { OrderFormState, OrderStatus } from "@/types";
import {
  APPS_SCRIPT_URL,
  DELIVERY,
  DISTRICTS,
  PRICE_PER_PACK,
  SIZES,
} from "@/lib/constants";
import { readUtm } from "@/lib/utils";
import { fbqTrack } from "@/hooks/useFbPixel";
import { Field } from "@/components/ui/Field";
import { TotalLine } from "@/components/ui/TotalLine";

interface OrderFormProps {
  qty: number;
  setQty: (fn: (q: number) => number) => void;
}

export function OrderForm({ qty, setQty }: OrderFormProps) {
  const [status, setStatus] = useState<OrderStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [orderId, setOrderId] = useState("");
  const [form, setForm] = useState<OrderFormState>({
    name: "",
    phone: "",
    district: "",
    thana: "",
    address: "",
    size: "",
  });
  const submittingRef = useRef(false);

  const productTotal = qty * PRICE_PER_PACK;
  const total = productTotal + DELIVERY;

  const update = (k: keyof OrderFormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = (): string => {
    if (!form.name.trim()) return "নাম দিন";
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim()))
      return "সঠিক বাংলাদেশি মোবাইল নম্বর দিন (01XXXXXXXXX)";
    if (!form.district) return "জেলা নির্বাচন করুন";
    if (!form.thana.trim()) return "থানা দিন";
    if (!form.address.trim()) return "ঠিকানা দিন";
    if (!form.size) return "স্লিপারের সাইজ নির্বাচন করুন";
    if (qty < 1) return "কমপক্ষে ১ প্যাক নির্বাচন করুন";
    return "";
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current || status === "submitting") return;
    const err = validate();
    if (err) {
      setStatus("error");
      setErrorMsg(err);
      return;
    }
    submittingRef.current = true;
    setStatus("submitting");
    setErrorMsg("");
    fbqTrack("track", "InitiateCheckout", { value: total, currency: "BDT" });

    const utm = readUtm();
    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      district: form.district,
      thana: form.thana.trim(),
      address: form.address.trim(),
      product: "BMW ছাতা + কমফোর্ট স্লিপার কম্বো",
      color: "Black",
      size: form.size,
      qty: String(qty),
      total: String(total),
      ...utm,
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
      page_url: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const body = new URLSearchParams(payload as Record<string, string>).toString();
      const res = await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      const text = await res.text();
      let data: { orderId?: string; status?: string } = {};
      try {
        data = JSON.parse(text);
      } catch {
        /* ignore */
      }
      setOrderId(data.orderId || "");
      setStatus("success");
      fbqTrack("track", "Purchase", { value: total, currency: "BDT" });
      setForm({ name: "", phone: "", district: "", thana: "", address: "", size: "" });
      setQty(() => 1);
    } catch {
      setStatus("error");
      setErrorMsg("অর্ডার পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন অথবা কল করুন।");
    } finally {
      submittingRef.current = false;
    }
  };

  if (status === "success") {
    return (
      <div className="bg-[#1A1C28] border border-[#2E3040] rounded-2xl p-5">
        <div className="text-center py-6">
          <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-[#3FA66B] border-2 border-[#3FA66B] bg-[rgba(63,166,107,0.15)]">
            ✓
          </div>
          <h3 className="font-display text-[20px] mb-2">✅ ধন্যবাদ! অর্ডার সম্পন্ন হয়েছে</h3>
          {orderId && (
            <p className="text-[14px] text-[#F3F1EA] mb-2">
              আপনার অর্ডার আইডি: <b className="text-[#E7A93F]">{orderId}</b>
            </p>
          )}
          <p className="text-[#9EA0B5] text-[14px]">
            আপনার অর্ডারটি আমরা পেয়েছি। শীঘ্রই কনফার্মেশন কল করা হবে। আনুমানিক ডেলিভারি:
            ২–৫ দিন। 🎁 প্রথম ১০০ জনের মধ্যে থাকলে সারপ্রাইজ গিফটও পাচ্ছেন!
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-5 inline-block px-6 py-2 rounded-full border border-[#2E3040] text-[14px] text-[#F3F1EA]"
          >
            নতুন অর্ডার
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1A1C28] border border-[#2E3040] rounded-2xl p-5">
      <form onSubmit={submit} noValidate>
        <Field label="নাম" required>
          <input type="text" value={form.name} onChange={update("name")} placeholder="আপনার নাম" />
        </Field>
        <Field label="মোবাইল নম্বর" required>
          <input
            type="tel"
            inputMode="numeric"
            maxLength={11}
            value={form.phone}
            onChange={update("phone")}
            placeholder="01XXXXXXXXX"
          />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="জেলা" required>
            <select value={form.district} onChange={update("district")}>
              <option value="">নির্বাচন করুন</option>
              {DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </Field>
          <Field label="থানা" required>
            <input
              type="text"
              value={form.thana}
              onChange={update("thana")}
              placeholder="থানা / উপজেলা"
            />
          </Field>
        </div>
        <Field label="সম্পূর্ণ ঠিকানা" required>
          <textarea
            rows={2}
            value={form.address}
            onChange={update("address")}
            placeholder="বাড়ি নং, রোড, এলাকা"
          />
        </Field>
        <Field label="স্লিপারের সাইজ" required>
          <select value={form.size} onChange={update("size")}>
            <option value="">সাইজ নির্বাচন করুন</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>

        <div className="mb-4">
          <label className="block text-[13.5px] text-[#9EA0B5] mb-1.5">
            কয় প্যাক নিবেন
          </label>
          <div className="flex items-center justify-between bg-[#101018] border border-[#2E3040] rounded-xl pl-4 pr-1.5 py-1.5">
            <span className="text-[14px] text-[#9EA0B5]">প্রতি প্যাক ৳{PRICE_PER_PACK}</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-9 h-9 rounded-lg bg-[#21212f] text-white text-xl"
                aria-label="কমান"
              >
                −
              </button>
              <span className="w-9 text-center font-display text-[16px]">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => Math.min(10, q + 1))}
                className="w-9 h-9 rounded-lg bg-[#21212f] text-white text-xl"
                aria-label="বাড়ান"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2 mb-4">
          <TotalLine
            label={`প্রোডাক্ট মূল্য (${qty} × ৳${PRICE_PER_PACK})`}
            value={`৳${productTotal}`}
          />
          <TotalLine label="ডেলিভারি চার্জ" value={`৳${DELIVERY}`} />
          <div className="flex justify-between font-display text-[18px] border-t border-[#2E3040] mt-2 pt-3">
            <span>সর্বমোট</span>
            <span>৳{total}</span>
          </div>
        </div>

        {status === "error" && errorMsg && (
          <div className="text-[13.5px] text-[#E88] text-center mb-3">{errorMsg}</div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="block w-full text-center text-white font-display text-[18px] py-4 rounded-full disabled:opacity-70 flex items-center justify-center gap-2"
          style={{ background: "linear-gradient(90deg, #2262B5, #6A3FA8 55%, #C22C4E)" }}
        >
          {status === "submitting" ? (
            <>
              <span className="inline-block w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
              <span>⏳ অর্ডার পাঠানো হচ্ছে...</span>
            </>
          ) : (
            <span>🛒 অর্ডার কনফার্ম করুন</span>
          )}
        </button>
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-[12px] text-[#9EA0B5]">
          <span>✔ Cash on Delivery</span>
          <span>✔ দ্রুত ডেলিভারি</span>
          <span>✔ কনফার্মেশন কল</span>
        </div>
        <p className="text-center text-[12px] text-[#9EA0B5] mt-3">
          🔒 ক্যাশ অন ডেলিভারি — হাতে পেয়ে টাকা দিন
        </p>
      </form>
    </div>
  );
}
