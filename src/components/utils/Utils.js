import { add } from "date-fns";
export function displayFlightTimes(date, duration) {
  const initialDate = new Date(date);
  const hours = initialDate.getHours();
  const minutes = initialDate.getMinutes();
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes,
  ).padStart(2, "0")}`;
  const result = add(initialDate, {
    minutes: duration, // Добавляем duration минут к исоходной date
  });
  const hoursResult = result.getHours();
  const minutesResult = result.getMinutes();
  const formattedTimeResult = `${String(hoursResult).padStart(2, "0")}:${String(
    minutesResult,
  ).padStart(2, "0")}`;
  return `${formattedTime} - ${formattedTimeResult}`;
}
export function convertMinutesToHours(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}ч ${remainingMinutes}м`;
}
export function getTransferText(count) {
  if (count === 0) return "ПЕРЕСАДОК";
  if (count === 1) return "ПЕРЕСАДКА";
  if (count >= 2 && count <= 4) return "ПЕРЕСАДКИ";
  return "ПЕРЕСАДОК";
}
