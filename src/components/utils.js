


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
