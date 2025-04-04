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
    0
  );

  return (
    <section className="font-semibold mt-8 flex gap-4 flex-col items-center">
      <p>
        {`Período total: ${calculateYearsByTotalDays(
          totalDays
        )} anos, ${calculateMonthsByTotalDays(
          totalDays
        )} meses e ${calculateDaysByTotalDays(totalDays)} dias.`}
      </p>
      <p>{`Total de dias: ${totalDays}`}</p>
    </section>
  );
}
