import { useState, useEffect } from "react";
import { InputDate } from "./InputDate";
import { Interval } from "../App";
import {
  calculateDaysByTotalDays,
  calculateMonthsByTotalDays,
  calculateTotalDaysBetweenDates,
  calculateYearsByTotalDays,
  formatDate,
} from "../utils/dateUtils";

interface IntervalCompProps {
  interval: Interval;
  updateIntervals: (update: Interval) => void;
}

export function IntervalComp({ interval, updateIntervals }: IntervalCompProps) {
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [endDate, setEndDate] = useState(formatDate(new Date()));

  useEffect(() => {
    const totalDays = calculateTotalDaysBetweenDates(startDate, endDate);
    const years = calculateYearsByTotalDays(totalDays);
    const months = calculateMonthsByTotalDays(totalDays);
    const days = calculateDaysByTotalDays(totalDays);

    const newInterval = {
      ...interval,
      startDate,
      endDate,
      totalDays,
      years,
      months,
      days,
    };

    updateIntervals(newInterval);
  }, [startDate, endDate]);

  return (
    <div className="w-full">
      <fieldset className="w-full rounded-xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition-shadow hover:shadow-md">
        <legend className="px-2 text-sm font-semibold text-emerald-800">
          {`Intervalo ${interval.order}`}
        </legend>

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <section className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
            <InputDate
              label="Data início"
              date={startDate}
              onChangeDate={(e) => setStartDate(e)}
            />

            <InputDate
              label="Data fim"
              date={endDate}
              onChangeDate={(e) => setEndDate(e)}
            />
          </section>

          <aside className="rounded-lg border border-emerald-100 bg-emerald-50/60 px-4 py-3 text-sm text-slate-700">
            <p className="font-medium text-slate-800">
              {`Total de dias: ${interval.totalDays.toLocaleString("pt-BR")}`}
            </p>
            <p className="mt-1 text-slate-600">
              {`${interval.years} anos, ${interval.months} meses, ${interval.days} dias`}
            </p>
          </aside>
        </div>
      </fieldset>
    </div>
  );
}
