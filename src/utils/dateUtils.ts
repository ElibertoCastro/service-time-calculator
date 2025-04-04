export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function calculateTotalDaysBetweenDates(
  startDate: string,
  endDate: string
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffInMilliseconds = end.getTime() - start.getTime();
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24); // 1 day = 86.400.000 ms

  return Math.abs(diffInDays);
}

export function calculateYearsByTotalDays(totalDays: number): number {
  const years = Math.floor(totalDays / 365);
  return years;
}

export function calculateMonthsByTotalDays(totalDays: number): number {
  const years = totalDays % 365;
  const months = Math.floor(years / 30.44);
  return months;
}

export function calculateDaysByTotalDays(totalDays: number): number {
  const years = totalDays % 365;
  const months = years % 30.44;
  const days = Math.floor(months);
  return days;
}
