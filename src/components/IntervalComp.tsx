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
    <div>
      <fieldset className="border-1 flex gap-4 flex-wrap items-center border-purple-200 rounded text-sm lg:text-base px-2 py-3 shadow-sm">
        <legend>{`Intervalo ${interval.order}`}</legend>

        <section className="flex  items-center justify-center gap-8 flex-row  p-4">
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
        <aside className="px-2 italic">
          <p>{`Total de dias: ${interval.totalDays}`}</p>
          <p>{`${interval.years} anos, ${interval.months} meses, ${interval.days} dias`}</p>
        </aside>
      </fieldset>
    </div>
  );
}
