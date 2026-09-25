export const keys = {
  done: "daniel21-done",
  active: "daniel21-active",
  period: "daniel21-period",
};

const validDay = (value) =>
  Number.isInteger(value) && value >= 1 && value <= 21;

export function loadProgress(storage) {
  let available = true;
  const read = (key) => {
    try {
      return storage.getItem(key);
    } catch {
      available = false;
      return null;
    }
  };
  let savedDone;
  try {
    savedDone = JSON.parse(read(keys.done) || "[]");
  } catch {
    savedDone = [];
  }
  const done = Array.isArray(savedDone)
    ? [...new Set(savedDone.filter(validDay))]
    : [];
  const savedActive = Number(read(keys.active));
  const nextDay =
    Array.from({ length: 21 }, (_, i) => i + 1).find(
      (day) => !done.includes(day),
    ) || 21;
  const active = validDay(savedActive) ? savedActive : nextDay;
  const savedPeriod = read(keys.period);
  const period = ["manha", "noite"].includes(savedPeriod) ? savedPeriod : "";
  return { done, active, period, available };
}

export function saveProgress(storage, key, value) {
  try {
    storage.setItem(key, String(value));
    return true;
  } catch {
    return false;
  }
}
