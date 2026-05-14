import { useState } from "react";
import { LuCalendarDays } from "react-icons/lu";
import {
  calculateDaysByTotalDays,
  calculateMonthsByTotalDays,
  calculateYearsByTotalDays,
} from "../utils/dateUtils";

export function CalculateFromDays() {
  const [totalDays, setTotalDays] = useState(0);

  const totalYears = calculateYearsByTotalDays(totalDays);
  const totalMonths = calculateMonthsByTotalDays(totalDays);
  const totalOnlyDays = calculateDaysByTotalDays(totalDays);

  return (
    <section className="w-full max-w-2xl rounded-2xl border border-emerald-100 bg-gradient-to-b from-white to-emerald-50/40 px-6 py-8 shadow-sm">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-800 shadow-sm">
          <LuCalendarDays />
        </div>

        <div className="space-y-2">
          <h2 className="text-base font-semibold text-slate-800 md:text-lg">
            Calcular tempo a partir do total de dias
          </h2>

          <p className="max-w-md text-sm leading-6 text-slate-600 md:text-base">
            Informe a quantidade total de dias para converter o período em anos,
            meses e dias.
          </p>
        </div>

        <div className="flex w-full max-w-sm flex-col gap-2 text-left">
          <label
            htmlFor="totalDays"
            className="text-sm font-medium text-slate-700"
          >
            Total de dias
          </label>

          <input
            type="number"
            id="totalDays"
            min={0}
            className="rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-800 shadow-sm outline-none transition focus:border-emerald-500 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
            value={totalDays}
            onChange={(e) => setTotalDays(Number(e.target.value))}
          />
        </div>

        <div className="w-full rounded-xl border border-emerald-100 bg-white px-6 py-5 shadow-sm">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
              Resultado total
            </span>

            <p className="text-xl font-bold text-slate-800 md:text-2xl">
              {`${totalYears} anos, ${totalMonths} meses e ${totalOnlyDays} dias`}
            </p>

            <p className="text-sm text-slate-600 md:text-base">
              {`Total de dias computados: ${totalDays.toLocaleString("pt-BR")}`}
            </p>

            <p className="mt-2 max-w-lg text-xs leading-5 text-slate-500">
              O cálculo considera anos de 365 dias e meses de 30 dias para fins
              de conversão do total de dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
