import { Interval } from "../App";
import {
  calculateDaysByTotalDays,
  calculateMonthsByTotalDays,
  calculateYearsByTotalDays,
} from "../utils/dateUtils";

interface TotalResultsProps {
  intervals: Interval[];
}

export function TotalResults({ intervals }: TotalResultsProps) {
  const totalDays = intervals.reduce(
    (acc, interval) => acc + interval.totalDays,
    0,
  );

  const totalYears = calculateYearsByTotalDays(totalDays);
  const totalMonths = calculateMonthsByTotalDays(totalDays);
  const totalOnlyDays = calculateDaysByTotalDays(totalDays);

  return (
    <section className="mt-8 w-full max-w-2xl rounded-xl border border-emerald-100 bg-white px-6 py-5 shadow-sm">
      <div className="flex flex-col items-center text-center gap-2">
        <span className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
          Resultado total
        </span>

        <p className="text-xl md:text-2xl font-bold text-slate-800">
          {`${totalYears} anos, ${totalMonths} meses e ${totalOnlyDays} dias`}
        </p>

        <p className="text-sm md:text-base text-slate-600">
          {`Total de dias computados: ${totalDays.toLocaleString("pt-BR")}`}
        </p>

        <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">
          O cálculo considera anos de 365 dias e meses de 30 dias para fins de
          conversão do total de dias.
        </p>
      </div>
    </section>
  );
}
