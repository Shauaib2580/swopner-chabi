interface FieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export function Field({ label, required, children }: FieldProps) {
  return (
    <div className="mb-4 [&_input]:w-full [&_select]:w-full [&_textarea]:w-full [&_input]:bg-[#101018] [&_select]:bg-[#101018] [&_textarea]:bg-[#101018] [&_input]:border [&_select]:border [&_textarea]:border [&_input]:border-[#2E3040] [&_select]:border-[#2E3040] [&_textarea]:border-[#2E3040] [&_input]:text-[#F3F1EA] [&_select]:text-[#F3F1EA] [&_textarea]:text-[#F3F1EA] [&_input]:px-3.5 [&_select]:px-3.5 [&_textarea]:px-3.5 [&_input]:py-3 [&_select]:py-3 [&_textarea]:py-3 [&_input]:rounded-xl [&_select]:rounded-xl [&_textarea]:rounded-xl [&_input]:text-[15px] [&_select]:text-[15px] [&_textarea]:text-[15px] [&_input:focus]:border-[#2262B5] [&_select:focus]:border-[#2262B5] [&_textarea:focus]:border-[#2262B5] [&_input]:outline-none [&_select]:outline-none [&_textarea]:outline-none">
      <label className="block text-[13.5px] text-[#9EA0B5] mb-1.5">
        {label} {required && <span className="text-[#C22C4E]">*</span>}
      </label>
      {children}
    </div>
  );
}
