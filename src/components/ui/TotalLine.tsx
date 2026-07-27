interface TotalLineProps {
  label: string;
  value: string;
}

export function TotalLine({ label, value }: TotalLineProps) {
  return (
    <div className="flex justify-between text-[14.5px] text-[#9EA0B5] py-1">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
