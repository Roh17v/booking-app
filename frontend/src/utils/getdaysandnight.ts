export function calculateDaysAndNights(startDate: string, endDate: string) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in time (milliseconds)
  const timeDiff = end.getTime() - start.getTime();

  // Calculate the difference in days (1 day = 24 * 60 * 60 * 1000 ms)
  const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Nights are always one less than the number of days
  const nights = days - 1;

  return {
    days: days,
    nights: nights,
  };
}
