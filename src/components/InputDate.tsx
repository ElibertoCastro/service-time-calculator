interface InputDateProps {
  label: string;
  date: string;
  onChangeDate: (date: string) => void;
  className?: string;
}

export function InputDate({
  date,
  label,
  onChangeDate,
  className = "",
}: InputDateProps) {
  return (
    <div className={`flex flex-col gap-1 text-sm md:text-base ${className}`}>
      <label htmlFor={label} className="font-semibold text-slate-700">
        {label}
      </label>

      <input
        className="min-w-[180px] rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-center text-slate-800 shadow-sm transition-all duration-200 focus:bg-white focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-200"
        type="date"
        id={label}
        value={date}
        onChange={(e) => onChangeDate(e.target.value)}
      />
    </div>
  );
}
