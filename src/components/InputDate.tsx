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
    <div className={`lg:text-md flex flex-col gap-1` + className}>
      <label htmlFor={label} className="font-semibold text-gray-800">
        {label}
      </label>
      <input
        className="text-center bg-violet-100 border border-violet-300 rounded-lg px-4 py-2 shadow-sm 
         focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 
         transition-all duration-200"
        type="date"
        id={label}
        value={date}
        onChange={(e) => onChangeDate(e.target.value)}
      />
    </div>
  );
}
